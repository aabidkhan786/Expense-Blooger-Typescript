const OptionSelect = document.querySelector("#inlineOption") as HTMLSelectElement;
const Description = document.querySelector("#inlineDescription") as HTMLInputElement;
const Amount = document.querySelector("#amountInput") as HTMLInputElement;
const form = document.querySelector('.form-inline') as HTMLFormElement;
let addExpense = (e: any) => {

    // this will prevent the page from loading
    e.preventDefault();

    // console.log(`You have spent ${Amount.value} through ${OptionSelect.value} for : ${Description.value}`);

    var cardInside = document.querySelector("#cardInside") as HTMLBodyElement;
    var card = document.createElement('div');
    var optionElement = document.createElement('div');
    var cardElement = document.createElement('div');
    var amountElement = document.createElement('h6');
    var descriptionElement = document.createElement('p');
    cardElement.appendChild(amountElement);
    cardElement.appendChild(descriptionElement);
    card.appendChild(optionElement);
    card.appendChild(cardElement);

    optionElement.innerHTML = `Through ${OptionSelect.value}`;
    optionElement.classList.add("card-header");
    amountElement.innerHTML = `Amount ₹ ${Amount.value}/-`;
    amountElement.classList.add("card-title");
    descriptionElement.innerHTML = Description.value;
    descriptionElement.classList.add("card-text");
    cardElement.classList.add("card-body");
    card.classList.add("card");
    cardInside.appendChild(card);
}
form.addEventListener('submit', addExpense, false);
