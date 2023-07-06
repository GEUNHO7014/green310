$(document).ready(function(){


// 스크롤을 할때마다 article이 뒤에서 부터 앞으로 이동한다. 


$(window).scroll(function(){

let sc = $(this).scrollTop()



// if(sc>=0) && sc<5000-2500) {


//     $('section article').removeClass('on')
//     $('section article').eq(0).addClass('on')
//     }



// if(sc>=5000-2500)) && sc<10000-2500) {


// $('section article').removeClass('on')
// $('section article').eq(1).addClass('on')
// }



// if(sc>=10000-2500)) && sc<15000-2500)) {


//     $('section article').removeClass('on')
//     $('section article').eq(2).addClass('on')
//     }



//     if(sc>=15000-2500)) && sc<20000-2500)) {


//         $('section article').removeClass('on')
//         $('section article').eq(3).addClass('on')
//         }



        
// if(sc>=20000-2500)) && sc<25000-2500)) {


//     $('section article').removeClass('on')
//     $('section article').eq(4).addClass('on')
//     }








// 0부터 시작에서 4까지 반복해서 진행해라. 

for(var a = 0; a<5;a++){

    $('section article').eq(a).css({'transform':'translateZ('+(-(5000*a)+sc)+'px'})


    if(sc>=(5000*a)-2500 && sc<(5000*(a+1))-2500){

        $('section article').removeClass('on')
        $('section article').eq(a).addClass('on');


        $('nav li').eq(a).removeClass('on')
        $('nav li').eq(a).addClass('on')


        }


}


});


// nav li를 클릭할때마다 scroll 이 움직여라.


$('nav li').click(function(){

let i = $(this).index()

$('html,body').stop().animate({scrollTop:5000*i},1400)




})






})