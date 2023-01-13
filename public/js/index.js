$(Document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else
            $('.navbar').removeClass("sticky");
    });
    $(window).on("scroll load", function(e) {
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else
            $('.navbar').removeClass("sticky");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})