const Vector3D = require('./Vector3D');

class Point3D extends Vector3D{
    constructor(val1, val2, val3){
        super(val1, val2, val3);
    }
} 

module.exports = Point3D;