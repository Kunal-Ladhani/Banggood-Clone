  var myData = [
    {
      imgUrl:
        "https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/40/D0/4ad9cdc1-0792-42eb-af59-c035ee52f1c1.jpg.webp",
      price: "₹5,532.54",
      colorPrice: "62%Off",
    },
    {
      imgUrl:
        "https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/3E/8E/8d3c66b4-83f5-42dc-863b-5a65830275c5.jpg.webp",
      price: "₹7,532.29",
      colorPrice: "₹55%Off",
    },
    {
      imgUrl:
        "https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/4B/C7/51465cf3-35e8-446c-a35a-4f978bd779ad.jpg.webp",
      price: "₹15,508.11",
      colorPrice: "43%Off",
    },
    {
      imgUrl:
        "https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/30/36/08304cbc-ab96-4423-b57d-ff49649e9967.jpg.webp",
      price: "₹5,376.88",
      colorPrice: "51%Off",
    },
    {
      imgUrl:
        "https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/9C/B3/e8fe90f9-e578-4584-b9a8-8740814ed989.jpg.webp",
      price: "₹20,994.52",
      colorPrice: "30%Off",
    },
    {
      imgUrl:
        "https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/F1/71/6ea0a33e-689f-4f77-9ffe-07cf0473e686.jpg.webp",
      price: "₹1,776.20",
      colorPrice: "62%Off",
    },
    {
      imgUrl:
        "https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/F4/B3/53f7d537-5620-40e5-86f9-32d6614e4aaa.jpg.webp",
      price: "₹310.96",
      colorPrice: "67%Off",
    },
    {
      imgUrl:
        "https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/35/B6/da9ab6a0-827e-4c13-8f61-0234886d227c.jpg.webp",
      price: "₹5,454.20",
      colorPrice: "24%Off",
    },
  ];

  displayData(myData);

  function displayData(data) {
    data.map(function (el) {
      console.log("hello");
      var box = document.createElement("div");

      var product = document.createElement("img");
      product.setAttribute("src", el.imgUrl);

      var pro_price = document.createElement("p");
      pro_price.innerText = el.price;

      var price_tag = document.createElement("p");
      price_tag.innerText = el.colorPrice;

      box.append(product, pro_price, price_tag);
      document.querySelector("#container").append(box);
    });
  }

  var form = document
    .querySelector("form")
    .addEventListener("submit", myFunction);

  function myFunction() {
    email = document.querySelector("#email").value = alert(
      "Welcome to the Shop"
    );
  }

  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
