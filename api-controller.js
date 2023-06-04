function getValue() {
    return document.getElementById('input').value
}

function WordCounter() {
    let words = getValue().split(' ')

    let listOfWordsAndNumber = {}
    words.forEach(element => {
        let count = 0;
        words.forEach(e => {
            if (e === element) {
                count++
            }
        })
        listOfWordsAndNumber[element] = count
    });
    let result = Object.entries(listOfWordsAndNumber).sort((a, b) => b[1] - a[1]).slice(0, 10)
    showResult(result)
    return result
}

function showResult(result) {
    let div = document.getElementById('result-div')
    clearDiv(div)
    let header = document.createElement('h2')
    header.innerHTML = 'Dessa ord förekommer flest gånger'
    div.appendChild(header)
    if (result.length > 0) {
        result.forEach(word => {
            let p = document.createElement('p')
            p.innerHTML = word
            div.appendChild(p)
        })
    }

}

function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

export default WordCounter
