let hole =document.getElementById('hole')
let jon =document.getElementById('jon')
let btn =document.getElementById('zoom')
btn.onclick=()=>{
    scroll({
        top:484,
        behavior:"smooth"
    })
}
onscroll=()=>{

    hole.style.scale=`${(scrollY/100)+1}`

    if(scrollY>=484){
        jon.classList.add('absolute')
    jon.classList.remove('fixed')

    }
    else{
        jon.style.scale=`${(scrollY/900)+0.8}`

        jon.classList.remove('absolute')
        jon.classList.add('fixed')
        var x=10

    }

}
let name ='maliks'
let mosa =`Iam ${(name=='malik'?'malik':'mosa')}`
console.log( mosa);
