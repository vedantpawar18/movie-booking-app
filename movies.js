// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var rupee=JSON.parse(localStorage.getItem("amount")) || [];

let sumtotal=rupee.reduce(function(sum,ele){
    return sum=sum+ele;
},0)

var show=document.getElementById("wallet");
show.innerText=sumtotal


let movies_cont=document.getElementById("movies");


let id;

async function searchMOvies(){
    try{
        const query=document.getElementById("search").value;

        let res=await fetch(`http://www.omdbapi.com/?apikey=ba61a38e&s=${query}`);

        const data=await res.json();

        const movies=data.Search;

        return movies;
    } catch (err){
        console.log("err",err);
    }
}

function appendMovieData(data){
    movies_cont.innerHTML=null;

    var innerdiv=document.createElement("div");
    innerdiv.id="innerDiv";

    data.forEach(function(ele){

        let image=document.createElement("img");
        image.src=ele.Poster;
        let p=document.createElement("p");
        p.innerText=ele.Title;
        let btn=document.createElement("button")
        btn.innerText="book now"
        btn.className="book_now";
        btn.addEventListener("click", function(){
            watchMovie(ele);
        })

        innerdiv.append(image,p,btn)
       movies_cont.append(innerdiv);
    });
}

async function main(){
    let data=await searchMOvies();

    if (data==undefined){
        return false;
    }

    appendMovieData(data);
}

function debounce(func,delay){

    if (id){
        clearTimeout(id);
    }

    id=setTimeout(function(){
        func();
    },delay)
}

var watch=JSON.parse(localStorage.getItem("movie")) || [];
function watchMovie(ele){
  watch.push(ele);
  localStorage.setItem("movie",JSON.stringify(watch));
  window.location.href="checkout.html"
}