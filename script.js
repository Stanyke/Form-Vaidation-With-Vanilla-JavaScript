//let's get our fullname's input
let fullname = document.getElementsByTagName('input')[0];

//let's get our email's input
let email = document.getElementsByTagName('input')[1];

//let's get our password's input
let password = document.getElementsByTagName('input')[2];

//let's get our button
let submit_button = document.getElementById('submit_button');



//This function runs each time the user queues in anything within any of the input files
checkCorrections = () =>
{
    /*
    For Fullname
    */
   
    //Get the value/text in fullname then it's length, finally check if it's greater than 5 (it's length)
    if (fullname.value.length > 5)
	{
        //Get Fullname with ID to enable styling and hidding it.
        document.getElementById('fullname').style.display = 'none';

        //check if email value is valid and password value is greater than 9
        if (email.value.includes("@gmail.com") || email.value.includes("@yahoo.com") || email.value.includes("@hotmail.com") && password.value.length > 9)
        {
            //Set submit button's disablity to false (as default was set to true in index.html)
            submit_button.disabled = false;

            //Set submit button's type attribute to submit, since default was 'button' in index.html
            submit_button.setAttribute('type', 'submit');
        }
    }
    //check if fullname value is less than 6 and if the submit button is not disabled
	else if(fullname.value.length < 6 && document.getElementById('submit_button').disabled === false)
	{
        //Set submit button's disablity back to true (since user couldn't meet up wkith more than 5 characters)
        document.getElementById('submit_button').disabled = true;

        //Get Fullname with ID to enable styling and displaying it.
        document.getElementById('fullname').style.display = 'block';

        //Set submit button's type attribute to button
        document.getElementById('submit_button').setAttribute('type', 'button');
    }
    
    



    /*
    For Email

    email.value.includes("@gmail.com") || email.value.includes("@yahoo.com") || email.value.includes("@hotmail.com") checks if email value contains either @gmail.com or @yahoo.com or @hotmail.com
    */

    //Let's put up an array for our custom email's validation for service provider
    if (email.value.includes("@gmail.com") || email.value.includes("@yahoo.com") || email.value.includes("@hotmail.com"))
    {
        //Get Fullname with ID to enable styling and hidding it.
        document.getElementById('email').style.display = 'none';

        //check if fullname value is greater than 5 and password value is greater than 9
        if (fullname.value.length > 5 && password.value.length > 9)
        {
            //Set submit button's disablity to false (as default was set to true in index.html)
            submit_button.disabled = false;

            //Set submit button's type attribute to submit, since default was 'button' in index.html
            submit_button.setAttribute('type', 'submit');
        }
    }
    //check if email is valid and if the submit button is not disabled
	else if (!(email.value.includes("@gmail.com")) || !(email.value.includes("@yahoo.com")) || !(email.value.includes("@hotmail.com")) && document.getElementById('submit_button').disabled === false)
	{
        //Set submit button's disablity back to true (since user couldn't meet up wkith more than 5 characters)
        document.getElementById('submit_button').disabled = true;

        //Get Fullname with ID to enable styling and displaying it.
        document.getElementById('email').style.display = 'block';

        //Set submit button's type attribute to button
        document.getElementById('submit_button').setAttribute('type', 'button');
	}
    
    



    /*
    For Password
    */


    //check if password value is greater than 9
    if (password.value.length > 9)
    {
        //Get Password with ID to enable styling and hidding it.
        document.getElementById('password').style.display = 'none';

        //check if fullname value is greater than 5 and email is valid
        if (fullname.value.length > 5 && email.value.includes("@gmail.com") || email.value.includes("@yahoo.com") || email.value.includes("@hotmail.com"))
        {
            //Set submit button's disablity to false (as default was set to true in index.html)
            submit_button.disabled = false;

            //Set submit button's type attribute to submit, since default was 'button' in index.html
            submit_button.setAttribute('type', 'submit');
        }
    }
    //check if password value is less than 10 and if the submit button is not disabled
    else if (password.value.length < 10  && document.getElementById('submit_button').disabled === false)
	{
        //Set submit button's disablity back to true (since user couldn't meet up wkith more than 5 characters)
        document.getElementById('submit_button').disabled = true;

        //Get Fullname with ID to enable styling and displaying it.
        document.getElementById('password').style.display = 'block';

        //Set submit button's type attribute to button
        document.getElementById('submit_button').setAttribute('type', 'button');
	}
}


//when all requirements are met, the submit button should just reload the page and this helps it does that
submit_button.onclick = () =>
{
    windows.location('/');
}