import { getPaints, setPaint } from './database.js'

document.addEventListener('change', (event) => {
    if (event.target.name === 'paint') {
        setPaint(parseInt(event.target.value))
    }
})

const paints = getPaints()

export const PaintColors = () => {
    let html = '<ul>'
    const carChoices = paints.map(paint => {
        return `<li>
                <input type='radio' name='paint' value='${paint.id}' /> ${paint.color}
                </li>`
    })
    html += carChoices.join('')
    html += '</ul>'
    return html
}