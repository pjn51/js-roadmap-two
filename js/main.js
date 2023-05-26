// main.js

async function fetchData () {
    const url = `https://en.wikipedia.org/w/api.php?action=${action}&list=${events}&srsearch=Craig%20Noone&format=${format}`
    const today = new Date();
    const date_iso = today.toISOString().slice(0, 10);    
    let title = "Template:POTD_protected/" + date_iso;

    let params = {
        "action": "query",
        "format": "json",
        "formatversion": "2",
        "prop": "images",
        "titles": title
      };

    console.log('Title' + title);
    console.log("params" + params);
}

function transformData () {
    // todo
}

const button = document.getElementById('refresh-button');

button.addEventListener('click', function() {
  console.log("button clicked!");
});