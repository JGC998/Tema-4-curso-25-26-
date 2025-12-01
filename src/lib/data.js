'use server'

import { db } from '@/lib/db'



// BASE DE DATOS

    // AUTORES

export async function obtenerAutoresDB(query) {
    const sql = 'select * from `autores` where nombre like ?';
    const values = ["%" + query + "%"]
    const [autores] = await db.query(sql, values);

    // Introducimos un retardo artificial (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    return autores
}


export async function obtenerAutorDB(id) {
    const sql = 'select * from autores where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}

    // LIBROS

export async function obtenerLibrosDB(query) {
    const sql = 'select * from `libros` where titulo like ?'; // Búsqueda por título
    const values = ["%" + query + "%"]
    const [libros] = await db.query(sql, values);

    // Introducimos un retardo artificial (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    return libros
}


export async function obtenerLibroDB(id) {
    const sql = 'select * from libros where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API

    // AUTORES

export async function obtenerAutoresAPI(query) {
    const response = await fetch('http://localhost:3001/autores')
    const autores = await response.json()

    // No se requiere retardo artificial en la consulta de listado por API
    
    // Filtramos manualmente por query
    return autores.filter(a => a.nombre.toLowerCase().includes(query.toLowerCase()))
}


export async function obtenerAutorAPI(id) {
    const response = await fetch('http://localhost:3001/autores/' + id)
    if (!response.ok) return null
    const autor = await response.json()

    // Introducimos un retardo artificial (2 segundos) para simular carga
    await new Promise(resolve => setTimeout(resolve, 2000))

    return autor
}


    // LIBROS

export async function obtenerLibrosAPI(query) {
    const response = await fetch('http://localhost:3001/libros')
    const libros = await response.json()

    // No se requiere retardo artificial en la consulta de listado por API

    // Filtramos manualmente por query
    return libros.filter(l => l.titulo.toLowerCase().includes(query.toLowerCase()))
}


export async function obtenerLibroAPI(id) {
    const response = await fetch('http://localhost:3001/libros/' + id)
    if (!response.ok) return null
    const libro = await response.json()

    // Introducimos un retardo artificial (2 segundos) para simular carga
    await new Promise(resolve => setTimeout(resolve, 2000))

    return libro
}