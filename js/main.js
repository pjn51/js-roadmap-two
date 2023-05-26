// main.js  

async function getPotd() {
    const url = 'https://en.wikipedia.org/w/api.php';
    const today = new Date();
    const date_iso = today.toISOString().slice(0, 10);
    const params = new URLSearchParams({
        action: 'query',
        list: 'pictures',
        format: 'json',
        pllimit: 1,
        prop: 'images',
        titles: "Template:POTD_protected/" + date_iso
    });
  
    try {
        const response = await fetch(`${url}?${params}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            },
        });
  
        const data = await response.json();
        const potdUrl = data.query.pages[0].images[0].imageinfo[0].url;
        console.log(potdUrl);
    } catch (error) {
        console.error('Error fetching POTD:', error);
    }
}
  
const button = document.getElementById('execute_button');

button.addEventListener('click', function() {
    getPotd();
});