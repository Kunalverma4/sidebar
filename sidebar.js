const sidebartoggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closebtn =document.querySelector('.close-btn');
sidebartoggle.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');    
})
closebtn.addEventListener('click',function(){
    console.log(sidebar.classList)
    sidebar.classList.toggle('show-sidebar');    
})


