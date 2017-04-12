// Some AJAX testing
var xhr = new XMLHttpRequest(); // Create an XHR request object
var url = 'http://mardby.se/AJK15G/lorem_text.php'; // URL where request is sent
var sendText = '?numberOfWords=10'; // Querystring

var getAjax = document.getElementById('getAjax');
var ajaxResponse = document.getElementById('ajaxResponse');

    // Callback function to process return data asynchronously (event handler)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // readyState = 4, check server response
            if (xhr.status === 200) { // More defensevly than using && in first if-statement, status 200 = OK
                // Write to ajaxResponse div
                ajaxResponse.innerHTML = '<p>' + xhr.responseText + '</p>';
            } else if (xhr.status === 404) {
                // File Not Found
            } else if (xhr.status === 500) {
                // server problem
            } 
        }
    };
    

    getAjax.addEventListener('click', function(e) {
    xhr.open('GET', url + sendText);
    xhr.send(); // Sending off the request to the server
    e.preventDefault();
});


// var textInput = document.querySelectorAll('.text-input');
// var searchBtn = document.querySelectorAll('.search-btn');
// console.log(textInput);
// console.dir(textInput);

// // Test case variables
// var tomato = 'tomato';

// var productWeight = 0;
// // most important ingredients in grocery
// var tomatoProt = 10; // grams of protein / 100g
// var tomatoCalories = 200;
// var carbohydrates = 10;
// var tomatoFat = 0; // fat %
// var tomatoFiber = 0;
// // minerals perhaps...

// // event handler for button press

// var pressSearchBtn = function(event) {
//     if (textInput.value === 'tomato') {
//         console.log(tomato + ' has: ' + tomatoFat + ' % fat' + ' \nand ' + tomatoProt + ' Grams of proteine')
//         textInput.value = '';
//     } else {
//         textInput.value = 'not in list';
//     }
//     event.preventDefault();
// }

// searchBtn[0].addEventListener('click', pressSearchBtn);



//var output = textInput.attributes[4].nodeValue;
//console.log(output)

//var searchBtn = document.querySelector('.search-btn');
//console.log(searchBtn);

//searchBtn.addEventListener('click', function(e) {
//    console.log(e.target);
//    e.preventDefault();
//});