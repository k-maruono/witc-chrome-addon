$("#calc_time").on("click", () => {
  var ret = calc_time();
  alert('残業時間はXX時間です。');

});

$("#set_time").on("click", () => {
  var cookie = readCookie();
  var ret = "";
  if (cookie)
  {
  	ret = prompt("業務終了時刻を入力してください。(HHMM)", cookie);
  }
  else
  {
  	ret = prompt("業務終了時刻を入力してください。(HHMM)");
  }

  if (ret)
  {
  	writeCookie(ret);
  }
  else
  {
  	alert("無効な値です。");
  }
});

function calc_time()
{
};

function readCookie() {
      var tmp = document.cookie;
      var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)calc_time_witc\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      console.log(document.cookie);
      return cookieValue;
};

function writeCookie(cookie) {

      document.cookie = "calc_time_witc=" + cookie;
      console.log(document.cookie);

};