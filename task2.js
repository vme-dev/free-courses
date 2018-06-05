var a = process.argv[2];
var b = process.argv[3];

a = a.split('');
b = b.split('');

a1 = a.slice();


var minShift;

if ( a.length != b.length ) { process.stdout.write("-1"); } else {

for (var i = 0; i < b.length; i++) {
	if ( comareArr(a,b) ) {

		
		process.stdout.write(i.toString());
		break;

	}
	if ( comareArr(a1,b) ) {

		
		process.stdout.write(i.toString());
		break;

	}

	a.push(a[0].toString());
	a.shift();

	a1.unshift(a1[a1.length-1].toString());
	a1.pop();

	if (i == b.length-1 ) {
		process.stdout.write("-1");
	}
}}

function comareArr(ar1,ar2) {
	for (var i = 0; i < ar1.length; i++) {
		if ( ar1[i] != ar2[i]) {
			return false;
		}

	}
	return true;
}