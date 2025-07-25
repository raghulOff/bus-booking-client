// ENDPOINTS FILE

export const BUS_ENDPOINTS = {
    getSearchBuses: '/bus/get-buses',
    getAllBuses: '/bus/get-all-buses',
    addBus: '/bus/add-bus',
    deleteBus: '/bus/delete-bus',
    updateBus: '/bus/update-bus',
    seatType: '/bus/seat-type',
}

export const CITY_ENDPOINTS = {
    getAllCities: '/city/get-cities',
    addCity: '/city/add-city',
    getLocationPoints: '/location/get-schedule-locations',
    deleteCity: '/city/delete-city',
    addLocation: '/location/add-location',
    getCityLocations: '/location',
};


export const ROUTE_ENDPOINTS = {
    addRoute: '/route/add-route',
    getAllRoutes: '/route/get-routes',
    deleteRoute: '/route/delete-route',
    updateRoute: '/route/update-route'
}

export const SCHEDULE_ENDPOINTS = {
    addSchedule: '/schedule/add-schedule',
    getAllSchedules: '/schedule/get-schedules',
    getScheduleDetails: '/schedule/:id/details',
    updateSchedule: '/schedule/update',
    cancelSchedule: '/schedule',
}

export const USER_ENDPOINTS = {
    signup: '/user/signup',
    login: '/user/login',
    logout: '/user/logout',
    getRoles: '/user/get-roles',
    addUser: '/user/add-user',
}

export const GENERAL_ENDPOINTS = {
    homePage: '/user/home',
    adminHomePage: '/user/admin-home',
    devHomePage: '/user/dev-home'
}

export const BOOKING_ENDPOINTS = {
    bookSeats: '/bookings/book-seats',
    getUserBookings: '/bookings/get-user-bookings',
}

export const CANCEL_ENDPOINTS = {
    cancelTicket: '/bookings/cancel-passenger-ticket',
}