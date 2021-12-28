const fs = require('fs');

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

    positive(){ 
        return this; 
    }

    negative(this){ 
        return new Vector3D((this.e[0])*-1, (this.e[1])*-1, (this.e[2])*-1); 
    }

    negativeInplace(this){
        (this.e[0]*=-1);
        (this.e[1]*=-1);
        (this.e[2]*=-1);
    }

    add(this, v1){ 
        return new Vector3D(this.e[0]+v1.e[0], this.e[1]+v1.e[1], this.e[2]+v1.e[2]);
    }

    addInplace(this, v1){
        this.e[0]+=v1.e[0];
        this.e[1]+=v1.e[1];
        this.e[2]+=v1.e[2];
    }

    subtract(this, v1){ 
        return new Vector3D(this.e[0]-v1.e[0], this.e[1]-v1.e[1], this.e[2]-v1.e[2]);
    }

    subtractInplace(this, v1){
        this.e[0]-=v1.e[0];
        this.e[1]-=v1.e[1];
        this.e[2]-=v1.e[2];
    }

    accessArray(this,index){ 
        return this.e[index]; 
    }

    multiply(this, v1){ 
        return new Vector3D(this.e[0]*v1.e[0], this.e[1]*v1.e[1], this.e[2]*v1.e[2]);
    }

    multiplyInplace(this,v1){
        this.e[0]*=v1.e[0];
        this.e[1]*=v1.e[1];
        this.e[2]*=v1.e[2];
    }

    multipliedByScalar(this, scalar){ 
        return new Vector3D(this.e[0]*scalar, this.e[1]*scalar, this.e[2]*scalar);
    }

    multipliedByScalarInplace(this, scalar){
        this.e[0]*=scalar;
        this.e[1]*=scalar;
        this.e[2]*=scalar;
    }

    divide(this, v1){ 
        return new Vector3D(this.e[0]/v1.e[0], this.e[1]/v1.e[1], this.e[2]/v1.e[2]);
    }

    divideInplace(this, v1){
        this.e[0]/=v1.e[0];
        this.e[1]/=v1.e[1];
        this.e[2]/=v1.e[2];

    }

    dividedByScalar(this,scalar){ 
        return new Vector3D(this.e[0]/scalar, this.e[1]/scalar, this.e[2]/scalar);
    }

    dividedByScalarInplace(this, scalar){
        this.e[0]/=scalar;
        this.e[1]/=scalar;
        this.e[2]/=scalar;
    }

    length(this){ 
        return Math.sqrt((this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2])); 
    }

    squaredLength(this){ 
        return (this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2]); 
    }

    unitVector(vector_){
        return vector_.dividedByScalarInplace(vector_.length())
    }

    makeUnitVector(){ 
        let k = 1 / this.length();
        this.e[0] *= k;
        this.e[1] *= k;
        this.e[2] *= k;
    }

    

    dotProduct(this, v1){ 
        return (this.e[0]*v1.e[0] + this.e[1]*v1.e[1] + this.e[2]*v1.e[2])
    }

    crossProduct(this, v1){ 
        return new Vector3D(
            (this.e[1]*v1.e[2] - this.e[2]*v1.e[1]),
            (this.e[0]*v1.e[2] - this.e[2]*v1.e[0]),
            (this.e[0]*v1.e[1] - this.e[1]*v1.e[0])
        )
    }

    inputStream(path, this){
        fs.writeFileSync(path,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    }

    outputStream(path, this){
        fs.writeFileSync(path,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    }
}

module.exports = Vector3D;