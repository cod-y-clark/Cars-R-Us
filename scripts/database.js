// This module is for all of the data. 
// // It holds the arrays of the car selections, and stores the state. 
// // There are functions that are exported to let the other modules access the car selections, and set the state of the app.

const database = {
    paints: [
        { id: 1, color: 'Silver', price: 400 },
        { id: 2, color: 'Midnight Blue', price: 600 },
        { id: 3, color: 'Firebrick Red', price: 800 },
        { id: 4, color: 'Spring Green', price: 900 }
    ],
    interiors: [
        { id: 1, type: 'Beige Fabric', price: 200 },
        { id: 2, type: 'Charcoal Fabric', price: 200 },
        { id: 3, type: 'White Leather', price: 400 },
        { id: 4, type: 'Black Leather', price: 400 }
    ],
    technologies: [
        { id: 1, package: 'Basic Package (basic sound system)', price: 1000 },
        { id: 2, package: 'Navigation Package (includes integrated navigation controls)', price: 1500 },
        { id: 3, package: 'Visibility Package (includes side and rear cameras)', price: 1700 },
        { id: 4, package: 'Ultra Package (includes navigation and visibility packages)', price: 2000 }
    ],
    wheels: [
        { id: 1, type: '17-inch Pair Radial', price: 400 },
        { id: 2, type: '17-inch Pair Radial Black', price: 400 },
        { id: 3, type: '18-inch Pair Spoke Silver', price: 500 },
        { id: 4, type: '18-inch Pair Spoke Black', price: 500 }
    ],
    types: [
        { id: 1, type: 'Car' },
        { id: 2, type: 'SUV' },
        { id: 3, type: 'Truck' }
    ],
    orders: [
        // {
        //     id: 0,
        //     paintId: 1,
        //     interiorId: 1,
        //     technologyId: 1,
        //     wheelId: 1,
        //     timestamp: 11111111
        // }
    ],
    // this will store the temporary state while a customer is making selections
    carOrders: {},
}

// these functions will be exported so that other modules can invoke these functions to pull the arrays of car selections
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

// this function will be exported so that other modules can invoke it to pull purchases that are placed in the app
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

// these functions will be exported so that other modules can invoke these functions to temporarily set the state of the app while a customer makes car selections
export const setPaint = (id) => {
    database.carOrders.paintId = id
}

export const setInterior = (id) => {
    database.carOrders.interiorId = id
}

export const setTechnology = (id) => {
    database.carOrders.technologyId = id
}

export const setWheel = (id) => {
    database.carOrders.wheelId = id
}

export const setType = (id) => {
    database.carOrders.typeId = id
}

// This function will change the permanent state to include our new car order, and will then reset the state of the carOrders object so it will be ready for the next order. 
// export const addOrder = () => {
//     const newOrder = {...database.carOrders}
//     const lastIndex = database.orders.length - 1
//     newOrder.id = database.orders[lastIndex].id + 1 
//     newOrder.timestamp = Date.now()
//     database.orders.push(newOrder)
//     database.carOrders = {}
//     document.dispatchEvent(new CustomEvent('stateChanged'))
// }


export const addOrder = () => {
    const newOrder = {...database.carOrders}
    const lastIndex = database.orders.length - 1
    if (lastIndex === -1) {
        newOrder.id = 1
    }
    else {
        newOrder.id = database.orders[lastIndex].id + 1 
    }
    newOrder.timestamp = Date.now()
    database.orders.push(newOrder)
    database.carOrders = {}
    document.dispatchEvent(new CustomEvent('stateChanged'))
}