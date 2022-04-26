"use strict";
exports.__esModule = true;
var Expense = /** @class */ (function () {
    function Expense(a, b, c) {
        this.amount = a;
        this.description = b;
        this.option = c;
    }
    Expense.prototype.get = function () {
        return "".concat(this.amount, " | ").concat(this.description, " | ").concat(this.option);
    };
    return Expense;
}());
var form = document.querySelector('.form-inline');
var OptionSelect = document.querySelector("#inlineFormCustomSelectPref");
var Description = document.querySelector("#inlineFormInputName2");
var Amount = document.querySelector("#amountInput");
form.addEventListener('submit', function (e) {
    // This will prevent the page from reloading
    e.preventDefault();
});
