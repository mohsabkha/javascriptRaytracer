class Ray{
    
    constructor(rayOrigin, rayDirection){
        this.A = rayOrigin;
        this.B = rayDirection;
    }

    origin(){
        return this.A;
    }

    direction(){
        return this.B;
    }

    point_at_parameter(t){
        return this.origin().add(this.direction().multipliedByScalarInplace(t));
    }
}

module.exports = Ray;