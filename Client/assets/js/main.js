(function ($) {
   "use strict";

   // WOW JS
   $(window).on("load", function () {
      if ($(".wow").length) {
         var wow = new WOW({
            boxClass: "wow", // Animated element css class (default is wow)
            animateClass: "animated", // Animation css class (default is animated)
            offset: 30, // Distance to the element when triggering the animation (default is 0)
            mobile: false, // Trigger animations on mobile devices (default is true)
            live: true, // Act on asynchronously loaded content (default is true)
         });
         wow.init();
      }
   });

// ------ Dropdown Menu start
      // Initially enable scrolling
      $(".dropdown-menu").addClass("scrollOn");

      $(".dropdown-item.hasChild").mouseenter(function (e) {
         e.stopPropagation();
         if ($(window).width() >= 767) {
            $(".dropdown-menu").removeClass("scrollOn");
         }

         var $parentLi = $(this).closest("li");
         $(".child-menu").not($parentLi.find(".child-menu")).removeClass("show");
         $parentLi.find(".child-menu").toggleClass("show");

         // add scroll for menu without visible child
         if ($(window).width() >= 767){
            setTimeout(function() {
               if ($(".dropdown-menu").find("li .child-menu.show").length === 0) {
                   $(".dropdown-menu").addClass("scrollOn");
               } else {
                   $(".dropdown-menu").removeClass("scrollOn");
               }
           }, 300);
         }

      });


       

      // Close the menu when clicking the close button
      $(".menuCloseBtn").click(function () {
         closeMenu();
      });

      // Close the child menu when clicking the close button
      $(".childMenuCloseBtn").click(function (e) {
         e.stopPropagation();
         $(this).closest(".child-menu").removeClass("show");
         $(".dropdown-menu").addClass("scrollOn");
      });

      // Prevent unnecessary close
      $(".dropdown-menu").click(function (e) {
         e.stopPropagation();
      });

      // Close the menu when clicking outside the menu or on menuCloseBtn
      $(document).click(function (e) {
         if (!$(e.target).closest(".menu-left").length || $(e.target).hasClass("menuCloseBtn")) {
            closeMenu();
         }
      });

      // Function to close the entire menu
      function closeMenu() {
         $(".dropdown-menu").removeClass("show");
         $(".menu-left .dropdown-toggle").removeClass("show");
         // Re-enable scrolling when closing the whole dropdown menu
         $(".dropdown-menu").addClass("scrollOn");
      }

      // scroller
      if ($(".mcustomscrollbar").length > 0) {
         $(".mcustomscrollbar").mCustomScrollbar();
      }
   // ------ Dropdown Menu end

   // ------ Account menu dropdown start
   document.addEventListener('DOMContentLoaded', (event) => {
      const menuItems = document.querySelectorAll('header .main-navbar .nav-menu > li');
  
      menuItems.forEach(menuItem => {
         menuItem.addEventListener('click', () => {
              menuItem.classList.toggle('show');
              menuItems.forEach(item => {
                  if (item !== menuItem) {
                      item.classList.remove('show');
                  }
              });
         });

          const closeButton = menuItem.querySelector('.account-menu_close-btn');
          const viewMenuCloseButton = menuItem.querySelector('.view-menu_close-btn');
          
          if (closeButton) {
              closeButton.addEventListener('click', (event) => {
                  event.stopPropagation();
                  menuItem.classList.remove('show');
              });
          }
          if (viewMenuCloseButton) {
            viewMenuCloseButton.addEventListener('click', (event) => {
                  event.stopPropagation();
                  menuItem.classList.remove('show');
              });
          }
      });
      $(".mega-menu-container").click(function (e) {
         e.stopPropagation();
      });
      document.addEventListener('click', (event) => {
          if (!event.target.closest('header .main-navbar .nav-menu')) {
              menuItems.forEach(menuItem => {
                  menuItem.classList.remove('show');
              });
          }
      });
   });
    
   // ------ Account menu dropdown end



   // ------ Trending Now Slider start
   if ($(".trending-slider-init").length > 0) {
      var slider = $(".trending-slider-init").slick({
         infinite: false,
         slidesToShow: 5,
         slidesToScroll: 1,
         prevArrow: $("#trening-prev"),
         nextArrow: $("#trening-next"),
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 4,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 575,
               settings: "unslick",
            },
         ],
      });
   }
   // ------ Trending Now Slider end

   // ------ Best Selling Slider start
   if ($(".bestSelling-slider-init").length > 0) {
      var slider = $(".bestSelling-slider-init").slick({
         infinite: false,
         slidesToShow: 6,
         slidesToScroll: 1,
         prevArrow: $("#bestSelling-prev"),
         nextArrow: $("#bestSelling-next"),
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 5,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 4,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 575,
               settings: "unslick",
            },
         ],
      });
   }
   // ------ Best Selling Slider end

   // ------ Shop Latest Slider start
   if ($(".shopLatest-slider-init").length > 0) {
      var slider = $(".shopLatest-slider-init").slick({
         infinite: false,
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: $("#shopLatest-prev"),
         nextArrow: $("#shopLatest-next"),
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
               },
            },
            {
               breakpoint: 475,
               settings: {
                  slidesToShow: 1,
               },
            },
            {
               breakpoint: 0,
               settings: {
                  slidesToShow: 1,
               },
            },
         ],
      });
   }
   // ------ Shop Latest Slider end
   $('.brand_carousel').owlCarousel({
      loop:true,
      margin:10,
      items:8,
      nav:true,
      dots:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          678:{
              items:4,
          },
          992:{
            items:6,
        },
        1200:{
         items:8,
     }
      }
  })








   // ------ Most Viewed Slider start
   if ($(".mostViewed-slider-init").length > 0) {
      var slider = $(".mostViewed-slider-init").slick({
         infinite: false,
         slidesToShow: 5,
         slidesToScroll: 1,
         prevArrow: $("#mostViewed-prev"),
         nextArrow: $("#mostViewed-next"),
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 4,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 575,
               settings: {
                  slidesToShow: 2,
               },
            },
         ],
      });
   }
   // ------ Most Viewed Slider end

   // ------ Header Recently Viewed Slider start
   if ($(".recentlyViewed-slider-init").length > 0) {
      var slider = $(".recentlyViewed-slider-init").slick({
         infinite: false,
         slidesToShow: 8,
         slidesToScroll: 1,
         prevArrow: $("#recentlyViewed-prev"),
         nextArrow: $("#recentlyViewed-next"),
         responsive: [
            {
               breakpoint: 1500,
               settings: {
                  slidesToShow: 6,
               },
            },
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 5,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 4,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 475,
               settings: {
                  slidesToShow: 2,
               },
            },
         ],
      });
   }
   // ------ Header Recently Viewed Slider end

   // ------ Header Saved Items Slider start
   if ($(".savedItems-slider-init").length > 0) {
      var slider = $(".savedItems-slider-init").slick({
         infinite: false,
         slidesToShow: 8,
         slidesToScroll: 1,
         prevArrow: $("#savedItems-prev"),
         nextArrow: $("#savedItems-next"),
         responsive: [
            {
               breakpoint: 1500,
               settings: {
                  slidesToShow: 6,
               },
            },
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 5,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 4,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 475,
               settings: {
                  slidesToShow: 2,
               },
            },
         ],
      });
   }
   // ------ Header Saved Items Slider end


})(jQuery);

// ------ Search text change start
function updateSearchText() {
   var width = window.innerWidth;
   var searchInput = document.getElementById("searchInput");

   if (width <= 767) {
      searchInput.placeholder = "Search";
   } else {
      searchInput.placeholder = "What can we help you find today?";
   }
}

// Initial call
updateSearchText();

// Update on window resize
window.addEventListener("resize", updateSearchText);

// ------ Search text change end


// div same height
window.addEventListener('DOMContentLoaded', () => {
   let maxHeight = 0;
   const thumbContents = document.querySelectorAll('.thumb-content');
 
   // Find the maximum height
   thumbContents.forEach(thumbContent => {
     const height = thumbContent.offsetHeight;
     if (height > maxHeight) {
       maxHeight = height;
     }
   });
 
   // Apply the maximum height to all .thumb-content
   thumbContents.forEach(thumbContent => {
     thumbContent.style.height = `${maxHeight}px`;
   });
 });
 
