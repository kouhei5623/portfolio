$(function(){
  $('scroll a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });
});

$(function(){

  var sld_wrap = $('#slider'),
	sld_navi = '#sld_nav',
	sld = '.sld',
	sld_max = $(sld).length,
	sld_pre = 'sld',
	sld_time = 1000,
	sld_wait = 2000,
	sld_timer, goaway_left, from_left, sld_direction;
$.fn.slide_move = function(options){
    var settings = $.extend( {
      'direction': 'next'
    }, options);
	return this.each(function(i, elem) {
		clearTimeout(sld_timer);
		var sldnum = parseInt(sld_wrap.data('sldnum'));
		if(settings.direction === 'prev'){
			goaway_left = '100%';
			from_left = '-100%';
		} else {
			goaway_left = '-100%';
			from_left = '100%';
		}
		$(sld + '.current').stop().animate({'left':goaway_left},sld_time);
		$(sld).not('#' + sld_pre + sldnum).removeClass('current');
		$('#' + sld_pre + sldnum).css({'left':from_left}).addClass('current').stop().animate({'left':0}, sld_time, function(){
			sld_timer = setTimeout(function(){
				sld_wrap.slide_next();
			}, sld_wait);
		});
		$('.sld_navi_circle').not('#sld_navi' + sldnum).removeClass('current');
		$('#sld_navi' + sldnum).addClass('current');
	});
};
$.fn.slide_next = function(){
	return this.each(function(i, elem) {
		var sldnum = parseInt(sld_wrap.data('sldnum'));
		sldnum++;
		if(sldnum > sld_max){ sldnum = 1; }
		sld_wrap.data('sldnum', sldnum).slide_move();
	});
};
$.fn.slide_prev = function(){
	return this.each(function(i, elem) {
		var sldnum = parseInt(sld_wrap.data('sldnum'));
		sldnum--;
		if(sldnum < 1){ sldnum = sld_max; }
		sld_wrap.data('sldnum', sldnum).slide_move({'direction': 'prev'});
	});
};
sld_wrap.on('click', '.sld_navi_circle', function(){
	var sldnum = parseInt(sld_wrap.data('sldnum'));
	var sldnavi_num = parseInt($(this).data('sldnum'));
	if(sldnum > sldnavi_num){
		sld_direction = 'prev';
	} else {
		sld_direction = 'next';
	}
	sld_wrap.data('sldnum', sldnavi_num).slide_move({'direction': sld_direction});
});
$('#sld_next').click(function(){
	sld_wrap.slide_next();
});
$('#sld_prev').click(function(){
	sld_wrap.slide_prev();
});
$(window).load(function() {
	var sld_count = 1;
	var sld_navi_class;
	$(sld).each(function(){
		if(sld_count === 1){ sld_navi_class = 'sld_navi_circle current'; } else { sld_navi_class = 'sld_navi_circle' }
		$(sld_navi).append('<a id="sld_navi' + sld_count + '" class="' + sld_navi_class +'" data-sldnum="' + sld_count + '">&nbsp;</a>');
		sld_count++;
	});
	var sld_timer = setTimeout(function(){
		sld_wrap.data('sldnum', 1).slide_move();
	}, 0);
});


$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('nav').removeClass('open');
  }
});

  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > 500) {
      // ヘッダーバーをslideDownして表示
      $(".header_menu").slideDown();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".header_menu").slideUp();
    }

    if ($(this).scrollTop() > 1200) {
      // ヘッダーバーをslideDownして表示
      $("head").append('<style>.gray::before{height:100%!important;}</style>');
      $("head").append('<style>.gray::after{height:100%!important;}</style>');
      $("head").append('<style>.gray::before{width:100%!important;}</style>');
      $("head").append('<style>.gray::after{width:100%!important;}</style>');
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $("head").append('<style>.gray::before{height:0%!important;}</style>');
      $("head").append('<style>.gray::after{height:0%!important;}</style>');
      $("head").append('<style>.gray::before{width:0%!important;}</style>');
      $("head").append('<style>.gray::after{width:0%!important;;}</style>');
    }

    if ($(this).scrollTop() > 400) {
      // ヘッダーバーをslideDownして表示
      $(".about_title").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".about_title").fadeOut();
    }

    if ($(this).scrollTop() > 450) {
      // ヘッダーバーをslideDownして表示
      $(".about_intro").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".about_intro").fadeOut();
    }

    if ($(this).scrollTop() > 550) {
      // ヘッダーバーをslideDownして表示
      $(".skill").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".skill").fadeOut();
    }

    if ($(this).scrollTop() > 1900) {
      // ヘッダーバーをslideDownして表示
      $(".work_title").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".work_title").fadeOut();
    }

    if ($(this).scrollTop() > 2100) {
      // ヘッダーバーをslideDownして表示
      $("#slider").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $("#slider").fadeOut();
    }

    if ($(this).scrollTop() > 2500) {
      // ヘッダーバーをslideDownして表示
      $(".read_more").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".read_more").fadeOut();
    }

    if ($(this).scrollTop() > 3400) {
      // ヘッダーバーをslideDownして表示
      $(".note").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".note").fadeOut();
    }

    if ($(this).scrollTop() > 3500) {
      // ヘッダーバーをslideDownして表示
      $(".otamesi").fadeIn();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".otamesi").fadeOut();
    }

  });
});

$(function() {
  var h = $(window).height();

  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(4000).fadeOut(800);
  $('#loader').delay(4000).fadeOut(300);
  $('#wrap').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);

  function stopload(){
    $('#wrap').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }
});
