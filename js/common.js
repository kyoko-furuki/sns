// メニュー　クラス追加
$(function () {
 $(".menubtn").on("click", function () {
  $(this).toggleClass('is-active');

  if ($(this).hasClass('is-active')) {
   $('.globalnav').addClass('is-active');
  } else {
   $('.globalnav').removeClass('is-active');
  }
 });
});

// 小説目次
//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin() {
 var width = $(window).width();
 if (width <= 768) {//横幅が768px以下の場合
  $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
  $(".has-child>a").on('click', function () {//has-childクラスがついたaタグをクリックしたら
   var parentElem = $(this).parent();// aタグから見た親要素の<li>を取得し
   $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
   $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
   return false;//リンクの無効化
  });
 } else {//横幅が768px以上の場合
  $(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
  $(".has-child").removeClass('active');//activeクラスを削除
  $('.has-child').children('ul').css("display", "");//スライドトグルで動作したdisplayも無効化にする
 }
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function () {
 mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
 mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});


// 小説ページ送りボタン　クラス追加
$(function () {
 $(".pagebtn").on("click", function () {
  $(this).toggleClass('is-active');

  if ($(this).hasClass('is-active')) {
   $('.pageTurn').addClass('is-active');
  } else {
   $('.pageTurn').removeClass('is-active');
  }
 });
});

// 縦横返還ボタン　クラス追加
$(function () {
 $(".yoko").on("click", function () {
  $('.story').addClass('horizontal');

  if ($('.story').hasClass('horizontal')) {
   $('.story').removeClass('vertical');
  }
 });
});

$(function () {
 $(".tate").on("click", function () {
  $('.story').addClass('vertical');

  if ($('.story').hasClass('vertical')) {
   $('.story').removeClass('horizontal');
  }
 });
});


// スムーススクロール
$(function () {
 var width = $(window).width();
 $('a[href*="#"]').click(function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
 });
});