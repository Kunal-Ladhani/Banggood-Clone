console.log(JSON.parse(localStorage.getItem("cartDetails")))

var totalItems = 0;
var totalPrice = 0;


var data = JSON.parse(localStorage.getItem("cartDetails"))

var product = document.querySelector(".productcont")
data.forEach((element,i) => {

    totalItems += element.qty;
    totalPrice += element.price;



    var productDiv = document.createElement("div")
    productDiv.classList.add("product")

    var imgDiv = document.createElement("div")
    imgDiv.classList.add("imgDiv")


    var img = document.createElement("img")
    img.setAttribute("src",element.img)


    var detailsDiv = document.createElement("div")
    detailsDiv.classList.add("detailsDiv")

    var productName = document.createElement("h3")
    productName.classList.add("productName")
    productName.innerText = element.name;

    var qty = document.createElement("h4")
    qty.innerText = "QTY : " + element.qty;
    

    var price = document.createElement("h3")
    price.innerText = "price : "  + element.price;
    price.classList.add("price")
    
    var deleteItem = document.createElement("button")
    deleteItem.innerText = "DELETE"
    deleteItem.addEventListener("click",function (){
        var filteredItem = data.filter(function(cur,i){
            return cur.id != element.id
        })
        localStorage.setItem("cartDetails",JSON.stringify(filteredItem))
        window.location.reload();
    })  


    

  
    imgDiv.append(img)
    detailsDiv.append(productName,qty,price,deleteItem)
    productDiv.append(imgDiv,detailsDiv)
    product.append(productDiv)
});

document.querySelector(".totalItem").innerText = totalItems
document.querySelector(".totalprice").innerText = totalPrice


// <!-- <div class="product">
// <h3 class="productname">Product 1</h3>
// <p>Product description excerpt...</p>
// <p class="price">$5.05</p>
// <button class="addtocart">Add To Cart</button>
// </div>

