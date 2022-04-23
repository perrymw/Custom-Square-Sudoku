function greatestFactorPair(num) {
    const factors = [...Array(Math.floor(Math.sqrt(num))+1).keys()]
    return factors.map(n=>num%n===0?[n,Math.floor(num/n)]:'').filter(x=>typeof x !== 'string').splice(-1)[0]
}

function evalArray(array) {
    return array.map(rowArray => rowArray.sort().map((element, index) => element == index+1 ? element : "").filter(x => typeof x != 'string'))
}
function checkRow(submission) {
    const finalEval = evalArray(submission)
    for (let i = 0; i < submission.length; i++){
        if (finalEval[i].length != submission.length) {
            return false
        }
    }
    return true
}

function checkColumn(submission) {
    const column = submission.map((array, index) => array.map((arrayElement, jindex) => submission[jindex][index]))
    return checkRow(column)
}


function checkBoxes(submission) {
    const stepsAndSize = greatestFactorPair(submission.length)
    const width = stepsAndSize[0]
    const across = stepsAndSize[1]
    let boxArray = []
    for (let i = 0; i < submission.length; i+=width){
        for (let j = 0; j < submission.length; j+=across){
            let innerBox = []
            for (let k = 0; k < width; k++){
                if (innerBox.length) {
                        innerBox = innerBox.concat(submission[i+k].slice(j, j+across))
                }
                else {
                    innerBox = submission[i+k].slice(j, j+across)
                }
                }
            boxArray.push(innerBox)
        }
    }
    return checkRow(boxArray)
}

function sudokuSolution(submission, size) {
    
}

