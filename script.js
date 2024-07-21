import { url } from "./controllersReports/constant.js"
import { request,requestFeth } from "./controllersReports/funtionsRequest/request.js"
import { selectData } from "./controllersReports/selectData/selectData.js"
import { formatDate } from "./controllersReports/formatDate/formatDate.js"

const formData = document.getElementById('formdata')
const header = document.querySelector('header')
let data = localStorage.getItem('data')

document.addEventListener('DOMContentLoaded', async () => {
    requestFeth(data,url,selectData)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
})

formData.addEventListener('submit',async(e) => {
    e.preventDefault()
    const data = Object.fromEntries( new FormData(e.target))
    data.fechaAviso = formatDate(data.fechaAviso)
    data.fechaEjecucion = formatDate(data.fechaEjecucion)
    request(data,url)    
})

