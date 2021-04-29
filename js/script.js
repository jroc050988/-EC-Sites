$(document).ready(function () {
    /*メニュー戻る*/
$(".menu_logo").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop:0 }, 500);
});
$(".header_logo").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop:0 }, 500);
});
$(".footer_logo").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop:0 }, 500);
});
$(".top").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop:0 }, 500);
});

    /*メニューの切り替え*/
 $(".menu_button").click(function (e) { 
     e.preventDefault();
     //alert($("html,body").scrollTop() + " px");
     $(".menu_sp").toggleClass("open")
 });
 $(".off_munu_button").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").toggleClass("open")
});

　　　/*メニュー*/
var menu_tokusyoku = $('#menu_tokusyoku').offset().top;
var menu_greeting = $('#menu_greeting').offset().top;
var menu_saerch = $('#menu_saerch').offset().top;
var menu_contact = $('#menu_contact').offset().top;
$(".menu_tokusyoku").click(function (e) { 
    e.preventDefault();   
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop: menu_tokusyoku -80 }, 500);
});
$(".menu_greeting").click(function (e) { 
    e.preventDefault();  
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop: menu_greeting -80 }, 500);
});
$(".menu_saerch").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop: menu_saerch -80 }, 500);
});
$(".menu_contact").click(function (e) { 
    e.preventDefault();
    $(".menu_sp").removeClass("open");
    $('html,body').animate({ scrollTop: menu_contact -80 }, 500);
});

/*標題動畫*/
$(window).scroll(function () { 

    /*標題動畫*/
    if($("html,body").scrollTop() > (menu_tokusyoku -700)){
        $("#menu_tokusyoku").attr('id', 'show');
        $(".tokusyoku_letter p").delay( 1000 ).queue(function(){
            $(this).addClass("letter_ani").dequeue();
        });
        $(".tokusyoku_01").delay( 1200 ).queue(function(){
            $(this).addClass("tokusyoku_01_ani").dequeue();
        });
    };
    if($("html,body").scrollTop() > (menu_greeting -700)){
        $("#menu_greeting").attr('id', 'show');
    };
    if($("html,body").scrollTop() > (menu_saerch -700)){
        $("#menu_saerch").attr('id', 'show');
    };
    if($("html,body").scrollTop() > (menu_contact -700)){
        $("#menu_contact").attr('id', 'show');
    };

   /**/ 
   if($("html,body").scrollTop() > (menu_greeting +150)){
    $(".kotoba").addClass("kotoba_ani");
    $(".gift").addClass("gift_ani");
    $(".num").delay(1000).show(0);
    $(".big").delay( 1000 ).queue(function(){
        $(this).addClass("big_ani").dequeue();
    });

   }
});




/*step img*/
$(".step_context").click(function (e) {   
    $(this).parent().find('.step_img').slideToggle();
    $(this).parent().siblings().find('.step_img').slideUp();
    $(this).parent().find(".plus02").toggle();
    $(this).parent().siblings().find('.plus02').show();
});
$(".step1").click(function (e) { 
    $(".img01").toggle().siblings().hide();
    $(".note").show();
});
$(".step2").click(function (e) { 
    $(".img02").toggle().siblings().hide();
    $(".note").show();
});
$(".step3").click(function (e) { 
    $(".img03").toggle().siblings().hide();
    $(".note").show();
});
$(".step4").click(function (e) { 
    $(".img04").toggle().siblings().hide();
    $(".note").show();
});
$(".step5").click(function (e) { 
    $(".img05").toggle().siblings().hide();
    $(".note").show();
});
$(".step6").click(function (e) { 
    $(".img06").toggle().siblings().hide();
    $(".note").show();
});
/*イベント*/
$(".ibento").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideToggle();    
});
/*　例文 */ 
$(".list_Xmas").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".Xmas").show().siblings().hide();
    $(".ibento").find("p").html("クリスマス");
    $(".list_ibentopc .list_Xmas").attr('id', 'color').siblings().attr('id', '');
});
$(".list_birthday").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".birthday").show().siblings().hide();
    $(".ibento").find("p").html("誕生日");
    $(".list_ibentopc .list_birthday").attr('id', 'color').siblings().attr('id', '');
});
$(".list_Valentine").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".Valentine").show().siblings().hide();
    $(".ibento").find("p").html("バレンタイン");
    $(".list_ibentopc .list_Valentine").attr('id', 'color').siblings().attr('id', '');
});
$(".list_mother").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".mother").show().siblings().hide();
    $(".ibento").find("p").html("母の日");
    $(".list_ibentopc .list_mother").attr('id', 'color').siblings().attr('id', '');
});
$(".list_father").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".father").show().siblings().hide();
    $(".ibento").find("p").html("父の日");
    $(".list_ibentopc .list_father").attr('id', 'color').siblings().attr('id', '');
});
$(".list_marry").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".marry").show().siblings().hide();
    $(".ibento").find("p").html("結婚祝い");
    $(".list_ibentopc .list_marry").attr('id', 'color').siblings().attr('id', '');
});
$(".list_home").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".birthday").show().siblings().hide();
    $(".ibento").find("p").html("新築・引越し祝い");
    $(".list_ibentopc .list_home").attr('id', 'color').siblings().attr('id', '');
});
$(".list_rei").click(function (e) { 
    e.preventDefault();
    $(".list_ibento").slideUp();
    $(".rei").show().siblings().hide();
    $(".ibento").find("p").html("御礼");
    $(".list_ibentopc .list_rei").attr('id', 'color').siblings().attr('id', '');
});

/* somurie*/
$(".btn_somurie02").click(function (e) { 
    e.preventDefault();
    $(".somurie02").show().siblings().hide();
});
$(".btn_somurie03").click(function (e) { 
    e.preventDefault();
    $(".somurie03").show().siblings().hide();
});
$(".btn_somurie04").click(function (e) { 
    e.preventDefault();
    $(".somurie04").show().siblings().hide();
});
$(".btn_somurie05").click(function (e) { 
    e.preventDefault();
    $(".somurie05").show().siblings().hide();
});
$(".btn_somurie06").click(function (e) { 
    e.preventDefault();
    $(".somurie06").show().siblings().hide();
});
});
