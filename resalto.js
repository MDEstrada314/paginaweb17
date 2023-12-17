

const sub1= document.querySelector('#cc1')
sub1.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc1')
    cc1.classList.add("color1");
})


const sub2 = document.querySelector('#cc2')
sub2.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc2')
    cc1.classList.add("color1");
})  


const sub3 = document.querySelector('#cc3')
sub3.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc3')
    cc1.classList.add("color2");
})  

const cc4 = document.querySelector('#cc4')
cc4.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc4')
    cc1.classList.add("color3");
})  

const cc5 = document.querySelector('#cc5');

cc5.addEventListener('click', () => {
    const cc1 = document.querySelector('#cc5');
    cc1.classList.add("color4");

    // Para quitar la clase después de un tiempo (por ejemplo, después de 1 segundo):
    setTimeout(() => {
        cc1.classList.remove("color4");
    }, 1000000);
});
 

const cc6 = document.querySelector('#cc6')
cc6.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc6')
    cc1.classList.add("color2");
})  

const cc7 = document.querySelector('#cc7')
cc7.addEventListener('click', ()=>{
    
    const cc1 = document.querySelector('#cc7')
    cc1.classList.add("color");
})  


// const elementosBr = document.querySelectorAll('.br');

// elementosBr.forEach((elemento) => {
//   elemento.addEventListener('dblclick', () => {
//     alert('hola')
//     elemento.classList.add('nn');
//   });
// });