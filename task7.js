let task7 = (arr) => {
	if(!Array.isArray(arr)){
		console.log("Это не массив");
		return;
	}
	let oddCount = 0;
	let evenCount = 0;
	let zeroCount = 0;
	
	arr.forEach(value => {
		if(typeof(value) !== "number" || !isFinite(value)) return;
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

task7([0, 1, 2, 3, 4, '35', 'fgsfd', null, false, true, NaN, undefined])

// В задании есть несколько ошибок: 
// 1. Директива continue работает только в классическиз циклах (while, for). В методе forEach использование continue приводит к ошибке. Как альтернативу, можно использовать return. В таком случае выполнение функции для текущего элемента остановится, и переданная функция будет вызвана заново для следующего элемента
// 2. В forEach вы используете 2 аргумента: value и i, но проблема в том, что они у вас перепутаны: первым идет значение, а вторым - индекс. Поэтому вы проверяли индексы массива, а не сами значения :)