import { homePageScene, homePage3D } from './script.js'



let swup = new Swup()

// on page change
function updateScene() {

    if (/home/.test(window.location.href)) {
        console.log('nav to home')

        // render 3d model 
        homePage3D()
       
    }

    if (/projects/.test(window.location.href)) {
        console.log('nav to projects')
       
       // remove 3d model here
       
    }

}


// onload
document.addEventListener("DOMContentLoaded", function(){

    if (/home/.test(window.location.href)) {
        console.log('loaded on home')

        // render scene
        homePageScene()
    
        // render model
        homePage3D()
    }

    if (/projects/.test(window.location.href)) {
        console.log('loaded on projects')

        // render scene
        homePageScene()
    
        // remove 3d model here
        
    }
});



// this function gets called everytme the url changes
swup.on('contentReplaced', updateScene);


