var sunGlasses = [
  {
    title: "Pink",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products01.jpg",
    availability: "Available",
    lensWidth: "54mm",
    bridgeWidth: "18mm",
    pricing: "19.99"
  },

    {
    title: "Green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products02.jpg",
    availability: "2 Left",
    lensWidth: "53mm",
    bridgeWidth: "15mm",
    pricing: "14.99"
  },

      {
    title: "Silver",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products06.jpg",
    availability: "Available",
    lensWidth: "63mm",
    bridgeWidth: "25mm",
    pricing: "34.99"
  },

    {
    title: "Gold",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusempor incididunt ut labore et dolore magna aliqua. Ut enim ad Lorem ipsum dolor sit amet, consectetur adiim ad minim a commodo consequatmod minim a commodo consequatmod t...",
    image: "imgs/products07.jpg",
    availability: "1 Left",
    lensWidth: "64mm",
    bridgeWidth: "19mm",
    pricing: "69.99"
  },

    {
    title: "Striped",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore..",
    image: "imgs/products08.jpg",
    availability: "Available",
    lensWidth: "33mm",
    bridgeWidth: "25mm",
    pricing: "17.99"
  },

      {
    title: "Light Blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products09.jpg",
    availability: "Available",
    lensWidth: "63mm",
    bridgeWidth: "25mm",
    pricing: "34.99"
  },


    {
    title: "Leopard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products10.jpg",
    availability: "Available",
    lensWidth: "54mm",
    bridgeWidth: "13mm",
    pricing: "12.99"
  },

    {
    title: "Red",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enim ad minim a commodo consequat...",
    image: "imgs/products11.png",
    availability: "Sold Out",
    lensWidth: "13mm",
    bridgeWidth: "24mm",
    pricing: "16.99"
  },

      {
    title: "Purple-Green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua. Ut enimUt enimUt enimUt enimUt enimUt enimUt enimUt enim ad minim a commodo consequat...",
    image: "imgs/products12.jpg",
    availability: "Available",
    lensWidth: "63mm",
    bridgeWidth: "25mm",
    pricing: "34.99"
  }

  ];


  var sunContainer = document.getElementById("container");

  for (var i = 0; i < sunGlasses.length; i++) {
    var product = sunGlasses[i];

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
        <p>Lens Width: ${product.lensWidth}</p>
        <p>Bridge Width: ${product.bridgeWidth}</p> 
    </section>
    <section class="pricing">
      <header>
        <h4>Price</h4>
      </header>
        <p>${product.pricing}</p>
    </section>
    </div>
  </article>  
  </div>`

  }