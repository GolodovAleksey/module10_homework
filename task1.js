let task1 = () => {
    let input = +prompt("Input a number");
    if( typeof(input) == "number" && isFinite(input)){
        console.log( input %2 ? "Нетное" : "Четное" )
    } else{
        console.log("Упс, кажется, вы ошиблись")
    }
}
