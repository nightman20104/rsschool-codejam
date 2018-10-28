function sumOfOther (array) {
	let newArray = [];
	for(let i=0;i<array.length;i++) {
	  let sum = array.reduce(function(x,y) {return x+y;});
	  let result = sum - array[i];
	  newArray.push(result);
	}
	return newArray;
}