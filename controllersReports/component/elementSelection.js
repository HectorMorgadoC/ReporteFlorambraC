
export function elementSelectInput(titleText,attributeName,valueElement,form) {
    const title = document.createElement('h4')
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.setAttribute('type','text')
    input.setAttribute('required','required')
    input.setAttribute('name',attributeName)
    title.innerHTML = titleText
    label.innerHTML = valueElement
    input.value = valueElement

    form.appendChild(title)
    form.appendChild(label)
    form.appendChild(input)

    return input.value
}

export function elementSelectOption(titleText,attributeName,attributeId,valueElement,form,data,metodo) {
    const title = document.createElement('h4')
    const label = document.createElement('label')
    const input = document.createElement('select')
    input.setAttribute('required','required')
    input.setAttribute('name',attributeName)
    input.setAttribute('id',attributeId)
    for (let report of data) {
        const option = document.createElement('option')
        option.innerHTML = report[metodo]
        input.appendChild(option)
    }
    title.innerHTML = titleText
    label.innerHTML = valueElement
    form.appendChild(title)
    form.appendChild(label)
    form.appendChild(input)

    return input.value
}

export function elementSelectDateTime(titleText,attributeName,valueElement,form) {
    const title = document.createElement('h4')
    const label = document.createElement('label')
    label.setAttribute('for','datetimeWarning')
    const input = document.createElement('input')
    input.setAttribute('type','datetime')
    input.setAttribute('id','datetimeWarning')
    input.setAttribute('required','required')
    input.setAttribute('name',attributeName)
    title.innerHTML = titleText
    label.innerHTML = valueElement.split('T',1)
    input.value = valueElement.split('T',1)
    form.appendChild(title)
    form.appendChild(label)
    form.appendChild(input)

    return input.value
}