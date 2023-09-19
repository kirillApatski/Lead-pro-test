import {buttonNextTwoToStep} from "../next-step.ts";
export const valueInputRange: HTMLInputElement | null = document.querySelector('#ageRange')
export const userAge = document.querySelector('#age-value')
export const genderButtons: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name="gender"]');

export const changedRadioButtons = (genderButton: HTMLInputElement) => {
  genderButton.addEventListener('change', function () {
    if (this.checked) {
      buttonNextTwoToStep?.classList.add('btn-active')
    } else {
      buttonNextTwoToStep?.classList.remove('btn-active')
    }
  });
}



export const changedValueInputRange = () => {
  if (userAge) {
    userAge.textContent = `${valueInputRange?.value} лет` || ''
  }
}
