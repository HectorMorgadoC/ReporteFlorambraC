import { messageError } from "../messageError/messageError.js"

export async function request(dataReport,url){
    try {
        const response = await fetch(url, {
        method : 'post',
        header: {
            'Content-Type':'Application/json'
        },
        body : JSON.stringify(dataReport)
    })
        console.log(response)
        let data = await response.json()
        const redirect = (data[0].affectedRows === 1) ? window.location.href = 'https://hectormorgadoc.github.io/ReporteFlorambraC/' : console.log('Problemas al registrar el reporte')
    } catch (error) {
        messageError('Problemas para cargar reporte')
        throw new Error('Problemas para cargar el reporte: ',error)
    }
} 

export async function requestFeth(data,url,metodo) {
    if(data === null) {
        try {
            const dataReport = await fetch(url, {
            method: 'GET'
            });   

            data = await dataReport.json()
            localStorage.setItem('data',JSON.stringify(data))
            if (dataReport.ok) {
                metodo(data)
                return data
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
        metodo(data)
        return data
        
    }
}