function yardGreening(input) {
    let area = input[0];
    let fullPrice = area * 7.61;
    let discountPrice = fullPrice * 0.18;
    let finalPrice = fullPrice - discountPrice;
    console.log("The final price is: " + finalPrice + " lv.");
    console.log("The discount is: " + discountPrice + " lv.");
}
yardGreening(["550"]);






//"The final price is: {крайна цена на услугата} lv."

//· "The discount is: {отстъпка} lv."
