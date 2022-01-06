class Viewport{
    constructor(aspectRatio, imageWidth, samplesPerPixel){
        this.aspectRatio = aspectRatio
        this.imageWidth = imageWidth;
        this.imageHeight = imageWidth/aspectRatio;
        this.samplesPerPixel = samplesPerPixel;
    }
    getAspectRatio(){
        return this.aspectRatio;
    }
    getImageWidth(){
        return this.ImageWidth;
    }
    getImageHeight(){
        return this.imageHeight;
    }
    getSamplesPerPixel(){
        return this.samplesPerPixel;
    }
}

module.exports = Viewport;