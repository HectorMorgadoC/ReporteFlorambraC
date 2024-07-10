import { url } from "./constant.js"
import { requestFeth,dateFormat,elementSelectInput, elementSelectOption, elementSelectDateTime, selectData } from "./functionData.js"
let data = localStorage.getItem('data')
let [ selectReportero, selectDescripcion,  selectTrabajoEfectuar ,selectAsignado ]  = [ [],[],[],[] ]

    document.addEventListener('DOMContentLoaded', async () => {
        const response = await requestFeth(data,url,selectData);
        [ selectReportero, selectDescripcion,  selectTrabajoEfectuar ,selectAsignado ] = response 
    })



export function updateReport(button,data){

    button.addEventListener('click',(e) => {
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
        elementSelectOption('Reportero','reportero',reportero,form,selectReportero,'nombre')
        elementSelectOption('Asignado','asignado',asignado,form,selectAsignado,'nombre')
        elementSelectOption('Descripcion de maquina','descripcion',descripcion,form,selectDescripcion,'descripcion')
        elementSelectOption('Rutina de trabajo','rutinaTrabajo',rutinaTrabajo,form,selectTrabajoEfectuar,'descripcion')
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
            // con la funcion dateFormat toma el valor de las fechas y las compara con un formato, si no lo cumple retorna todo
            e.preventDefault()
            const formData = new FormData(form)
            const dataUpdate = Object.fromEntries(formData)
            dateFormat(dataUpdate.fechaAviso)
            dateFormat(dataUpdate.fechaEjecucion)
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

