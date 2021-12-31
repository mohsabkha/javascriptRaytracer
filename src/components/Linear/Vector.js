class Vector{
    //on initialization, generate zero vector if no values passed in
    constructor(){
        this.components = new Array(arguments.length);
        if(arguments.length > 0) {
            if(typeof(arguments[0]) === 'object'){
                this.components = arguments[0];
            }
            else{
                for(let i = 0; i < arguments.length; i++){
                    this.components[i] = arguments[i];
                }
            }
        }
        else this.components = [];
        this.magnitude = this.length();
    }
    // return common components
    x(){return this.components[0]}
    y(){return this.components[1]}
    z(){return this.components[2]}
    w(){return this.components[3]}

    //getters and setters for vector components
    get(i){
        return this.components[i];
    }
    set(i, value){
        this.components[i] = value;
    }
    // this returns the magnitude or the "length" of the vector
    length(){
        let squaredSum = 0;
        for(let i = 0; i < this.components.length; i++){
            squaredSum += (this.components[i] * this.components[i]);
        }
        return Math.sqrt(squaredSum);
    }
    //dot product
    dotMultiply(vector){
        let sum = 0;
        this.components.map((el ,index) => {sum += (el * vector.components[index])});
        return sum;
    }
    squared(){
        return (this.magnitude*this.magnitude);
    }
    crossMultiply(vector){
        if(vector.components.length !== 3 || this.components.length !== 3 || this.components.length !== vector.components.length){
            console.error(`Vector Size Incorrect`)
            return undefined;
        }
        let answers = [];
        answers.push((this.y()*vector.z()) - (this.z()*vector.y()));
        answers.push((this.z()*vector.x()) - (this.x()*vector.z()));
        answers.push(((this.x()*vector.y()) - this.y()*vector.x()));
        return new Vector(answers);
    }
    crossMultiplyInPlace(vector){
        let newVector = this.crossMultiply(vector); 
        this.components = newVector.components;
        this.magnitude = newVector.magnitude;
        return this;
    }
    vectorTo(vector){
        return this.subtract(vector);
    }
    divide(vector){
        
    }
    divideInPlace(vector){
        
    }
    // multiplying the current vector by a scalar, t
    multiplyByScalarInPlace(t){
        this.components.forEach((el) => {el*=t});
        this.magnitude *= t;
        return this;
    }
    // multiplying a copy of the current vector by a scalar, t
    multiplyByScalar(t){
        let bufferVector = new Vector();
        bufferVector.components = this.components.map((el) => {el*=t});
        bufferVector.magnitude = bufferVector.length()*t;
        return bufferVector;
    }
    // dividing the current vector by a scalar, t
    divideByScalarInPlace(t){
        this.components.forEach((el) => {el/=t});
        this.magnitude /= t;
        return this;
    }
    // dividing a copy of the current vector by a scalar, t
    divideByScalar(t){
        let bufferVector = new Vector();
        bufferVector.components = this.components.map((el) => {el/=t});
        bufferVector.magnitude = bufferVector.length()/t;
        return bufferVector;
    }
    // making the current vector into a unit vector (magnitude = 1)
    normalizeInPlace(){
        this.dividingByScalarInPlace(this.magnitude);
        this.magnitude = 1;
        return this;
    }
    // making a copy of the current vector into a unit vector (magnitude = 1)
    normalize(){
        return this.dividingByScalar(this.magnitude);
    }
    // making the current vector negative (reverse its direction)
    makeNegativeInplace(){
        this.components.forEach((el) => {el*=-1})
        return this;
    }
    // making a copy of the current vector negative (reverse its direction)
    makeNegative(){
        let bufferVector = new Vector();
        bufferVector.components = this.components.map((el) => {el*=-1});
        bufferVector.magnitude = bufferVector.length();
        return bufferVector;
    }
    // adding a vector to the current vector
    addInPlace(vector){
        if(vector.components.length === this.components.length){
            this.components.forEach((el, index) => {el += vector.components[index]});
            this.magnitude = this.length();
            return this;
        }
        return false;
        
    }
    // adding a vector to a copy of the current vector
    add(vector){
        if(vector.components.length === this.components.length){
            let buffer = new Vector();
            buffer.components = this.components.map((el, index) => {el += vector.components[index]});
            buffer.magnitude = buffer.length();
            return buffer;
        }
        return false;
    }
    // subtracting a vector from the current vector
    subtractInPlace(vector){
        if(vector.components.length === this.components.length){
            this.components.forEach((el, index) => {el -= vector.components[index]});
            this.magnitude = this.length();
            return this;
        }
        return false;
    }
    // subtracting a vector from a copy of the current vector
    subtract(vector){
        if(vector.components.length === this.components.length){
            let buffer = new Vector();
            buffer.components = this.components.map((el, index) => {el -= vector.components[index]});
            buffer.magnitude = buffer.length();
            return buffer;
        }
        return false;
    }
}
module.exports = Vector;