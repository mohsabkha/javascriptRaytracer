// node fs module used for writing files
const fs = require('fs');
const Ray = require('./../components/Ray');
const Vector3D = require('./../components/Linear/Vector3D');
const rayColor = require('./../util/rayColor');
const writeColorToPixel = require('./writeColorToPixel');

const basicPPMimage = () => {
    // create the viewport and the image
    let aspectRatio = 16/9;
    let imageWidth = 400;
    let imageHeight = imageWidth/aspectRatio;
    let viewportHeight = 2.0;
    let viewportWidth = aspectRatio * viewportHeight;
    let focalLength = 1.0;

    // create the camera and its movemennt
    // two offset vectors to help calculate camera direction
    let horizontal = new Vector3D(viewportWidth, 0.0, 0.0);
    let vertical = new Vector3D(0.0,viewportHeight,0.0);
    // origin of camera
    let origin = new Vector3D(0.0,0.0,0.0);
    //compute bottom left corner of image
    let lowerLeftCorner = origin.subtract(horizontal.dividedByScalar(2))
                                .subtract(vertical.dividedByScalar(2))
                                .subtract(new Vector3D(0,0, focalLength));

    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageWidth} ${imageHeight}` + `\n255\n`, err => {});
    // creating the rows
    for(let j = imageHeight-1; j >= 0; --j){
        process.stdout.write(`Completion: ${(((imageHeight-j)/imageHeight)*100).toFixed(1)}%`);
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < imageWidth; ++i){
            // get coordinates of where the camera should be pointing/rendering
            let u = i / (imageWidth - 1);
            let v = j / (imageHeight - 1);
            // use those points to set up the offset vectors dynamically
            let sh = horizontal.multipliedByScalar(u);
            let sv = vertical.multipliedByScalar(v);
            // initialize the ray
            let rayVector = lowerLeftCorner.add(sh.add(sv));
            // createe the ray and invert it to the top left of the screen
            let ray = new Ray(origin, (rayVector.subtract(origin)));
            // generate color vector from the ray and create pixel color from the color vector
            let pixelColor = writeColorToPixel(rayColor(ray))
            // writing pixel to ppm file
            fs.writeFileSync('img.ppm ' + pixelColor, { flag: 'a' }, err => {});
        }
        process.stdout.cursorTo(0);
    }
    process.stdout.write('\n')
}

module.exports = basicPPMimage;