$(function(){var d=9,c=!1,e=$(window).width();$(window).resize(function(){e=$(window).width()});735>e&&(c=!0);$(".first-click").click(function(a){$("footer").animate({bottom:0},300,function(){$(".first-click").removeClass("first-click")})});$(".fa-times").click(function(a){var b=$(this).parents(".tabs")[0];a=$(b).attr("fa");$("#"+a).removeClass("active");a=.25*$(window).width();$(b).hasClass("about-tab")?a=.37*$(window).width():$(b).hasClass("portfolio-tab")&&(a=.49*$(window).width());$(b).animate({left:a,
width:50,height:100,bottom:30,opacity:0},500,"easeInOutCubic",function(){$(b).css("z-index",1);$(b).attr("status","closed")})});$(".fa-select-tab").click(function(a){a=$(this).attr("id");var b=$("[fa='"+a+"']");a=.25*$(window).width();$(b).hasClass("about-tab")?a=.37*$(window).width():$(b).hasClass("portfolio-tab")&&(a=.49*$(window).width());var c=$(b).attr("status");"closed"!=c&&$(b).hasClass("current")?"open"==c&&($(b).attr("status","closed"),$(b).animate({left:a,width:50,height:100,bottom:30,opacity:0},
500,"easeInOutCubic",function(){$(b).css("z-index",1);d++})):($(b).css("z-index",d),d++,$(b).attr("status","open"),$(".tabs").removeClass("current"),$(b).addClass("current"),$(this).addClass("active"),$(b).animate({bottom:0,height:"100%",width:"100%",left:0,opacity:1},500,"easeInOutCubic"))});$(".flex-frame").hide();$(".proj-select").on("click",function(a){c||(a.preventDefault(),a.stopPropagation(),a=$(this).attr("href"),$(".proj-prev").attr("src",a),$(".flex-frame").toggle())});$(".flex-frame").on("click",
function(a){$(".flex-frame").toggle()});var f=$(window).height(),g=$(window).width();$("#maximize-btn").on("click",function(a){a.stopPropagation();$(".proj-prev").width(g);$(".proj-prev").height(f)});$("#minimize-btn").on("click",function(a){a.stopPropagation();$(".proj-prev").width(800);$(".proj-prev").height(500)})});