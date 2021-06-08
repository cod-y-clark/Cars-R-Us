import { getTypes, setType } from './database.js'

document.addEventListener('change', (event) => {
    if (event.target.name === 'type') {
        setType(parseInt(event.target.value))
    }
})

const types = getTypes()

export const VehicleTypes = () => {
    let html ='<ul>'
    const carChoices = types.map(type => {
        return `<li>
                <input type='radio' name='type' value='${type.id}' /> ${type.type}`
    })
    html += carChoices.join('')
    html += '</ul>'
    return html
}