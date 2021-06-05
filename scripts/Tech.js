import { getTechnologies, setTechnology } from './database.js'

document.addEventListener('change', (event) => {
    if (event.target.name === 'technology') {
        setTechnology(parseInt(event.target.value))
    }
})

const technologies = getTechnologies ()

export const Tech = () => {
    let html = '<ul>'
    const carChoices = technologies.map(technology => {
        return `<li>
                <input type='radio' name='technology' value='${technology.id}' /> ${technology.package}
                </li>`
    })
    html += carChoices.join('')
    html += '</ul>'
    return html
}