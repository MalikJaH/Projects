let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let count=document.getElementById('count')
let category=document.getElementById('category')

let btncreat=document.getElementById('creat')

onload=()=>{
    if(products.length>0){
        deleteAll.classList.remove('hide')
    deleteAll.innerHTML=`deleteAll(${products.length})`
    }
    else
    deleteAll.classList.add('hide')

    read(products);
};

                //  [[[[[GETTOTAL]]]]]
function getTotal (){
    if(price.value.length>0&&taxes.value.length>0&&ads.value.length>0){
        total.style.backgroundColor='green'
        total.innerHTML= (+price.value+ +taxes.value+ +ads.value)- +discount.value

    }
    else{
        total.style.backgroundColor='rgb(223, 40, 40)'
    }
}
            

    let products=[];


            if(localStorage.product!=null)
                products=JSON.parse(localStorage.product);
            
        
        
        let table =document.getElementsByClassName('table')[0];
        let tbody=document.getElementById('read');

        //       [[[[[[[CREATE]]]]]]]

function creat(){
    if(total.innerHTML==''||discount.value==''||category.value=='')
        return;
    let product ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        category:category.value,

    }
    let counter=1;

    if(count.value!='')
     counter=count.value;
    if(count.value>100)
        return;

    for(let i=0;i<counter;i++){
        products.push(product);
    }
    
    localStorage.product=JSON.stringify(products);
    clear();

  
}

    //             [[[[[READ]]]]]

function read(arr){
    tbody.innerHTML='';
    
    for(let i =0;i<arr.length;i++){
        tbody.innerHTML+=`
        <tr>
         <td>${i+1}</td>
       <td>${arr[i].title}</td>
      <td>${arr[i].price}</td>
         <td>${arr[i].taxes}</td>
                        <td>${arr[i].ads}</td>
                        <td>${arr[i].discount}</td>
                        <td>${arr[i].total}</td>
                        <td>${arr[i].category}</td>
                        <td><button onclick="updateData(${i})" class="update">Update</button></td>
                        <td><button onclick="deleteData(${i})" class="delete">Delete</button></td>
                    </tr>
        `
    }

}

//         [[[[[[CLEAR]]]]]]


            function clear(){
    title.value='';
    price.value='';
    taxes.value='';

    ads.value='';
    count.value='';
    discount.value='';
    category.value='';
    total.innerHTML='';

            }

                //[[[[BTN CREATE]]]]
btncreat.onclick=()=>{
    creat();
    read(products);
    if(products.length>0)
    deleteAll.classList.remove('hide')
    deleteAll.innerHTML=`deleteAll(${products.length})`


}
let btntitle=document.getElementById('btntitle')
let btncategory=document.getElementById('btncategory')
let search=document.getElementById('search')



let s=0;

btntitle.onclick=()=>{
        search.setAttribute('placeholder','search by title')
        s=1;

}
btncategory.onclick=()=>{
    search.setAttribute('placeholder','search by category')
    s=2
}
search.onkeyup=()=>{
    searcher();
}

            //[[[[[[[SEARCHER]]]]]]]
    function searcher(){
        let count=0;
        let found=[];

        if(s==1||s==0){
            for(let i=0;i<products.length;i++){
                if(products[i].title.includes(search.value)){
                    found[count]=products[i];
                    count++;
                }
            }
            read(found)
if(found.length>0){
                deleteAll.classList.remove('hide')
            deleteAll.innerHTML=`deleteAll(${found.length})`
            }
            else
            deleteAll.classList.add('hide');

        }
        if(s==2){
            for(let i=0;i<products.length;i++){
                if(products[i].category.includes(search.value)){
                    found[count]=products[i];
                    count++;
                }
            }

            read(found)
            
            if(found.length>0){
                deleteAll.classList.remove('hide')
            deleteAll.innerHTML=`deleteAll(${found.length})`
            }
            else
            deleteAll.classList.add('hide')

        }

    }
    let container =document.getElementsByClassName('container')[0];
    let deleteAll=document.createElement('button');
    deleteAll.innerHTML=`deleteAll(${products.length})`
    container.appendChild(deleteAll);
    table.before(deleteAll);
    deleteAll.onclick=()=>{
        products.length=0;
        localStorage.removeItem('product')
        read(products);
        deleteAll.classList.add('hide')
    }
    function deleteData(i){
        products.splice(i,1);
        localStorage.product=JSON.stringify(products)
        read(products);
    }
    function updateData(i){
        count.classList.add('unvisible')
        title.value=products[i].title;
        price.value=products[i].price;
        taxes.value=products[i].taxes;
        ads.value=products[i].ads;
        getTotal();
            discount.value=products[i].discount;
        category.value=products[i].category;
        
        btncreat.classList.add('hide')
        let update =document.createElement('button')

        update.innerHTML='Update'
        container.appendChild(update)
        search.before(update)
        
        update.onclick=()=>{
            btncreat.classList.remove('hide')
            update.classList.add('hide')
            count.classList.remove('unvisible')



        products[i].title=title.value;
        products[i].price=price.value;
        products[i].taxes=taxes.value;
        products[i].ads=ads.value;
        products[i].total=total.innerHTML;
        products[i].discount=discount.value;
        products[i].category=category.value;
        localStorage.product=JSON.stringify(products)
            read(products)


        }
    }
    
    let btnmood=document.getElementById('mood')

    