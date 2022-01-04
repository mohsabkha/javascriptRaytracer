const Ray = require('./../Ray');
const Vector3D = require('./../Linear/Vector3D')
const Constants = require('./../../util/constants');

class Camera{
    constructor(lookFrom, lookAt, cameraUpVector, fieldOfView, aspectRatio){
        let Constant = new Constants();
        
        // define camera orientation
        this.lookFrom = lookFrom;
        this.lookAt = lookAt;
        this.cameraUpVector = cameraUpVector
        this.fieldOfViewVector = fieldOfView;

        // define viewport geometry
        let theta = Constant.degreesToRadians(this.fieldOfViewVector);
        let h = Math.tan(theta/2)

        // define viewport using the viewport geometry
        this.aspectRatio = aspectRatio;
        this.viewportHeight = 2.0 * h;
        this.viewportWidth = this.aspectRatio * this.viewportHeight;
        this.focalLength = 1;

        // define camera vectors to control camera location and angle
        this.w = this.lookFrom.subtract(this.lookAt).unitVector();
        this.u = this.cameraUpVector.crossProduct(this.w).unitVector();
        this.v = this.w.crossProduct(this.u);

        // origin of camera
        this.origin = this.lookFrom;

        // two offset vectors to help calculate camera direction
        this.horizontal = this.u.multipliedByScalar(this.viewportWidth);
        this.vertical = this.v.multipliedByScalar(this.viewportHeight);
        
        //compute bottom left corner of image
        this.lowerLeftCorner = this.origin.subtract(this.horizontal.dividedByScalar(2))
                                    .subtract(this.vertical.dividedByScalar(2))
                                    .subtract(this.w);
    }

    getRay(s, t){
        // u and v are common notation for directional vectors
        // use those points to set up the offset vectors dynamically
        let scaledH = this.horizontal.multipliedByScalar(s);
        let scaledV = this.vertical.multipliedByScalar(t);
        // initialize the ray
        let rayVector = this.lowerLeftCorner.add(scaledH.add(scaledV));
        // createe the ray and invert it to the top left of the screen
        return new Ray(this.origin, 
            this.lowerLeftCorner
            .add(this.horizontal.multipliedByScalar(s))
            .add(this.vertical.multipliedByScalar(t))
            .subtract(this.origin)
        );
    }
}

module.exports = Camera;