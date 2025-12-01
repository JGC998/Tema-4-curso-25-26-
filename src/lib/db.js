import mysql from 'mysql2/promise';

// Cambiar 'localhost' por '127.0.0.1' para forzar IPv4
const DATABASE_URL = 'mysql://examen:examen@127.0.0.1:3306/biblioteca'

export const db = await mysql.createConnection(DATABASE_URL)