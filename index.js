/**
 * entrypoint for the javascript ray tracer
 */

const basicPPMimage = require('./src/components/ppmCreator/basicPPMimage');
const color = (ray = new Vector3D) => {
    let unit_direction = ray.direction().unitVector();
    let t = (unit_direction.y() + 1)*0.5;
    let vector_0 = new Vector3D(1,1,1);
    let vector_1 = new Vector3D(0.5,0.1,0);

    vector_0.multipliedByScalarInplace(1-t);
    vector_1.multipliedByScalarInplace(t);
    return vector_0.multiply(vector_1);
}

let ray = new Ray();
basicPPMimage(color(ray));

