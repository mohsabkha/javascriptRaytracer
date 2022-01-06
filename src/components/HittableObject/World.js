const HitRecord = require("./HitRecord");

class World{
    constructor(){
        this.length = 0;
        this.objectsList = [];
    }

    getList(){
        return this.objectsList;
    }
    add(hittableObject){
        this.objectsList.push(hittableObject);
        this.length++;
        return this;
    }
    clear(){
        this.objectsList = [];
        this.length = 0;
    }
    didHit(ray, tMin, tMax, hitRecord){
        let tempHitRecord = new HitRecord;
        let hitAnything = false;
        let closestSoFar = tMax;

        this.objectsList.map((el, index) => {
            if(el.didHit(ray, tMin, tMax, tempHitRecord)){
                hitAnything = true;
                closestSoFar = tempHitRecord.t;
                hitRecord = tempHitRecord;
                return hitAnything;
            }
        })
    }
}
module.exports = World;