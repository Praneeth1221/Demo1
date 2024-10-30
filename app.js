
let rNum=Math.floor((Math.random()*10)+1);
let count1=3;

function log(){
   if(count1>0){
    let no= document.getElementById("number").value;
    let dis= document.getElementById("dission");
    let chance = document.getElementById("chance");
    console.log(rNum);
   
    chance.innerHTML=("Chances to left : "+count1);
    
    if(no>rNum){
        dis.innerHTML="Too High.Try Again";
    }else if(no<rNum){
        dis.innerHTML="Too :LOw..try Again";
    }else{
        dis.innerHTML="Correct..";
        count1=0;
    }
    
    
    count1--;
    
    
}
}




