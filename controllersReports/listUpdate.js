import { urlLocal, urlDeplo } from "./constant.js"
let [ selectReportero,selectAsignado,selectDescripcion,selectTrabajoEfectuar ]  = [ [],[],[],[] ]

    document.addEventListener('DOMContentLoaded', async () => {
        const response = await fetch(urlLocal,{
            method : 'GET'
        })
        const data = await response.json()
        const arrayReports = JSON.parse( data )
        selectReportero.push(arrayReports[0])
        selectAsignado.push(arrayReports[3])
        selectTrabajoEfectuar.push(arrayReports[2])
        selectDescripcion.push(arrayReports[1])
    })



export function updateReport(button,data){

    button.addEventListener('click',() => {
        let { 
            numeroOrden,
            reportero,
            asignado,
            descripcion,
            rutinaTrabajo,
            fechaAviso,
            fechaEjecucion,
            reporteFalla,
            trabajoEfectuar,
            comentarios
        } = data;

        console.log()
        const list = document.querySelector('#list')
        const table = document.querySelector('table')
        const form = document.createElement('form')

        const titleNumeroOrden = document.createElement('h4')
        const labelNumeroOrden = document.createElement('label')
        const inputNumeroOrden = document.createElement('input')
        inputNumeroOrden.setAttribute('type','text')
        titleNumeroOrden.innerHTML = 'Numero de orden: '
        labelNumeroOrden.innerHTML = numeroOrden
        inputNumeroOrden.value = numeroOrden

        const titleReportero = document.createElement('h4')
        const labelReportero = document.createElement('label')
        const inputReportero = document.createElement('select')
        for (let reportero of selectReportero[0]) {
            const optionReportero = document.createElement('option')
            optionReportero.innerHTML = reportero.nombre
            inputReportero.appendChild(optionReportero)
        }
        titleReportero.innerHTML = 'Reportero: '
        labelReportero.innerHTML = reportero

        const titleAsignado = document.createElement('h4')
        const labelAsignado = document.createElement('label')
        const inputAsignado = document.createElement('select')
        for (let asignado of selectAsignado[0]) {
            const optionAsignado = document.createElement('option')
            optionAsignado.innerHTML = asignado.nombre
            inputAsignado.appendChild(optionAsignado)
        }
        titleAsignado.innerHTML = 'Asignado: '
        labelAsignado.innerHTML = asignado

        const titleDescripcion = document.createElement('h4')
        const labelDescripcion = document.createElement('label')
        const inputDescripcion = document.createElement('select')
        for (let descripcion of selectDescripcion[0]) {
            const optionDescripcion = document.createElement('option')
            optionDescripcion.innerHTML = descripcion.descripcion
            inputDescripcion.appendChild(optionDescripcion)
        }
        titleDescripcion.innerHTML = 'Descripcion de maquina: '
        labelDescripcion.innerHTML = descripcion

        const titleRutinaTrabajo = document.createElement('h4')
        const labelRutinaTrabajo = document.createElement('label')
        const inputRutinaTrabajo = document.createElement('select')
        for (let rutinaTrabajo of selectTrabajoEfectuar[0]) {
            const optionRutinaTrabajo = document.createElement('option')
            optionRutinaTrabajo.innerHTML = rutinaTrabajo.descripcion
            inputRutinaTrabajo.appendChild(optionRutinaTrabajo)
        }
        titleRutinaTrabajo.innerHTML = 'Rutina de trabajo: '
        labelRutinaTrabajo.value = rutinaTrabajo

        const labelFechaAviso = document.createElement('label')
        labelFechaAviso.setAttribute('for','datetimeWarning')
        const inputFechaAviso = document.createElement('input')
        const labelFechaEjecucion = document.createElement('label')
        labelFechaEjecucion.setAttribute('for','datetimeExecute')
        const inputFechaEjecucion = document.createElement('input')
        inputFechaEjecucion.setAttribute('type','datetime')
        inputFechaEjecucion.setAttribute('id','datetimeExecute')
        inputFechaEjecucion.setAttribute('placeholder',`${fechaEjecucion.split('T',1)}`)
        inputFechaAviso.setAttribute('type','datetime')
        inputFechaAviso.setAttribute('id','datetimeWarning')
        inputFechaAviso.setAttribute('placeholder',`${fechaAviso.split('T',1)}`)
        const labelReporteFalla = document.createElement('label')
        const inputReporteFalla = document.createElement('input')
        inputReporteFalla.setAttribute('type','text')
        const labelTrabajoEjecutar = document.createElement('label')
        const inputTrabajoEjecutar = document.createElement('input')
        inputTrabajoEjecutar.setAttribute('type','text')
        const labelComentarios = document.createElement('label')
        const inputComentarios = document.createElement('input')
        inputComentarios.setAttribute('type','text')
        const update = document.createElement('button')

        

        update.innerText = 'Modificar'

        
        
        labelFechaAviso.innerHTML = 'Fecha_aviso: '
        labelFechaEjecucion.innerHTML = 'Fecha_ejecucion: '
        labelReporteFalla.innerHTML = 'Reporte_falla: '
        inputReporteFalla.value = reporteFalla
        labelTrabajoEjecutar.innerHTML = 'Trabajo_efectuar: '
        inputTrabajoEjecutar.value = trabajoEfectuar
        labelComentarios.innerHTML = 'Comentarios: '
        inputComentarios.value = comentarios

        if(table){
            table.remove()
        }
        form.appendChild(titleNumeroOrden)
        form.appendChild(labelNumeroOrden)
        form.appendChild(inputNumeroOrden)
        form.appendChild(titleReportero)
        form.appendChild(labelReportero)
        form.appendChild(inputReportero)
        form.appendChild(titleAsignado)
        form.appendChild(labelAsignado)
        form.appendChild(inputAsignado)
        form.appendChild(titleDescripcion)
        form.appendChild(labelDescripcion)
        form.appendChild(inputDescripcion)
        form.appendChild(titleRutinaTrabajo)
        form.appendChild(labelRutinaTrabajo)
        form.appendChild(inputRutinaTrabajo)
        form.appendChild(labelFechaAviso)
        form.appendChild(inputFechaAviso)
        form.appendChild(labelFechaEjecucion)
        form.appendChild(inputFechaEjecucion)
        form.appendChild(labelReporteFalla)
        form.appendChild(inputReporteFalla)
        form.appendChild(labelTrabajoEjecutar)
        form.appendChild(inputTrabajoEjecutar)
        form.appendChild(labelComentarios)
        form.appendChild(inputComentarios)
        form.appendChild(update)
        list.appendChild(form)

        update.addEventListener('submit',async (e) => {
            e.preventDefault()
        })

        update.addEventListener('click',async() => {
            const dataUpdate = {
                reportero : inputReportero.value,
                asignado: inputAsignado.value,
                descripcion: inputDescripcion.value,
                rutinaTrabajo: inputRutinaTrabajo.value,
                fechaAviso: inputFechaAviso.value,
                fechaEjecucion: inputFechaEjecucion.value,
                reporteFalla: inputReporteFalla.value,
                trabajoEfectuar: inputTrabajoEjecutar.value,
                comentarios: inputComentarios.value
            }
            dataUpdate.fechaAviso = dataUpdate.fechaAviso.split('T')[0]
            dataUpdate.fechaEjecucion = dataUpdate.fechaEjecucion.split('T')[0]
            const response = fetch(`${urlLocal}update/${numeroOrden}`,{
                method: 'PATCH',
                headers: {
                    'Content-type':'json/application'
                },
                body: JSON.stringify(dataUpdate)
            })
        })        
    })
}