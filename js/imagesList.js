var $ = require("jquery");

// Reference parent element to append el's to
var $parentElement = $("[data-js='imagesList']");

// Build image children and attach
this.appendImage = function(imageData){
  var html = `
    <li>
      <h2 class="hii">${imageData.title}<h2>
      <img data-js="imagesList__image"
           src="${imageData.src}"
           alt="${imageData.title}">
    </li>
  `;
  $parentElement.append(html);
}
