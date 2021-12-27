

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

    negative(vector_){ 
        return new Vector3D((vector_.e[0])*-1, (vector_.e[1])*-1, (vector_.e[2])*-1); 
    }

    negativeInplace(vector_0){
        (vector_0.e[0]*=-1);
        (vector_0.e[1]*=-1);
        (vector_0.e[2]*=-1);
    }

    add(vector_0, vector_1){ 
        return new Vector3D(vector_0.e[0]+vector_1.e[0], vector_0.e[1]+vector_1.e[1], vector_0.e[2]+vector_1.e[2]);
    }

    addInplace(vector_0, vector_1){
        vector_0.e[0]+=vector_1.e[0];
        vector_0.e[1]+=vector_1.e[1];
        vector_0.e[2]+=vector_1.e[2];
    }

    subtract(vector_0, vector_1){ 
        return new Vector3D(vector_0.e[0]-vector_1.e[0], vector_0.e[1]-vector_1.e[1], vector_0.e[2]-vector_1.e[2]);
    }

    subtractInplace(vector_0, vector_1){
        vector_0.e[0]-=vector_1.e[0];
        vector_0.e[1]-=vector_1.e[1];
        vector_0.e[2]-=vector_1.e[2];
    }

    accessArray(vector_,index){ 
        return vector_.e[index]; 
    }

    multiply(vector_0, vector_1){ 
        return new Vector3D(vector_0.e[0]*vector_1.e[0], vector_0.e[1]*vector_1.e[1], vector_0.e[2]*vector_1.e[2]);
    }

    multiplyInplace(vector_0,vector_1){
        vector_0.e[0]*=vector_1.e[0];
        vector_0.e[1]*=vector_1.e[1];
        vector_0.e[2]*=vector_1.e[2];
    }

    multipliedByScalar(vector_, scalar){ 
        return new Vector3D(vector_.e[0]*scalar, vector_.e[1]*scalar, vector_.e[2]*scalar);
    }

    multipliedByScalarInplace(vector_, scalar){
        vector_.e[0]*=scalar;
        vector_.e[1]*=scalar;
        vector_.e[2]*=scalar;
    }

    divide(vector_0, vector_1){ 
        return new Vector3D(vector_0.e[0]/vector_1.e[0], vector_0.e[1]/vector_1.e[1], vector_0.e[2]/vector_1.e[2]);
    }

    divideInplace(vector_0, vector_1){
        vector_0.e[0]/=vector_1.e[0];
        vector_0.e[1]/=vector_1.e[1];
        vector_0.e[2]/=vector_1.e[2];

    }

    dividedByScalar(scalar){ 
        return new Vector3D(vector_.e[0]/scalar, vector_.e[1]/scalar, vector_.e[2]/scalar);
    }

    dividedByScalarInplace(vector_, scalar){
        vector_.e[0]/=scalar;
        vector_.e[1]/=scalar;
        vector_.e[2]/=scalar;
    }

    length(vector_){ 
        return Math.sqrt((vector_.e[0]*vector_.e[0]) + (vector_.e[1]*vector_.e[1]) + (vector_.e[2]*vector_.e[2])); 
    }

    squaredLength(vector_){ 
        return (vector_.e[0]*vector_.e[0]) + (vector_.e[1]*vector_.e[1]) + (vector_.e[2]*vector_.e[2]); 
    }

    makeUnitvector(vector_){ 
        let k = 1 / vector_.length();
        vector_.e[0] *= k;
        vector_.e[1] *= k;
        vector_.e[2] *= k;
    }

    dotProduct(vector_0, vector_1){ 
        return (vector_0.e[0]*vector_1.e[0] + vector_0.e[1]*vector_1.e[1] + vector_0.e[2]*vector_1.e[2])
    }

    crossProduct(vector_0, vector_1){ 
        return new Vector3D(
            (vector_0.e[1]*vector_1.e[2] - vector_0.e[2]*vector_1.e[1]),
            (vector_0.e[0]*vector_1.e[2] - vector_0.e[2]*vector_1.e[0]),
            (vector_0.e[0]*vector_1.e[1] - vector_0.e[1]*vector_1.e[0])
        )
    }

    inputStream(path, vector_){

    }

    outputStream(path, vector_){

    }
}