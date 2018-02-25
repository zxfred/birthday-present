function playAudio () {
    let audio = document.getElementById('hold-your-hand');
    audio.play();
}

function pauseAudio () {
    let audio = document.getElementById('hold-your-hand')
    audio.pause();
}

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒"; 
    $("#clock").html(result);
}

var textAnimate = function () {
    var together = new Date();
    together.setFullYear(2015, 05, -6); //时间年月日 此处修改的话是倒计时算，04,-23代表4月7日，如果是5月8日则05，-22
    together.setHours(20); //小时	
    together.setMinutes(20); //分钟
    together.setSeconds(00);
    
    timeElapse(together);
};

window.setInterval("textAnimate()", 1000); //设置定时器
