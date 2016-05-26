
var sunGlasses = [
  {
    title: "Pink",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products01.jpg",
    availability: "Available",
    lensWidth: "54",
    bridgeWidth: "18",
    pricing: "19.99"
  },

    {
    title: "Green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products02.jpg",
    availability: "2 Left",
    lensWidth: "53",
    bridgeWidth: "15",
    pricing: "14.99"
  },

      {
    title: "Silver",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products06.jpg",
    availability: "Available",
    lensWidth: "63",
    bridgeWidth: "25",
    pricing: "34.99"
  },

    {
    title: "Gold",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adiim ad minim a commodo consequatmod minim a commodo consequatmod t...",
    image: "imgs/products07.jpg",
    availability: "1 Left",
    lensWidth: "64",
    bridgeWidth: "19",
    pricing: "69.99"
  },

    {
    title: "Striped",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore..",
    image: "imgs/products08.jpg",
    availability: "Available",
    lensWidth: "33",
    bridgeWidth: "25",
    pricing: "17.99"
  },

      {
    title: "Light Blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products09.jpg",
    availability: "Available",
    lensWidth: "63",
    bridgeWidth: "25",
    pricing: "34.99"
  },


    {
    title: "Leopard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products10.jpg",
    availability: "Available",
    lensWidth: "54",
    bridgeWidth: "13",
    pricing: "12.99"
  },

    {
    title: "Red",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products11.png",
    availability: "Sold Out",
    lensWidth: "13",
    bridgeWidth: "24",
    pricing: "16.99"
  },

      {
    title: "Purple-Green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products12.jpg",
    availability: "Available",
    lensWidth: "63",
    bridgeWidth: "25",
    pricing: "34.99"
  }

  ];


  var sunContainer = document.getElementById("container");


function productPrint (x) {

  for (var i = 0; i < x.length; i++) {
    var product = x[i];

    sunContainer.innerHTML += `<div id="productDiv">
  <article>
    <header>
      <h1 class="cardtitle">${product.title}</h1>
    </header>
    <section>
        <img src="${product.image}" alt="Sunglasses">
      <p class="productDescription">${product.description}</p>
      <p class="availability">${product.availability}</p>
    </section>
    <div id="centerdiv">
    <section class="specs">
      <header>
        <h4>Specs</h4>
      </header>
        <p>Lens Width: ${product.lensWidth} mm</p>
        <p>Bridge Width: ${product.bridgeWidth} mm</p> 
    </section>
    <section class="pricing">
      <header>
        <h4>Price</h4>
      </header>
        <p>$${product.pricing}</p>
    </section>
    </div>
  </article>  
  </div>`

  }
}

productPrint(sunGlasses);

 
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}


var keyValue = "pricing";

// console.log(sunGlasses[0][keyValue]);



function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0][keyValue] <= right[0][keyValue]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
    console.log('HELLO PEOPLE!!')
 
    return result;
}
 
var lowToHigh = mergeSort(sunGlasses);

var lowToHighButton = document.getElementById("loToHi");
var highToLowButton = document.getElementById("hiToLo");
var lensWidthButton = document.getElementById("lensWidth");


lowToHighButton.addEventListener("change", function() {
  sunContainer.innerHTML = "";
  productPrint(lowToHigh);
})

highToLowButton.addEventListener("change", function() {
  sunContainer.innerHTML = "";
  productPrint(lowToHigh.reverse());
})

lensWidthButton.addEventListener("change", function() {
  sunContainer.innerHTML = "";
  keyValue = "lensWidth";
  mergeSort(sunGlasses);
  console.log("testing", keyValue);
  productPrint(lowToHigh);
})


