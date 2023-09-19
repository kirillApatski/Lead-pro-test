import {form, modal, submitButton} from "./submit-form.ts";
import {buttonNextToThreeStep, buttonNextTwoToStep, stepOne} from "./next-step.ts";
import {userAge} from "./validate/validate-step-one.ts";

export const buttonCloseModel = document.querySelector('#close-modal-btn')

export const closeButtonModal = () => {
  modal?.classList.remove('modal-show')
  stepOne?.classList.add('step-show')
  buttonNextTwoToStep?.classList.remove('btn-active')
  buttonNextToThreeStep?.classList.remove('btn-active')
  submitButton?.classList.remove('btn-active')
  form?.classList.add('show-form')
  if(userAge) {
    userAge.textContent = '18'
  }
}