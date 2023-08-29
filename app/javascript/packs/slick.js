/*global $*/

// $(function() {
//   $('.slider').slick();
// });

// $(function () {
//   $(".slider").slick({
//     variableWidth: true,
//     adaptiveHeight: true,
//     centerMode: true,
//     focusOnSelect: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });
// });

$(function() {
  $(".slider").slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
    dots: true // ドットインジケーターの表示
　});
});

// $(function() {
//   console.log("OK");
// });