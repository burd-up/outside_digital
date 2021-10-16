export function payment(number:number) {
    if(number === 0) return []
    let result = []
    const payInYear = Math.floor((number*12)*0.13)
    if(payInYear>260000){
        result.push(260000)
    } else {
        const count = Math.floor(260000/payInYear)
        for (let i = 0; i < count; i++) {
            result.push(payInYear)
        }
        result.push(260000 - count*payInYear)
    }
    return result.map(el => {

        let currentElement = String(el).split('')
        currentElement.splice(-3,0, ' ')
        currentElement.push(' рублей ')
        return currentElement.join('')

    })
}

export function getEndPhrase(number:number) {
    const array = String(number).split('')
    const endElement = array[array.length-1]
    if(number === 2) return `во ${number}-ой год`
    if(number > 10 && number < 20) return `в ${number}-ый год`
    if(endElement === '0' || endElement ==='1' || endElement ==='4' || endElement ==='5' || endElement ==='9'){
        return `в ${number}-ый год`
    } else if(endElement === '2' || endElement ==='6' || endElement ==='7' || endElement ==='8' ){
        return `в ${number}-ой год`
    } else if(endElement === '3'){
        return `в ${number}-ий год`
    }
}