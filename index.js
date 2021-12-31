//const basicPPMimage = require('./src/components/ppmCreator/basicPPMimage');
const Matrix = require('./src/components/Linear/Matrix');
const Vector = require('./src/components/Linear/Vector');
// creates the ray-traced image
// basicPPMimage();

// to observe internals, go to components or modules folder

// The basic ray, color, and location are build using Vector3D class
// The ray is then further expanded to build the full ray as it comes from the camera
// didHit function in modules is the template used by the shapes found in hittableObject

let myVector1 = new Vector(1,2);
let myVector2 = new Vector(4,5);
let myVector3 = new Vector(7,8);

let myVec1 = new Vector(3,5,6);
let myVec2 = new Vector(7,8,9);
let myVec3 = new Vector(12,15,12);

let myVec = new Vector(1,4,7);

// 2 x 3 matrix
let myMat = new Matrix(myVec1, myVec2);
myMat.print();
// 3 x 2 matrix
let myMatrix = new Matrix(myVector1, myVector2, myVector3);
myMatrix.print();

let newMatrix = myMat.multiply(myMatrix);
newMatrix.print();
