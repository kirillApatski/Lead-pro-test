import {buttonNextToThreeStep} from "../next-step.ts";

export const dropDownBtn: HTMLElement | null = document.querySelector('.btn-open-list')
export const dropDownList: HTMLElement | null = document.querySelector('.dropdown-list')
export const dropDownListItems: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-list-item')
export const dropdownInputHidden: HTMLInputElement | null = document.querySelector('.dropdown-input-hidden')
export const documentClick = document

export const openDropDownSelect = () => {
  dropDownList?.classList.toggle('dropdown-list-visible')
  dropDownBtn?.classList.toggle('arrow-close')
}

export const changedItemDropDownList = (item: HTMLElement) => {
  item.addEventListener('click', (event: MouseEvent) => {
    event.stopPropagation()
    const itemValue = item.innerHTML
    if(dropDownBtn && dropDownList && dropdownInputHidden){
      dropDownBtn.innerHTML = itemValue;
      dropDownList.classList.remove('dropdown-list-visible')
      dropdownInputHidden.value = item.dataset.value || ''
      dropDownBtn.classList.remove('arrow-close')
      if(dropdownInputHidden?.value) {

        buttonNextToThreeStep?.classList.add('btn-active')
      } else {
        buttonNextToThreeStep?.classList.remove('btn-active')
      }
    }
  })

}
export const closeDropDownList = (event: MouseEvent) => {
  if(event.target !== dropDownBtn) {
    dropDownList?.classList.remove('dropdown-list-visible')
  }
}






