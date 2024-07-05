import { url } from "./controllersReports/constant.js"
import { request,formatFecha,messageError,selectData,requestFeth } from "./controllersReports/functionData.js"

const formData = document.getElementById('formdata')
let data = localStorage.getItem('data')

document.addEventListener('DOMContentLoaded', async () => {
    requestFeth(data,url,selectData)
    /*
    if(data === null) {
        try {
            const dataReport = await fetch(url, {
            method: 'GET'
            });   

            data = await dataReport.json()
            localStorage.setItem('data',JSON.stringify(data))
            if (dataReport.ok) {
                selectData(data)
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
        selectData(data)
    }
        */

})

formData.addEventListener('submit',async(e) => {
    e.preventDefault()

    const data = Object.fromEntries( new FormData(e.target))
    data.fechaAviso = formatFecha(data.fechaAviso)
    data.fechaEjecucion = formatFecha(data.fechaEjecucion)
    request(data)    
    
})

