const Vector3D = require("../Vector/Vector3D");

class HitRecord{
    constructor(point = null, normal = null, t = 0, frontFaceBool = false){
        this.point = point;
        this.normal = normal;
        this.t = t;
        this.frontFaceBool = frontFaceBool;
    }

    setFaceNormal(ray, outwardsNormal){
        this.frontFaceBool = ray.direction.dotProduct(outwardsNormal) < 0;
        normal = this.frontFaceBool ? outwardsNormal : -outwardsNormal; 
    }
}

module.exports = HitRecord;