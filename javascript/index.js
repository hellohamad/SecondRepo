// YOU CAN USE THIS METHOD AS WELL BUT THE BELOW METHOD IS EASY AND SHORT ONE IN THAT
// METHOD YOU DONE ALL THE STYLNG IN THE CSS AND JUST CONNECT IT WITH THE CLASS NAME
// const title=document.getElementById('title')
// title.addEventListener('click',function(){
// title.innerHTML="RAFI HAMAD"
// title.style.color="yellow"
// title.style.backgroundColor="pink"
// title.style.textAlign="center"
// title.style.cursor="pointer"
// })

// const bio=document.getElementById('bio')
// bio.addEventListener('mouseover',function(){
// bio.style.cursor="pointer"
// bio.style.color="red"
// bio.style.backgroundColor="yellow"

// })

// bio.addEventListener('mouseout',function(){
// bio.style.color="pink"
// bio.style.backgroundColor="grey"
// })

// AN INTRODUCTION

// const title = document.getElementById('title')
// title.addEventListener('mouseover', function () {
//     title.classList.add('name')
// })

// title.addEventListener('mouseout', function () {
//     title.classList.add('nameout')
// })

// var is a datatype which can be redeclare and reinitilize
// var a;
// a=10;
// a=11;
// console.log(a);//cout like thing
// output will be 11 as it can reintilize and redeclare
// const is a data type which cant be redeclare and reinitilize
// const b=10;
// const b=13;
// console.log(b);
// output will be 10 as it cant reintilize and redeclare

// HOW TO DECLARE AND CALL FUNCTION
// function add(){
//     var a=2;
//     var b=2;
//     var c=a+b;
//     console.log(c);
// }
// add();

//HOW CAN WE USE RETURN KEYWORD(IS KEYWORD SY AGY KUCH BHI LIKHY GA TU DISPLAY NI HO GA)
// function add(){
//     return 2+3;
// }
// console.log(add());
//  HOW YOU CAN USE FOR LOOP IN JAVASCRIPT
// for(let i=0;i<10;i++){
//     console.log("HAMAD RAFI");
// }

// CREATING A VAR PARA AND CREATING A TAG IN JS WITHOUT USING HTML AND CSS
//PROVIDING FUNCTIONALITY TO A BUTTON
// function on(){
//     for(let i=0;i<=10;i++){
//     const para=document.createElement('h1')
//     para.innerHTML=("MY JAVASCRIPT CLASS")
//     para.style.textAlign=("center")
//     document.body.appendChild(para)  
//     }    
// }
// const students=["HASSAN","HAMAD RAFI","ALI HASSAN"]
// // to display all data
// console.log(students);
// // to display particular data
// console.log(students[0]);
// // to check array length we use a function
// console.log(students.length);
// //extracting and display data from array
// for(let i=0;i<students.length;i++){
// const title=document.createElement("h1")
// title.innerHTML=students[i]
// title.style.textAlign=("center")
// title.style.fontWeight=("300")
// document.body.appendChild(title)
        
//     }
function display()
{
    const months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
    for(let i=0;i<months.length;i++ ){
      const monthname=document.createElement('h1')
        monthname.innerHTML="Month Name is: " + months[i]
        document.body.appendChild(monthname)
        monthname.classList.add("monthname")
    }
}








