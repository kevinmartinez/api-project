// Some AJAX testing
var xhr = new XMLHttpRequest(); // Create an XHR request object
var url = 'http://mardby.se/AJK15G/lorem_text.php'; // URL where request is sent
var sendText = '?numberOfWords=10';

var getAjax = document.getElementById('getAjax');
var ajaxResponse = document.getElementById('ajaxResponse');

    // Callback function to process return data asynchronously
    xhr.onreadystatechange = function() {
        // readyState = 4, when the server has sent everything
        // status = 200 means ok!
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Write to ajaxResponse div
            ajaxResponse.innerHTML = '<p>' + xhr.responseText + '</p>';
        }
    };
    

    getAjax.addEventListener('click', function(e) {
    xhr.open('GET', url + sendText);
    xhr.send(); // Sending off the request to the server
    e.preventDefault();
});




