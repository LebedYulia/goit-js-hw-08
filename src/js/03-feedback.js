import throttle from 'lodash.throttle';

const refs = { 
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

auditLocalStorage();

refs.form.addEventListener('input', throttle(handleInput, 500));

refs.form.addEventListener('submit', handleSubmit);

function handleInput(e) {
  e.preventDefault(); 
    const email = refs.input.value;
    const message = refs.textarea.value;
    console.log(email)
    console.log(message)
    const formData = {
      email,
      message,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function  handleSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();  
  localStorage.removeItem("feedback-form-state") 
}

function auditLocalStorage() {
  const savedFormData = localStorage.getItem("feedback-form-state");
  if (savedFormData) {
    try {   
      const savedFormDataParse = JSON.parse(savedFormData);
      console.log(savedFormDataParse)
      console.log(savedFormData)
      refs.input.value = savedFormDataParse.email;
      refs.textarea.value = savedFormDataParse.message;
      }catch(erorr){
        console.log(erorr)
      };
    }
}

