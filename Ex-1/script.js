// {"count":16152,"name":"mathias","age":45}
const btn = document.getElementById('loadButton');
btn.addEventListener('click', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('dataList');
            console.log(data);
            list.innerHTML = '';

            Object.values(data).forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                list.appendChild(listItem); 
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
});
