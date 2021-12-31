const Vector = require('./Vector');

class Matrix{
    // the matrix will be forced to be diagnal
    constructor(){
        this.entries = new Array(arguments.length).fill(new Array(arguments.length));
        this.size = arguments.length;
        // can accept vectors, but only vectors
        if(arguments[0] instanceof Vector){
            //loop over each vector, build row by row
            for(let argsIndex = 0; argsIndex < arguments.length; argsIndex++){
                //loop over each element in each vector 
                for(let vecIndex = 0; vecIndex < arguments.length; vecIndex++){
                    this.entries[argsIndex] = arguments[argsIndex].components;
                }
            }
        }

        // can accept numbers but only numbers
        else if(typeof(arguments[0]) === 'number'){
            //make a matrix from numbers/letters
            let argCount = 0;
            let matrixSize = Math.sqrt(arguments.length);
            //build row by row
            for(let rowIndex = 0; rowIndex < matrixSize; rowIndex++){
                for(let columnIndex = 0; columnIndex < matrixSize; columnIndex++){
                    this.entries[rowIndex][columnIndex] = arguments[argCount];
                    argCount++;
                }
            }
            
        }
    }

    getValueAt(row, column){
        return this.entries[row][column];
    }

    setValueAt(row, column, value){
        this.entries[row][column] = value;
    }

    getRow(row){
        let buffer = new Vector();
        buffer.components = this.entries[row];
        buffer.magnitude = buffer.length();
        return buffer;
    }

    getColumn(column){
        let buffer = [];
        for(let i = 0; i < this.entries.length; i++){
            buffer[i] = this.entries[i][column];
        }
        let bufferC = new Vector();
        bufferC.components = buffer;
        bufferC.magnitude = bufferC.length();
        return bufferC;
    }

    subtract(matrix){
        let buffer = new Matrix();
        buffer.entries = new Array(this.entries.length);
        let vector = [];
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                vector.push(this.entries[i][j] - matrix.entries[i][j]);
            }
            buffer.entries[i] = vector;
        }
        return buffer;
    }

    subtractInPlace(matrix){
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                this.entries[i][j] -= matrix.entries[i][j];
            }
        }
        return this;
    }

    add(matrix){
        let buffer = new Matrix();
        buffer.entries = new Array(this.entries.length);
        let vector = [];
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                vector.push(this.entries[i][j] + matrix.entries[i][j]);
            }
            buffer.entries[i] = vector;
            vector = [];
        }
        return buffer;
    }

    addInPlace(matrix){
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                this.entries[i][j] += matrix.entries[i][j];
            }
        }
        return this;
    }

    multiply(matrix){
        if(this.size !== matrix.entries[0].length){
            return undefined;
        }
        let newEntriesList = new Array(this.size);
        let newVectorArray = [];
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                newVectorArray.push(this.getRow(i).dotMultiply(matrix.getColumn(j)));
            }
            newEntriesList[i] = (newVectorArray);
            newVectorArray = [];
        }
        let newMatrix = new Matrix() 
        newMatrix.entries = newEntriesList;
        newMatrix.size = newEntriesList.length;
        return newMatrix;
    }

    multiplyInPlace(matrix){
        this.entries = this.multiply(matrix).entries;
        return this;
    }

    divide(){

    }

    divideInPlace(){

    }

    multiplyByScalar(t){
        let buffer = new Matrix();
        buffer.entries = new Array(this.entries.length);
        let vector = [];
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                vector.push(this.entries[i][j] * t);
            }
            buffer.entries[i] = (vector);
            vector = [];
        }
        return buffer;
    }

    multiplyByScalarInPlace(t){
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                this.entries[i][j] *= t;
            }
        }
        return this;
    }

    divideByScalar(t){
        let buffer = new Matrix();
        buffer.entries = new Array(this.entries.length);
        let vector = [];
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                vector.push(this.entries[i][j] / t);
            }
            buffer.entries[i] = vector;
            vector = [];
        }
        return buffer;
    }

    divideByScalarInPlace(t){
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                this.entries[i][j] /= t;
            }
        }
        return this;
    }

    multiplyByVector(vector){
        if(vector.components.length !== this.size){
            return undefined;
        }
        // create a buffer to hold values
        let buffer = [];
        for(let i = 0; i < this.size; i++){
            buffer.push(this.getRow(i).dotMultiply(vector));
        }
        let newVector = new Vector(buffer);
        return newVector;
    }

    multiplyByVectorInPlace(vector){
        this.entries = this.multiplyByVector(vector);
        return this;
    }

    transpose(){
        let buffer = new Matrix();
        let vector = [];
        buffer.entries = new Array(this.entries.length).fill(new Array(this.entries.length));
        for(let i = 0; i < this.entries.length; i++){
            for(let j = 0; j < this.entries.length; j++){
                vector.push(this.entries[j][i]);
            }
            buffer.entries[i] = vector;
            vector = [];
        }
        return buffer;
    }

    transposeInPlace(){
        this.entries = this.transpose().entries;
        return this;
    }

    print(){
        console.log(this.entries);
    }
}

module.exports = Matrix;