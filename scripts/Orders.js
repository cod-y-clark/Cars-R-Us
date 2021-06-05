import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from './database.js'

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildCarOrder = (order) => {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const total = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price
    return `<li>
            Order #${order.id} was placed on ${order.timestamp}. Total cost ${total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })}
            </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = '<ul>'
    const carChoices = orders.map(buildCarOrder)
    html += carChoices.join('')
    html += '</ul>'
    return html
}