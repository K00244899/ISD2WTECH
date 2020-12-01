//Javascript for bmi.html
let btn = document.getElementById('btnBMI');
btn.addEventListener('click',function(){
    let weight  = document.getElementById('weight-input').value;
    let height  = document.getElementById('height-input').value;
   let fbmi = (weight/(height*height)*10000);
   let finalBmi = fbmi.toFixed(2);
   document.getElementById('bmi-output').value = finalBmi;
})
