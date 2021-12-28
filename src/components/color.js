const Vector3D = require('./Vector3D');

const color = (ray) => {
    let unit_direction = ray.direction().unitVector();
    let t = 0.5*(unit_direction.y() + 1);
    let vector_0 = new Vector3D(1,1,1);
    let vector_1 = new Vector3D(0.5,0.7,1.0);
    returnVector = vector_0.multipliedByScalar(1-t).add(vector_1.multipliedByScalar(t))
    return returnVector;
}

module.exports = color;