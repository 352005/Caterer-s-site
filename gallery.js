var menubtn = document.querySelector('.menubtn');
var menu = document.querySelector('#menu');
menubtn.addEventListener('click',()=>{
  menubtn.classList.toggle('change');
  menu.classList.toggle('down');
});

var contactList = document.querySelector('.contactlist');
contactList.addEventListener('click',()=>{
  var subList = document.querySelector('.contactSublist');
  subList.classList.toggle('down');
});
