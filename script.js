// --------------------------- Create a title / header area -----------------

let h1 = document.createElement('h1')
h1.setAttribute('id','title')
h1.innerHTML="SHYNE BLUE"
document.getElementById('root').appendChild(h1)

let phrase = document.createElement('p')
phrase.setAttribute('id','phrase')
phrase.innerHTML="<i>glorious way u look</i>"
h1.appendChild(phrase)


let hrline = document.createElement("hr")
h1.appendChild(hrline)

// ---------------------------Create a search input area ---------------------------


let Input = document.createElement("input")
Input.setAttribute('id','myinput')
Input.setAttribute('type','text')
Input.setAttribute('placeholder','search items')
document.getElementById('root').appendChild(Input)



// ---------------------------Fetch all the Json data ------------------------------- 

async function allData(){
    try {
         let con = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
         let data = await con.json()
         // console.log(data)
         return data
         
    } catch (error) {
         console.log("Error")
    }
 }


// --------------------------- functon of the search area -------------------------


 let filterinput = document.getElementById('myinput')

 filterinput.addEventListener('keyup',filterproducts)
 
 function filterproducts(){
     let filtervalue = filterinput.value.toUpperCase();
     // console.log(filtervalue)
 
     let item = document.querySelectorAll("#card")

     
 
     for(let i=0;i<item.length;i++){

         let span = item[i].querySelector("#proname");
 
         if(span.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
            
            item[i].style.display = "Initial";
         }else{
             item[i].style.display = "none";
         }
     }
 
 }


// ------------------------------ create a card area ----------------------------


async function getData(){

    let getdata = await allData()
    console.log(getdata)


    let Totalcard =document.createElement('div')
    Totalcard.setAttribute('id','Tcard')
    Totalcard.setAttribute('class','row')
    document.getElementById('root').appendChild(Totalcard)


    getdata.forEach((e) => {
        let subcard = document.createElement('div')
        subcard.setAttribute('id','card')
        subcard.setAttribute('class','col')
        subcard.setAttribute('class','col col-lg-4 col-sm-12')  

        
        subcard.innerHTML +=
        `   <p class="brand">Brand : ${e.brand}</p>
            <img src="${e.api_featured_image}" id="img">
            <h4 id="proname">${e.name}</h4>
            <p id="price"><sup>${e.price_sign}</sup> ${e.price}</p>
            <a href="${e.product_link}" target="_blank">Productlink</a>
            <p id="description"><b>Description</b> : <br> ${e.description}</p>
        `  

        Totalcard.appendChild(subcard) 
    });
}
getData()







