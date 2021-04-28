//メイン画像スライダー
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
   // direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
//アニメーション

  new WOW().init();

  //ハンバーガーメニュー
  jQuery('.drawer-icon').on('click',function(e){
     e.preventDefault();

     jQuery('.drawer-icon').toggleClass('is-active');
     jQuery('.drawer-content').toggleClass('is-active');
     jQuery('.drawer-background').toggleClass('is-active');

     return false;

  });

  //スムーススクロール(DAY23)
  //#から始まるURLがクリックされた時
  jQuery('a[href^="#"]').on('click', function(){
  
  // .headerクラスがついた要素の高さを取得
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;//to-top は一番上へ

  //もしidが'#'(to-top)じゃない時
  if ( id != '#'){
// トップからの距離からヘッダー分の高さを引く
    position = jQuery(id).offset().top-header;
  }
// その分だけ移動すればヘッダーとかぶらない
  jQuery("html, body").animate({
    scrollTop: position
  },
  300);  
});

//to-topアイコンを最初非表示、スクロールしてから表示
jQuery(window).on ('scroll', function(){
  if(100 < jQuery(this).scrollTop()){
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

//ページ内リンク、クリックされている要素だけ赤線
jQuery('.header__nav ul li a').click(function() {
  jQuery('.header__nav ul li a').removeClass( 'is-active' );
  jQuery(this).addClass( 'is-active' );
  return false;
});

//Q&A アコーディオンセクション
jQuery('.qa-box_q').on('click',function(){
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box_icon').toggleClass('is-open');
})

//モーダルを閉じる
jQuery('.js-close-button').on('click',function(e){
  e.preventDefault();//aタグ本来の動きを無効化
  //console.log(jQuery(this).data('target'));  テスト

  var target= jQuery(this).data('target');
  jQuery(target).hide();
});

//モーダルを開く
jQuery('.js-open-button').on('click',function(e){
  e.preventDefault();
  var target= jQuery(this).data('target');
  jQuery(target).show();
});