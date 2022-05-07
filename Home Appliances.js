    var heading =document.createElement("h2")
    heading.innerText= "Home Appliances"
    heading.style.color = "black"
    heading.style.fontSize = "30px"
    document.querySelector("#home").append(heading)

    // Home Appliances Images
    var product = [
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DE/9B/0e66baa5-9574-4076-9c78-3120d969b3d7.jpg.webp",
            price: "US$35.99",
            strikedoffprice: "US$48.99",
            offer:"27% Off",
            name: "120W Handheld Portable Handy Car Home Vacuum Cleaner 6000Pa Super Strong Suction Vacuum for Home and Car",
            rate: "2 reviews"
            
        },
        {  
            img: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/18/4D/4293b559-a0f8-4318-b7e2-50215b8aebe8.jpg.webp",
            price: "US$189.99",
            strikedoffprice: "US$225.99",
            offer:"16% Off",
            name: "BlitzHome BH-AP1C Smart Air Purifier Three Wind Speeds 220m³/h CADR Removes Allergies, Smoke, Dust, Mold, Pollen, Pet Dander",
            rate: "20 reviews"
        },
        {
            img: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/40/59/70a5fdad-25a7-4451-8bb1-b2c2657439d8.jpg.webp",
            price: "US$18.99",
            strikedoffprice: "US$25.99",
            offer:"27% Off",
            name: "9pcs Replacements for Xiaomi Mijia 1C 1T 2Pro+ 2C Dreame F9 Vacuum Cleaner Parts Accessories Main Brush*1 Side Brushes*3 HEPA Filters*3 Mop Clothes*2 Non-original",
            rate: "94 reviews"
        },
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/45/80/0225c84a-066c-418d-a9ed-367c806500b4.jpg.webp",
            price: "US$192.99",
            strikedoffprice: "US$215.99",
            offer:"11% Off",
            name: "HiBREW H11 Semi Automatic Espresso Machine 1450W 1.1L 19Bar High Extraction 25s Rapid Heating Single/Double Cup Coffee Maker EU/UK",
            rate: "0 reviews"
        },
        {   
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/3E/DA/bc934c32-9a4a-4b8f-b2c1-265580940999.jpg.webp",
            price: "US$11.59",
            strikedoffprice: "US$16.99",
            offer: "32% Off",
            name: "14Pcs Replacements for Proscenic 800T 820S Liectroux C30B XR500 Vacuum Cleaner Parts Accessories Main Brush*1 Side Brushes*6 HEAP Filters*3 Mop Clothes*4 [Not-  original]",
            rate: "9 reviews"
        },
        {
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/8E/AE/9e90ad75-1cdc-436b-bd04-5824ba9e1148.jpg.webp",
            price: "US$25.99",
            strikedoffprice: "US$42.99",
            offer:"35% Off",
            name: "120W Handheld Portable Handy Car Home Vacuum Cleaner 6000Pa Super Strong Suction Vacuum for Home and Car",
            rate: "7 reviews"
        },
        {
            img: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/16/80ba72c4-215b-43db-8da8-26a5c0f443de.jpg.webp",
            price: "US$21.99",
            strikedoffprice: "US$699.99",
            offer:"13% Off",
            name: "Roborock S7 Robot Vacuum Cleaner with Sonic Mopping Auto Mop Lifting 2500Pa Powerful Suction LiDAR Navigation Ultrasonic Carpet Recognition 5200mAh Battery 470ml Dustbin 300ml Water Tank APP Control for Pets Hair, Carpets and Hard Floor",
            rate: "129 reviews"   
        },
        {  
            img: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AC/20/cba34036-71e4-4b67-94ee-8d1017800d75.jpg.webp",
            price: "US$39.99",
            strikedoffprice: "US$57.99",
            offer:"31% Off",
            name: "Loskii LW-01 Air Conditioner Desktop Air Cooler Electric Fan 5 Gear Wind Speeds with Colorful Light Low Noise for Home Office",
            rate: "46 reviews"
        },
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/F1/b9e3498c-9387-4fe0-942c-b5c488110d12.jpg.webp",
            price: "US$117.59",
            strikedoffprice: "US$154.49",
            offer: "24% Of",
            name: "220V Portable Air Conditioner Conditioning 3 Gear Wind Speed Fan Humidifier Cooler Cooling System",
            rate: "0 reviews"
        },
        {
            img: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/F7/65/04b58847-45f8-4960-be90-0e8889246b5e.jpg.webp",
            price: "US$35.99",
            strikedoffprice: "US$46.99",
            offer:"23% Off",
            name: "Loskii F830 Negative Ion Air Conditioner Air Cooler Desktop Electric Fan Two Blowing Modes Three Gear Wind Speeds with Night Light Low Noise for Home Office",
            rate: "32 reviews"
        },
        {   
            img: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/AB/8E/bc95126d-2b0c-4cad-82bf-04ae623b2b6d.jpg.webp",
            price: "US$13.08",
            strikedoffprice: "US$47.00",
            offer:"72% Off",
            name: "3 in 1 Self Navigated Smart Robot Automatic Sweeper Sensor Edge Wet Mop Automatic Dry Wet Sweeping",
            rate: "244 reviews"
        },
        {
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/5A/F2/375ead66-67eb-4e56-bb88-b78b052c22e8.jpg.webp",
            price: "US$22.99",
            strikedoffprice: "US$27.99",
            offer:"18% Off",
            name: "Bakeey Neck Fan Leafless USB Rechargeable 4000mAh 3-Speed Hanging Neck Lazy Small Summer Fan",
            rate: "2 reviews"
        },
        {
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/BB/99/62206b72-d30f-4322-b47b-3149e7a356fd.jpg.webp",
            price: "US$16.99",
            strikedoffprice: "US$20.99",
            offer: "19% Off",
            name: "3 Speed 360° Rotating Sports Hanging Neck Fan USB Rechargeable Portable Table Fan",
            rate: "0 reviews"  
        },
        {  
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/2D/9C/c0fe31f9-e2a9-435e-8b3f-3481a57404e3.jpg.webp",
            price: "US$23.99",
            strikedoffprice: "US$28.99",
            offer:"17% Off",
            name: "10pcs Replacements for XIAOMI Roborock S6 S5 E35 E2 Vacuum Cleaner Parts Accessories 3*5-arm Side brushes 3*Filters 2*Roll Brushes 1*Yellow Brush 1*White Comb Non-original",
            rate: "51 reviews"
        },
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/B2/5B/a3fecb4d-b3b7-43fe-87bf-5f78d9e9658f.jpg.webp",
            price: "US$24.99",
            strikedoffprice: "US$30.99",
            offer:"19% Off",
            name: "6pcs Mop Clothes Replacements for Roborock S7 Vacuum Cleaner Parts Accessories [Not-original]",
            rate: "34 reviews"
        },
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/FC/8B/1f571374-9f9a-441a-8bb0-19c6e923a022.jpg.webp",
            price: "US$27.99",
            strikedoffprice: "US$33.99",
            offer:"18% Off",
            name: "Portable Air Cooler Fan Mini USB Air Conditioner 7 Colors Light Desktop Air Cooling Fan Humidifier Purifier for Office Bedroom",
            rate: "2 reviews"
        },
        {   
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/45/2E/639e997b-4f84-43b1-a64a-61adaac35666.jpeg.webp",
            price: "US$13.99",
            strikedoffprice: "US$25.99",
            offer:"46% Off",
            name: "8pcs/14pcs/20pcs Replacement Kits for Xiaomi Mijia 1C STYTJ01ZHM Vacuum Cleaner Parts Accessories [Non-original]",
            rate: "19 reviews"
        },
        {
            img: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A5/63/9e5cb38a-788c-48df-a99b-dcb4b2de3ce6.jpeg.webp",
            price: "US$133.99",
            strikedoffprice: "US$190.99",
            offer:"30% Off",
            name: "3L 75W Portable Air Cooler Remote/Touch Control Evaporative Air Conditioning Fan",
            rate: "1 reviews"
        },
        {
            img: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/7D/E3/6068c8b0-99d7-414f-92b3-59d96a242c50.jpg.webp",
            price: "US$187.99",
            strikedoffprice: "US$200.99",
            offer:"7% Off",
            name: "BlitzWolf® BW-SH3 Vertical Humidifier with 8L Large Capacity 360° Ultrasonic Humidification UV Sterilization Constant Humidity Timing Function for Office Home",
            rate: "58 reviews"
        },
        {  
            img: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/16/54/8fbef80c-389d-44ce-855d-a36330ffc221.jpg.webp",
            price: "US$8.99",
            strikedoffprice: "US$10.99",
            offer:"18% Off",
            name: "Bakeey Mini Cooling Fan USB Desktop Portable Air Humidifying Refrigeration Spray Small Air Conditioning Fan",
            rate: "3 reviews"
        }
   ] 
   
   product.forEach(function(el){
       var box = document.createElement("div")

       var img = document.createElement("img")
       img.setAttribute("src",el.img)
       img.style.height = "100%"
       img.style.width = "100%"
       img.style.cursor ="pointer"

       var price = document.createElement("p")
       price.innerText=el.price
       price.style.fontSize = "17px"
       price.style.fontFamily = "OpenSans,Arial"
       price.style.color = "#ff6e26"
       price.style.lineHeight= "20px"
       price.style.fontWeight = "550"

       var strikedoffprice = document.createElement("p")
       strikedoffprice.innerText=el.strikedoffprice
       strikedoffprice.style.marginTop = "-16px"
       strikedoffprice.style.fontSize = "15px"
       strikedoffprice.style.fontFamily = "OpenSans,Arial"
       strikedoffprice.style.color = "#333"
       strikedoffprice.style.lineHeight= "18px"
       strikedoffprice.style.textDecoration = "line-through"


       var offer = document.createElement("p")
       offer.innerText=el.offer
       offer.style.marginTop = "-16px"
       offer.style.fontSize = "14px"
       offer.style.fontWeight = "bold"
       offer.style.fontFamily = "OpenSans,Arial"
       offer.style.color = "royalblue"
       offer.style.lineHeight= "18px"
       
       var name = document.createElement("p")
       name.innerText=el.name
       name.style.cursor ="pointer"
       name.style.marginTop = "-14px"
       name.style.fontSize = "15px"
       name.style.fontFamily = "OpenSans,Arial"
       name.style.color = "#ff6e26"
       name.style.lineHeight= "18px"
       name.style.overflow ="hidden"
       name.style.whiteSpace = "nowrap"
       name.style.overflow = "ellipsis"

       var rate = document.createElement("p")
       rate.innerText=el.rate
       rate.style.cursor ="pointer"
       rate.style.marginTop = "-16px"
       rate.style.fontSize = "14px"
       rate.style.lineHeight= "18px"
       rate.style.fontFamily = "OpenSans,Arial"
       rate.style.color = "#999"
       rate.style.lineHeight= "18px"

       box.append(img,price,strikedoffprice,offer,name,rate)
       document.querySelector("#HA").append(box)
   })

// Home Appliances Images
var product1 = [
            {
                img : "https://imgaz.staticbg.com/brands/20210421042708_871.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715225048_370.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190623211827_727.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190717040035_422.png.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20210730214904_971.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20191009014442_902.png.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715014416_145.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190708015324_402.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20161130044252_752.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190708020142_175.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190722042422_489.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20170227210528_967.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190915221646_482.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190630223815_621.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190708014032_659.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190817010507_739.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715021640_398.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715014457_397.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715021536_141.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715043038_677.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190627030705_342.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715222651_226.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715021424_450.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190723015714_119.png.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20190715034611_314.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20200803224436_528.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20191119212229_430.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20191210194719_376.jpg.webp",
            },
            {
                img : "https://imgaz.staticbg.com/brands/20220124032337_107.jpg.webp",
            },
        ]

        product1.forEach(function(elem){
        var box1 = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("src",elem.img)
        img.style.height = "100%"
        img.style.width = "100%"
        img.style.cursor ="pointer"

        box1.append(img)
        document.querySelector("#brand").append(box1)
    })