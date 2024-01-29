let cursor=document .querySelector('.cursor');
let smCursor=document .querySelector(".smCursor");

function customMouseCursor (event){
    let leftValue=event.pageX;
    let topValue=event.pageY;


    cursor.style.top=`${topValue}px`;
    cursor.style.left=`${leftValue}px`;

    smCursor.style.top=`${topValue}px`;
    smCursor.style.left=`${leftValue}px`;
    
}
window .addEventListener("mousemove",customMouseCursor);

let darkModeBtn = document.querySelector('.darkmodeBtn');
let body = document.querySelector('body')
 let heading = document.querySelector('.wrapper h2')

 const darkMode = () => {
    body.classList.toggle('darkmode')

    if(body.classList.contains('darkmode')) {
        heading.innerHTML = 'Dark Mode'; 
    } else{
        heading.innerHTML = 'Light Mode'; 

    }

 }


darkModeBtn.addEventListener("click", darkMode);