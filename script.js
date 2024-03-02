const circle = document.querySelector('[data-js="circle"]')
const adviceId = document.querySelector('[data-js="adviceId"]')
const adviceText = document.querySelector('[data-js="adviceText"]')

const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')

        if (!response.ok) {
            throw new Error("We cant's get your advice, sorry :(")
        }

        const advice = await response.json()
        return advice
    } catch(err) {
        adviceId.textContent = 'Error 404'
        adviceText.textContent = err.message
    }
}

const showAdvice = async () => {
    const { slip: adviceData } = await getAdvice()
    const { id, advice } = adviceData
    console.log(id, advice)

    adviceId.textContent = `ADVICE #${id}`
    adviceText.textContent = `"${advice}"`
}

circle.addEventListener('click', showAdvice)

showAdvice()