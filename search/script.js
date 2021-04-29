$(document).ready(function () {
    $(".ibento").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideToggle();
    });
    $(".list_Xmas").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("クリスマス");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_birthday").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("誕生日");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_Valentine").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("バレンタイン");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_mother").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("母の日");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_father").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("父の日");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_marry").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("結婚祝い");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_home").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("新築・引越し祝い");
        $(".Q3").fadeIn().siblings().fadeOut();
    });
    $(".list_rei").click(function (e) { 
        e.preventDefault();
        $(".list_ibento").slideUp();
        $(".ibento").find("p").html("御礼");
        $(".Q3").fadeIn().siblings().fadeOut();
    });

    $(".Q3ans div").click(function (e) { 
        e.preventDefault();
        $(".Q3").fadeOut();
        $(".Q4").fadeIn();
        //alert("debug");
    });
    $(".Q4ans div").click(function (e) { 
        e.preventDefault();
        $(".Q4").fadeOut();
        $(".Q1").fadeIn();
        //alert("debug");
    });
    $(".Q1ans div").click(function (e) { 
        e.preventDefault();
        $(".Q1").fadeOut();
        $(".Q2").fadeIn();
        //alert("debug");
    });
    $(".Q2ans div").click(function (e) { 
        e.preventDefault();
        $(".Q2").fadeOut();
        $(".Q5").fadeIn();
        //alert("debug");
    });


});
