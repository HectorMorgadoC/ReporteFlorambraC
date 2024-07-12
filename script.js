import { url } from "./controllersReports/constant.js"
import { request,requestFeth } from "./controllersReports/funtionsRequest/request.js"
import { selectData } from "./controllersReports/selectData/selectData.js"
import { formatDate } from "./controllersReports/formatDate/formatDate.js"

const formData = document.getElementById('formdata')
let data = localStorage.getItem('data')

document.addEventListener('DOMContentLoaded', async () => {
    requestFeth(data,url,selectData)
})

formData.addEventListener('submit',async(e) => {
    e.preventDefault()
    const data = Object.fromEntries( new FormData(e.target))
    data.fechaAviso = formatDate(data.fechaAviso)
    data.fechaEjecucion = formatDate(data.fechaEjecucion)
    request(data,url)    
})

