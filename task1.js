

var string = process.argv[2];


function toDeleteLetters (str,arrRus) {
	var arrRus = ["р","к","н"];
	var arr = str.split('');

	var newString = arr.filter( function(item,i,arr){



			if ( item.toLowerCase() == arrRus[0] ) { 
				return false; 
			} else if( item.toLowerCase() == arrRus[1] ) { 
				return false; 
			} else if ( item.toLowerCase() == arrRus[2] ) { 
				return false; 
			} else {
				return true;

			} 
			
			});


	process.stdout.write(newString.join("").toString());
};

toDeleteLetters (string);
