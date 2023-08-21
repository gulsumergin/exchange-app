https://gulsumergin.github.io/exchange-app/index

Exchange Rate Calculator Web App:

This GitHub repository contains a simple web application that allows users to calculate the equivalent amount in Turkish Lira (TRY) based on a given amount in Euro (EUR). The app utilizes an external API to fetch the latest exchange rates and performs the conversion using JavaScript.

------------------------------------------------------------------------------------------

Features:

Input field for entering the amount in Euro.
"Convert" button to trigger the currency conversion.
Display of the calculated Turkish Lira amount in a read-only input field.
Usage:

Input the desired amount in Euro.
Click the "Convert" button to fetch the latest exchange rates and calculate the equivalent amount in Turkish Lira.
The calculated Turkish Lira amount will be displayed in the read-only input field.

------------------------------------------------------------------------------------------

Implementation Details:

The app employs HTML, CSS, and JavaScript.
Upon clicking the "Convert" button, an event listener triggers the currency conversion process.
An XMLHttpRequest is used to fetch the latest exchange rates from the external API (https://api.exchangerate.host/latest).
The response is parsed as a JSON object to extract the exchange rate for Turkish Lira (TRY).
The user-entered amount in Euro is multiplied by the exchange rate to calculate the equivalent Turkish Lira amount.
The calculated amount is displayed in the designated read-only input field.
Please note that this app provides a basic illustration of currency conversion using an external API. Additional enhancements and features can be added to enhance user experience and functionality.

For more details, refer to the HTML (index.html), CSS (styles.css), and JavaScript (app.js) files in this repository.





