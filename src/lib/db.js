import mysql from 'mysql2/promise';

// Cambio 'localhost' por '127.0.0.1' para forzar IPv4 ya que con localhost,
// no me funcionaba la conexión con la base de datos
const DATABASE_URL = 'mysql://examen:examen@127.0.0.1:3306/biblioteca'

export const db = await mysql.createConnection(DATABASE_URL)