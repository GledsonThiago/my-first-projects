const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertvalue() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconverted = document.querySelector(".currency-value-to-convert")
    const currencyConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolartoday = 5.2
    const eurotoday = 6.5

    /*const convertedvalue = inputcurrencyvalue / dolartoday*/

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }


    currencyvaluetoconverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)/*GRAVAR ESSE FORMATO (documentação)*/

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedvalue)

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dolar americano"
        currencyImage.src = "./assets/estados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertvalue()
    
}

currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertvalue)


