/* 
First coding challenge

// MASS
var markMass = 78;
var markHeight = 6;

// HEIGHT
var johnMass = 60;
var johnHeight = 8;

// BMI
markBMI = markMass / ( markHeight * markHeight );
johnBMI = johnMass / ( johnHeight * johnHeight );

console.log(markBMI , johnBMI);

var bmiCompare = markBMI > johnBMI 


console.log('Is Mark`s BMI greater than John`s? ' + bmiCompare);
*/



//THE IF STATEMENT

/* var name = 'Peace';
var age = 22;
if (age < 12){
    console.log(name + ' Is Under-Age');
} else if (age >= 12 && age <= 19 ) {
    console.log(name + ' Is a Teen-ager');
} else if (age > 19 && age <= 30 ){
    console.log(name + ' Is a Young man');
} else {
    console.log(name + ' Is a full grown man');
}
*/



/* // TENARY OPERATOR
var name = 'Peace';
var age = 19;

var ans = age < 18 ? (name + ' Is not of full age') : (name +' Is of full age');
console.log(ans); */

/* // SWITHCH STATEMENT
var name = 'Peace';
var job = 'Motorist';

switch (job){
    case 'Teacher': 
    console.log(name + ' Teaches JavaScript..');
    break;

    case 'Driver':
    case 'Motorist':
    console.log(name + ' Has his own car');
    break;

    default:
    console.log('Maybe ' + name + ' is a Web-Developer');
} */



/* // USING SWITCH STATEMENT IN PLACE OF IF ELSE
var age = 201;
var name = 'Peace';

switch (true) {
    case age < 12: 
    console.log('Kid');
    break;

    case age >= 12 && age <= 19: 
    console.log('Teen');
    break;

    case age > 19 && age <= 30:
    console.log('Young Man');
    break;

    default:
    console.log('Matured man');
}*/


