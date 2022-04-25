// Store the wallet amount to your local storage with key "amount"

var rupee=JSON.parse(localStorage.getItem("amount")) || [];

function addtoWallet(money){

    var money=document.getElementById("amount").value;
    money=+money;

    rupee.push(money);


    localStorage.setItem("amount",JSON.stringify(rupee));
    window.location.reload();
}

let sumtotal=rupee.reduce(function(sum,ele){
    return sum=sum+ele;
},0)

var show=document.getElementById("wallet");
show.innerText=sumtotal


function linctoMovies(){
    window.location.href="movies.html"
}