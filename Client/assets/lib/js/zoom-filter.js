$(document).ready(function () {
  // Function to handle image zoom
  function handleImageZoom(currentSlide) {
      var imgs = $('.image_zoom_cls');
      $('.zoomContainer').remove();
      imgs.removeData('elevateZoom');
      imgs.removeData('zoomImage');
      var temp_zoom_cls = '.image_zoom_cls-' + currentSlide;
      setTimeout(function () {
          $(temp_zoom_cls).elevateZoom({
              zoomType: "inner",
              cursor: "crosshair"
          });
      }, 200);
  }

  // On slide change, trigger image zoom
  $('.details-image').on('afterChange', function (event, slick, currentSlide) {
      handleImageZoom(currentSlide);
  });

  // Initialize image zoom explicitly after document ready
  function initializeImageZoom() {
      if ($(window).width() > 991) {
          var currentSlide = $('.details-image').slick('slickCurrentSlide');
          handleImageZoom(currentSlide);
      } else {
          $('.image_zoom_cls').elevateZoom({
              zoomType: "inner",
              cursor: "crosshair"
          });
      }
  }

  initializeImageZoom(); 

  // Handle window resize to adjust image zoom
  $(window).on('resize', function(){
      initializeImageZoom(); 
  });

  // Function to change the main image and reinitialize zoom
  window.changeMainImage = function(imageUrl, key) {
      var imgHolder = $('#img-holder img');
      imgHolder.attr('src', imageUrl);
      imgHolder.removeClass().addClass('image_zoom_cls image_zoom_cls-' + key);
      handleImageZoom(key);
  };
});
