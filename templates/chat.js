document.addEventListener('DOMContentLoaded', function(){
    document.body.style.backgroundImage = "url('Presentation1.png')";
  let groups = document.querySelector('#groups');
  groups.style.backgroundColor = '#ab7890';
  groups.style.width ='200px';
  groups.style.bottom = '5px';
  groups.style.position = 'absolute';
  groups.style.height ='100%';
  groups.style.marginRight = '5%';

  let create_group = document.querySelector('#create_group');
  create_group.style.right = '10px';
  create_group.style.position = 'absolute';

  create_group.onclick = function(){
    popup.style.visibility = 'visible';
  }

  let messages = document.querySelector('#messages');
  messages.style.marginLeft= '30%';
  messages.style.position = 'absolute';
  messages.style.width = '50%';
  messages.style.height = '95%';
  messages.style.boxShadow = ' 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8)';

  let my_message = document.querySelector("#mymessage");
  my_message.style.marginLeft = '-10%';
  my_message.style.position = 'absolute';
  my_message.style.bottom = '20px';
  my_message.style.height = '100px';
  my_message.style.padding = '5px';
  my_message.style.width = '750px';
  my_message.style.boxShadow = ' 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8)';
  my_message.style.wordWrap = 'break-word';

  let send = document.querySelector('#send');
  send.style.position = 'absolute';
  send.style.bottom = '10px';

  let popup = document.querySelector('#popup');
  popup.style.padding = '50px';
  popup.style.position = 'absolute';
  popup.style.visibility = 'hidden';
  popup.style.backgroundColor = 'rgba(117, 133, 158,0.7)';
  popup.style.boxShadow = ' 12px 0 15px -4px rgba(31, 73, 125, 0.8), -12px 0 8px -4px rgba(31, 73, 125, 0.8) -12px 0 8px -4px rgba(31, 73, 125, 0.8)';
  popup.style.width = '30%';
  popup.style.height = '200px';
  popup.style.marginLeft = '35%';
  popup.style.marginTop = '10%';
  //popup.style.opacity = '0.7';

  let create = document.querySelector('#create');
  create.style.backgroundColor = 'rgba(171, 120, 144,1.0)';
  create.onclick = function(){hide_create()};

  let inputs = document.querySelectorAll('input');
  inputs.forEach(function(input){
    input.style.padding = '5%';
    input.style.borderRadius = '10px';
  });

  let buttons =  document.querySelectorAll('button');
  buttons.forEach(function(button){
    button.style.width = '15%';
    button.style.height = '40px';
    button.style.borderRadius = '6px';
    button.style.backgroundColor = '#ab7890';
    button.style.fontWeight = '700';
  })

  function hide_create(){
    popup.style.visibility = 'hidden';
  }
});
