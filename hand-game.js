function selectMe(selector) {
    const isElementExist = document.querySelectorAll('.bg-selected')
    let isSame = false
    isElementExist.forEach((element) => {
        const id = element.id
        const prefix = id.split('-')[0]

        const prefixSelector = selector.split('-')[0]

        if (prefixSelector === '#${prefeix}') {
            isSame = true
        }
    })

    if (isSame) {
        return
    }

    const element = document.querySelector(selector)
    element.className += "bg-selected"

    const isSelected = document.querySelectorAll('.bg-selected')
    const selectOne = isSelected[0].id
    const objOfOne = changeToObject(selectOne)
    const me = objOfOne['me']
}

const changeToObject = (strSelected) => {
    const arrOfSelected = strSelected.split('-')

    if (arrOfSelected[0] === 'me') {
        return {
            me: arrOfSelected[1]
        }
    } else {
        return {
            computer: arrOfSelected[1]
        }
    }
}

// Aturan Game
function getRules(me, computer) {
    if (me === computer) {
        return "DRAW"
    } else if (me === 'batu'){
        return computer === 'gunting' ? "I WIN" : "COMPUTER WIN"
    } else if (me === 'kertas') {
        return computer === 'batu' ? "I WIN" : "COMPUTER WIN"
    } else if (me === 'gunting') {
        return computer === 'kertas' ? "I WIN" : "COMPUTER WIN"
    }
    return "PILIHAN TIDAK TERSEDIA"
};

// Pilihan Random Computer
function pickComputer() {
    const pilihan = new Array("batu","gunting","kertas");
    const randomNum = Math.floor(Math.random() * pickComputer.length);
    return pickComputer[randomNum]

    document.querySelector('#com-${result}').className += "bg-selected"
}

const refresh = () => {
    document.location.reload();
}