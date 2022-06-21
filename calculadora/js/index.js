const value = document.getElementById('value');
const buttons = document.querySelectorAll('span');

buttons.forEach(button => {
    button.addEventListener('click', event => {
      if(button.innerText === '=')
        value.value = eval(value.value);
      else if(button.innerText === 'C'){
        value.value = '';
      }else
        value.value += button.innerText;
    });
});
