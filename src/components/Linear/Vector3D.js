const fs = require('fs');
const Constants = require('../../util/constants');
let constants = new Constants;

class Vector3D{
    constructor(){
        if(typeof(arguments[0]) === 'object' && arguments[0].length === 3){
            this.e = arguments[0];
        }
        else if(arguments.length === 3){
            this.e = new Array(3);
            this.e[0] = arguments[0];
            this.e[1] = arguments[1];
            this.e[2] = arguments[2];
        }
        else{
            this.e = [];
            this.e.push(0);
            this.e.push(0);
            this.e.push(0);
        }
        
    
        
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

    negative(){ 
        return new Vector3D((this.e[0])*-1, (this.e[1])*-1, (this.e[2])*-1); 
    }

    negativeInplace(){
        (this.e[0]*=-1);
        (this.e[1]*=-1);
        (this.e[2]*=-1);
        return this;
    }

    randomVector(min=0, max=1){
        return new Vector3D(constants.randomNumber(min,max), constants.randomNumber(min,max), constants.randomNumber(min,max));
    }

    randomVectorInUnitSphere(){
        while(true){
            let p = this.randomVector(-1,1);
            if(p.squaredLength() < 1)
                return p;
        }
    }

    randomUnitVector(){
        return this.randomVectorInUnitSphere().unitVector();
    }

    add(v1){ 
        return new Vector3D(this.e[0]+v1.e[0], this.e[1]+v1.e[1], this.e[2]+v1.e[2]);
    }

    addInplace(v1){
        this.e[0]+=v1.e[0];
        this.e[1]+=v1.e[1];
        this.e[2]+=v1.e[2];
        return this;
    }

    subtract(v1){ 
        return new Vector3D(this.e[0]-v1.e[0], this.e[1]-v1.e[1], this.e[2]-v1.e[2]);
    }

    subtractInplace(v1){
        this.e[0]-=v1.e[0];
        this.e[1]-=v1.e[1];
        this.e[2]-=v1.e[2];
        return this;
    }

    getValueAt(index){ 
        return this.e[index]; 
    }

    multiply(v1){ 
        return new Vector3D(this.e[0]*v1.e[0], this.e[1]*v1.e[1], this.e[2]*v1.e[2]);
    }

    multiplyInplace(v1){
        this.e[0]*=v1.e[0];
        this.e[1]*=v1.e[1];
        this.e[2]*=v1.e[2];
        return this;
    }

    multipliedByScalar(scalar){ 
        return new Vector3D(this.e[0]*scalar, this.e[1]*scalar, this.e[2]*scalar);
    }

    multipliedByScalarInplace(scalar){
        this.e[0]*=scalar;
        this.e[1]*=scalar;
        this.e[2]*=scalar;
        return this;
    }

    divide(v1){ 
        return new Vector3D(this.e[0]/v1.e[0], this.e[1]/v1.e[1], this.e[2]/v1.e[2]);
    }

    divideInplace(v1){
        this.e[0]/=v1.e[0];
        this.e[1]/=v1.e[1];
        this.e[2]/=v1.e[2];
        return this;
    }

    dividedByScalar(scalar){ 
        return new Vector3D(this.e[0]/scalar, this.e[1]/scalar, this.e[2]/scalar);
    }

    dividedByScalarInplace(scalar){
        this.e[0]/=scalar;
        this.e[1]/=scalar;
        this.e[2]/=scalar;
        return this;
    }

    length(){ 
        return Math.sqrt((this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2])); 
    }

    squaredLength(){ 
        return (this.e[0]*this.e[0]) + (this.e[1]*this.e[1]) + (this.e[2]*this.e[2]); 
    }

    unitVector(){
        return this.dividedByScalar(this.length())
    }

    unitVectorInPlace(){ 
        let k = 1 / this.length();
        this.e[0] *= k;
        this.e[1] *= k;
        this.e[2] *= k;
        return this;
    }

    
    dotProduct(v1){ 
        return (this.e[0]*v1.e[0] + this.e[1]*v1.e[1] + this.e[2]*v1.e[2])
    }

    crossProduct(v1){ 
        return new Vector3D(
            (this.e[1]*v1.e[2] - this.e[2]*v1.e[1]),
            (this.e[2]*v1.e[0] - this.e[0]*v1.e[2]),
            (this.e[0]*v1.e[1] - this.e[1]*v1.e[0])
        )
    }

    inputStream(path){
        fs.writeFileSync(path,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    }

    outputStream(path){
        fs.writeFileSync(path,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    }
}

module.exports = Vector3D;