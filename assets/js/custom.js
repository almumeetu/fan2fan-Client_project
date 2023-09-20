var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


function getValue(){
    let txt = document.getElementById("txt").value;
    let divName = document.querySelector('.hidden-div')
    
    console.log( txt )

    if( txt.toLowerCase() === "PSY" || txt.toLowerCase() === "psy" || txt.toLowerCase() === "ABC" || txt.toLowerCase() === "abc" ){
      divName.style.display = 'block';
    }else{
        divName.style.display = 'none';
    }
}

let divName = document.querySelector('.hidden-div')
function myFunction() {
    divName.style.display = 'none'
}