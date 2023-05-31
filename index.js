const choice=document.querySelectorAll(".buttons>button").length;
var pscore=0;
var cscore=0;
const ftext = document.getElementById("result").innerText;
document.getElementById("restart").addEventListener("click",function(){
    document.getElementById("result").innerText=ftext;
    pscore=0;
    cscore=0;
    document.getElementById("user-score").innerText=pscore;
    document.getElementById("Computer-score").innerText=cscore;

});

for(var i=0;i<choice;i++){
    document.querySelectorAll(".buttons>button")[i].addEventListener("click",function(){
        const playerid=this.id;
        console.log(playerid);
        computerSelection();
        const result=winner(playerid,computerSelection());
        document.getElementById("result").innerText=result;
        document.getElementById("result").innerText=result;
    });
}
function computerSelection(){
    const ch=["rock","paper","scissor"];
    var sel =ch[Math.floor(Math.random()*ch.length)];
    return sel;
}
function winner(ps,cs){
    if(ps===cs){
        return("It is a tie!");
    }
    else if((ps=="rock"&& cs=="scissor")||(ps=="scissor" &&cs=="paper")||(ps=="paper"&&cs=="rock")){
        pscore++;
        document.getElementById("user-score").innerText=pscore;
        return("You won : "+ps+" beats "+cs);
    }
    else{
        cscore++;
        document.getElementById("Computer-score").innerText=cscore;
        return("You lose : "+cs+" beats "+ps);
    }
}