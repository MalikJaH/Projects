let gameName='Guess The Word';
document.title=gameName;
document.querySelector('h1').innerHTML=gameName;
document.querySelector('footer').innerHTML=`${gameName} invested by @MALIK ALHURAINE`;
let container =document.querySelector('.inputs')
let check=document.querySelector('button')
let hint =document.querySelectorAll('button')[1];

    
let numOfLetters=5;
let numOfTries=5;
let currentTry=1;
let guessWord='';
let guesses=['cabal','kabab','malik','table','japan','egypt']
guessWord=guesses[Math.floor(Math.random()*guesses.length)]
guessWord=guessWord.toUpperCase();
console.log(guessWord);


for (let i = 1; i <= numOfTries; i++) {
       
    let div =document.createElement('div');
    if(i!=1)
        div.classList.add('disabeld')
    
    div.innerHTML=(`<span>Try ${i}</span>`);
    for (let j = 1; j <= numOfLetters; j++) {
        let input=document.createElement('input')
        input.type='text';
        input.maxLength=1
        input.classList.add(`try-${i}-letter-${j}`)
        div.appendChild(input)                
    }
        container.append(div)
        container.children[0].children[1].focus();
        document.querySelectorAll('.disabeld input').forEach(inp=>{
            inp.disabled='true'
        })

}
let inputs=document.querySelectorAll('input')
inputs.forEach((inp,index) => {

    inp.addEventListener('input',function(){
        this.value=this.value.toUpperCase();
        if(inputs[index+1])
            inputs[index+1].focus();
    })
    inp.addEventListener('keydown',function(event){
        if(event.key=='ArrowRight'){
            if(inputs[index+1])
                inputs[index+1].focus();      
            
             }
             
            
             
             if(event.key=='ArrowLeft'){
                if(inputs[index-1])
                    inputs[index-1].focus();
       
                 }
                 
                                
    })
   
});


