$(function(){var t=9,i=!1,o=$(window).width();$(window).resize(function(){o=$(window).width()}),735>o&&(i=!0),$(".first-click").click(function(){$("footer").animate({bottom:0},300,function(){$(".first-click").removeClass("first-click")})}),$(".fa-times").click(function(){var t=$(this).parents(".tabs")[0],i=$(t).attr("fa");$("#"+i).removeClass("active");var o=.25*$(window).width();$(t).hasClass("about-tab")?o=.37*$(window).width():$(t).hasClass("portfolio-tab")&&(o=.49*$(window).width()),$(t).animate({left:o,width:50,height:100,bottom:30,opacity:0},500,"easeInOutCubic",function(){$(t).css("z-index",1),$(t).attr("status","closed")})}),$(".fa-select-tab").click(function(){var i=$(this).attr("id"),o=$("[fa='"+i+"']"),a=.25*$(window).width();$(o).hasClass("about-tab")?a=.37*$(window).width():$(o).hasClass("portfolio-tab")&&(a=.49*$(window).width());var e=$(o).attr("status");"closed"!=e&&$(o).hasClass("current")?"open"==e&&($(o).attr("status","closed"),$(o).animate({left:a,width:50,height:100,bottom:30,opacity:0},500,"easeInOutCubic",function(){$(o).css("z-index",1),t++})):($(o).css("z-index",t),t++,$(o).attr("status","open"),$(".tabs").removeClass("current"),$(o).addClass("current"),$(this).addClass("active"),$(o).animate({bottom:0,height:"100%",width:"100%",left:0,opacity:1},500,"easeInOutCubic"))}),$(".proj-select").on("click",function(t){if(!i){t.preventDefault(),t.stopPropagation();var o=$(this).attr("href"),a=$(".proj-prev")[0].contentDocument;a.open(),a.close(),$(".flex-frame").toggle(),$.get(o,function(t){a.open(),a.write(t),a.close()})}}),$(".flex-frame").on("click",function(){$(".flex-frame").toggle()});var a=$(window).height(),e=$(window).width();$("#maximize-btn").on("click",function(t){t.stopPropagation(),$(".proj-prev").width(e),$(".proj-prev").height(a)}),$("#minimize-btn").on("click",function(t){t.stopPropagation(),$(".proj-prev").width(800),$(".proj-prev").height(500)})});