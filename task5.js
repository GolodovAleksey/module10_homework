let task5 = (arr) =>{
	if(!Array.isArray(arr)){
		console.log("Это не массив");
		return;
	}
	console.log("Длина массива:", arr.length);
	arr.forEach((index,value)=>{
		console.log(`Элемент ${index}: ${value}`);
	});
}