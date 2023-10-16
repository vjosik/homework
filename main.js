const div = document.querySelector('div')
const table = document.createElement('table')

function createTable(){
    for(i = 0; i < 10; i++){
        let tr = document.createElement ('tr')
        for (y = 0; y < 10; y++){
            let td = document.createElement ('td')
            td.innerText = getNumber()
            tr.append(td)
        }
        table.append(tr)
    }
    div.append(table)
}

let count = 0;

function getNumber (){
    return ++count;
}

createTable()