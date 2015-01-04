$(function(){
  var z = 9;
  var mobile = false;
  var width = $(window).width();

  $(window).resize(function () {
    width = $(window).width();
  });

  if (width < 735){
    mobile = true;
  }

  $('.first-click').click(function(event) {
    $('footer').animate({
      bottom: 0
    }, 300, function(){
      $('.first-click').removeClass('first-click');
    });
  });

  $('.fa-times').click(function(event) {
    var parent_tab = $(this).parents('.tabs')[0];

    var icon = $(parent_tab).attr('fa');
    $('#' + icon).removeClass('active');
    
    var left = $(window).width() * 0.25;

    if ($(parent_tab).hasClass('about-tab')){
      left = $(window).width() * 0.37;
    }

    else if ($(parent_tab).hasClass('portfolio-tab')){
      left = $(window).width() * 0.49;
    }
    
    $(parent_tab).animate({
      left: left, 
      width: 50,
      height: 100,
      bottom: 30,
      opacity: 0
    }, 500, 'easeInOutCubic', function(){
      $(parent_tab).css('z-index', 1);
      $(parent_tab).attr('status', 'closed')
    });
  });

  $('.fa-select-tab').click(function(event) {
    var id = $(this).attr('id');
    var which_tab = $("[fa='" + id + "']");
    var left = $(window).width() * 0.25;

    if ($(which_tab).hasClass('about-tab')){
      left = $(window).width() * 0.37;
    }
    else if ($(which_tab).hasClass('portfolio-tab')){
      left = $(window).width() * 0.49;
    }

    var status = $(which_tab).attr('status');

    if (status == "closed" || !($(which_tab).hasClass('current'))) {
      $(which_tab).css('z-index', z);
      z++;
      $(which_tab).attr('status', 'open');
      $('.tabs').removeClass('current');
      $(which_tab).addClass('current');

      $(this).addClass('active');

      $(which_tab).animate({
        bottom: 0,
        height: 100 + '%',
        width: 100 + '%',
        left: 0,
        opacity: 1
      }, 500, 'easeInOutCubic');
    }
    else if (status == "open"){
      $(which_tab).attr('status', 'closed');
      $(which_tab).animate({
        left: left, 
        width: 50,
        height: 100,
        bottom: 30,
        opacity: 0
      }, 500, 'easeInOutCubic', function(){
        $(which_tab).css('z-index', 1);
        z++;
      });
    }
  });

  $(".flex-frame").hide();

  $(".proj-select").on('click', function(event) {
    if (!mobile){
    event.preventDefault();
    event.stopPropagation();
    var url = $(this).attr("href");
    $(".proj-prev").attr("src", url);
    $(".flex-frame").toggle();
    }
  });

  $(".flex-frame").on('click', function(event) {
    $(".flex-frame").toggle();
  });

  var fullH = $(window).height();
  var fullW = $(window).width();

  $("#maximize-btn").on('click', function(event) {
    event.stopPropagation();
    $(".proj-prev").width(fullW);
    $(".proj-prev").height(fullH);
  });

  $("#minimize-btn").on('click', function(event) {
    event.stopPropagation();
    $(".proj-prev").width(800);
    $(".proj-prev").height(500);
  });

  });