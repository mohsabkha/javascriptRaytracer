class Ray{
    constructor(vector_0, vector_1){
        this.A = vector_0;
        this.B = vector_1;
    }

    origin(){
        return this.A;
    }

    direction(){
        return this.B;
    }

    point_at_parameter(t){
        return this.A.add(this.B.multipliedByScalar(t));
    }
}

module.exports = Ray;