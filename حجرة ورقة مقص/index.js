let peaper =document.getElementById('peaper');
let scissors =document.getElementById('scissors');
let rock =document.getElementById('rock');
let right=document.getElementById('right')
let left=document.getElementById('left')
let title =document.querySelector('p');
let options=document.querySelectorAll('.lowwer div i')
let classList=['fa-hand-back-fist','fa-hand'
    ,'fa-hand-scissors']
console.log(classList);


function winner(id){
    let x=0;
    let y=Math.floor(Math.random()*3);
    if(id=='rock')
        x=0
    if(id=='peaper')
        x=1
    if(id=='scissors')
        x=2

    
    console.log(left.classList[1]);
    

    right.classList.remove('fa-hand-back-fist')
    right.classList.add(classList[y])
    console.log(left.classList);
    
    if(x==y)
        title.innerHTML='Draw!!'
    else if(x==0&&y==1)
        title.innerHTML='I Win!!'
        else if(x==0&&y==2)
        title.innerHTML='You Win!!'
    else if(x==1&&y==0)
        title.innerHTML='You Win!!'
     else if(x==1&&y==2)
        title.innerHTML='I Win!!'
     else if(x==2&&y==0)
        title.innerHTML='I Win!!'
     else if(x==2&&y==1)
        title.innerHTML='You Win!!'
    
     if(x==2)
        left.style.transform='rotateZ(90deg) rotateX(180deg)'
     if(y==2)
        right.style.transform='rotateZ(270deg)'

}
