const visToggle = document.querySelector('.eyeIcon');

const input = document.querySelector('#pwdWrap input');

var password = true;

visToggle.addEventListener('click', function(){
         if(password) {
             input.setAttribute('type','text'); // using js dynamically changed the type attribute
             visToggle.classList.remove('fa-eye');
             visToggle.classList.add('fa-eye-slash');
         } else {
             input.setAttribute('type','password');
             visToggle.classList.remove('fa-eye-slash');
             visToggle.classList.add('fa-eye');
         }
    password = !password;
      });
     
     
    