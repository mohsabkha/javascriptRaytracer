const Color3D = require('../components/Linear/Vector3DUses/Color3D');
const HitRecord = require('../components/HittableObject/HitRecord');
const Ray = require('../components/Ray');

const rayColor = (ray, hittable, depth=50) => {
    if(depth <= 0){
        return new Color3D(0,0,0);
    }
    depth--;
    let record = new HitRecord();
    for(let i = 0; i < hittable.getList().length; i++){
        if(hittable.getList()[i].didHit(0.001, Infinity, record, ray)){
            let newColor = new Color3D();
            //controls how object's surface interacts with light
            let target = record.getPoint()
                .add(newColor.randomInHemisphere(record.getNormal()))
            //controls objects
            return rayColor(new 
                Ray(record.getPoint(), 
                target.subtract(record.getPoint())), hittable, depth) // shader
                .multiply(hittable.getList()[i].getColor());
        }
    }

    //setting up the background gradient
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