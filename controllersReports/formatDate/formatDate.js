export function formatDate (date) {
    let partsDay = date.split("/")
    let day = partsDay[0]
    let month = partsDay[1]
    let year = partsDay[2]
    let newFormatDate = `${year}-${month}-${day}`
    return newFormatDate
}

export function testFormatDate(date) {
    let formatDate = /\d\d\d\d-\d\d-\d\d/
    let partsDate = fecha.split('-')
    for (let i = 0; i < partsDate.length;i++) {
        partsDate[i] = Number(partsDate[i])
    }
    if (partsDate[0] <= 1900 || partsDate[0] > 2200) {
        alert('formato año incorrecto')
        return
    } 

    if (partsDate[1] <= 0 || partsDate[1] > 12) {
        alert('formato mes incorrecto')
        return
    }
    if (partsDate[2] <= 0 || partsDate[2] >  31) {
        alert ('formato dia incorrecto')
        return
    }
    if (formatDate.test(date)) {
        return date
    } else {
        alert('No es el fomato ')
        return 
    }
}
