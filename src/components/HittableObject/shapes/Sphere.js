const HitRecord = require('../HitRecord');
const HittableObject = require('../HittableObject');

//hittableObject creates an extendable base object that can be transformed
class Sphere extends HittableObject{
    constructor(center, radius){
        super();
        this.center = center;
        this.radius = radius;
        this.hitRecord = new HitRecord();
    }

    //function to determinee if the sphere is hit
    didHit(ray, tMin, tMax, hitRecords){
        let oc = ray.origin().subtract(this.center);
        let a = ray.direction().squaredLength();
        let halfB = (oc.dotProduct(ray.direction()));
        let c = oc.squaredLength() - (this.radius*this.radius);

        //check if discriminant exists
        let discriminant = (halfB * halfB) - (a*c);
        if(discriminant < 0){
            return false;
        }

        //check if roots exist
        sqrtDet = Math.sqrt(discriminant);
        let root = (-halfB - sqrtDet ) / a;
        if(root < tMin || root > tMax){
            root = (-halfB - sqrtDet ) / a;
            if(root < tMin || root> tMax){
                return false;
            }
        }

        //calculate thee point if roots exist
        let point = ray.point_at_parameter(root);
        //calculate the normal of the point of roots exist
        //a normal is the ray perpendicular to the object which we will see in the camera
        let normal = (point - this.center) / this.radius;
        //update the passed in hit record and return true
        this.hitRecord.t = root;
        this.hitRecord.point = point;
        this.hitRecord.normal = normal;
        let outwardNormal = (hitRecords.point - this.center) / this.radius;
        this.hitRecord.setFaceNormal(ray, outwardNormal);

        //return true when roots exist and hitRecords are updated
        return true;
    }
}

module.exports = Sphere;