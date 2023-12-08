var removeCartItembuttons = document.getElementsByIdName("delete_icon")
console.log(removeCartItembuttons)
var amount = 0
var no_shoes_tekst = "No Shoes?"
if (sessionStorage.getItem("sko")){
   amount = sessionStorage.getItem("sko")
}
if (sessionStorage.getItem('størrelser')){
   var størrelse = sessionStorage.getItem("størrelser")
   document.getElementsByClassName("Størelse_Produkt")[0].innerHTML = størrelse
}

for (var i = 0; i < removeCartItembuttons.length; i++) {
    var button = removeCartItembuttons[i]
    button.addEventListener('click', function(event) {
       var buttonClicked = event.target
       
       amount -= 1
       if (amount == 0){
           document.getElementById("DIV_SHOPPINGBAG").remove()

           document.getElementById("tekst").innerHTML = no_shoes_tekst
           
       }
       updateCartTotal()
    })
}

function updateCartTotal() {
   var cartItemContainer = document.getElementById('shopping_div')
   var cartRows = cartItemContainer.getElementsByClassName('shoppingbag')
   for (var i = 0; i < cartRows.length; i++) {
       var cartRow = cartRows[i]
       var priceElement = cartRow.getElementsByClassName('Pris_shopping')[0]
       var quantityElement = cartRow.getElementsByClassName('Add')[0]
       var price = parseFloat(priceElement.innerText.replace('kr', ''))
       var quantity = quantityElement.value
       document.getElementById('TOTALCOST_PRIS').innerHTML = price * amount
       document.getElementById('PRIS_SUBTOTAL').innerHTML = price * amount + "kr"
       
   }
}

function add_shoe(){
   amount++
   updateCartTotal()
}

if (amount == 0){
   document.getElementById("DIV_SHOPPINGBAG").remove()

   document.getElementById("tekst").innerHTML = no_shoes_tekst
} 