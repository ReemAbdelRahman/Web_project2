document.addEventListener('DOMContentLoaded', function(){
  let groups = document.querySelector('#groups');
  groups.style.backgroundColor = '#ab7890';
  groups.style.width ='200px';
  groups.style.bottom = '5px';
  groups.style.position = 'absolute';
  groups.style.height ='100%';
  groups.style.marginRight = '5%';

  let messages = document.querySelector('#messages');
  messages.style.marginLeft= '30%';
  messages.style.position = 'absolute';
  messages.style.width = '50%';
  messages.style.height = '100%';
  messages.style.boxShadow = ' 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8)';

  let my_message = document.querySelector("#mymessage");
  my_message.style.position = 'absolute';
  my_message.style.bottom = '10px';
  my_message.style.height = '50px';
  my_message.style.padding = '10px'; 
  my_message.style.width = '100%';
});
