import { addOrder } from './database.js'
import { Orders } from './Orders.js'
import { PaintColors } from './PaintColors.js'
import { Interiors } from './Interiors.js'
import { Tech } from './Tech.js'
import { Wheels } from './Wheels.js'
import { VehicleTypes } from './VehicleTypes.js'
 
document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith('order')){
            addOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <header class="header">
            <h1 class='title'>Cars 'R Us</h1>
        </header>
        
        <article class='choices'>
            <section class='choices__paints options'>
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class='choices__interiors options'>
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class='choices__technologies options'>
                <h2>Technology Packages</h2>
                ${Tech()}
            </section>
            <section class='choices__wheels options'>
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class='choices__vehicle__types options'>
                <h2>Vehicle Types</h2>
                ${VehicleTypes()}
        </article>

        <article>
            <button id='order' class='button'>Order Car</button>
        </article>

        <article class='customOrders'>
            <h2>Car Sales</h2>
            ${Orders()}
        </article>
    `
}