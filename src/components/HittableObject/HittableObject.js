const HitRecord = require('./HitRecord');
class HittableObject{
    constructor(ray = null, tMin = 0, tMax = 0, hitRecords = null){
        this.hitRecords = hitRecords;
        this.ray = ray;
        this.tMin = tMin;
        this.tMax = tMax;
    }
    
    didHit(ray, tMin, tMax, hitRecords){
        this.hitRecords = hitRecords;
        this.ray = ray;
        this.tMin = tMin;
        this.tMax = tMax;
    }
}

module.exports = HittableObject;