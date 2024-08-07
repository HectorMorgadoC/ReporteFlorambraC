import { url } from "./constant.js"

export async function reportDelete(button,number){
    button.addEventListener('click',async () => {
        const response = await fetch(`${url}delete/${number}`,{
            method: 'POST',
            headers:{
                'Content-type':'json/application'
            }
        })
        const data = JSON.parse(await response.json())

        const redirect = (data[0].affectedRows === 1) ? window.location.href = '../index.html' : console.log('Problemas en eliminar el reporte')
    })
}