class Sphere{
    constructor(center, radius){
        this.center = center;
        this.radius = radius;
    }

    didHit(ray, tMin, tMax, hitRecords){
        let oc = ray.origin().subtract(this.center);
        oc = oc.unitVector();
        let a = ray.direction().squaredLength();
        let halfB = (oc.dotProduct(ray.direction().unitVector()));
        let c = oc.squaredLength() - (this.radius*this.radius);

        let discriminant = (halfB * halfB) - (a*c);
        
        if(discriminant < 0){
            return false;
        }
        squarerootDiscriminant = Math.sqrt(discriminant);
        let root = (-halfB - Math.sqrt(discriminant) ) / a;
        if(root < tMin || root > tMax){
            root = (-halfB - Math.sqrt(discriminant) ) / a;
            if(root < tMin || root> tMax){
                return false;
            }
        }

        hitRecords.t = root;
        hitRecords.point = ray.point_at_parameter(hitRecords.t);
        hitRecords.normal = (hitRecords.point - this.center) / this.radius;

        return true;
    }
}