let submit=document.getElementById("submit");
submit.addEventListener("click",collectInfo);
let infoarr=[];
var n=0;
function collectInfo(){
    const info=document.getElementById("form");
    n=n+1;
    let obj={
        id:n,
        Name:info[0].value,
        Profession:info[1].value,
        Age:info[2].value
    }
    infoarr.push(obj)
    console.log(infoarr);
}

let filter=document.getElementById("btn");


  


function filterFunction(){
    let Profession=document.getElementById("card").value;
    let list=infoarr.filter((e)=>{
        return e.Profession===Profession;
    })

    
    let cards=document.getElementById("show"); 
    cards.innerHTML="";
  
    

    for(let i=0;i<list.length;i++){
        
        let div=document.createElement("div");
        div.className="card";
        let id=document.createElement("span");
        id.innerText=list[i].id;
        // console.log(id.innerText);
        let Name=document.createElement("span");
        Name.innerText="Name: "+ list[i].Name ;
        // console.log(Name.innerText);
        let Profession=document.createElement("span");
        Profession.innerText="Profession: "+ list[i].Profession;
        // console.log(Profession.innerText);
        let Age=document.createElement("span");
        Age.innerText="Age: "+list[i].Age;
        // console.log(Age.innerText);

        div.appendChild(id);
        div.appendChild(Name);
        div.appendChild(Profession);
        div.appendChild(Age)
        console.log(div);
        cards.appendChild(div);
    }
}

filter.addEventListener("click",filterFunction);








