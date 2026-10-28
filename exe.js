
    function generateRandomNumber(min, max) {
  min = Number(min);
  max = Number(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let minLimit = 1; 
let maxLimit = 100;
let secretNumber = generateRandomNumber(minLimit, maxLimit);
console.log(secretNumber)
document.getElementById("button").addEventListener("click",(event)=>
    {
       let number_choice=Number(document.getElementById("number").value);
       console.log(number_choice)
       if(secretNumber==number_choice)
        alert("ניחשת נכון!!")
       else if(secretNumber< number_choice)
        alert("יותר נמוך")
       else
        alert("יותר גבוה")
        document.getElementById("number").value = ""
    });