let moon =document.getElementById('moon');
let boat =document.getElementById('boat');
let stars=document.getElementById('stars');
let nouvil=document.getElementById('nouvil');
let a =document.getElementsByTagName('a');


    let i=32;
onscroll=()=>{
    moon.style.translate=`0px ${scrollY}px`;
    boat.style.translate=`${scrollY}px 0px`;
    stars.style.translate=`${scrollY}px ${-scrollY}px`;
    
    if(scrollY>200){
        document.body.style.background='linear-gradient(rgb(58, 101, 167),rgb(117, 31, 216))'
       for (let i = 0; i < a.length; i++) {

            a[i].classList.add('dark')
            a[i].classList.remove('light')

       }
       document.querySelector('h2').classList.add('dark')
       document.querySelector('h2').classList.remove('light')
    }
    else{
        document.body.style.background='linear-gradient(gold,rgb(117, 31, 216))'
        document.querySelector('h2').classList.remove('dark')
        document.querySelector('h2').classList.add('light')
        for (let i = 0; i < a.length; i++) {

            a[i].classList.remove('dark')
            a[i].classList.add('light')

       }
    
    }
    if(scrollY<60){
        nouvil.style.fontSize=`${scrollY+16}px`

    }
    
   
}

  