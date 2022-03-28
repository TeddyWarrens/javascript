const IG_MIN_AGE=13;
let Susan={
    age:12
}
if(Susan.age>=IG_MIN_AGE){
console.log('You are of good age.')
}
let oldiesage =45
if (oldiesage>=45 && oldiesage<=60){
    console.log('You should leave instagram coz you are old enough.')
}
/* syntax of else if statement
if(condition){
    code goes 
}
else if(condition){
    code goes here
}
else if(condition){
    code goes here
}
else{
    code goes here
}
== Assignment operators
*/
// switch statements
switch(Susan.age){
    case Susan.age>=IG_MIN_AGE:
        console.log('Congrats you can join instagram')
        break;
    case Susan.age<=IG_MIN_AGE:
        console.log('No you can join instagram')
        break;
        case Susan.age==IG_MIN_AGE:
            console.log('You have of the right age to join istagram')
            break;
            default:
                console.log('Go read your books')
                break;
}
//Ternary operators
//(condition)? true:false;
//Example
let agegroup =(Susan.age>=18)? "Adult" :"Child";
console.log(agegroup)