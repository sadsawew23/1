function isIPhoneX() {
  var u = navigator.userAgent;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isIOS) {
    if (screen.height == 812 && screen.width == 375) {
      return true;
    } else {
      return false;
    }
  }
}
(function () {
  //判断是否是iphoneX
  let status = isIPhoneX();
  if (status) {
    let el = document.getElementById("app");
    el.className = "iphoneX";
  }
})();