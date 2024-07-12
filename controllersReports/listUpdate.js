import { url } from "./constant.js"
import { testFormatDate } from "./formatDate/formatDate.js"
import { elementSelectInput, elementSelectOption, elementSelectDateTime } from "./component/elementSelection.js"
let data = JSON.parse(localStorage.getItem('data'))
let [ selectReportero, selectDescripcion,  selectTrabajoEfectuar ,selectAsignado ]  = data

export function updateReport(data){

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

        const list = document.querySelector('#list')
        const table = document.querySelector('table')
        const form = document.createElement('form')
        const update = document.createElement('button')
        update.innerText = 'Modificar'

        elementSelectInput('Numero de orden','numeroOrden',numeroOrden,form)
        elementSelectOption('Reportero','reportero','reports',reportero,form,selectReportero,'nombre')
        elementSelectOption('Asignado','asignado','assigned',asignado,form,selectAsignado,'nombre')
        elementSelectOption('Descripcion de maquina','descripcion','description',descripcion,form,selectDescripcion,'descripcion')
        elementSelectOption('Rutina de trabajo','rutinaTrabajo','workroutine',rutinaTrabajo,form,selectTrabajoEfectuar,'descripcion')
        elementSelectDateTime('Fecha de aviso','fechaAviso',fechaAviso,form)
        elementSelectDateTime('Fecha de ejecucion','fechaEjecucion',fechaEjecucion,form)
        elementSelectInput('Reporte falla','reporteFalla',reporteFalla,form)
        elementSelectInput('Trabajo a efectuar','trabajoEfectuar',trabajoEfectuar,form)
        elementSelectInput('Comentarios','comentarios',comentarios,form)

        if(table){
            table.remove()
        }

        form.appendChild(update)
        list.appendChild(form)

        form.addEventListener('submit',async(e) => {
            e.preventDefault()
            const formData = new FormData(form)
            const dataUpdate = Object.fromEntries(formData)
            testFormatDate(dataUpdate.fechaAviso)
            testFormatDate(dataUpdate.fechaEjecucion)
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
}

