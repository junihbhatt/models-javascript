const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const model1 = document.querySelector('.model1')
const model2 = document.querySelector('.model2')
const model3 = document.querySelector('.model3');
const overlay = document.querySelector('.models');
const close = document.querySelectorAll('.close');

btn1.addEventListener('click', ()=>{
    overlay.classList.remove('hidden');
    model1.classList.remove('hidden');
});
btn2.addEventListener('click', ()=>{
    overlay.classList.remove('hidden');
    model2.classList.remove('hidden');
});
btn3.addEventListener('click', ()=>{
    overlay.classList.remove('hidden');
    model3.classList.remove('hidden');
});
function closefun(){
    model1.classList.add('hidden');
    model2.classList.add('hidden');
    model3.classList.add('hidden');
    overlay.classList.add('hidden');
}
close.forEach(cl => {
    cl.addEventListener('click',closefun)
});
overlay.addEventListener('click',closefun
);