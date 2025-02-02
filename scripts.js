let height=document.getElementById('height');
let weight=document.getElementById('weight');
let button=document.getElementById('button');
let score=document.getElementById('score');
let result=document.querySelector('.result');
let form=document.getElementById('form');

button.addEventListener('click',function(){
    console.log('clicked');
  let newheight= parseFloat(height.value);
  let newweight= parseFloat(weight.value);
  newheight=newheight/100;
  let sqrHeight=newheight*newheight;
  
  let bmi=newweight/sqrHeight;
//   console.log(bmi.toFixed(2));
score.textContent=bmi.toFixed(2);
result.style.display='block';

if(score.textContent<18.6){
    score.style.backgroundColor='red';}
    
    else if(score.textContent<=24.9){
        score.style.backgroundColor='green';
        }
        else{
            score.style.backgroundColor='#d63031';
           
        }
});


form.addEventListener('submit',function(e){
    e.preventDefault();
});