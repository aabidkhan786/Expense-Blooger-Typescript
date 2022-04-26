import { FormatType } from './formatType'

class Expense implements FormatType {
    amount: string;
    description: string;
    option: string;

    constructor(a: string, b: string, c: string) {
        this.amount = a;
        this.description = b;
        this.option = c;
    }
    get() {
        return `${this.amount} | ${this.description} | ${this.option}`
    }
}

const form = document.querySelector('.form-inline') as HTMLFormElement;
const OptionSelect = document.querySelector("#inlineFormCustomSelectPref") as HTMLSelectElement;
const Description = document.querySelector("#inlineFormInputName2") as HTMLInputElement;
const Amount = document.querySelector("#amountInput") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    // This will prevent the page from reloading
    e.preventDefault();
})


