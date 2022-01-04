const Constants = require('./constants')

const writeColor = (pixelColor, samplesPerPixel) => {
    let r = pixelColor.x();
    let g = pixelColor.y();
    let b = pixelColor.z();

    let scale = 1.0/samplesPerPixel;
    r=Math.sqrt(scale*r);
    g=Math.sqrt(scale*g);
    b=Math.sqrt(scale*b);

    let constants = new Constants;

    return (
        '' + (Math.floor(255.999 * constants.clamp(r, 0, .999))) + 
        ' ' + (Math.floor(255.999 * constants.clamp(g, 0, .999))) + 
        ' ' + (Math.floor(255.999 * constants.clamp(b, 0, .999))) +
        '\n'
    );
}

module.exports = writeColor;