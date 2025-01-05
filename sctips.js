const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){

    console.log(currencySelect.value)

    const inputCurrencyValue = document.querySelector(".input-Values").value

    const currentyValueToConvert = document.querySelector(".currency-value-to-convert")
    
    const currentyConvert = document.querySelector(".currency-value")

    const dolarToday = 6.23
    const euroDay = 8.60

    currentyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

    if(currencySelect.value == "dolar" ){
        currentyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
       }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro" ){
        currentyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
       }).format(inputCurrencyValue / euroDay)
    }

}

function changeCurrency(){
const AlteracaoNameCurrency = document.getElementById("Currency-name")
const CurrencyImage = document.querySelector(".CurrencyImg")


if(currencySelect.value == "dolar" ){
    AlteracaoNameCurrency.innerHTML = "Dólar Americano"
    CurrencyImage.src = "./assets/estados-unidos.png"
}

if(currencySelect.value == "euro" ){
    AlteracaoNameCurrency.innerHTML = "Euro"
    CurrencyImage.src = "./assets/euro.png"
}

convertValues()

}

currencySelect.addEventListener("change",changeCurrency )
convertButton.addEventListener("click", convertValues)
