export async function request(dataReport){
    try {
        const response = await fetch(url, {
        method : 'post',
        header: {
            'Content-Type':'Application/json'
        },
        body : JSON.stringify(dataReport)
    })
        let data = await response.json()
        const redirect = (data[0].affectedRows === 1) ? window.location.href = 'https://hectormorgadoc.github.io/ReporteFlorambraC/' : console.log('Problemas al registrar el reporte')
    } catch (error) {
        messageError('Problemas para cargar reporte',error)
    }
} 

export function listDataSelect (data,metodo,id) {
    const select = document.getElementById(id)
    for( let i = 0;i < data.length;i++){
    const optionReports = document.createElement('option')
    if (data[i][metodo] !== undefined) {
        optionReports.innerHTML = data[i][metodo]
    } else {
        messageError('Error de datos')
        console.error(`El metodo ${metodo} no es valido`)
    }
    select.appendChild(optionReports)
    }
}

export function formatFecha (fecha) {
    let partesFecha = fecha.split("/")
    let dia = partesFecha[0]
    let mes = partesFecha[1]
    let anio = partesFecha[2]
    let nuevaFecha = `${anio}-${mes}-${dia}`
    return nuevaFecha
}

export function messageError(message) {
    const main = document.querySelector('main')
    const body = document.querySelector('body')
    const messageError = document.createElement('h3')
    if(main){
        main.remove()
        messageError.innerHTML = message
        body.appendChild(messageError)
    }        
}

export function  selectData (data) {
    const [ reporters,description,workRoutine,assigned ]= data
            listDataSelect(reporters,'nombre','reports')
            listDataSelect(description,'descripcion','description')
            listDataSelect(workRoutine,'descripcion','workroutine')
            listDataSelect(assigned,'nombre','assigned')
}

export async function requestFeth(data,url,metodo) {
    if(data === null) {
        try {
            const dataReport = await fetch(url, {
            method: 'GET'
            });   

            data = await dataReport.json()
            localStorage.setItem('data',JSON.stringify(data))
            if (dataReport.ok) {
                metodo(data)
            } else {
                messageError('Error de conexion')
                throw new Error(`Error de conexion,${error}`)
            }
        } catch (error) {
            messageError('Servicio no disponible')
            throw new Error(`Servicio no disponible,${error}`)
        }
        
    } else {
        data = JSON.parse(data)
        metodo(data)
    }
}
export function dateFormat(fecha) {
    let formatoFecha = /\d\d\d\d-\d\d-\d\d/
    let fechaFormato = fecha.split('-')
    for (let i = 0; i < fechaFormato.length;i++) {
        fechaFormato[i] = Number(fechaFormato[i])
    }
    if (fechaFormato[0] <= 1900 || fechaFormato[0] > 2200) {
        alert('formato año incorrecto')
        return
    } 

    if (fechaFormato[1] <= 0 || fechaFormato[1] > 12) {
        alert('formato mes incorrecto')
        return
    }
    if (fechaFormato[2] <= 0 || fechaFormato[2] >  31) {
        alert ('formato dia incorrecto')
        return
    }
    if (formatoFecha.test(fecha)) {
        return fecha
    } else {
        alert('No es el fomato ')
        return 
    }
}

export function selectDataPush(data) {
    const arrayReports = data
    selectReportero.push(arrayReports[0])
    selectAsignado.push(arrayReports[3])
    selectTrabajoEfectuar.push(arrayReports[2])
    selectDescripcion.push(arrayReports[1])
}

export function selectDataIterar(data,optionReport) {
    for (let list of data) {
                    const optionReports = document.createElement("option")
                    if (optionReport === 'descripcion') {
                        optionReports.innerHTML = list.descripcion
                    }
                    if (optionReport === 'numero_orden') {
                        optionReports.innerHTML = list.numero_orden
                    }
                    if ( optionReport === 'nombre') {
                        optionReports.innerHTML = list.nombre
                    }              
                    select.appendChild(optionReports)
                }       
}