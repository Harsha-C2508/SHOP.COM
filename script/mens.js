var mensData =[
   {
    roll:"1",
    image_Url: "https://img.shop.com/Image/290000/291200/291280/products/1924367986.jpg?size=400x400",
    Name : "Men's Mickey & Friends Mickey & Minnie Mouse Cheetah Print Bow Signature Graphic T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Fifth Sun",
    strikprice:"$29.99",
    price:"$17.98",
    off:" + $1.08 / 6%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   },
   {
    roll:"2",  
    image_Url: "https://img.shop.com/Image/280000/289900/289943/products/1907402103.jpg?size=400x400",
    Name : "Screen Stars Fruit Of The Loom Mens Original Short Sleeve Plain Casual T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Pertemba US",
    strikprice:"$12.51",
    price:"$10.20 - $13.20",
    off:" + up to $0.79 / 6%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   },
   {
    roll:"3",   
    image_Url: "https://img.shop.com/Image/290000/291200/291280/products/1924367935.jpg?size=400x400",
    Name : "Men's Mickey & Friends Donald Duck Wink Graphic T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Fifth Sun",
    strikprice:"$29.99",
    price:"$17.98",
    off:" + $1.08 / 6%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   },
   {
    roll:"4",
    image_Url: "https://img.shop.com/Image/260000/269300/269358/products/1907223764.jpg?size=400x400",
    Name : "Star Wars Darth Maul Dark Lord of the Sith Neon Retro T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Main Merch",
    strikprice:"",
    price:"$27.99 - $32.99",
    off:"+ up to $1.32 / 4%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:""
   },
   {
    roll:"5",
    image_Url: "https://img.shop.com/Image/250000/254500/254570/products/1666740432.jpg?size=400x400",
    Name : "Disney Mickey Mouse Hawaii Aloha Mickey Men's T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Seven Times Six",
    strikprice:"",
    price:"$18.25 - $21.95",
    off:"+ up to  $0.44 / 2%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   },
   {
    roll:"6",
    image_Url: "https://img.shop.com/Image/250000/254500/254570/products/1922369187.jpg?size=400x400",
    Name : "Deadpool Men's Superhero Sketch Art Character Design Adult T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by  Seven Times Six",
    strikprice:"",
    price:"$17.95",
    off:"+  $0.36 / 2%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   }, 
   {
    roll:"7",
    image_Url: "https://img.shop.com/Image/260000/269300/269358/products/1792104140.jpg?size=400x400",
    Name : "Star Wars Epic Darth Vader Black Men's T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Main Merch",
    strikprice:"",
    price:"$27.99 - $32.99",
    off:"+ up to $1.32 / 4%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"         "
   },
   {
    roll:"8",
    image_Url: "https://img.shop.com/Image/260000/269300/269358/products/1857898430.jpg?size=400x400",
    Name : "Natty Light Natural History Rowdy Gentleman Blue Men's T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Main Merch",
    strikprice:"",
    price:"$34.99 - $38.99",
    off:"+ up to $1.56 / 4%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"        "
   },
   {
    roll:"9",
    image_Url: "https://img.shop.com/Image/290000/291200/291280/products/1924022072.jpg?size=400x400",
    Name : "Men's Marvel Logo Hero Font Graphic T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by  Fifth Sun",
    strikprice:"$17.98",
    price:"$17.98",
    off:"+ $1.08 / 6% ",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:"Free shipping"
   },
   {
    roll:"10",
    image_Url: "https://img.shop.com/Image/260000/269300/269358/products/1831465113.jpg?size=400x400",
    Name : "Superman BvS Symbol Navy T-Shirt",
    trolly: "https://img.shop.com/Image/resources/images/onecart-icon.svg",
    sold: "Sold by Main Merch",
    strikprice:"",
    price:"$24.99 - $27.99",
    off:"+ up to $1.12 / 4%",
    logo:"https://img.shop.com/Image/resources/images/cashback-icon.svg",
    shipping:""
   },
];
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
mensData.map(function(elem){
    var box = document.createElement("div")
    box.setAttribute("class","items")

    var img = document.createElement("img")
    img.src = elem.image_Url;
    img.setAttribute("class","image")
  
    var a = document.createElement("a")
    var name = document.createElement("p")
    name.innerText = elem.Name;
     a.append(name)

    var p = document.createElement("p")
    p.setAttribute("class","soldOut")
    var image = document.createElement("img")
    image.src = elem.trolly;
    image.setAttribute("class","trolly")

    var soldBy = document.createElement("p")
    soldBy = elem.sold;
    p.append(image,soldBy)
     
    var curPrice = document.createElement("div")
    curPrice.setAttribute("class","price")
    var strPrice = document.createElement("p")
    strPrice.innerText = elem.strikprice;
    strPrice.setAttribute("class","strick")
    var rlyPrice = document.createElement("p")
    rlyPrice.innerText = elem.price
    rlyPrice.setAttribute("class","rlyPrice")
    curPrice.append(strPrice,rlyPrice)
     
    var off = document.createElement("div")
    off.setAttribute("class","off")
    var percent = document.createElement("p")
    percent.innerText = elem.off;
    var logo = document.createElement("img")
    logo.src = elem.logo;
    logo.setAttribute("class","trolly")
    var cash = document.createElement("span")
    cash.innerText = "Cashback"
    off.append(percent,logo,cash)
    
    var shipping = document.createElement("p")
    shipping.innerText = elem.shipping;
    shipping.setAttribute("class","ship")

    var button = document.createElement("div")
    var btn1 = document.createElement("button")
    btn1.innerText="See Details";
    var btn2 = document.createElement("button")
    btn2.innerText="Buying Option";
    btn2.addEventListener("click",function(){
        addtoCart(elem);
      })
    button.append(btn1,btn2)

    box.append(img,a,p,curPrice,off,shipping,button)
    document.querySelector("#container").append(box);
})   
function addToCart(elem) {
  console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("item added to cart");
}
var mens = JSON.parse(localStorage.getItem("mensData")); 
  function handlePriceSort() {
    var selected = document.querySelector("#sort").value;
    console.log(selected);
    if (selected == "PHL") {
     mens.sort(function (a, b) {
        return b.price - a.price;
      });
      displayData(mens);
    }

    if (selected == "PLH") {
      mens.sort(function (a, b) {
        return a.price - b.price;
      });
      displayData(mens);
    }
  }