//Fetch currenciesfrom the API
const getCurrencies = () => {
    let fromCurrency = getFromCurrency();
    let toCurrency = getToCurrency();
    fetch(getAPIUrl(toCurrency, fromCurrency))
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            const currency = jsonResponse[`${toCurrency}_${fromCurrency}`];
            //display exchange rate.
            displayExchangeRate({
                rate: conversion(currency, getAmount()),
                date: getDate()
            })
        })
        .catch((e) => {
            alert('Error, connection lost. reconnecting...');
        })
}