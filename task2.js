let task2 = (X) => {
    let inputType = typeof(X);
    if(inputType == "number"){
        console.log("X - число" );
    }
	else if(inputType == "boolean"){
		console.log("Х - логический тип");
	}
	else if(inputType == "string"){
		console.log("Х - строка");
	}
	else{
		console.log("Неопределенный тип")
	}
}
