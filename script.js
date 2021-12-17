// jQuery tracking any click event on page
$(document).on('click', function () {
    console.log('clicked');
})
// Vanilla JS tracking any click event on page
document.onclick = (e) => {
    console.log(e.target.innerText);
};


//======================================================================================


// jQuery tracking everytime apply button is clicked, .click handler
$('*[data-nav-link="Apply"]').click(function () {
    console.log('clicked' , $(this).text());
});
// Vanilla JS tracking everytime apply button is clicked from the navbar, .click handler
const navApplys = document.querySelectorAll('[data-nav-link="Apply"]');
navApplys.forEach(navApply => {
    navApply.addEventListener('click' , (e) =>
    console.log(e.target.innerText))
});


// jQuery tracking everytime button with data-nav-link is clicked, .click handler
$('data-nav-link').click(function () {
    console.log('clicked' , $(this).text());
});
// Vanilla JS tracking everytime button with data-nav-link is clicked, .click handler
const navApplys = document.querySelectorAll('[data-nav-link]');
navApplys.forEach(navApply => {
    navApply.addEventListener('click' , (e) =>
    console.log(e.target.innerText))
});


// jQuery tracking everytime Calculate Your Loan button is clicked, .click handler
$('*[data-link-name="Calculate Your Loan!"]').click(function () {
    console.log('clicked' , $(this).text());
});
// Vanilla JS tracking everytime Calculate Your Loan button is clicked, .click handler
const navApplys = document.querySelectorAll('[data-link-name="Calculate Your Loan!"]');
navApplys.forEach(navApply => {
    navApply.addEventListener('click' , (e) =>
    console.log(e.target.innerText))
});


//======================================================================================


// jQuery tracking form submit for subscribe form.submit handler
$('*[data-form-id="promotion-subscription"]').on('submit', function (e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});
// Vanilla JS tracking anytime form submit for suscribe form.submit handler
const formSubmits = document.querySelectorAll('form');
formSubmits.forEach(formSubmit => {
    formSubmit.addEventListener('onsubmit' , (e) =>
    console.log(e.target))
});

const formSubmits = document.querySelectorAll('form');
formSubmits.addEventListener("submit", function(e){
    console.log(e.target)
});


// jQuery tracking form submit for "Send Us An Email" form.submit handler
$('*[data-form-id="zendesk-contact-form"]').on('submit', function(e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});
// Vanilla JS tracking form submit for "Send Us An Email" form.submit handler
const formSubmits = document.querySelectorAll('[data-form-id="zendesk-contact-form"]');
formSubmits.forEach(formSubmit => {
    formSubmit.addEventListener('onsumbit' , () =>
    console.log('Form Submitted'))
});


// jQuery tracking form submit for FAQ search form.submit handler
$('*[id="resource-search"]').on('submit', function (e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});
// Vanilla JS tracking form submit for FAQ search form.submit handler
const formSubmits = document.querySelectorAll('[id="resource-search"]');
formSubmits.forEach(formSubmit => {
    formSubmit.addEventListener('onsumbit' , () =>
    console.log('Form Submitted'))
});


//======================================================================================


// jQuery tracking form input blur for whole document 
$('input').blur(function (e) {
    var val = $(this).val()
    console.log(val)    
});
// Vanilla JS tracking form input blur for whole document
document.addEventListener('focusout' , function(e) {
    console.log('blur event')
});


// jQuery tracking form input blur for search input
$('*[class="input-container"]').ready(function () {
    $('input').blur(function(e){
        var val = $(this).val()
        console.log(val)    
    })
});
// Vanilla JS tracking form input blur for search input
const blurEvents = document.getElementsByTagName('input');
    blurEvents.addEventListener('focusout' , function(e) {
        console.log('blur event')
});
// Same code but spits back the input value in the console log instead of 'blur event'
const blurEvents = document.getElementsByTagName('input');
    blurEvents.addEventListener('focusout' , function(e) {
        console.log(blurEvents.value)
});


// jQuery tracking form input blur for SSN number input
$('*[id="find-your-app-last-4-ssn"]').ready(function () {
    $('input').blur(function(e){
        var val = $(this).val()
        console.log(val)    
    })
});
// Vanilla JS tracking form input blur for SSN number input
const blurEvents = document.getElementById('find-your-app-last-4-ssn');
    blurEvents.addEventListener('focusout' , function(e) {
        console.log('blur event')
});
// Same code but spits back the input value in the console log instead of 'blur event'
const blurEvents = document.getElementById('find-your-app-last-4-ssn');
    blurEvents.addEventListener('focusout' , function(e) {
        console.log(blurEvents.value)
});