function Guess(){
    let sucsess=true;
    for (let i = 1; i <= numOfLetters; i++) {
        let input=document.querySelector(`.try-${currentTry}-letter-${i}`)
        if(input!=''){
        if(guessWord.includes(input.value)){
            if(guessWord[i-1]==input.value){
                input.style.backgroundColor='gold'
                input.id='winLetter'
                
            }
            else{
                input.style.backgroundColor='green'
                sucsess=false;
            }
        }
        else{
            input.style.cssText=`background-color:#000;border-bottom: 4px solid rgb(167, 8, 167);color:#fff;`
            sucsess=false;


        }
        
    }
    }
    if(sucsess){
        document.querySelector('h1').innerHTML='Winner Winner'
        for (let i = 0; i < 5; i++) {
            container.children[i].classList.remove('disabeld')            
        }
        setInterval(() => {
            inputs.forEach(element => {
                element.style.color='green'
            });
        }, 100);
       let int= setInterval(() => {
            inputs.forEach(element => {
                element.style.color='#000'
            });
        }, 200);
        
        setInterval(() => {
            document.querySelector('h1').innerHTML+='.'

        }, 500);
        setTimeout(() => {
            location.reload();
        }, 1800);
        
        winOrLose('gold');

        document.querySelector('.controls').classList.add('disabeld');
        document.querySelector('.message').innerHTML=`The Word Is <span class='win'>${guessWord}</span>`
        
    }
    else{
    for (let i = 1; i <= container.children.length; i++) {
        container.children[currentTry].children[i].removeAttribute('disabled')              

    }
    container.children[currentTry-1].classList.add('disabeld');
    if(!sucsess)
    container.children[currentTry].classList.remove('disabeld');
   
    document.querySelectorAll('.disabeld input').forEach(inp=>{
        inp.disabled='true'
    })
    if(currentTry<5)
    currentTry++;

    }
    if(currentTry==5&&!sucsess){
        document.querySelector('.message').innerHTML=`The Word Is <span class='lose'>${guessWord}</span>`
        winOrLose('black');
        document.querySelector('.game').classList.add('disabeld');
        document.querySelector('h1').innerHTML='Sorry You Lose'
        setInterval(() => {
            document.querySelector('h1').innerHTML+='.'

        }, 500);
        setTimeout(() => {
            location.reload();
        }, 1600);
    }

    
}
check.addEventListener('click',()=>{
    document.querySelector('.message').innerHTML=''
    Guess();
})
let numOfHints=2;
hint.innerHTML=`<span>${numOfHints}</span>Hint`
hint.addEventListener('click',function(){
//     if(numOfHints>0){
//         let num=''
//         let letter=''
//         let i=0;

//         do{       
//         num=Math.floor(Math.random()*guessWord.length)
//         let input= container.children[currentTry-1].children[num+1];
//         console.log(input);

//         console.log(input.classList[1]!='winLetter');
        
//         if(input.classList[1]!='winLetter'&&input.value===''){
//             console.log(input);

//             letter=guessWord[num]
//         input.classList.add('winLetter')
//         input.value=letter;
//         input.disabled='true';
//         console.log(input);


//         input.style.backgroundColor='gold'         
//              numOfHints--;
//              hint.innerHTML=`<span>${numOfHints}</span>Hint`

//          break;
//         }
//         let empty=false;
        
//         for (let i = 0; i < 5; i++) {
//             if(container.children[currentTry-1].children[i+1].value=='')
//                 empty=true    
//         }
//         if(empty==false){
//             document.querySelector('.message').innerHTML='There Is No Empty Place';
//             break ; 
//         }    
        
        
//     }while(true);
    
//         if(numOfHints==0)  {
//             document.querySelector('.hint span').style.color='red'
//             hint.style.background='#000'
//  this.classList.add('disabeld')
//     this.disabled='true'
//         }      
//     }

    if(numOfHints>0){
        let inputsAV=Array.from(document.querySelectorAll('input:not([disabled])')).filter((input)=>input.value==='')
       let  trueOne= inputsAV.filter((inp)=>inp.id!=='winLetter')  
     num=Math.floor(Math.random()*trueOne.length)
     console.log(inputsAV);
     console.log(trueOne);
     
     if(trueOne.length>0){
        let input=Array.from(inputs).find((inp)=>inp==trueOne[num]);
        let letterNum=Array.from(container.children[currentTry-1].children).indexOf(input)
        let letter =guessWord[letterNum-1];
        input.id='winLetter'

        

        input.value=letter;
        input.disabled='true';
        
        input.style.backgroundColor='gold'         

     }
        
    }   
    

})
function winOrLose(color){
    let time=50;

    for (let i = 1; i <= 5; i++) {
        setTimeout(()=>
            container.children[0].children[i].style.backgroundColor=color,time)
            setTimeout(() => {
    container.children[i-1].children[5].style.backgroundColor=color,time
 
            }, 250+time);
            setTimeout(() => {
                container.children[4].children[6-i].style.backgroundColor=color,time
             
                        }, 500+time);
                        setTimeout(() => {
                            container.children[5-i].children[1].style.backgroundColor=color,time
                         
                                    }, 750+time);
                                    setTimeout(() => {
                                        container.children[1].children[i].style.backgroundColor=color,time
                                     
                                                }, 900+time);
                                                setTimeout(() => {
                                                    container.children[i-1].children[4].style.backgroundColor=color,time
                                                 
                                                            }, 1100+time);
                                                            setTimeout(() => {
                                                                container.children[3].children[6-i].style.backgroundColor=color,time
                                                             
                                                                        }, 1200+time);
                                                                        setTimeout(() => {
                                                                            container.children[2].children[i].style.backgroundColor=color,time
                                                                         
                                                                                    }, 1350+time);
        time+=50;

    }
    for (let i = 0;  i< 5; i++) {

    }
}
