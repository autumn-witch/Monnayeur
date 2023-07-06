const availableBills: number[] = [100, 50, 20, 10, 5, 2, 1];

export function setBillsArray(value: number) {
   const bills: Record<number, number> = {};
   let currentIndex = 0;
    while(value !== 0) {
        const currentBill = availableBills[currentIndex];
        if(bills[currentBill] === undefined) {
            bills[currentBill] = 0;
        }
        if(value >= currentBill) {
            ++bills[currentBill];
						value -= currentBill;
        } else {
					++currentIndex;
				}
    }
   return bills;
}

export function displayBills(bills: Record<number, number>) {
	let string = "Voici votre monnaie: ";
	const billsKeys: number[] = Object.keys(bills).map(Number);
	for(const billNumber of billsKeys) {
		const amount = bills[billNumber];
		const isLastValue = billsKeys.at(-1) === billNumber;
		if(amount > 0) {
			string += `${amount} billet${amount > 1 ? 's' : ''} de ${billNumber}${isLastValue ? '' : ',' } `
		}
	}
	return string;
}