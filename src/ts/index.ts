import {
  buttonNextToThreeStep,
  buttonNextTwoToStep,
  buttonStepBack,
  nextToThreeStep,
  nextToTowStep, stepBack
} from "./next-step.ts";
import {
  changedRadioButtons,
  changedValueInputRange,
  genderButtons,
  valueInputRange
} from "./validate/validate-step-one.ts";
import {
  changedItemDropDownList,
  closeDropDownList,
  documentClick,
  dropDownBtn,
  dropDownListItems, openDropDownSelect
} from "./validate/validate-step-two.ts";
import {
  checkBoxUserAgree,
  inputName,
  inputPhone,
  validateInputName,
  validateInputPhone, validateUserAgree
} from "./validate/validate-step-three.ts";
import {submitButton, submitForm} from "./submit-form.ts";
import {buttonCloseModel, closeButtonModal} from "./close-modal.ts";


dropDownBtn?.addEventListener('click', openDropDownSelect)
dropDownListItems?.forEach((item) => changedItemDropDownList(item))
documentClick.addEventListener('click', closeDropDownList)

valueInputRange?.addEventListener('change', changedValueInputRange)

genderButtons.forEach((genderButton) => changedRadioButtons(genderButton));

inputName?.addEventListener('input', () => validateInputName(inputName?.value))
inputName?.addEventListener('blur', () => validateInputName(inputName?.value))

inputPhone?.addEventListener('blur', () => validateInputPhone(inputPhone?.value))
inputPhone?.addEventListener('input', () => validateInputPhone(inputPhone?.value))

checkBoxUserAgree?.addEventListener('input', validateUserAgree)


buttonNextTwoToStep?.addEventListener('click', nextToTowStep)
buttonNextToThreeStep?.addEventListener('click', nextToThreeStep)
buttonStepBack?.forEach((btn) => stepBack(btn))

buttonCloseModel?.addEventListener('click', closeButtonModal)



submitButton?.addEventListener("click", (event) =>  submitForm(event));



