
/*t display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let value = event.target.innerText;

        if (value === '=') {
            try {
                string = eval(string);
                display.value = string;
            } catch {
                display.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = '';
            display.value = '';
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else {
            string += value;
            display.value = string;
        }
    });
});*/
let inputBox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
  button.addEventListener('click', event => {
    let value = event.target.innerText;

    if (value === '=') {
      try {
        string = eval(string);
        inputBox.value = string;
        inputBox.classList.add('result-shown'); // change to blue
      } catch {
        inputBox.value = "Error";
        string = "";
        inputBox.classList.remove('result-shown');
      }
    } else if (value === 'AC') {
      string = '';
      inputBox.value = '';
      inputBox.classList.remove('result-shown');
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string;
      inputBox.classList.remove('result-shown');
    } else {
      string += value;
      inputBox.value = string;
      inputBox.classList.remove('result-shown');
    }
  });
});
