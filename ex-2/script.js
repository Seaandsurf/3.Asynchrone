document.getElementById('wordButton').addEventListener('click', function () {
    const word = document.getElementById('word').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(response => response.json())
        .then(data => {
            console.log(data);

            localStorage.setItem('dictionaryData', JSON.stringify(data));
            const resultsDiv = document.getElementById('datalist');
            const resultDiv = document.createElement('li');
            resultDiv.textContent = Result for '${word}': ${ JSON.stringify(data,) };
            resultsDiv.appendChild(resultDiv);
        })
        .catch(error => console.error('Error:', error));
});






// document.getElementById('clearBtn').addEventListener('click', function () {
//     document.getElementById('results').innerHTML = '';
//     localStorage.removeItem('dictionaryData');
// });
// window.addEventListener('load', function () {
//     const savedData = localStorage.getItem('dictionaryData');
//     if (savedData) {
//         const parsedData = JSON.parse(savedData);
//         const resultsDiv = document.getElementById('results');
//         const resultDiv = document.createElement('div');
//         resultDiv.textContent = Result from previous search: ${ JSON.stringify(parsedData, null, 2) };
//         resultsDiv.appendChild(resultDiv);
//     }
// });