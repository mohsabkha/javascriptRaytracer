const Vector3D = require("./../Linear/Vector3D");

class HitRecord{
    constructor(point = new Vector3D(), normal = new Vector3D(), t = 0, frontFaceBool = false){
        this.point = point;
        this.normal = normal;
        this.t = t;
        this.frontFaceBool = frontFaceBool;
    }

    setFaceNormal(ray, outwardsNormal){
        this.frontFaceBool = ray.direction().dotProduct(outwardsNormal) < 0;
        this.normal = this.frontFaceBool ? outwardsNormal : outwardsNormal.negative(); 
    }

    getT(){
        return this.t;
    }

    getNormal(){
        return this.normal;
    }

    getPoint(){
        return this.point;
    }
}

module.exports = HitRecord;