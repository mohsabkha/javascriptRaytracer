const writeColorToPixel = (pixelColor3D) => {
    return `${255.999 * pixelColor3D.x()} ${255.999 * pixelColor3D.y()} ${255.999 * pixelColor3D.z()}`;
}

module.exports = writeColorToPixel;