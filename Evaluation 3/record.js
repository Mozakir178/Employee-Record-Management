// fill in javascript code here

document.querySelector('form').addEventListener('submit', data);
let fil = [];

function data(event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    const id = document.querySelector('#employeeID').value;
    const dep = document.querySelector('#department').value;
    const exp = document.querySelector('#exp').value;
    const em = document.querySelector('#email').value;
    const mob = document.querySelector('#mbl').value;



    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerHTML = name;
    const td2 = document.createElement('td');
    td2.innerHTML = id
    const td3 = document.createElement('td');
    td3.innerHTML = dep
    const td4 = document.createElement('td');
    td4.innerHTML = exp
    const td5 = document.createElement('td');
    td5.innerHTML = em
    const td6 = document.createElement('td');
    td6.innerHTML = mob;
    const td7 = document.createElement('td');
    if (exp >= 5) {
        td7.innerHTML = "Senior"
    } else if (exp >= 2 && exp < 5) {
        td7.innerHTML = "Junior"
    } else {
        td7.innerHTML = "Fresher"
    }

    const td8 = document.createElement('td');
    td8.innerHTML = "DELETE"
    td8.style.backgroundColor = "red"

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector('tbody').append(tr);
    td8.addEventListener('click', function del(event) {
        event.target.parentNode.remove();
        // body
    });
    let obj = {
        1: td1.innerHTML,
        2: td2.innerHTML,
        3: td3.innerHTML,
        4: td4.innerHTML,
        5: td5.innerHTML,
        6: td6.innerHTML,
        7: td7.innerHTML,
        8: td8.innerHTML
    };
    fil.push(obj);
    console.log(fil)

}


document.getElementById('id4').addEventListener('click', showResult);

function showResult(event) {
    let a = document.getElementById('filter').value
    let b = fil.filter(function result(el) {
        return el[3] === a;
    });
    console.log(b);

    const table = document.createElement('table');


    const tablebody = document.createElement('tbody');


    b.forEach(function ok(el) {
        const tr1 = document.createElement('tr');
        const a1 = document.createElement('td');
        a.innerHTML = el[1];

        const a2 = document.createElement('td');
        a.innerHTML = el[2];

        const a3 = document.createElement('td');
        a.innerHTML = el[3];

        const a4 = document.createElement('td');
        a.innerHTML = el[4];

        const a5 = document.createElement('td');
        a.innerHTML = el[5];

        const a6 = document.createElement('td');
        a.innerHTML = el[6];
        const a7 = document.createElement('td');
        a.innerHTML = el[7];


        tr1.append(a1, a2, a3, a4, a5, a6, a7)
        tablebody.append(tr1);
    })
    table.append(tablebody);
    document.querySelector('body').append(table);
}