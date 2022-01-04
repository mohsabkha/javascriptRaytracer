class Constants{
    constructor(){
        this.pi = 3.1415926535897932385;
    }

    // Utility Functions
    degreesToRadians(degrees) {
        return degrees * this.pi / 180.0;
    }

    randomNumber(min = 0, max=1){
        return (Math.random() * max+1) + min;
    }

    clamp(x, min, max){
        if(x < min){ return min; }
        if(x > max){ return max; }
        return x;
    }
}

module.exports = Constants;

