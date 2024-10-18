$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
    interval: false, // empeche le démarrage automatique du carousel
  });

  // délais de 5 secondes avant que le carrousel commence à défiler automatiquement
  setTimeout(function () {
    $("#carouselExampleIndicators").carousel({
      interval: 5000, // defilement toutes les 5 secondes
    });
  }, 5000); // démarre le carrousel automatiquement après 5 secondes
});
