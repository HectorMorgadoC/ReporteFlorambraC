export async function reportDelete(button,number){
    button.addEventListener('click',async () => {
        const response = await fetch(`https://app-a2f02e86-b18c-49d6-a13b-2eacce375b81.cleverapps.io/delete/${number}`,{
            method: 'POST',
            headers:{
                'Content-type':'json/application'
            }
        })
        const data = JSON.parse(await response.json());

        const redirect = (data[0].affectedRows === 1) ? window.location.href = '../index.html' : console.log('Problemas en eliminar el reporte');

    })
}