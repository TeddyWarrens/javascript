function checkTemperature(){
let teddyTemperature={
    normal:34,
}
if(teddyTemperature.normal>=20 && teddyTemperature.normal<=36){
    console.log('your temperature is normal')
}
else if(teddyTemperature.normal>=37 && teddyTemperature.normal<=40){
    console.log('your temperature is above normal')
}
else if(teddyTemperature.normal>40){
    console.log('No no your temperature is erratic, visit a hospital')
}
else{
    console.log('Not in range')
}
}
checkTemperature()