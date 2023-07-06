import { setBillsArray, displayBills } from "./coinMaker";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<label for="bill">Saisissez le montant que vous souhaitez échanger:</label>
  <input type="number" id="bill" name="bill"/>
  <div id="displayed-value"></div>
</div>
`

const inputElement = document.querySelector('#bill')!;

const displayedValueElement = document.querySelector('#displayed-value')!;

inputElement.addEventListener('input', (event: Event) => {
  const target = (event as InputEvent).target as any;
  const value = Number(target!.value);
  const billetsARendre = setBillsArray(value);
  displayedValueElement.textContent = displayBills(billetsARendre);
})