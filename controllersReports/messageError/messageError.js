export function messageError(message) {
    const main = document.querySelector('main')
    const body = document.querySelector('body')
    const messageError = document.createElement('h3')
    if(main){
        main.remove()
        messageError.innerHTML = message
        body.appendChild(messageError)
    }        
}