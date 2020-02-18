"use-strict";

const theDate = document.getElementById("date");
const datePicker = document.querySelector('input[type="date"]');

const template = theDate.innerText;

function showDate() {
  const d = new Date(datePicker.value);
  buildDate(d)
}

function buildDate(d){
template = `${template} ${d.toDateString()}`
}

datePicker.addEventListner('Change', showDate)
