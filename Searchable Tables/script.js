const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr');

search.addEventListener('input' , searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        console.log(row.textContent);
    })
}  