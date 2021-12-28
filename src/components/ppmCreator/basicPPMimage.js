// node fs module used for writing files
const fs = require('fs');
const Ray = require('../Ray');
const Vector3D = require('../Vector3D');
const color = require('./../color');

const basicPPMimage = () => {
    let aspectRatio = 16/9;
    let imageWidth = 400;
    let imageHeight = imageWidth/aspectRatio;
    //setting up the camera perspective
    let viewportHeight = 2.0;
    let viewportWidth = aspectRatio * viewportHeight;
    let focalLength = 1.0;

    // create the screen to present
    let horizontal = new Vector3D(viewportWidth, 0.0, 0.0);
    let vertical = new Vector3D(0.0,viewportHeight,0.0);
    let origin = new Vector3D(0.0,0.0,0.0);

    let lowerLeftCorner = origin.subtract(horizontal.dividedByScalar(2)).subtract(vertical.dividedByScalar(2)).subtract(new Vector3D(0,0, focalLength));


    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageWidth} ${imageHeight}` + `\n255\n`, err => {});
    // creating the rows
    for(let j = imageHeight-1; j >= 0; --j){
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < imageWidth; ++i){
            let u = i / (imageWidth - 1);
            let v = j / (imageHeight - 1);
            let sh = horizontal.multipliedByScalar(u);
            let sv = vertical.multipliedByScalar(v);
            let rayVector = lowerLeftCorner.add(sh.add(sv));
            let ray = new Ray(origin, (rayVector.subtract(origin)));
            let col = color(ray);
            
            let r = Math.floor(255.999*col.x());
            let g = Math.floor(255.999*col.y());
            let b = Math.floor(255.999*col.z());
            // writing pixel to ppm file
            fs.writeFileSync(`img.ppm`, `${r} ${g} ${b}\n`, { flag: 'a' }, err => {});
        }
    }
}

module.exports = basicPPMimage;