

let scores:number[]=[10,20,30,40,50,60];
scores.forEach(score=>{
    console.log(score);
});

let sum:number=scores.reduce((acc,currentValue)=>{
    return acc+currentValue;
})
let average = sum/5;
console.log(sum);
console.log("Average : "+average);

let players:string[]=["Sachin","Sehwag","Dhoni"];

for(let player of players){
    console.log(player);
}