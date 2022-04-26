"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Expense {
    constructor(a, b, c) {
        this.amount = a;
        this.description = b;
        this.option = c;
    }
    get() {
        return `${this.amount} | ${this.description} | ${this.option}`;
    }
}
const form = document.querySelector('.form-inline');
const OptionSelect = document.querySelector("#inlineFormCustomSelectPref");
const Description = document.querySelector("#inlineFormInputName2");
const Amount = document.querySelector("#amountInput");
form.addEventListener('submit', (e) => {
    // This will prevent the page from reloading
    e.preventDefault();
});
