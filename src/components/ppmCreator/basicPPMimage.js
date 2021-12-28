// node fs module used for writing files
const fs = require('fs');
const Ray = require('../Ray');
const Vector3D = require('../Vector3D');

const basicPPMimage = (colorFunction) => {
    // determine the width, and the numbeer of subsequent columns to be made
    let imageSizeX = 200;
    // determine the height, and the number of subsequent rows to be made
    let imageSizeY = 100;
    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    // create the screen to present
    let lowerLeftCorner = new Vector3D(-2.0, -1.0, -1.0);
    let horizontal = new Vector3D(4.0,0.0,0.0);
    let vertical = new Vector3D(0.0,2.0,0.0);
    let origin = new Vector3D(0.0,0.0,0.0);
    // creating the rows
    for(let j = imageSizeY-1; j >= 0; j--){
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < imageSizeX; i++){
            let u = i / imageSizeX;
            let v = j / imageSizeY;
            let ray = new Ray(origin, (lowerLeftCorner + u*horizontal + v*vertical));
            let col = colorFunction(ray);
            // floor or ceiling could have been used
            let iRed = Math.floor(255.99*col.x());
            let iGreen = Math.floor(255.99*col.y());
            let iBlue = Math.floor(255.99*col.z());
            // writing pixel to ppm file
            fs.writeFileSync(`img.ppm`, `${iRed} ${iGreen} ${iBlue}\n`, { flag: 'a' }, err => {});
        }
    }
}

module.exports = basicPPMimage;