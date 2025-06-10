let title =document.getElementById('title');
let sqrs =document.querySelectorAll('.sqrs div');
let x=0;
let win='';
sqrs.forEach(sqr => {
    sqr.addEventListener('click',()=>{
        if(x==0&& sqr.innerHTML==''&&win!='win'){
            sqr.innerHTML='X'
            title.innerHTML='<span>O</span> turn'
            x=1;
            winner()
        }
        else if(x==1&& sqr.innerHTML==''&&win!='win'){
            sqr.innerHTML='O'
            title.innerHTML='<span>X</span> turn'

            x=0;
            winner()
        }
    })
});
  

function winner(){
    if(sqrs[0].innerHTML==sqrs[1].innerHTML&sqrs[1].innerHTML==sqrs[2].innerHTML&sqrs[1].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';
          
        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[0].style.background='#111'
        sqrs[1].style.background='#111'
        sqrs[2].style.background='#111'

    }
    else if(sqrs[0].innerHTML==sqrs[3].innerHTML&sqrs[3].innerHTML==sqrs[6].innerHTML&sqrs[3].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[0].style.background='#111'
        sqrs[3].style.background='#111'
        sqrs[6].style.background='#111'

    }
    else if(sqrs[0].innerHTML==sqrs[4].innerHTML&sqrs[4].innerHTML==sqrs[8].innerHTML&sqrs[8].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[0].style.background='#111'
        sqrs[4].style.background='#111'
        sqrs[8].style.background='#111'

    }
    else if(sqrs[6].innerHTML==sqrs[7].innerHTML&sqrs[7].innerHTML==sqrs[8].innerHTML&sqrs[7].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[8].style.background='#111'
        sqrs[7].style.background='#111'
        sqrs[6].style.background='#111'

    }
   else  if(sqrs[2].innerHTML==sqrs[5].innerHTML&sqrs[5].innerHTML==sqrs[8].innerHTML&sqrs[5].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[8].style.background='#111'
        sqrs[5].style.background='#111'
        sqrs[2].style.background='#111'

    }
    else if(sqrs[1].innerHTML==sqrs[4].innerHTML&sqrs[4].innerHTML==sqrs[7].innerHTML&sqrs[4].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[1].style.background='#111'
        sqrs[4].style.background='#111'
        sqrs[7].style.background='#111'


    }
    else if(sqrs[3].innerHTML==sqrs[4].innerHTML&sqrs[4].innerHTML==sqrs[5].innerHTML&sqrs[5].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[3].style.background='#111'
        sqrs[4].style.background='#111'
        sqrs[5].style.background='#111'

    }
    else if(sqrs[2].innerHTML==sqrs[4].innerHTML&sqrs[4].innerHTML==sqrs[6].innerHTML&sqrs[4].innerHTML!=''){
        if(x==0){
            title.innerHTML='<span>O</span> Winner'
            win='win';

        }
        else{
            title.innerHTML='<span>X</span> Winner'
            win='win';

        }
        sqrs[4].style.background='#111'
        sqrs[6].style.background='#111'
        sqrs[2].style.background='#111'

    }
    if(win=='win'){
        title.style.backgroundColor='#fff'
            title.style.color='#243'
        setInterval(() => {
            title.innerHTML+='.'

        }, 600);
    
        setInterval(() => {
            location.reload();
        }, 2400);
    }
}
