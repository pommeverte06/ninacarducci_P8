// $(document).ready(function() {
//     $('.gallery').mauGallery({
//         columns: {
//             xs: 1,
//             sm: 2,
//             md: 3,
//             lg: 3,
//             xl: 3
//         },
//         lightBox: true,
//         lightboxId: 'myAwesomeLightbox',
//         showTags: true,
//         tagsPosition: 'top'
//     });
// });


// $(document).ready(function () {
//     $('.gallery').mauGallery({
//       columns: {
//         xs: 1,
//         sm: 2,
//         md: 3,
//         lg: 3,
//         xl: 3
//       },
//       lightBox: true,
//       lightboxId: 'myAwesomeLightbox',
//       showTags: true,
//       tagsPosition: 'top',
//       interval: false, // Empêche le démarrage automatique
//     });
  
//     // Si tu veux modifier la vitesse du carousel :
//     $('#carouselExampleIndicators').carousel({
//       interval: 5000, // Défilement toutes les 5 secondes (5000ms)
//     });
//   });
  


$(document).ready(function () {
    // initialisation de la galerie avec mauGallery
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,               
        lightboxId: 'myAwesomeLightbox', 
        showTags: true,               
        tagsPosition: 'top',          
        interval: false  // empeche le démarrage automatique du carousel
    });

    // délais de 5 secondes avant que le carrousel commence à défiler automatiquement
    setTimeout(function () {
        $('#carouselExampleIndicators').carousel({
            interval: 5000, // defilement toutes les 5 secondes 
        });
    }, 5000); // démarre le carrousel automatiquement après 5 secondes
});
