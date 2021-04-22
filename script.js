
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

const gltfLoader = new GLTFLoader()
const scene = new THREE.Scene()

function homePageScene() {
// Canvas
const canvas = document.querySelector('canvas.webgl')

var particlesMaterial = []

// loader 
/**
 * Models
 */


// Scene
// const scene = new THREE.Scene()

/**
 * Textures
*/

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5

    // console.log(cursor.x, cursor.y)
})


const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('img/4.png')


const particlesGeometry = new THREE.BufferGeometry(1,32,32)
const count =  20

const positions = new Float32Array(count * 3)

for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
}

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
)

for(let i = 0; i < count; i++) {

 particlesMaterial[i] = new THREE.PointsMaterial({
    size: 0.35,
    sizeAttenuation: true,
    color: 'skyblue'
    
})
particlesMaterial[i].map = particleTexture
particlesMaterial[i].transparent = true
particlesMaterial[i].alphaMap = particleTexture
particlesMaterial[i].alphaTest = 0.001
particlesMaterial[i].depthWrite = false
particlesMaterial[i].blending = THREE.AdditiveBlending

const particles = new THREE.Points(particlesGeometry, particlesMaterial[i])

particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;

scene.add(particles)
}

// points

const cursor = {
    x: 0,
    y: 0
}


window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
})
window.addEventListener('resize', function(){


    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Base camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls

// COMMENT

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

let mixer = null


const directionalLight = new THREE.DirectionalLight('#FFB6C1', 4)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(2, -4, 3)
scene.add(directionalLight)


const tick = () =>
{

    //update mixer

    const elapsedTime = clock.getElapsedTime() 

    var time = Date.now() * 0.000010;

    // Update camera
    camera.position.x += (cursor.x - camera.position.x) * 0.10;
    camera.position.y += (-cursor.y - camera.position.y) * 0.10;

    // animation 
    for (let i = 0; i < scene.children.length; i++) {

        var object = scene.children[i];
        if(object instanceof THREE.Points) {


            object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
    }
}

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // update

    if(mixer !== null) {
        mixer.update(elapsedTime)
    }

    

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()
}

function homePage3D() {

    let mixer = null
    gltfLoader.load(
    '/img/voxel/scene.gltf',
    (gltf) =>
    {

         mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])


        action.play()

        // console.log(gltf)
        gltf.scene.position.set( 1.2, -0.8, 1.4 )
        gltf.scene.scale.set(0.300, 0.300, 0.30)
    
        const light = new THREE.AmbientLight( 'skyblue', 3 ); // soft white light
        gltf.scene.rotation.y = Math.PI * 2.05
        scene.add( light );
        const pointLight = new THREE.PointLight('#FF69B4', 1)
        scene.add(pointLight)
        scene.add(gltf.scene)

       
    }
)
    
}




export {homePageScene, homePage3D}
