var t1 = process.argv[2];
var t2 = process.argv[3];

var time = +t1 + +t2;
var str;

var hour = Math.floor(time/(60 * 60));
var minutes =  Math.floor( time%(60 * 60)/60 );
var sec = time-(hour*60*60) - (minutes*60);

if (hour  < 1) {
	str = "";
}
if (hour == 1) {
	str = hour + " час";
}
if (hour>1 && hour < 5) {
	str = hour + " часа";
}
if (hour>=5) {
	str = hour + " часов";
}

if (minutes  < 1) {
	str = str + "";
}
if (minutes == 1) {
	str = str + " "+minutes + " минута";
}
if (minutes>1 && minutes < 5) {
	str = str + " "+minutes + " минуты";
}
if (minutes>=5) {
	str = str + " "+minutes + " минут";
}


if (sec  == 0) {
	str = str + "";
} else
if (sec%10 == 1) {
	str = str + " "+sec + " секунда";
} else
if (sec>1 && sec < 5) {
	str = str + " "+sec + " секунды";
} else
if (sec>=5) {
	str = str + " "+sec + " секунд";
}



process.stdout.write(str);