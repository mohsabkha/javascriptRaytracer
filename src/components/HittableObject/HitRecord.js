const Vector3D = require("../Vector/Vector3D");

class HitRecord{
    constructor(){
        this.point = new Vector3D();
        this.normal = new Vector3D();
        this.t;
    }
}

module.exports = HitRecord;