// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


var rupee=JSON.parse(localStorage.getItem("amount")) || [];

let sumtotal=rupee.reduce(function(sum,ele){
    return sum=sum+ele;
},0)

var show=document.getElementById("wallet");
show.innerText=sumtotal;

var movDetails=JSON.parse(localStorage.getItem("movie")) ;




movDetails.map(function(ele){

    let box=document.createElement("div");

    let image=document.createElement("img");
    image.src=ele.Poster;

    let name=document.createElement("h2");
    name.innerText=ele.Title;

    box.append(name,image)

    movie.append(box)

})

function confirmation(){

    var cost=document.getElementById("number_of_seats").value;

    cost=cost*100;

    if ( sumtotal-cost<0)
    {
        alert("Insufficient Balance!")
    }
    else
    {
        alert("Booking successful!")
        return show.innerText=sumtotal-cost;
    }

   
}
