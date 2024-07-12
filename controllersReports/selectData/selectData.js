export function listDataSelect (data,metodo,id) {
    const select = document.getElementById(id)
    for( let i = 0;i < data.length;i++){
    const optionReports = document.createElement('option')
    if (data[i][metodo] !== undefined) {
        optionReports.innerHTML = data[i][metodo]
        select.appendChild(optionReports)
    } else {
        console.error(`El metodo ${metodo} no es valido`)
    }
    }
}

export function  selectData (data) {
    const [ reporters,description,workRoutine,assigned ] = data
            listDataSelect(reporters,'nombre','reports')
            listDataSelect(description,'descripcion','description')
            listDataSelect(workRoutine,'descripcion','workroutine')
            listDataSelect(assigned,'nombre','assigned')
}