import { getInteriors, setInterior } from './database.js'

document.addEventListener('change', (event) => {
    if (event.target.name === 'interior') {
        setInterior(parseInt(event.target.value))
    }
})

const interiors = getInteriors()

export const Interiors = () => {
    let html = '<ul>'
    const carChoices = interiors.map(interior => {
        return `<li>
                <input type='radio' name='interior' value='${interior.id}' /> ${interior.type}
                </li>`
    })
    html += carChoices.join('')
    html += '</ul>'
    return html
}