const Vector3D = require('../components/Vector/Vector3D');
const Color3D = require('../components/Vector/Color3D');
const didHitObject = require('./didHitObject');

const rayColor = (ray) => {
    // create a center point where the ray will hit
    let center = new Vector3D(0,0,-1);
    // create a radius for the sphere
    let radius = 0.5;
    // create a t variable for where the hit occurs
    let t = didHitObject(center, radius, ray);
    if (t > 0){
        let N = ray.point_at_parameter(t).subtract(center).unitVector();
        return new Vector3D(N.x()+1, N.y()+1, N.z()+1).multipliedByScalar(radius);
    }
    
    let unitDirection = ray.direction().unitVector();
    t = 0.5*(unitDirection.y() + 1);
    let vector_0 = new Vector3D(1,1,1);
    let vector_1 = new Vector3D(0.5,0.7,1.0);
    return vector_0.multipliedByScalar(1-t).add(vector_1.multipliedByScalar(t))
}

module.exports = rayColor;