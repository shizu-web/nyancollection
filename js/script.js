$(function(){
    var count = $("#slide li").length;

    var current = 1;

    var next = 2;

    var interval = 3000;

    var duration = 1000;

    var timer;

    $("#slide li:not(:first-child)").hide();

    timer = setInterval(slideTimer, interval);

    function slideTimer(){

      $("#slide li:nth-child(" + current + ")").fadeOut(duration);

      $("#slide li:nth-child(" + next + ")").fadeIn(duration);

      current = next;

      next = ++next;

      if(next > count){
        next = 1;
      }

      $("#button li a").removeClass("target");

      $("#button li:nth-child(" + current + ") a").addClass("target");
    }

    $("#button li a").click(function(){
      next = $(this).html();

      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      slideTimer();

      return false;
      /* メイン画像スクロールここまで --------*/
    });
  });

    $(document).ready(function(){
        $('#hamburger').click(function(){
            $(this).toggleClass('active');
            $('#navMenu').toggleClass('active');
        });
    });



/* お客様の声　スマホでスライダー表示 --------------------*/
  $(document).ready(function() {
    // スライダーを初期化する関数
    function initializeSlider() {
        if ($(window).width() < 768) {
            if (!$('.voice-slider').hasClass('slick-initialized')) {
                $('.voice-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false, // 矢印を非表示
                    autoplay: true,
                    autoplaySpeed: 3000,
                });
            }
        } else {
            if ($('.voice-slider').hasClass('slick-initialized')) {
                $('.voice-slider').slick('unslick'); // スライダーを無効化
            }
        }
    }

    // ページロード時とリサイズ時にスライダーをチェック
    initializeSlider();
    $(window).resize(function() {
        initializeSlider();
    });
});

/* 質問開閉ボックス --------------------------*/
$(function(){
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });
});

