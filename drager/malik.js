   
   let boxes=document.getElementsByClassName('box');
   let input =document.getElementById('addinput');
   
   let name='';
   let drag=null;
  
        function create(){
             if(input.value!='')
    boxes[0].innerHTML+=`<p class="item" draggable="true">${input.value}</p>`
            input.value=''
            drager();
    }
    function drager(){
        let items=document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('dragstart',(e)=>{
                    items[i].style.opacity='0.5'
                    drag=this
            })
            items[i].addEventListener('dragend',()=>{

                items[i].style.opacity='1.0'
                drag=null;

            })
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].addEventListener('dragover',(e)=>{
                    e.preventDefault()
                    boxes[i].style.background='green'
                    boxes[i].style.color='#fff'

                })
                boxes[i].addEventListener('dragleave',()=>{
                    boxes[i].style.background='#fff'
                    boxes[i].style.color='#000'

                })
                boxes[i].addEventListener('drop',()=>{
                    boxes[i].append(drag)
                       boxes[i].style.background='#fff'
                    boxes[i].style.color='#000'
                })
                
            }
        }
    }