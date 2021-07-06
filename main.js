const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprabados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Practico de HTML y CSS',
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprabados.push(nuevoCurso);
  }
};

function Student3(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
  // this.newCourse = function(newCourse) {
  //   this.approvedCourses.push(newCourse)
  // }
}

Student3.prototype.newCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
};

const Juan = new Student3('Juan Antonio', 15, ['Curso de Introducción a la Producción de Videojuegos', 'Curso de Creación de Personajes'])


// Prototipos con la sintaxis de clases

class Student2 {
  constructor({name, age, approvedCourses = [],}) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}

const miguel = new Student2({
  name: 'Miguel',
  age: 28,
  approvedCourses: ['Curso de Análisis de Negocios para Ciencia de Datos', 'Curso de Principios de visualización de Datos para BI']
})

// Ventajas de la programación orientada a objetos
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
};

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [
    'Curso Prog Básica',
    'CursoDefinitivoHTML',
    'CursoPracticoHTML',
  ],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    'Curso Prog Básica',
    'Curso DataBusiness',
    'Curso Dataviz',
  ],
});

const escuelaVgs = new LearningPath({
  name: 'Escuela de Video Juegos',
  courses: [
    'Curso Prog Básica',
    'Curso de Unity',
    'Curso de Unreal',
  ],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: 'Juan Antonio',
  email: 'juan_antonio@erestu.com',
  username: 'JuanAn',
  twitter: 'fjuandc',
})

const miguelito2 = new Student({
  name: 'Miguel',
  email: 'miguelitofeliz@erestu.com',
  username: 'MiguelitoFeliz',
  twitter: 'Miguelito_Feliz',
})