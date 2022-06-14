const signinbtn = document.querySelector('#signin-form')

signinbtn.addEventListener("click",function(){
    document.querySelector('.signin-form').style.display="flex"
})  

const sgnclose = document.querySelector('#signin-close')
sgnclose.addEventListener("click",function(){
    document.querySelector('.signin-form').style.display="none"
})  