export function elementDelete () {
    const section = document.querySelectorAll('section')
    const main = document.querySelector('main')
    const container = document.createElement('div')
    container.classList = ' MessageDelete'
    const title = document.createElement('h2')
    title.innerHTML = 'Desea eliminar este reporte'
    const buttonYes = document.createElement('button')
    buttonYes.innerHTML = 'SI'
    buttonYes.setAttribute('id','yes')
    const buttonNo = document.createElement('button')
    buttonNo.innerHTML = 'NO'
    buttonNo.setAttribute('id','no')

    if(section) {
        for(let element of section) {
            element.remove()
        }
        container.appendChild(title)
        container.appendChild(buttonYes)
        container.appendChild(buttonNo)
        main.appendChild(container)
    }
    
}