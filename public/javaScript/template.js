function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function sendData(e) {
    const searchResults = document.getElementById('searchResults');
    let match = e.value.match(/^[0-9a-zA-Z ]*/);
    let match2 = e.value.match(/\s*/);
    if(match2[0] === e.value) {
        searchResults.innerHTML = '';
        return;
    }
    if (match[0] === e.value) {
        fetch('getModels', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({payload: e.value})
        }).then(res => res.json()).then(data => {
            let payload = data.payload;
            searchResults.innerHTML = '';
            if (payload.length < 1) {
                searchResults.innerHTML = '<p>Sorry. Nothing Found.</p>';
                return;
            }
            payload.forEach((item, index) => {
                if (index > 0) searchResults.innerHTML += '<hr>';
                searchResults.innerHTML += `<div class="searchDiv"><a class="searchsuggestion" href='model/${item._id}'>${item.model_name}</a></div>`;
            });
        });
        return;
    }
    searchResults.innerHTML = '';
}