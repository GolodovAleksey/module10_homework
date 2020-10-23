let task6 = (arr)=>{
	if(!Array.isArray(arr)){
		console.log("Это не массив");
		return;
	}
	
	if(arr.length == 1){
		console.log("true");
		return;
	}
	
	for(let i=1; i<arr.length; ++i){
			if(arr[0] !== arr[i]) {
				console.log("false");
				return;
			}
	}
	console.log("true");
}