document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new  XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'swma.txt', true);

    console.log('READYSTATE', xhr.readyState);

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<i>${this.responseText}</i>`
            //console.log(this.responseText);
        }

    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection establised
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200 = OK
    // 403 = Forbidden
    // 404 = NOT FOUND

}