import {stepThree} from "./next-step.ts";

export const form: any = document.getElementById('form');
export const submitButton = document.querySelector('.btn-submit');
export const modal = document.querySelector('.modal-container')
export const loader = document.querySelector('.loader')

export const submitForm = (event: Event) => {
  event.preventDefault();
  if(form) {
    const formData = new FormData(form);
    const ageRange = formData.get("ageRange");
    const gender = formData.get("gender");
    const selectCity = formData.get("select-city");
    const userMessage = formData.get("user-message");
    const userName = formData.get("user-name");
    const userPhone = formData.get("user-phone");
    const userAgree = formData.get("user-agree");
  }
  loader?.classList.add('show-loader')
  setTimeout(() => {
    stepThree?.classList.remove('step-show')
    modal?.classList.add('modal-show')
    loader?.classList.remove('show-loader')
    form?.classList.remove('show-form')
    form.reset()
  }, 1500)
}