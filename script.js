 var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "Oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

function items(){
  var that = this;
  this.ele = document.createElement("div");// overall layout
  //this.ele.classList.add("popUp");
  
  var popUpDiv = document.createElement("div");
  popUpDiv.style.display = "none";
  popUpDiv.classList.add("popUp");
  this.ele.appendChild(popUpDiv);
  
   popUpDiv.addEventListener("click", function(){// selects prodcutinfo
      this.style.display = "none";// change color ON HOVER
    });

  
  for(var i=0; i<products.length;i++){
    var productImage = document.createElement("img");
    var productInfoEle = document.createElement("div");// create a div for the info
    productInfoEle.classList.add("product");//add the formatting
    productImage.src = products[i].image;
    productInfoEle.appendChild(productImage);
    productInfoEle.append(products[i].name + "     $" + products[i].price);//items are written
  
    const productColor = products[i].color;
        
    productInfoEle.addEventListener("mouseover", function(){// selects prodcutinfo
      this.style.borderColor = productColor;// change color ON HOVER
    });
    
    productInfoEle.addEventListener("mouseout", function(){// selects prodcutinfo
      this.style.borderColor = "black";// change color ON HOVER
    });
    
     productInfoEle.addEventListener("click", function(){// selects prodcutinfo
      popUpDiv.innerHTML = this.innerHTML;
      popUpDiv.style.display = "block";
       //////////////////////////////
    });
    
    
    
    this.ele.appendChild(productInfoEle);//append items to the main element
    }//end for
  document.body.appendChild(this.ele);//append main element to body
 }




var test = new items();