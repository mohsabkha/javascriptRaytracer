const didHitObject = (center, radius, ray) => {
    let oc = ray.origin().subtract(center).unitVector();
    let a = ray.direction().squaredLength();
    let halfB = (oc.dotProduct(ray.direction().unitVector()));
    let c = oc.squaredLength() - (radius*radius);

    let discriminant = (halfB * halfB) - (a*c);
    
    if(discriminant < 0){
        return -1;
    }
    else{
        return (-halfB - Math.sqrt(discriminant) ) / a;
    }
}

module.exports = didHitObject;