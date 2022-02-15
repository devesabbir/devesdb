fetch('http://localhost:5070/deves').then( data => data.json()).then( data => {
    console.log(data);
})