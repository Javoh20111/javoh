//map
/* 
const numbers=[1,2,3,4];
const duobled =numbers.map(num=>num+3);
console.log(duobled)

 */

//filter
/* 
const numbers=[12,2,32,20,15];
const BigNumbers=numbers.filter(num=>num>16);
console.log(BigNumbers)
 */

/* reduce */

/* const numbers=[1,2,3,4];
const sum=numbers.reduce((total, num)=>total+num,0);
console.log(sum) */

/* Practise tasks */

/* const ShoppingList=["Milk", "Eggs", "Bread", "Rice", "Oil"];
for (let i=0;i<ShoppingList.length;i++){
console.log(`You can buy ${ShoppingList[i]}`)} */

/* • Filter even numbers from a list */

/* const numbers=[1,2,3,4,5,6]
const EvenNumber=numbers.filter(num=>num%2===0);
console.log(EvenNumber) */


/*  • Reduce an array of prices to total cost */

/* const numbers=[4,3,1,8,7,1,2];
const total=numbers.reduce((sum, num)=>sum+num,0);
console.log(total) */


/* Lets try to use function to do this */

/* function ShoppingList(list){
    for(item of list){
        console.log(`You can buy ${item}`)
    }
}

const list=["Milk", "Eggs", "Rice", "Cheese"];
ShoppingList(list) */

/* Filter even numbers from a list by using function */
/* 
function EvenNumber(nums){
    return nums.filter(nums=>nums%2===0)
}

const nums=[1,2,3,4,5,6];
console.log(EvenNumber(nums))
 */

/* • Reduce an array of prices to total cost by function */

/* function TotalCost(num){
    return num.reduce((total, num)=>total+num,0)
}
const num=[2,3,4,5,6]
console.log(TotalCost(num)) */

/*  
 • Build a student grade system:
 • Store student names and grades
 • Filter those who passed
 • Calculate class average
 */

/*  function StudentGrade(names, grades){
    for(let item of names ){
        console.log(`${item} got ${StudentGrade(grades[i])} and accepted!`)
    }
for(let i=0;i>grades.length;i++)
    return grades.filter(grades=>grades>70)

 }





 const names=["Amina", "Liam", "Sakura", "Omar", "Zara"];
 const grades=[88, 76, 92, 65, 81];

 console.log(StudentGrade(names, grades)) */

/*  function StudentGrade(names, grades) {
    for(let i=0;i<names.length;i++){
        console.log(`${names[i]} got ${grades[i]} and ${grades[i]>70?"accepted":"rejected"}!`)
    }
    const GradeStudent=grades.filter(grades=>grades>70)
    return GradeStudent
  }

const names = ["Amina", "Liam", "Sakura", "Omar", "Zara"];
const grades = [88, 76, 92, 65, 81];


console.log(StudentGrade(names, grades)) */





/* 🔹 Object Literal
const car={
    model: "A4-Ultra",
    brend: "Chevrolet",
    year: 2013,
} */



/* 🔹 Nested Objects
const car={
    model: "A4-Ultra",
    brend: "Chevrolet",
    year: 2013,
    owner:{
        name:"Javohir",
        age: 19,
    }
} 
*/

/* document.getElementById("message").innerHTML="Helllo world"  */


/* 
const button=document.querySelector("#btn")
button.addEventListener("click", function(){
    button.innerHTML="You clicked the button"
})
*/

const profile={
    name: "Javohir",
    age: 19,
    hobby: "coding"
};

const name=document.getElementById("name").innerHTML=profile.name
const age=document.getElementById("age").innerHTML=profile.age
const hobby=document.getElementById("hobby").innerHTML=profile.hobby

const button=document.getElementById("toggleTheme")
const card=document.getElementById("profileCard")


let isDark=false;

button.addEventListener("click", function(){
    isDark=!isDark
    card.classList.toggle("dark");
    document.body.style.backgroundColor = isDark ? "#121212" : "#f5f5f5";
})
