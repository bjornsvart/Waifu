var cardsTemp = [
  "rysunek1.jpg",
  "rysunek2.jpg",
  "rysunek3.jpg",
  "rysunek3.jpg",
  "rysunek4.jpg",
  "rysunek5.jpg",
  "rysunek2.jpg",
  "rysunek6.jpg",
  "rysunek1.jpg",
  "rysunek5.jpg",
  "rysunek6.jpg",
  "rysunek4.jpg"
];
var cards = [];
var song = new Audio("neptune.mp3");

window.onload = start;



var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

c0.addEventListener("click", function() {
  revealCard(0);
});
c1.addEventListener("click", function() {
  revealCard(1);
});
c2.addEventListener("click", function() {
  revealCard(2);
});
c3.addEventListener("click", function() {
  revealCard(3);
});
c4.addEventListener("click", function() {
  revealCard(4);
});
c5.addEventListener("click", function() {
  revealCard(5);
});
c6.addEventListener("click", function() {
  revealCard(6);
});
c7.addEventListener("click", function() {
  revealCard(7);
});
c8.addEventListener("click", function() {
  revealCard(8);
});
c9.addEventListener("click", function() {
  revealCard(9);
});
c10.addEventListener("click", function() {
  revealCard(10);
});
c11.addEventListener("click", function() {
  revealCard(11);
});

var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 100;
var lock=false;
var pairsLeft=6;

function revealCard(nr) {
 
  var opacityValue = $("#c" + nr).css("opacity");
  if (opacityValue != 0 && lock==false && visibleNumber!=nr) {
      lock=true;
    var obraz = `url(img/${cards[nr]})`;
    $("#c" + nr).css("background-image", obraz);
    $("#c" + nr).removeClass("card");
    $("#c" + nr).addClass("cardActive");

    if (oneVisible) {
      turnCounter++;
      $(".score").html("Turn counter: " + turnCounter);
      oneVisible = false;
      if (cards[nr] == cards[visibleNumber]) {
        setTimeout(function() {
          hideCards(nr, visibleNumber);
        }, 1000);
    
      } else {
        setTimeout(function() {
          resetCards(nr, visibleNumber);
        }, 1000);
        
      }
    } else {
      oneVisible = true;
      visibleNumber = nr;
      lock=false;
      
    }
  }
 
}

function hideCards(nrOne, nrTwo) {
  $("#c" + nrOne).css("opacity", 0);
  $("#c" + nrTwo).css("opacity", 0);
  lock=false;
  pairsLeft--;
  if(pairsLeft==0){
    song.play();
      $('.board').html('<h1><br>Sugoi! <br><br> You win Onichan! <br>Done in '+ turnCounter + ' turns!')
  }
}


function resetCards(nrOne, nrTwo) {
  $("#c" + nrOne).css("background-image", "url(img/heart.jpg)");
  $("#c" + nrTwo).css("background-image", "url(img/heart.jpg)");
  $("#c" + nrOne).removeClass("cardActive");
  $("#c" + nrOne).addClass("card");
  $("#c" + nrTwo).removeClass("cardActive");
  $("#c" + nrTwo).addClass("card");
  lock=false;
}

function start(){

    for (i=0;i<12;i++){
        var rand = Math.floor(Math.random() * cardsTemp.length);
        cards.push(cardsTemp[rand]);
        cardsTemp.splice(rand,1);
    }
}


