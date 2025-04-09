function ageSorter(input) {

    let age = Number(input[0]);
    if (age < 0) {
        console.log("error");
    } else if (age <=12.9 ) {
        console.log("child");
    } else if (age <= 19.9) {
        console.log("teenager");
    } else if (age <= 64.9) {
        console.log("Adult");
    } else if (age <= 149.9) {
        console.log("elder");
    
    } else {
        console.log("error");
    }

}
ageSorter(["13"]);