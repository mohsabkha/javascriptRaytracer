const basicPPMimage = require('./src/components/ppmCreator/basicPPMimage');

// creates the ray-traced image
basicPPMimage();

// to observe internals, go to components or modules folder

// The basic ray, color, and location are build using Vector3D class
// The ray is then further expanded to build the full ray as it comes from the camera
// didHit function in modules is the template used by the shapes found in hittableObject