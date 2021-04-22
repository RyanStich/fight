import { preloadImages, preloadFonts } from '../utils.js';
import MenuController from '../menuController.js';


// Preload  images and fonts
Promise.all([preloadImages('.gallery__figure-img'), preloadFonts('yuz0mhb')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize the MenuController
    new MenuController(document.querySelector('.menu'));

});

