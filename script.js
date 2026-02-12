
const resultado = document.querySelector('.resultado')

const humanoPts = document.querySelector('#humano-pts')

const pcPts = document.querySelector('#pc-pts')


let humano = 0
let pc = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())



}


const playMachine = () => {
    const options = ['pedra', 'papel', 'tesoura']

    const randomNumber = Math.floor(Math.random() * 3)


    return options[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        resultado.innerHTML = 'Empate'
    }
    else if ((human === 'papel' && machine === 'pedra') || (human === 'pedra' && machine === 'tesoura') || (human === 'tesoura' && machine === 'papel')) {

        humano++
        humanoPts.innerHTML = humano
        resultado.innerHTML = 'Você Ganhou!'

    }

    else {
        pc++
        pcPts.innerHTML = pc
        resultado.innerHTML = 'Você Perdeu!'
    }
}