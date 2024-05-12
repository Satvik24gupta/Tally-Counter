window.onbeforeunload = function()
{
  var r = confirm("Are you sure you want to reload the page.");
  if(r)
  {
    window.location.reload();
  }
  else
  {

  }
};
var num=1;
function increase(){
    var val= parseInt(document.getElementById("value").innerHTML);
    document.getElementById("value").innerHTML=val+1;
}

function decrease(){
    var val= parseInt(document.getElementById("value").innerHTML);
    document.getElementById("value").innerHTML=val-1;
}


function restart(){
    if (confirm("Do you want to reset?")){
        var val=parseInt(document.getElementById("value").innerHTML);
        document.getElementById("value").innerHTML=0;
    }
}

document.addEventListener('keypress',function (e){
    if(e.key=='+' || e.key==' '){
        increase();
        
    }
    else if(e.key=='-'){
        decrease();
    }
})





/*
function add() {
    document.getElementById("extra").innerHTML +=
        "<h3>This is the text which has been inserted by JS</h3>";
        `<div class="container"><div class="Value-container"><div class="input"><input type="text" placeholder="UnNamed"></div><div class="Value" id="value">0</div><div class="buttons"><button onclick="increase()">+</button><button onclick="decrease()">-</button><button onclick="restart()"><i class="fa-solid fa-rotate-left fa-2xs"></i></button></div></div></div>`;
}
*/
// var num=1;

/*
function add(){
    num+=1;
    document.getElementById("extra").innerHTML+=
    "<div class='container'>"+
    "<div class='Value-container'>"+
        "<div class='input'><input type='text' placeholder='UnNamed'></div>"+
        "<div class='Value' id='`{num}`'>0</div>"+
        "<div class='buttons'>"+
            "<button onclick='increase()'>+</button>"+
            "<button onclick='decrease()'>-</button>"+
            "<button onclick='restart()'><i class='fa-solid fa-rotate-left fa-2xs'></i></button>"+
        "</div>"+
    "</div>"+
"</div>"
}
*/

// var test=num;