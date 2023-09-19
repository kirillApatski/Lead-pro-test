import {
  maxLengthNumberPhoneBY, maxLengthNumberPhoneRU,
  validateNumberPhoneBY, validateNumberPhoneRU,
} from "../../constants/constants.ts";
import {getIpAddress} from "../services/getUserIp.ts";

export const inputName: HTMLInputElement | null = document.querySelector('#name-value')
export const inputPhone: HTMLInputElement | null = document.querySelector('#phone-value')
export const checkBoxUserAgree: HTMLInputElement | null = document.querySelector('#agree')
const submitButton = document.querySelector('.btn-submit');


const errorMessageName = document.querySelector('.error-name')
const errorMessagePhone = document.querySelector('.error-phone')

export const validateInputName = (inputValue: string | undefined) => {
  if (inputValue?.trim() === '') {
    errorMessageName?.classList.add('error-show')
    inputName?.classList.add('warning')
  } else {
    errorMessageName?.classList.remove('error-show')
    inputName?.classList.remove('warning')
  }
  checkFormValidity()
}
const userCountry = getIpAddress()
export const validateInputPhone = (inputValue: string | undefined) => {
  userCountry.then(country => {
    if (country === 'BY') {
      if (inputValue && validateNumberPhoneBY.test(inputValue)) {
        errorMessagePhone?.classList.remove('error-show')
        inputPhone?.classList.remove('warning')
        checkFormValidity()
      } else {
        errorMessagePhone?.classList.add('error-show')
        inputPhone?.classList.add('warning')
      }
    }
    if (country === 'RU') {
      if (inputValue && validateNumberPhoneRU.test(inputValue)) {
        errorMessagePhone?.classList.remove('error-show')
        checkFormValidity()
      } else {
        errorMessagePhone?.classList.add('error-show')
      }
    }
  })
  checkFormValidity()
}
export const validateUserAgree = () => {
  checkFormValidity()
}

function checkFormValidity() {
  const isNameValid = inputName && inputName.value.trim() !== '' && !inputName.classList.contains('warning');
  const isPhoneValid = (inputPhone?.value.length === maxLengthNumberPhoneBY || inputPhone?.value.length === maxLengthNumberPhoneRU) && errorMessagePhone && !errorMessagePhone.classList.contains('error-show');
  const isAgreeChecked = checkBoxUserAgree && checkBoxUserAgree.checked;

  if (submitButton && isNameValid && isPhoneValid && isAgreeChecked) {
    submitButton.classList.add('btn-active')
    submitButton.setAttribute('disable', 'false')
  } else {
    submitButton?.classList.remove('btn-active')
    submitButton?.setAttribute('disable', 'true')
  }
}