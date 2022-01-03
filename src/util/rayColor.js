const Vector3D = require('../components/Linear/Vector3D');
const Point3D = require('./../components/Linear/Vector3DUses/Point3D')
const Color3D = require('../components/Linear/Vector3DUses/Color3D');
const didHitObject = require('./didHitObject');

const rayColor = (ray) => {
    record = new HitRecord();
    if(hittable.didHit(ray, Infinity, record)){
        return (record.normal.add(new Color3D(1,1,1).multipliedByScalar(0.5)));
    }
    // }
    // // CREATE A SPHERE
    //     // create a center point where the ray will hit
    //     let center = new Vector3D(0,0,-1);
    //     // create a radius for the sphere
    //     let radius = 0.5;
    //     // create a t variable for where the hit occurs
    //     let t = didHitObject(center, radius, ray);
    //     if (t > 0){
    //         let N = ray.point_at_parameter(t).subtract(center).unitVector();
    //         return new Color3D(N.x()+1, N.y()+1, N.z()+1).multipliedByScalar(radius);
    //     }
    

    // make a unit vector out of the direction of the ray
    let unitDirection = ray.direction().unitVector();
    // calculate t between 0 and 1
    t = 0.5*(unitDirection.y() + 1);
    // this is white color vector
    let color0 = new Color3D(1,1,1);
    // this is a bluish color vector
    let color1 = new Color3D(0.5,0.7,1.0);
    // color is determined by the value of t using the white and blue
    return color0.multipliedByScalar(1-t).add(color1.multipliedByScalar(t))
}

module.exports = rayColor;