const newName = document.querySelector("#name-input");
const nameChange = document.querySelector('#name-output');

newName.addEventListener('input', function(){
    const validname = newName.value.trim();
    nameChange.textContent = validname || 'Anonymous';
});