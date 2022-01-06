const Camera = require('./src/components/Camera/Camera');
const Sphere = require('./src/components/HittableObject/shapes/Sphere');
const World = require('./src/components/HittableObject/World');
const Vector3D = require('./src/components/Linear/Vector3D');
const Color3D = require('./src/components/Linear/Vector3DUses/Color3D');
const Viewport = require('./src/components/Viewport/Viewport');
const basicPPMimage = require('./src/util/basicPPMimage');
//const generateScene= require();
const main = () => {
    // create viewport -> (aspect ratio, image width, samples per pixel)
    let viewport = new Viewport(16/9, 1920, 500)
    // create camera (camera position, point its directed to, upwards direction, field of view, aspect ratio)
    let camera = new Camera(new Vector3D(0,0,1), new Vector3D(0,0,-1), new Vector3D(0,1,0), 50, 16/9);
    // create world
    let world = new World();
    // create colors for world
    //generateScene();
    const [myR, myG, myB] = [255, 87, 51];
    const [landscapeR, landscapeG, landscapeB] = [100,100,100];
    // create objects in world
    world.add(new Sphere(new Vector3D(0,0,-1), 0.5, new Color3D(myR/256,myG/256,myB/256)));
    // add background
    world.add(new Sphere(new Vector3D(0,-200.5,-1), 200, new Color3D(landscapeR/256, landscapeG/256, landscapeB/256)));
    // generate image   
    basicPPMimage(viewport, camera, world);
}

main();