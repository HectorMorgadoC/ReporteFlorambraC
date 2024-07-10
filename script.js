import { url } from "./controllersReports/constant.js"
import { request,formatFecha,selectData,requestFeth } from "./controllersReports/functionData.js"

const formData = document.getElementById('formdata')
let data = localStorage.getItem('data')

document.addEventListener('DOMContentLoaded', async () => {
    requestFeth(data,url,selectData)
})

formData.addEventListener('submit',async(e) => {
    e.preventDefault()
    const data = Object.fromEntries( new FormData(e.target))
    data.fechaAviso = formatFecha(data.fechaAviso)
    data.fechaEjecucion = formatFecha(data.fechaEjecucion)
    request(data)    
})

