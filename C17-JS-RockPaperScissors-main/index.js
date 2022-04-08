const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector(['data - final - column '])
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [{
        name: 'rock',
        emoji: '✊',
        beats: 'scissor'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissor',
        emoji: '✌️',
        beats: 'paper'
    }
]


selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = IsWinner(selection, computerSelection)
    const computerWinner = IsWinner(computerSelection, selection)
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(computerSelection, yourWinner)
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) { scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1 }

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function IsWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = math.floor(math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]

}