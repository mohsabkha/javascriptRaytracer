// node fs module used for writing files
const fs = require('fs');
const Vector3D = require('../components/Linear/Vector3D');
const rayColor = require('../util/rayColor');
const writeColor = require('./writeColor');
const HittableList = require('../components/HittableObject/HittableList');
const Sphere = require('../components/HittableObject/shapes/Sphere');
const Camera = require('../components/Camera/Camera');
const Color3D = require('../components/Linear/Vector3DUses/Color3D');
const Constants = require('./constants');

const basicPPMimage = (world_, camera_) => {
    let constants = new Constants;
    // create the viewport
    let aspectRatio = 16/9;
    let imageWidth = 400;
    let imageHeight = imageWidth/aspectRatio;
    let samplesPerPixel = 100;
    // create world
    let world = new HittableList();
    const [myR, myG, myB] = [255, 182 ,193];
    const [wr, wg, wb] = [124, 252, 0];

    world.add(new Sphere(new Vector3D(0,0,-1), 0.5, new Color3D(myR/256,myG/256,myB/256)));
    world.add(new Sphere(new Vector3D(0,-200.5,-1), 200, new Color3D(wr/256, wg/256, wb/256)));

    let camera = new Camera(new Vector3D(0,0,1), new Vector3D(0,0,-1), new Vector3D(0,1,0), 50, aspectRatio);

    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageWidth} ${imageHeight}` + `\n255\n`, err => {});
    // creating the rows
    for(let j = imageHeight-1; j >= 0; --j){
        process.stdout.write(`Completion: ${(((imageHeight-j)/imageHeight)*100).toFixed(1)}%`);
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < imageWidth; ++i){
            //creating a new color vector
            let color = new Color3D(0,0,0);
            //creating a sampling of the new color
            for(let s = 0; s < samplesPerPixel; ++s){
                let u = ((i + constants.randomNumber()) / (imageWidth - 1));
                let v = ((j + constants.randomNumber()) / (imageHeight - 1));
                let ray = camera.getRay(u,v);
                color = color.add(rayColor(ray, world))
            }
            // generate color vector from the ray and create pixel color from the color vector
            let pixelColor = writeColor(color, samplesPerPixel);
            // writing pixel to ppm file
            fs.writeFileSync('img.ppm', pixelColor, { flag: 'a' }, err => {});
        }
        process.stdout.cursorTo(0);
    }
    process.stdout.write('\n')
}

module.exports = basicPPMimage;