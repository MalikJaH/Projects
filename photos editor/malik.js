let saturate =document.getElementById('r1');
let contrast =document.getElementById('r2');
let brightness =document.getElementById('r3');
let sepia =document.getElementById('r4');
let grayscale =document.getElementById('r5');
let blurr =document.getElementById('r6');
let hue =document.getElementById('r7');
let reset =document.getElementById('reset');
let img =document.images[0];
    let range =document.querySelectorAll('.settings input');
    let upload =document.getElementById('upload');
    let download=document.getElementById('download')
    
    let canvas=document.getElementById('canvas');
    let context =canvas.getContext('2d')
    onload=()=>{
        img.style.display='none'
        reset.style.display='none'
        download.style.display='none'
        resetValues();
    }
    upload.onchange=()=>{
        resetValues();
        img.style.display='block'
        reset.style.display='block'
        download.style.display='block'
        img.style.filter
        let file =new FileReader();
        file.readAsDataURL(upload.files[0]);
        file.onload=()=>{
            img.src=file.result;
        }
        img.onload=()=>{
            canvas.width=img.width;
            canvas.height=img.height;

            context.drawImage(img,0,0,canvas.width,canvas.height)
            img.style.display='none'
        }
    }
reset.onclick=resetValues
function resetValues(){
    saturate.value=100;
    contrast.value=100;
    brightness.value=100;
    sepia.value=0;
    grayscale.value=0;
    blurr.value=0;
    hue.value=0
    edit()
}
range.forEach(r =>{
    r.addEventListener('input', edit)
})


function edit(){
    context.filter=`
    saturate(${saturate.value}%)
     contrast(${contrast.value}%)
   brightness(${brightness.value}%)
    sepia(${sepia.value}%)
     grayscale(${grayscale.value})
     blur(${blurr.value}px)
     hue-rotate(${hue.value}deg)     
`
context.drawImage(img,0,0,canvas.width,canvas.height)
}
download.onclick=()=>{
    download.href=canvas.toDataURL('image/AVIF');
}
