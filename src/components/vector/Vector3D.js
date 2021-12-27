class Vector3D{
    constructor(e0=0, e1=0, e2=0){
        this.e = new Array(3);
        this.e[0] = e0;
        this.e[1] = e1;
        this.e[2] = e2;
    }
    // access methods
    x(){ return this.e[0]; }
    y(){ return this.e[1]; }
    z(){ return this.e[2]; }

    r(){ return this.e[0]; }
    g(){ return this.e[1]; }
    b(){ return this.e[2]; }

    positive(){ return this; }

    negative(){ return new Vector3D(-1*(this.e[0]), -1*(this.e[1]), -1*(this.e[2])); }

    add(vector){ 
        
    }

    subtract(vector){ 

    }

    accessArray(index){ 
        return this.e[i]; 
    }

    increment(){ 

    }

    decrement(){ 

    }

    multiply(vector){ 

    }

    multiplyScalar(value){ 

    }

    divide(vector){ 

    }

    divideScalar(value){ 

    }

    length(){ 
        return Math.sqrt((this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2])); 
    }

    squaredLength(){ 
        return (this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2]); 
    }

    makeUnitVector(){ 
        let k = 1 / this.length();
        this.e[0] *= k;
        this.e[1] *= k;
        this.e[2] *= k;
    }

    dot(){ }

    cross(){ }

    inputStream(path, vector){ }

    outputStream(path, vector){ }
}