import {getIpAddress} from "./services/getUserIp.ts";
import IMask from "imask";
import {maskBYOptions, maskRUOptions, maxLengthNumberPhoneBY, maxLengthNumberPhoneRU} from "../constants/constants.ts";
import {inputPhone} from "./validate/validate-step-three.ts";

export const buttonNextTwoToStep = document.querySelector('#next-step-two')
export const buttonNextToThreeStep = document.querySelector('#next-step-three')
export const stepTwo = document.querySelector('.step-two')
export const stepOne = document.querySelector('.step-one')
export const stepThree= document.querySelector('.step-three')
export const buttonStepBack = document.querySelectorAll('.btn-back')

export const nextToTowStep = () => {
  stepTwo?.classList.add('step-show')
  stepOne?.classList.remove('step-show')
}

export const nextToThreeStep = () => {
  stepTwo?.classList.remove('step-show')
  stepThree?.classList.add('step-show')
  getIpAddress()
    .then(userCountry => {
      if (userCountry === 'RU' && inputPhone) {
        IMask(inputPhone!, maskRUOptions);
        inputPhone.placeholder = '+7 (___)___-__-__'
        inputPhone.maxLength = maxLengthNumberPhoneRU
      }
      if (userCountry === 'BY' && inputPhone) {
        IMask(inputPhone!, maskBYOptions);
        inputPhone.placeholder = '+375 (__)___-__-__'
        inputPhone.maxLength = maxLengthNumberPhoneBY
      }
    });
}

export const stepBack = (btn: Element) => {
  btn.addEventListener('click', () => {
    if (stepTwo?.classList.contains('step-show')){
      stepTwo.classList.remove('step-show')
      stepOne?.classList.add('step-show')
    } else {
      stepThree?.classList.remove('step-show')
      stepTwo?.classList.add('step-show')
    }
  })
}