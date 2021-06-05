import { getWheels, setWheel } from './database.js'

document.addEventListener('change', (event) => {
    if (event.target.name === 'wheel') {
        setWheel(parseInt(event.target.value))
    }
})

const wheels = getWheels()

export const Wheels = () => {
    let html = '<ul>'
    const carChoices = wheels.map(wheel => {
        return `<li>
                <input type='radio' name='wheel' value='${wheel.id}' /> ${wheel.type}
                </li>`
    })
    html += carChoices.join('')
    html += '</ul>'
    return html
}