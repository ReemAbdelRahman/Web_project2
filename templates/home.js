document.addEventListener('DOMContentLoaded', function() {

  let box = document.querySelector('#box');
  let box2 = document.querySelector('#box2');

  box.style.marginLeft = '30%';
  box.style.textAlign = 'center';
  box.style.marginTop = '15%';
  box.style.backgroundColor = 'purple';
  box.style.padding = '5%';
  box.style.width = '350px';

  box2.style.textAlign = 'left';
  box2.style.paddingLeft = '20%';

  let inputs = document.querySelectorAll('input');
  inputs.forEach(function(input){
    input.style.padding = '5%';
    input.style.borderRadius = '10px';
  });

  const reg_div = document.querySelector('#reg_div');
  const log_div = document.querySelector('#log_div');
  reg_appear(true);
  document.querySelector('#register').onclick = function(){reg_appear(true)};
  document.querySelector('#login').onclick = function (){reg_appear(false)};
  buttons = document.querySelectorAll('button');
  buttons.forEach(function(button){
    button.style.backgroundColor = 'black';
    button.style.borderColor = 'black';
    button.style.borderRadius = '6px';
    button.style.color = 'white';
    button.style.padding = '5px';
    button.onmousemove = function(){
      button.style.backgroundColor = 'green';
    }
    button.onmouseout = function(){
      button.style.backgroundColor = 'black';
    };
  });
});

function reg_appear(whoAppears){
  if(whoAppears){
  reg_div.style.visibility = 'visible';
  log_div.style.visibility = 'hidden';
}else{
  log_div.style.visibility = 'visible';
  reg_div.style.visibility = 'hidden';
}
}
