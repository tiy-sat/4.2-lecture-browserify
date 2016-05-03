// Requires
var $ = require("jquery");

// Scoped vars

var $modalElement = $("[data-js='modal']"),
    $modalImageElement = $("[data-js='modal__image']"),
    modalClassHide = "modal--hide";

this.toggleShow = function(){
  $modalElement.toggleClass(modalClassHide);
}

this.setImageSource = function(imageSource){
  $modalImageElement.attr("src", imageSource);
};
