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

function videoPlay(id) {
  const urlSecret = 'https://platziultrasecretomasquelanasa.com/' + id;

  console.log('Se está reproduciendo desde la url ' + urlSecret);
}

function videoPause(id) {
  const urlSecret = 'https://platziultrasecretomasquelanasa.com/' + id;

  console.log('Se pauso desde la url ' + urlSecret);
}
export class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  play() {
    videoPlay(this.videoID)
  }
  pause() {
    videoPause(this.videoID)
  }
}
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
class Cours {
  constructor({
    name,
    lessons = [],
  }) {
    this._name = name;
    this.lessons = lessons;
  }

  get name(){
    return this._name;
  }

  set name(newname) {
    if (newname === 'Curso Malito de Programación Básico') {
      console.error('Web... no');
    } else {
      this._name = newname;
    }
  }
}

const basicProgrammingCourse = new Cours({
  name: 'Curso Gratis de Programación Básica'
})
const definitiveCourseHTMLandCSS = new Cours({
  name: 'Curso Definitivo HTML y CSS'
})
const HTMLandCSSPracticalCourse = new Cours({
  name: 'Curso Practico HTML y CSS'
})

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
    basicProgrammingCourse,
    definitiveCourseHTMLandCSS,
    HTMLandCSSPracticalCourse,
  ],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    basicProgrammingCourse,
    'Curso Data Business',
    'Curso Dataviz',
  ],
});

const escuelaVgs = new LearningPath({
  name: 'Escuela de Video Juegos',
  courses: [
    basicProgrammingCourse,
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