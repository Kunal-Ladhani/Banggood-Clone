    // Falsh Deals
    const img0 = document.createElement("img"); 
    img0.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjng01qJnBfD4JAvKIYyeMleuOKxhpuhO3w&usqp=CAU";
    document.querySelector("#img1").append(img0)
    
    var heading =document.createElement("h2")
    heading.innerText= "Flash Deals"
    document.querySelector("#cat").append(heading)

    // Flash Deals Images
    var product = [
        {
            image_url: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/BD/1E/5fcd2c9b-c966-4972-ae4d-caa0a2f4d59d.jpg.webp",
            offer: "40% Off", 
            price: "US$17.99",
            sold: "1 Sold"
        },
        {  
            image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/18/34/6c7aec83-4cd4-473b-8a64-926f2516a467.jpg.webp",
            offer: "62% Off", 
            price: "US$9.99",
            sold: "7 Sold"
        },
        {
            image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/10/17/8a91e39a-0594-43d3-a9f3-19f2d0060453.jpg.webp",
            offer: "40% Off", 
            price: "US$11.99",
            sold: "1 Sold"
        },
        {
            image_url: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/27/7D/e0259fd0-e3b5-41a2-8a31-226c6032337c.jpg.webp",
            offer: "52% Off", 
            price: "US$12.99",
            sold: "1 Sold"
        },
        {   
            image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/91/92/3e0b41bd-32b2-4e62-9196-080b8551dbaa.jpg.webp",
            offer: "25% Off", 
            price: "US$17.99",
            sold: "3 Sold"
        },
        {
            image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/4E/32/be1531f2-d0b3-4c30-9e5c-5e15cb9da40a.jpg.webp",
            offer: "39% Off", 
            price: "US$19.99",
            sold: "1 Sold"
        },
   ] 
       
   product.forEach(function(el){
       var box = document.createElement("div")
       box.style.border = "1px solid black";

       var womenImg = document.createElement("img")
       womenImg.setAttribute("src",el.image_url)

       var offer = document.createElement("h3")
       offer.innerText=el.offer

       var price = document.createElement("p")
       price.innerText=el.price

       var sold = document.createElement("p")
       sold.innerText=el.sold

       box.append(womenImg,offer,price,sold)
       document.querySelector("#container").append(box)
   })

    // New Arrivals
    const img1 = document.createElement("img"); 
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLO_52STBVXv4XGYdak2yNnkKQc4ukseMAQ&usqp=CAU";
    document.querySelector("#img2").append(img1)
    
    var heading1 =document.createElement("h2")
    heading1.innerText= "New Arrivals"
    document.querySelector("#cat1").append(heading1)

    // New Arrivals Images
    var product1 = [
        {
            id:123453,
            name:"WCartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/39/72/391e5b75-658d-4bdf-8d25-3edcafbba3df.jpg.webp",
            price: 21.99,
            strikedoffprice: 27.99
        },
        {  
            id:212122,
            name:"Cartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/73/E4/64b8047f-f40a-43ca-89c8-8caa58f7dce4.jpg.webp",
            price: 19.99,
            strikedoffprice: 24.99
        },
        {
            id:"454545",
            name:"Cartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/B3/52/300367a2-4f33-4cb7-a1e4-42776017e105.jpg.webp",
            price: 33.99,
            strikedoffprice: 39.99
        },
        {
            id:465631,
            name:"Cartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/12/78/5c79b5ce-ad97-463a-a802-7349e1069a86.jpg.webp",
            price: 21.99,
            strikedoffprice: 27.99
        },
        {   
            id:563126,
            name:"Cartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/DA/54/67c75fe6-9ca1-487b-ae19-27fbb1705c25.jpg.webp",
            price: 21.99,
            strikedoffprice: 24.99
        },
        {
            id:1221567,
            name:"Cartoon Cat Letter Print Round Neck Short Sleeve T-Shirt - White S",
            category:"Women's Clothing",
            image_url: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/36/3C/50f5d169-1495-49e2-b9c8-5b6ef63e6d50.jpg.webp",
            price: 18.99,
            strikedoffprice: 23.99
        },
   ] 
   
   product1.forEach(function(el){
        var box1 = document.createElement("div")
        box1.style.border = "1px solid black";
        box1.addEventListener("click", function () {
            sendToProduct(el);
        });
                
        var womenImg1 = document.createElement("img")
        womenImg1.setAttribute("src",el.image_url)

        var price1 = document.createElement("p")
        price1.innerText="$"+el.price

        var strikedoffprice = document.createElement("p")
        strikedoffprice.innerText=el.strikedoffprice

        box1.append(womenImg1,price1,strikedoffprice)
        document.querySelector("#container1").append(box1)
    })

   var heading2 =document.createElement("h2")
   heading2.innerText= "Recommendations For You"
   document.querySelector("#cat2").append(heading2)

    //  Recommendations For You Images
   var product2 = [
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/9A/23/dbb5cc4c-d99f-4a08-a539-771b78d7f8f6.jpg.webp",
        price: 24.99,
        name: "Unisex Foldable Ultra-light Screwless Anti-blue Light Anti-fatigue Easy Carry Reading Glasses Presbyopic Glasses"
    },
    {  
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/27/63/e6d29dde-76b8-4fb6-bd7b-bb64650c0525.jpg.webp",
        price: 19.99,
        name: "Men Washed Denim Made-old Casual Retro Driver Flat Hat Forward Hat Beret Hat"
    },
    {
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/2C/78/cfa237f0-27b1-4a03-9e7d-cf0195048925.jpg.webp",
        price: 18.99,
        name: "Women Vintage Solid Color Loose Casual Cardigan Abaya Kaftan Long Sleeve Robe"
    },
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/1F/7C/e25c0c91-0156-4215-95c6-bd5a811c26e2.jpg.webp",
        price: 46.99,
        name: "Women European All-Matched Solid Color Lapel Buttons Cuffs Casual Jackets"
    },
    {   
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/23/88/4cfc49a5-2d52-4c9d-b416-13c88395b342.jpg.webp",
        price: 14.99,
        name: "Women Lace See-through V-neck Tights Shapewear Outside Wearing Casual Bodysuit"
    },
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/CA/4B/05dd34f3-da08-44d3-9c1b-50147aee32f3.jpg.webp",
        price: 29.99,
        name: "Women High Elastic Waist Loose Cotton Wide Leg Pants with Pockets"
    },
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D9/43/88e28051-43e5-418b-bf4a-a236e63ed15c.jpg.webp",
        price: 21.99,
        name: "Women Seamless Mesh Plus Size Stitching Classic Lightly Lined Wide Straps Bra"
    },
    {  
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/8D/B0/22bce5f8-32e6-4ac9-aef5-606fa26e8f47.jpg.webp",
        price: 21.99,
        name: "Women Vintage Stand Collar Long Sleeve Autumn Blouse Cardiagns"
    },
    {
        image_url: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/41/47/f8136986-2f11-43ad-bdff-630c5d0b5bdc.jpg.webp",
        price: 20.24,
        name: "160cm Nylon Waist Leisure Belts Zinc Alloy Tactical Belt Quick Release Inserting Buckles"
    },
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/23/E5/f25daab5-a750-4a5a-bba5-becf1008cd6c.jpg.webp",
        price: 36.99,
        name: "Plus Size Lace Criss Cross Full Coverage Gather Adjustable Bra"
    },
    {   
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/68/35/95250d02-6466-4c8a-ae65-9e8b0bff9664.jpg.webp",
        price: 17.99,
        name: "Women Cotton Solid Retro Mandarin Collar Puff Sleeve Button Up Long Sleeve Maxi Dress"
    },
    {
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/C4/1E/f9e9b841-8801-4946-9cd7-31d89b000482.jpg.webp",
        price: 14.99,
        name: "Women Sunscreen Sun Hat Fashion Butterfly Embroidery Duck Hat Baseball Cap"
    },
    {
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/CA/40/e35eaef2-781f-45cb-9930-aa8c1a350a85.jpg.webp",
        price: 34.99,
        name: "Women Side Pockets Maxi Length Back Zipper Buttons Casual Jumpsuit"
    },
    {  
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/61/E7/5e262236-da70-4eb2-9e54-da672bfd97da.jpg.webp",
        price: 29.31,
        name: "Vintage Ethnic Style Patchwork Slim Bodycon Dress"
    },
    {
        image_url: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/69/72/06038146-8c81-4131-be9d-2bd33757e85c.jpg.webp",
        price: 33.99,
        name: "Unisex Rabbit Hair Contrast Color Number Printing Casual Outdoor Fashion Visor Bucket Hat"
    },
    {
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/9F/B6/e1096fcd-e1f9-4da9-8e57-6821a1599f2d.jpg.webp",
        price: 17.99,
        name: "100% Polyester Solid Bohemian Leisure Nightgowns For Women"
    },
    {   
        image_url: "https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/E7/5A/446acc3e-7c3f-4e53-9a6b-7b5d6d402d9e.jpg.webp",
        price: 58.29,
        name: "Women Double-Breasted Winter Warm Coats with Belt"
    },
    {
        image_url: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/19/FB/9bdcd272-6296-487f-8861-52a72c198264.jpg.webp",
        price: 10.97,
        name: "Rimmed Reading Glasses Eyeglasses Spectacal With LED Light"
    },
] 

product2.forEach(function(el){
    var box2 = document.createElement("div")
    box2.style.border = "1px solid black";
    box2.addEventListener("click", function () {
        sendToProduct(el);
    });

    var womenImg2 = document.createElement("img")
    womenImg2.setAttribute("src",el.image_url)


    var price2 = document.createElement("p")
    price2.innerText="$"+el.price

    var name = document.createElement("p")
    name.innerText=el.name
    name.style.textDecoration = "none"
    name.style.cursor ="pointer"

    box2.append(womenImg2,price2,name)
    document.querySelector("#container2").append(box2)
});

function sendToProduct (elem) {
    
    elem["id"] = 127511;
    elem["category"] = "Women's Clothing";
    elem["strikedoffprice"] = 99.99;
    localStorage.setItem("productItem", JSON.stringify(elem));
    window.location.href="../html/productPage.html";
}

