const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {};
  
  Array.from(this.elements).forEach(element => {
    if (element.type !== 'submit') {
      formData[element.name] = element.value.trim();
    }
  });

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  this.reset();
});