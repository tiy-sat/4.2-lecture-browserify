var $ = require("jquery"),
    modal = require("modal"),
    imagesData = require("imagesData"),
    imagesList = require("imagesList")
;

$(function(){
  var $modalHideButton = $("[data-js='modal--close']");

  imagesData.images.forEach(function(image){
    imagesList.appendImage(image);
  });

  $modalHideButton.on("click", function(e){
    modal.toggleShow();
  });

  $("[data-js='imagesList']").on("click", "[data-js='imagesList__image']", function(e){
    modal.toggleShow();
    modal.setImageSource(e.target.src);
  });
});
