var cardsTemp = [
  "rysunek1.jpg",
  "rysunek2.jpg",
  "rysunek3.jpg",
  "rysunek3.jpg",
  "rysunek4.jpg",
  "rysunek5.jpg",
  "rysunek2.jpg",
  "rysunek6.jpg",
  "rysunek4.jpg",
  "rysunek1.jpg",
  "rysunek5.jpg",
  "rysunek6.jpg",
  "rysunek7.jpg",
  "rysunek8.jpg",
  "rysunek9.jpg",
  "rysunek10.jpg",
  "rysunek11.jpg",
  "rysunek12.jpg",
  "rysunek12.jpg",
  "rysunek11.jpg",
  "rysunek10.jpg",
  "rysunek9.jpg",
  "rysunek8.jpg",
  "rysunek7.jpg",
  
];
var cards = [];
var song = new Audio("neptune.mp3");

window.onload = start;




var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 100;
var lock=false;
var pairsLeft=12;

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

    for (i=0;i<24;i++){
        var rand = Math.floor(Math.random() * cardsTemp.length);
        cards.push(cardsTemp[rand]);
        cardsTemp.splice(rand,1);
    }

     for (let i=0;i<24;i++){
     document.getElementById("c"+i)
     .addEventListener("click", function(){ revealCard(i); });
      
}
}

