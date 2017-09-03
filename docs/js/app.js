// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://example.com/', true);
// xhr.withCredentials = true;
// xhr.send(null); // From MDN






// // example request
// getCORS('http://foo.bar/?p1=1&p2=Hello+World', function(request){
//     var response = request.currentTarget.response || request.target.responseText;
//     console.log(response);
// });




// function getCORS(url, success) {
//     var xhr = new XMLHttpRequest();
//     if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
//     xhr.open('GET', url);
//     xhr.onload = success;
//     xhr.send();
//     return xhr;
// }

// // example request
// getCORS('http://foo.bar/?p1=1&p2=Hello+World', function(request){
//     var response = request.currentTarget.response || request.target.responseText;
//     console.log(response);
// });


// iife immediately invoced function expression, ftw
// (function () {
//     var xhr;
//     // url to the Mat API
//     var url = 'http://matapi.se//foodstuff';
//     var queryString = '?query=jöl';
//     // Old compatibility code, no longer needed.
//     if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
//         xhr = new XMLHttpRequest();
//     } else {
//         xhr = new ActiveXObject(Microsoft.XMLHTTP); // IE 6 and older
//     }
    
//     console.log('UNSENT', xhr.readyState); // readyState will be 0
    
//     xhr.open('GET', url + queryString, true);
//     console.log('OPENED', xhr.readyState); // readyState will be 1
    
//     xhr.onprogress = function () {
//         console.log('LOADING', xhr.readyState); // readyState will be 3
//     };
    
//     xhr.onload = function () {
//         console.log('DONE', xhr.readyState); // readyState will be 4
//     };   
//     xhr.onreadystatechange = function() {
//         console.log(xhr.responseText)
//         var update = document.getElementById('update');
//         update.innerHTML = xhr.responseText;
//     }
//     xhr.send(null);
var xhr = new XMLHttpRequest();
var url = 'https://matapi.se/foodstuff?query=ban';


  if(xhr) {    
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        console.log(xhr.responseText);
    };
    xhr.send(); 
  }
    
    
    
    // // Some AJAX testing
    // var xhr = new XMLHttpRequest(); // Create an XHR request object
    // var url = 'https://teamtreehouse.com/kevinpixelkojan.json'; // URL where request is sent
    // var sendText = '?numberOfWords=10'; // Querystring
    
    // var getAjax = document.getElementById('getAjax');
    // var ajaxResponse = document.getElementById('ajaxResponse');
    
    // // Callback function to process return data asynchronously (event handler)
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4) { // readyState = 4, check server response
    //         if (xhr.status === 200) { // More defensevly than using && in first if-statement, status 200 = OK
    //             // Write to ajaxResponse div
    //             //ajaxResponse.innerHTML = '<p>' + xhr.responseText + '</p>';
    //             console.log(typeof xhr.responseText);
    //             var treehouseData = JSON.parse(xhr.responseText); // parse the JSON data
    //             console.log(treehouseData);
    //             console.log(treehouseData.name);
    //             console.log(treehouseData.badges[0].name);
    //         } else if (xhr.status === 404) {
    //             // File Not Found
    //         } else if (xhr.status === 500) {
    //             // server problem
    //         } 
    //     }
    // };
    
// }());
