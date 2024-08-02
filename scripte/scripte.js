$('.openNav').click(function() {
    $('#leftMenu').animate({width : '230px'} , 50 )
})

$('.closebtn').click(function () {
    $('#leftMenu').animate({width : '0'} , 50 )
})



$('.leftMenu a').click(function () {
    var sctionId = $(this).attr('href');
    var hightOfSection = $(sctionId).offset().top;
    $('html, body').animate({scrollTop: hightOfSection}, 500)
})

$('#sliderDown .toggle').click(function () {
    !$('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})
window.onload = function() {

    countDown("10 augest 2024 9:56:00");
}

function countDown(count) {
    let data =  new Date(count);
    data = data.getTime()/1000 // to get time with second


    let now  = new Date();
    now = now.getTime()/1000;

    let defrentTIme = data - now



    let days = Math.floor(defrentTIme / (24 * 60 * 60));
    let hours = Math.floor((defrentTIme - (days * 24 * 60 * 60)) / 3600);
    let mins = Math.floor((defrentTIme - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
    let secs = Math.floor(defrentTIme - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
    setInterval(function() {  countDown(count); }, 1000);
}


let maxLenth = 100 ;
$('textarea').keyup(function() {
    let lenth = $(this).val().length;
    let amountLet = maxLenth-lenth

if (amountLet <=0){
    $('#chars').text(" your available character finished")

}else{
    $('#chars').text(amountLet);
}
})


