'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";


// BASE DE DATOS

    // AUTORES

export async function nuevoAutorDB(formData) {
    const nombre = formData.get('nombre')
    const lugar_de_nacimiento = formData.get('lugar_de_nacimiento')
    const premio_nobel_str = formData.get('premio_nobel')

    // Convertir a booleano
    const premio_nobel = premio_nobel_str === 'on' ? true : false;
    
    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const sql = 'insert into autores (nombre, lugar_de_nacimiento, premio_nobel) values (?, ?, ?)'
    const values = [nombre, lugar_de_nacimiento, premio_nobel];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/autores-db')
}


export async function editarAutorDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const lugar_de_nacimiento = formData.get('lugar_de_nacimiento')
    const premio_nobel_str = formData.get('premio_nobel')

    // Convertir a booleano
    const premio_nobel = premio_nobel_str === 'on' ? true : false;

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const sql = 'update autores set nombre=?, lugar_de_nacimiento=?, premio_nobel=? where id=?'
    const values = [nombre, lugar_de_nacimiento, premio_nobel, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/autores-db')
}


export async function eliminarAutorDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from autores where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/autores-db')
}


    // LIBROS

export async function nuevoLibroDB(formData) {
    const titulo = formData.get('titulo')
    const editorial = formData.get('editorial')
    const fecha_de_publicacion = formData.get('fecha_de_publicacion')

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const sql = 'insert into libros (titulo, editorial, fecha_de_publicacion) values (?, ?, ?)'
    const values = [titulo, editorial, fecha_de_publicacion];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/libros-db')
}


export async function editarLibroDB(formData) {
    const id = formData.get('id')
    const titulo = formData.get('titulo')
    const editorial = formData.get('editorial')
    const fecha_de_publicacion = formData.get('fecha_de_publicacion')

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const sql = 'update libros set titulo=?, editorial=?, fecha_de_publicacion=? where id=?'
    const values = [titulo, editorial, fecha_de_publicacion, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/libros-db')
}


export async function eliminarLibroDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from libros where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/libros-db')
}




// API

    // AUTORES

export async function nuevoAutorAPI(formData) {
    const [nombre, lugar_de_nacimiento] = formData.values()
    const premio_nobel_str = formData.get('premio_nobel')
    const premio_nobel = premio_nobel_str === 'on' ? true : false;

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('http://localhost:3001/autores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, lugar_de_nacimiento, premio_nobel, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/autores-api')
}


export async function editarAutorAPI(formData) {
    const [id, nombre, lugar_de_nacimiento] = formData.values()
    const premio_nobel_str = formData.get('premio_nobel')
    const premio_nobel = premio_nobel_str === 'on' ? true : false;
    
    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('http://localhost:3001/autores/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, nombre, lugar_de_nacimiento, premio_nobel, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/autores-api')
}


export async function eliminarAutorAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/autores/' + id, { method: 'DELETE' })

    revalidatePath('/autores-api')
}


    // LIBROS

export async function nuevoLibroAPI(formData) {
    const [titulo, editorial, fecha_de_publicacion] = formData.values()

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('http://localhost:3001/libros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo, editorial, fecha_de_publicacion, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/libros-api')
}


export async function editarLibroAPI(formData) {
    const [id, titulo, editorial, fecha_de_publicacion] = formData.values()

    // Retardo de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('http://localhost:3001/libros/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, titulo, editorial, fecha_de_publicacion, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/libros-api')
}


export async function eliminarLibroAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/libros/' + id, { method: 'DELETE' })

    revalidatePath('/libros-api')
}


// AUTENTICACIÓN

const usuarios = [
    { nombre: 'ana', key: 'ana' },
    { nombre: 'eva', key: 'eva' },
]

export async function login(formData) {
    const LOGIN_URL = '/'

    // Obtener usuario datos del formulario
    const name = formData.get('name')
    const email = formData.get('email')
    const key = formData.get('key')
    const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

    // Comprobar si credenciales son válidas
    const encontrado = usuarios.find(usuario => name == usuario.nombre && key == usuario.key)

    if (!encontrado) return

    // Si hay autenticación correcta, creamos cookie de sesión
    await setCookie('session', { name, email })

    redirect(callbackUrl);
}



export async function logout() {
    // Eliminamos cookie de sesión
    await deleteCookie('session')

    // Hack to reload page! :D
    redirect('/?' + Math.random())

}