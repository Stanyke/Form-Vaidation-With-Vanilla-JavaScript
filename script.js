//let's get our fullname's input
let fullname = document.getElementsByTagName('input')[0];

//let's get our email's input
let email = document.getElementsByTagName('input')[1];

//let's get our password's input
let password = document.getElementsByTagName('input')[2];

//let's get our fullname's correction text
let fullname_correction = document.getElementsByTagName('p')[0];

//let's get our email's correction text
let email_correction = document.getElementsByTagName('p')[1];

//let's get our password's correction text
let password_correction = document.getElementsByTagName('p')[2];

//let's get our button
let submit_button = document.getElementById('submit_button');

//Let's put up an array for our custom email's validation for service provider
let email_array = ['@gmail.com', '@hotmail.com', '@yahoo.com'];


checkFullname = () =>
{
    //Get the value/text in fullname then it's length, finally check if it's greater than 5 (it's length)
    if (fullname.value.length > 5)
	{
        //Set submit button's disablity to false (as default was set to true in index.html)
        submit_button.disabled = false;

        //Get Fullname with ID to enable styling and hidding it.
        document.getElementById('fullname').style.display = 'none';

        //Set submit button's type attribute to submit, since default was 'button' in index.html
        submit_button.setAttribute('type', 'submit');
    }
	else
	{
        //Set submit button's disablity back to true (since user couldn't meet up wkith more than 5 characters)
        document.getElementById('submit_button').disabled = true;

        //Get Fullname with ID to enable styling and displaying it.
        document.getElementById('fullname').style.display = 'block';

        //Set submit button's type attribute to button
        document.getElementById('submit_button').setAttribute('type', 'button');
	}
}


submit_button.onclick = () =>
{
    window.location('/');
}