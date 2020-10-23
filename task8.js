let task8 = () => {
	let myMap = new Map([
		["apple", "green"],
		["strawberry", "red"],
		["blueberry",    "blue"],
		[10 , "value via number 10"],
		["10", "value via string '10'"],
		["array", [1,2,3]],
		["object", {"name" : "testObject"}]]);
		
		
		
		myMap.forEach((key,value) => {
			console.log(`Ключ — ${key}, значение — ${value}`);
		})
}