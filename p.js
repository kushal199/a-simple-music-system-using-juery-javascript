var l= $(".music").length;




/*for(i=0;i<l;i++)
{
  document.querySelectorAll(".music")[i].addEventListener("click",function(){
    this.style.color= "white";
    var lol= this.innerHTML;

    makesound(lol);

    anim(lol);
      });
    }*/
    //for(i=0;i<l;i++)
    //{
    $(".music").click(function()
  {
    $(".music").css("color","white");
    var lol= this.innerHTML;
    $("h1").slideUp().slideDown().fadeToggle().fadeIn();

    makesound(lol);

    anim(lol);


 });
//}




  //  document.addEventListener("keypress",function(event){
     $(document).keypress(function(){


      makesound(event.key);
      anim(event.key);
      var o =event.key;
      $("h1").text(o);

    });









function makesound(key){

  switch(key){
    case "s":
    var p=new Audio("music/1_second_tone.mp3");

    p.play();


    break;

    case "r":
    var m=new Audio("music/censor_beep.mp3");
    m.play();
    break;

    case "g":
    var s=new Audio("music/flappybird_1s.mp3");

    s.play();

    break;

    case "m":
    var t=new Audio("music/keyu_kiss.mp3");

    t.play();

    break;


    case "p":
    var k=new Audio("music/message_pops.mp3");

    k.play();

    break;

    case "d":
    var l=new Audio("music/ship_short_blast.mp3");

    l.play();

    break;

    case "n":
    var q=new Audio("music/keyu_kiss.mp3");

    q.play();

    break;


    case "t":
    var w=new Audio("music/censor_beep.mp3");

    w.play();

    break;
  }
}

function anim(keyy){

  var s=document.querySelector("."+keyy);
  s.classList.add("pressed");

  setTimeout(function(){

    s.classList.remove("pressed");

  },600);

}
