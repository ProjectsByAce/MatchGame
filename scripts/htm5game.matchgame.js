/**
 * Created by ACE on 2015/10/28.
 */
var cards={};
cards.matchingGame={};
cards.matchingGame.cardHeight=120;
cards.matchingGame.cardWidth=80;
cards.matchingGame.deck=[
    "cardAK","cardAK","cardAQ","cardAQ","cardAJ","cardAJ","cardBK","cardBK","cardBQ","cardBQ","cardBJ","cardBJ"
];

function shuffle(){
    return Math.random()>0.5 ? -1 : 1
}

$(function(){
    cards.matchingGame.deck.sort(shuffle);
//    alert(cards.matchingGame.deck);
    var $card=$(".card");
    for(var i=0;i<11;i++){
        $card.clone().appendTo($("#cards"));
   }
    $(".card").each(function(index){
        $(this).css({
           "left":(cards.matchingGame.cardWidth+20)*(index%4)+"px",
           "top": (cards.matchingGame.cardHeight+20)*Math.floor(index/4)+"px"
       });

        function selectCard(){
//            alert($(this).data("pattern"));
//            var $fcard=$(".card-flipped");
            if($(".card-flipped").length>1){
                return;
            }
            $(this).addClass("card-flipped");
            var $fcards=$(".card-flipped");
            if($fcards.length==2){
//                checkPattern($fcards);
                setTimeout(function(){
                    checkPattern($fcards);
                },700);
            }
        }

        function checkPattern(cards){
            var pattern1=$(cards[0]).data("pattern");
            var pattern2=$(cards[1]).data("pattern");
            alert(pattern1);
            alert(pattern2);
            $(cards).removeClass("card-flipped");
            if(pattern1==pattern2){
//                $(cards).removeClass("card-flipped");
//            }else{
                $(cards).addClass("card-removed")
                    .bind("webkitTransitionEnd",function(){
                         $(this).remove();
                });
            }
        }
        var pattern=cards.matchingGame.deck.pop();
        $(this).data("pattern",pattern);
        $(this).find(".back").addClass(pattern);
        $(this).click(selectCard);
  });
});





