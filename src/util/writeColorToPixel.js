const writeColorToPixel = (pixelColor3D) => {
    return (
        '' + (Math.floor(255.999 * pixelColor3D.x())) + 
        ' ' + (Math.floor(255.999 * pixelColor3D.y())) + 
        ' ' + (Math.floor(255.999 * pixelColor3D.z())) +
        '\n'
    );
}

module.exports = writeColorToPixel;