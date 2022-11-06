// Smooth Scroll for navigation
$('nav ul li a').click(function(){
    const thisSection=$(this).attr('href');
    $('html, body').stop().animate({
        scrollTop:$(thisSection).offset().top-120
    },600,"easeInCirc")
}),

// Smooth Scroll for logo
$('header .logo').click(function(){
    $('html, body').stop().animate({
        scrollTop:$("body").offset().top
    },600,"easeInCirc")
}),

// Flexslider
$(window).load(function(){
    $('.flexslider').flexslider(
        {
            animation:'slider',
            slideshowSpeed:2000,
            pauseOnHover: true,
            before:function(){$('.cta').css("bottom","-223%");},
            start:function(){$('.cta').animate({bottom:"0"},600,"easeInCirc");},
            after:function(){$('.cta').animate({bottom:"0"},600,"easeInCirc");}
        }
    );
});


// Tabs
$("#tabs > ul > li > a").click( function(){
    $("#tabs > ul > li > a").css( { "background" : "#C8D6AF" } );
    $(this).css( { "background" : "#F7FFEA" } );
    const thisTab = $(this).attr("href");
    $("#tabs > div:visible").fadeOut(200, function(){ 
    $(thisTab).fadeIn(200); 
    } );
} ),
    

// Content Rotator
(function(){
    let counter=1;
    !function contentRotator(){
    $(`#rotator blockquote:nth-child(${counter})`).fadeIn(2000,function(){
        if($(this).is("#rotator blockquote:last-child")){
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter=1;
                    contentRotator();
                })
            },7000)
        }
        else{
            setTimeout(function(){
                $(`#rotator blockquote:nth-child(${counter})`).fadeOut(2000,function(){
                    counter++;
                    contentRotator();
                })
            },7000)
        }
    })}()
})(),

// Features Rotator 
(function(){
    let counter=1;
    e=0;
    const o=$("#features ul:first-of-type li").length;
    let n=$("#features ul:first-of-type").clone();
    $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"}),
    $("#features").append(n),
    
    function i(){
        setTimeout(function(){
            if(counter<=o){
                e-=30;
                $("#features").animate({top:e+"px"},500,function(){
                    $("#features ul:first-of-type li:nth-child("+(counter+1)+")").css({color:"#FF5964",fontWeight:"600"});
                    counter++;
                    i();
                })
            }
            else{
                $("#features ul:first-of-type").remove();
                $("#features ul:first-of-type").clone();
                $("#features").css("top","0");
                $("#features").append(n);
                e=0;
                counter=1;
                $("#features ul:first-of-type li:nth-child(1)").css({color:"#FF5964",fontWeight:"600"});
                i();
            }
        },1500) 
    }()
})();
