import axios from "axios";

export function getGroupeRestaurant(groupe) {
    return(new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurants/groupe/${groupe}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

export function getOneRestaurant(slug) {
    return(new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurants/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch()
    }))
}

export function getMenuForOneRestaurant(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/menus/${etablissement}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

export function getCategorieMenu(restaurant) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/categories/${restaurant}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}

export function getSingleMenu(slug) {
    return (new Promise(resolve => {
        axios.get(`http://localhost:8000/api/restaurant/${slug}`)
        .then(res => res.status === 200 && res.data)
        .then(resolve)
        .catch(console.error)
    }))
}