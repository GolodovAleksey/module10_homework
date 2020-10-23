let task7 = (arr) => {
	if(!Array.isArray(arr)){
		console.log("Это не массив");
		return;
	}
	let oddCount = 0;
	let evenCount = 0;
	let zeroCount = 0;
	
	arr.forEach((i,value)=>{
		if( typeof(value) != "number" || !isFinite(value)) continue;
		if(value == 0){
			zeroCount += 1;
		}
		else if( value % 2 == 0 ){
			evenCount +=1;
		}
		else{
			oddCount += 1;
		}
	});
	
	console.log(`Массив содержит ${zeroCount} нулевых элементов`);
	console.log(`Массив содержит ${evenCount} четных элементов`);
	console.log(`Массив содержит ${oddCount} нечетных элементов`);
}