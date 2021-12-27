// node fs module used for writing files
const fs = require('fs');

const basicPPMimage = () => {
    // determine the width, and the numbeer of subsequent columns to be made
    let imageSizeX = 200;
    // determine the height, and the number of subsequent rows to be made
    let imageSizeY = 100;
    // initializing the ppm file with type, width, and higher, along with rgb values
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    // creating the rows
    for(let j = imageSizeY-1; j >= 0; j--){
        // iterating over every column in the row and generating pixel
        for(let i = 0; i < imageSizeX; i++){
            let red = i / imageSizeX;
            let green = j / imageSizeY;
            let blue = 0.2;
            // floor or ceiling could have been used
            let iRed = Math.floor(255.99*red);
            let iGreen = Math.floor(255.99*green);
            let iBlue = Math.floor(255.99*blue);
            // writing pixel to ppm file
            fs.writeFileSync(`img.ppm`, `${iRed} ${iGreen} ${iBlue}\n`, { flag: 'a' }, err => {});
        }
    }
}

module.exports = basicPPMimage;