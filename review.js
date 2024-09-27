// jQuery track any click event on page
$(document).on('click', function() {
  console.log('clicked');
});

// Vanilla JS track any click event on page
document.onclick = (e) => {
    console.log('clicked');
};

//======================================================================================

// jQuery tracking everytime apply button is clicked, .click handler
$('*[data-nav-link="Apply"]').click(function(){
    console.log('clicked' , $(this).text());
});

// Vanilla JS track everytime apply button is clicked, .click handler
document.querySelectorAll('[data-nav-link="Apply"]');

document.getElementById('button').onclick = function() {
    console.log('clicked');
}​;​



// jQuery tracking everytime button with data-nav-link is clicked, .click handler
$('data-nav-link').click(function(){
    console.log('clicked' , $(this).text());
});

// jQuery tracking everytime Calculate Your Loan button is clicked, .click handler
$('*[data-link-name="Calculate Your Loan!"]').click(function(){
    console.log('clicked' , $(this).text());
});

//======================================================================================

// jQuery tracking form submit for subscribe form.submit handler
$('*[data-form-id="promotion-subscription"]').on('submit', function(e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});

// jQuery tracking form submit for "Send Us An Email" form.submit handler
$('*[data-form-id="zendesk-contact-form"]').on('submit', function(e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});

// jQuery tracking form submit for FAQ search form.submit handler
$('*[id="resource-search"]').on('submit', function(e) { 
    e.preventDefault();  //prevent form from submitting
    console.log('Form Submitted', $(this).text()); 
});

//======================================================================================

// jQuery tracking form input blur for whole document 
$('input').blur(function(e){
    var val = $(this).val()
    console.log(val)    
})

// jQuery tracking form input blur for search input
$('*[class="input-container"]').ready(function() {
    $('input').blur(function(e){
        var val = $(this).val()
        console.log(val)    
    })
});

// jQuery tracking form input blur for SSN number input
$('*[id="find-your-app-last-4-ssn"]').ready(function() {
    $('input').blur(function(e){
        var val = $(this).val()
        console.log(val)    
    })
});