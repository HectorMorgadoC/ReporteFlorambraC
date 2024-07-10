import { buttonGet } from "./listData.js"
import { updateReport } from "./listUpdate.js"
import { reportDelete } from "./listDelete.js"
import { url } from "./constant.js"
import { messageError,selectDataIterar } from "./functionData.js"

export const functionList = (nameEndpoint, optionReport) => {
    const select = document.getElementById(nameEndpoint)
    const list = document.getElementById("list")

    document.addEventListener("DOMContentLoaded", async () => {
        try {
            const response = await fetch(
            `${url}${nameEndpoint}`,
            {
                method: "GET",
            }
            );
            if (response.ok) {
                const data = await response.json()
                if (data.error) {
                    messageError('Error de conexion')
                }
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
            } else {
                console.error("Error en la solicitud:", response.status)
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error)
        }
            
    })

    document.addEventListener('submit', async (e) => {
        e.preventDefault()
        const tableExist = document.querySelector('table')
        const formReports = document.querySelector('form')
        const reportPrint = document.querySelector('#reportPrint')

        if (formReports) {
            formReports.remove()
        }   
        if (tableExist) {
            tableExist.remove()
        }
        if (reportPrint) {
            reportPrint.remove()
        }

        const table = document.createElement('table')
        const titleTable = document.createElement('tr')
        titleTable.classList = 'title-table'
        const titleCode = document.createElement('td')
        titleCode.innerText = ' N_ Orden'
        const titleDescription = document.createElement('td')
        titleDescription.innerText = ' Descripcion_maquina'
        const titleReport = document.createElement('td')
        titleReport.innerText = ' Reportero'
        const titleAsigned = document.createElement('td')
        titleAsigned.innerText = 'Asignado'
        const titleDateWarning = document.createElement('td')
        titleDateWarning.innerText = 'Fecha de aviso'
        const titleDateExecute = document.createElement('td')
        titleDateExecute.innerText = 'Fecha de ejecucion'
        const titleReportFault = document.createElement('td')
        titleReportFault.innerText = 'Reporte de falla'
        const buttonTitle = document.createElement('td')
        buttonTitle.innerHTML = 'Opciones'

        titleTable.appendChild(titleCode)
        titleTable.appendChild(titleDescription)
        titleTable.appendChild(titleReport)
        titleTable.appendChild(titleAsigned)
        titleTable.appendChild(titleDateWarning)
        titleTable.appendChild(titleDateExecute)
        titleTable.appendChild(titleReportFault)
        titleTable.appendChild(buttonTitle)
        table.appendChild(titleTable)

        const valueUrl = await select.value;

        try {
            const response = await fetch(`${url}${nameEndpoint}/${valueUrl}`,
            { method:'GET'});

            const data = await response.json();
            
            for(let result of data){
                const listResult = document.createElement('tr')
                const numeroOrden = document.createElement('tr')
                const descripcion_maquina = document.createElement('td')
                const reportero = document.createElement('td')
                const asignado = document.createElement('td')
                const fechaAviso = document.createElement('td')
                const fechaEjecucion = document.createElement('td')
                const reporteFalla = document.createElement('td')
                const buttonTable = document.createElement('td')
                const buttonReport = document.createElement('button')
                const buttonUpdate = document.createElement('button')
                const buttonDelete = document.createElement('button')
                
                buttonTable.classList.add('table-button')
                buttonReport.innerText = 'Imprimir'
                buttonUpdate.innerText = 'Modificar'
                buttonDelete.innerText = 'eliminar'
                buttonTable.appendChild(buttonReport)
                buttonTable.appendChild(buttonUpdate)
                buttonTable.appendChild(buttonDelete)

                numeroOrden.innerHTML = result.numeroOrden
                descripcion_maquina.innerText = result.descripcion
                reportero.innerText = result.reportero
                asignado.innerText =   result.asignado
                fechaAviso.innerText = result.fechaAviso.split('T',1)
                fechaEjecucion.innerText = result.fechaEjecucion.split('T',1)
                reporteFalla.innerText = result.reporteFalla

                listResult.appendChild(numeroOrden)
                listResult.appendChild(descripcion_maquina)
                listResult.appendChild(reportero)
                listResult.appendChild(asignado)
                listResult.appendChild(fechaAviso)
                listResult.appendChild(fechaEjecucion)
                listResult.appendChild(reporteFalla)
                listResult.appendChild(buttonTable)
                table.appendChild(listResult)
                list.appendChild(table)

                buttonGet(buttonReport,result)
                updateReport(buttonUpdate,result)
                reportDelete(buttonDelete,result.numeroOrden)
            }
        } catch (error) {
            console.error( 'Error al realizar peticion: '+ error)
        }
    })
}
