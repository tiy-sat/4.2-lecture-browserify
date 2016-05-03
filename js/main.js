$(function(){

  // Normal mode images array
  var imagesArray = [
    {
      title: "mountains!",
      src: "https://static.pexels.com/photos/2855/landscape-mountains-nature-lake.jpg"
    },
    {
      title: "person standing at beach",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
      title: "clouds from airplane",
      src: "https://www.dunkindonuts.com/content/dunkindonuts/en/menu/food/bakery/donuts/donuts/_jcr_content/block/image.img.png/1415193587324.png"
    }
  ]

  // Referencing element to hold images
  var $imagesListElement = $("[data-js='imagesList']");
  var $modalElement = $("[data-js='modal']");
  var $modalCloseButton = $("[data-js='modal--close']");

  // Loop over images array
  imagesArray.forEach(function(image){
    // Create parent element
    var parentElement = $(`
      <li class=''>
        <h3>${image.title}</h3>
      </li>`);
    // Create image tag with needed attributes form image var
    var newImage = $("<img data-js='imagesList__image'>").attr("src", image.src);
    // wrapping image in parent li with append
    parentElement.prepend(newImage);
    // Place image in document
    $imagesListElement.append(parentElement);
  });

  // Delegating listener from parent UL data attribute
  // to children, through second argument
  $imagesListElement.on("click", "[data-js='imagesList__image']", function(e){
    // Store currently clicked on image's source
    var selectedImageSource = e.target.src;
    // Unhide modal
    $modalElement.toggleClass("modal--hide");
    // Update image source FOR MODAL IMAGE
    $("[data-js='modal__image']").attr("src", selectedImageSource);

  });

  $modalCloseButton.on("click", function(e){
    // Close modal
    $modalElement.toggleClass("modal--hide");
  })





})
