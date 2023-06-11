jQuery(function ($) {

  $('.js-hamburger').on('click',function() {
    if ($(this).hasClass('open')) {
      $('.js-drawer').fadeOut();
      $(this).removeClass('open');

    } else {
      $('.js-drawer').fadeIn();
      $(this).addClass('open');
    }
  });


  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去

  })
  let swipeOption = {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {//ページネーション 
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {//オートプレイ
      delay: 5000,//切り替わるまでの時間
      disableOnInteraction: false,
      pagination: ".swiper-pagination"
    },
    speed: 2000
  };
  new Swiper(".swiper-container", swipeOption);

});

