DROP DATABASE IF EXISTS biblioteca;
CREATE DATABASE biblioteca;
USE biblioteca;


CREATE TABLE autores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    lugar_de_nacimiento VARCHAR(200),
    premio_nobel BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO autores (nombre, lugar_de_nacimiento, premio_nobel) 
VALUES 
  ('Gabriel García Márquez', 'Aracataca', TRUE),
  ('Isabel Allende', 'Lima', FALSE),
  ('Jorge Luis Borges', 'Buenos Aires', FALSE);


CREATE TABLE libros (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    editorial VARCHAR(200),
    fecha_de_publicacion DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO libros (titulo, editorial, fecha_de_publicacion) 
VALUES 
  ('Cien años de soledad', 'Sudamericana', '1967-05-30'),
  ('La casa de los espíritus', 'Plaza & Janés', '1982-01-01'),
  ('Ficciones', 'Sur', '1944-01-01');

