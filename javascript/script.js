/*console.log("hello world");


const projectname=document.querySelector('h1');


console.log(projectname);


projectname.innerHTML='hey iam changed';


const btnchange=document.querySelector('.btn-n');
console.log(btnchange);
btnchange.onclick = ()=>{
    console.log("iam clicked");


    alert('iam clicked from onclick');
};*/
const clikes = document.querySelector('.like-count');
const clike = document.querySelector('.like-btn');
const cunlike = document.querySelector('.unlike-btn');
let likes=0;
clike.addEventListener('click',()=>{
    console.log('like button clicked');
    likes++;
    clikes.innerHTML=`${likes} Likes`;
    
})
cunlike.addEventListener('click',()=>{
    console.log('like button clicked');
    if(likes>0){
    likes--;
    }
    clikes.innerHTML=`${likes} Likes`;
    
})