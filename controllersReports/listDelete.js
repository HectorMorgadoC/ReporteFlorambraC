import { url } from "./constant.js"
import { elementDelete } from "./functionData.js";

export async function reportDelete(button,number){
    button.addEventListener('click',async () => {
        elementDelete();
        const buttonYes = document.querySelector('#yes')
        const buttonNo = document.querySelector('#no')

        buttonYes.addEventListener ('click', async () => {
            const response = await fetch(`${url}delete/${number}`,{
            method: 'POST',
                headers:{
                    'Content-type':'json/application'
                }
            })
            const data = await response.json()

            if (data[0].affectedRows === 1) {
                window.location.href = '../index.html'
                alert('Reporte eliminado')
            }else {
                alert('Problemas en eliminar el reporte')
            }
        })

        buttonNo.addEventListener('click',() => {
            window.location.href = `../index.html`
        })
    })
}