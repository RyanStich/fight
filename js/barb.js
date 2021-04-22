
barba.init({
    cacheIgnore: true
});

barba.init({
  views: [
    {
      namespace: "home",

      beforeEnter(data) {
        console.log("entering home");
      },

      afterEnter(data) {
        console.log("entered home");

        var homeImported = document.createElement('script');
        homeImported.id = 'homeImported'
        homeImported.src = 'https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js';
        document.body.appendChild(homeImported);


        var homeImported1 = document.createElement('script');
        homeImported1.id = 'homeImported1'
        homeImported1.src = 'js/imp/img.js';
        homeImported1.type = 'module'
        document.body.appendChild(homeImported1);

        var homeImported2 = document.createElement('script');
        homeImported2.id = 'homeImported2'
        homeImported2.src = 'js/imp/index.js';
        homeImported2.type = 'module'
        document.body.appendChild(homeImported2);

        var homeImported3 = document.createElement('script');
        homeImported3.id = 'homeImported3'
        homeImported3.src = 'js/three.min.js';
        document.body.appendChild(homeImported3);


        var homeImported4 = document.createElement('script');
        homeImported4.id = 'homeImported4'
        homeImported4.src = 'js/imp/script.js';
        homeImported4.type = 'module'
        document.body.appendChild(homeImported4);


        var homeImported5 = document.createElement('script');
        homeImported5.id = 'homeImported5'
        homeImported5.src = 'js/imp/TweenLite.min.js';
        document.body.appendChild(homeImported5);

        var homeImported6 = document.createElement('script');
        homeImported6.id = 'homeImported6'
        homeImported6.src = 'js/imp/Math.js';
        document.body.appendChild(homeImported6);

        // var homeImported7 = document.createElement('script');
        // homeImported7.id = 'homeImported7'
        // homeImported7.src = 'js/imp/EffectShell.js';
        // document.body.appendChild(homeImported7);

        // var homeImported8 = document.createElement('script');
        // homeImported8.id = 'homeImported8'
        // homeImported8.src = 'js/imp/RGBShiftEffect.js';
        // document.body.appendChild(homeImported8);

        var homeImported9 = document.createElement('script');
        homeImported9.id = 'homeImported9'
        homeImported9.src = 'js/imp/imagesloaded.pkgd.min.js';
        document.body.appendChild(homeImported9);
        
        // var homeImported10 = document.createElement('script');
        // homeImported10.id = 'homeImported10'
        // homeImported10.src = 'js/imp/imgHover.js';
        // document.body.appendChild(homeImported10);
           


        var deleteImported = document.getElementById('homeImported');
        deleteImported.remove();

        var deleteImported1 = document.getElementById('homeImported1');
        deleteImported1.remove();

        var deleteImported2 = document.getElementById('homeImported2');
        deleteImported2.remove();

        var deleteImported3 = document.getElementById('homeImported3');
        deleteImported3.remove();

        var deleteImported4 = document.getElementById('homeImported4');
        deleteImported4.remove();

        var deleteImported5 = document.getElementById('homeImported5');
        deleteImported5.remove();

        var deleteImported6 = document.getElementById('homeImported6');
        deleteImported6.remove();

        var deleteImported7 = document.getElementById('homeImported7');
        deleteImported7.remove();

        var deleteImported8 = document.getElementById('homeImported8');
        deleteImported8.remove();

        var deleteImported9 = document.getElementById('homeImported9');
        deleteImported9.remove();

        // var deleteImported10 = document.getElementById('homeImported10');
        // deleteImported10.remove();


      },

      beforeLeave(data) {
        console.log("leaving home");


      },
    },

    {
      namespace: "projects",

      beforeEnter(data) {
        console.log("entering projects");
      },

      afterEnter(data) {
        console.log("entered projects");

        // var imported = document.createElement('script');
        // imported.id = 'imported'
        // imported.src = 'js/ok.js';
        // document.body.appendChild(imported);

        var imported1 = document.createElement('script');
        imported1.id = 'imported1'
        imported1.src = 'js/imp/img.js';
        imported1.type = 'module';
        document.body.appendChild(imported1);

        var imported2 = document.createElement('script');
        imported2.id = 'imported2'
        imported2.src = 'js/skript.js';
        imported2.type = 'module';
        document.body.appendChild(imported2);

        var imported3 = document.createElement('script');
        imported3.id = 'imported3'
        imported3.src = 'js/imp/index.js';
        imported3.type = 'module';
        document.body.appendChild(imported3);




        // var destroyImported = document.getElementById('imported');
        // destroyImported.remove();

        var destroyImported1 = document.getElementById('imported1');
        destroyImported1.remove();

        var destroyImported2 = document.getElementById('imported2');
        destroyImported2.remove();

        var destroyImported3 = document.getElementById('imported3');
        destroyImported3.remove();


      },

      afterLeave(data) {
        console.log("left projects");

        
        // let destroyScript = document.getElementById("okie");
        // console.log(destroyScript)
        // destroyScript.remove()
        

      },
      
    },
  ],
});





// barba.hooks.before((data) => {

//   if (/projects/.test(window.location.href)){
   
//         var imported1 = document.createElement('script');
//         imported1.id = 'imported1'
//         imported1.src = 'js/imp/img.js';
//         imported1.type = 'module';
//         document.body.appendChild(imported1);

//         var imported2 = document.createElement('script');
//         imported2.id = 'imported2'
//         imported2.src = 'js/skript.js';
//         imported2.type = 'module';
//         document.body.appendChild(imported2);

//         var imported3 = document.createElement('script');
//         imported3.id = 'imported3'
//         imported3.src = 'js/imp/index.js';
//         imported3.type = 'module';
//         document.body.appendChild(imported3);

//         var destroyImported = document.getElementById('imported');
//         destroyImported.remove();

//         var destroyImported1 = document.getElementById('imported1');
//         destroyImported1.remove();

//         var destroyImported2 = document.getElementById('imported2');
//         destroyImported2.remove();

//         var destroyImported3 = document.getElementById('imported3');
//         destroyImported3.remove();
// }



// })


