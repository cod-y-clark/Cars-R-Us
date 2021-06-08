import { getOrders, getPaints, getInteriors, getTechnologies, getWheels, getTypes } from './database.js'

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()
const types = getTypes()

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
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    const total = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price
    if (foundType.id === 2) {
        let totalString = total * 1.5
        return `<li>Order #${order.id} was placed on ${order.timestamp}. Total cost: $${totalString}</li>`
    }
    else if (foundType.id === 3) {
        let totalString = total * 2.25
        return `<li>Order #${order.id} was placed on ${order.timestamp}. Total cost: $${totalString}</li>`
    }
    else {
        let totalString = total 
        return `<li>Order #${order.id} was placed on ${order.timestamp}. Total cost: $${totalString}</li>`
    }
    
    // return `<li>
    //         Order #${order.id} was placed on ${order.timestamp}. Total cost ${total.toLocaleString('en-US', {
    //             style: 'currency',
    //             currency: 'USD'
    //         })}
    //         </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = '<ul>'
    const carChoices = orders.map(buildCarOrder)
    html += carChoices.join('')
    html += '</ul>'
    return html
}