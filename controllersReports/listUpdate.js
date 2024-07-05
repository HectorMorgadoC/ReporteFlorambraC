import { url } from "./constant.js"
import { requestFeth,selectDataPush,dateFormat } from "./functionData.js"
let [ selectReportero,selectAsignado,selectDescripcion,selectTrabajoEfectuar ]  = [ [],[],[],[] ]
let data = localStorage.getItem('data')

    document.addEventListener('DOMContentLoaded', async () => {
        requestFeth(data,url,selectDataPush)
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
        inputNumeroOrden.setAttribute('required','required')
        titleNumeroOrden.innerHTML = 'Numero de orden: '
        labelNumeroOrden.innerHTML = numeroOrden
        inputNumeroOrden.value = numeroOrden

        const titleReportero = document.createElement('h4')
        const labelReportero = document.createElement('label')
        const inputReportero = document.createElement('select')
        inputReportero.setAttribute('required','required')
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
        inputAsignado.setAttribute('required','required')
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
        inputDescripcion.setAttribute('required','required')
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
        inputRutinaTrabajo.setAttribute('required','required')
        for (let rutinaTrabajo of selectTrabajoEfectuar[0]) {
            const optionRutinaTrabajo = document.createElement('option')
            optionRutinaTrabajo.innerHTML = rutinaTrabajo.descripcion
            inputRutinaTrabajo.appendChild(optionRutinaTrabajo)
        }
        titleRutinaTrabajo.innerHTML = 'Rutina de trabajo: '
        labelRutinaTrabajo.innerHTML = rutinaTrabajo

        const  titleFechaAviso = document.createElement('h4')
        const labelFechaAviso = document.createElement('label')
        labelFechaAviso.setAttribute('for','datetimeWarning')
        const inputFechaAviso = document.createElement('input')
        inputFechaAviso.setAttribute('type','datetime')
        inputFechaAviso.setAttribute('id','datetimeWarning')
        inputFechaAviso.setAttribute('required','required')
        titleFechaAviso.innerHTML = 'Fecha Aviso: '
        labelFechaAviso.innerHTML = fechaAviso.split('T',1)
        inputFechaAviso.value = fechaAviso.split('T',1)

        const TitleFechaEjecucion = document.createElement('h4')
        const labelFechaEjecucion = document.createElement('label')
        labelFechaEjecucion.setAttribute('for','datetimeExecute')
        const inputFechaEjecucion = document.createElement('input')
        inputFechaEjecucion.setAttribute('type','datetime')
        inputFechaEjecucion.setAttribute('id','datetimeExecute')
        inputFechaEjecucion.setAttribute('required','required')
        TitleFechaEjecucion.innerHTML = 'Fecha de ejecucion: '
        labelFechaEjecucion.innerHTML = fechaEjecucion.split('T',1)
        inputFechaEjecucion.value = fechaEjecucion.split('T',1)

        const titleReporteFalla = document.createElement('h4')
        const labelReporteFalla = document.createElement('label')
        const inputReporteFalla = document.createElement('input')
        inputReporteFalla.setAttribute('required','required')
        inputReporteFalla.setAttribute('type','text')
        titleReporteFalla.innerHTML = 'Reporte de Falla: '
        labelReporteFalla.innerHTML = reporteFalla
        inputReporteFalla.value = reporteFalla

        const TitleTrabajoEjecutar = document.createElement('h4')
        const labelTrabajoEjecutar = document.createElement('label')
        const inputTrabajoEjecutar = document.createElement('input')
        inputTrabajoEjecutar.setAttribute('required','required')
        inputTrabajoEjecutar.setAttribute('type','text')
        TitleTrabajoEjecutar.innerHTML = 'Trabajo a efectuar: '
        labelTrabajoEjecutar.innerHTML = trabajoEfectuar
        inputTrabajoEjecutar.value = trabajoEfectuar

        const titleComentarios = document.createElement('h4')
        const labelComentarios = document.createElement('label')
        const inputComentarios = document.createElement('input')
        inputComentarios.setAttribute('type','text')
        titleComentarios.innerHTML = 'Comentarios: '
        labelComentarios.innerHTML = comentarios
        inputComentarios.value = comentarios

        const update = document.createElement('button')
        update.innerText = 'Modificar'

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
        form.appendChild(titleFechaAviso)
        form.appendChild(labelFechaAviso)
        form.appendChild(inputFechaAviso)
        form.appendChild(TitleFechaEjecucion)
        form.appendChild(labelFechaEjecucion)
        form.appendChild(inputFechaEjecucion)
        form.appendChild(titleReporteFalla)
        form.appendChild(labelReporteFalla)
        form.appendChild(inputReporteFalla)
        form.appendChild(TitleTrabajoEjecutar)
        form.appendChild(labelTrabajoEjecutar)
        form.appendChild(inputTrabajoEjecutar)
        form.appendChild(titleComentarios)
        form.appendChild(labelComentarios)
        form.appendChild(inputComentarios)
        form.appendChild(update)
        list.appendChild(form)

        update.addEventListener('submit',async (e) => {
            e.preventDefault()
        })

        update.addEventListener('click',async() => {
            // con la funcion dateFormat toma el valor de las fechas y las compara con un formato, si no lo cumple retorna todo
            dateFormat(inputFechaEjecucion.value)
            dateFormat(inputFechaAviso.value)
            
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
            try {
                const response = fetch(`${url}update/${numeroOrden}`,{
                method: 'PATCH',
                headers: {
                    'Content-type':'json/application'
                },
                body: JSON.stringify(dataUpdate)
            })
            } catch (error) {
                console.log(`Error al modificar: ${error}`)
            }
            
        })        
    })
}

