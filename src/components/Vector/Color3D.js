const Vector3D = require('./Vector3D');

class Color3D extends Vector3D{
    constructor(val1, val2, val3){
        super(val1, val2, val3);
    }
} 

module.exports = Color3D;