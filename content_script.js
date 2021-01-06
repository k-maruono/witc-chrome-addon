chrome.runtime.onMessage.addListener(function(msg) {
  $("body").css("background-color", msg.color);
});

window.onload = function() {
  var ret = document.forms;
  console.log(ret);
};

chrome.runtime.sendMessage("めっせぇじ", function (response){
	console.log("受け取ったデータ：", response)
})