const fs = require('fs');

const basicPPMimage = () => {
    let imageSizeX = 200;
    let imageSizeY = 100;
    fs.writeFileSync(`img.ppm`,`P3\n` + `${imageSizeX} ${imageSizeY}` + `\n255\n`, err => {});
    for(let j = imageSizeY-1; j >= 0; j--){
        for(let i = 0; i < imageSizeX; i++){
            let red = i / imageSizeX;
            let green = j / imageSizeY;
            let blue = 0.2;

            let iRed = Math.ceil(255.99*red);
            let iGreen = Math.ceil(255.99*green);
            let iBlue = Math.ceil(255.99*blue);
            fs.writeFileSync(`img.ppm`, `${iRed} ${iGreen} ${iBlue}\n`, { flag: 'a' }, err => {});
        }
    }
}

module.exports = basicPPMimage;