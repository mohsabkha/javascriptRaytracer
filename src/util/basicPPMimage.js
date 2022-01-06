// node fs module used for writing files
const fs = require('fs');
const rayColor = require('../util/rayColor');
const writeColor = require('./writeColor');
const Color3D = require('../components/Linear/Vector3DUses/Color3D');
const Constants = require('./constants');

const basicPPMimage = (viewport, camera, world) => {
    let constants = new Constants;

    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${viewport.imageWidth} ${viewport.imageHeight}` + `\n255\n`, err => {});
    // creating the rows
    for(let j = viewport.imageHeight-1; j >= 0; --j){
        process.stdout.write(`Completion: ${(((viewport.imageHeight-j)/viewport.imageHeight)*100).toFixed(1)}%`);
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < viewport.imageWidth; ++i){
            //creating a new color vector
            let color = new Color3D(0,0,0);
            //creating a sampling of the new color
            for(let s = 0; s < viewport.samplesPerPixel; ++s){
                let u = ((i + constants.randomNumber()) / (viewport.imageWidth - 1));
                let v = ((j + constants.randomNumber()) / (viewport.imageHeight - 1));
                let ray = camera.getRay(u,v);
                color = color.add(rayColor(ray, world))
            }
            // generate color vector from the ray and create pixel color from the color vector
            let pixelColor = writeColor(color, viewport.samplesPerPixel);
            // writing pixel to ppm file
            fs.writeFileSync('img.ppm', pixelColor, { flag: 'a' }, err => {});
        }
        process.stdout.cursorTo(0);
    }
    process.stdout.write('\n')
}

module.exports = basicPPMimage;