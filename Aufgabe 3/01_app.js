/*
Aufgabe 1
a) Starten Sie einen XMLHttpRequest() über die URL https://jsonplaceholder.typicode.com/todos/.
Überprüfen Sie den Output.
b) Fügen Sie einen Fehler in die URL unter 1a ein.
c) Erweitern Sie Ihr Programm in dem readyState = 4 überprüft wird
jedoch wenn der HTTP Status ungleich 200 ist, dann eine Meldung auf der Console
ausgibt.
 */

const request = new XMLHttpRequest();
request.addEventListener( type: 'readystatechange', listener: (evt :Event ) => {
    //Lösung 1c
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        const data = JSON.parse(evt.target.responseText);
        console.log(data);
    } else if (evt.target.readyState === 4){
        console.log('Error might have occured with status $(evt.target.status)')
    }

    

});

//Todos abfragen (Lösung 1a und 1b)
request.open(method 'GET', url 'https://jsonplaceholder.typicode.com/todos/');
request.send();
