let students = [
  {
    id: 1,
    name: "Ali Rıza",
    lastname: "Çinibulak",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 2,
    name: "Berk",
    lastname: "Kalkan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 3,
    name: "Bora",
    lastname: "Kalaycıoğlu",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 4,
    name: "Elif",
    lastname: "Yiğit",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 5,
    name: "Emre",
    lastname: "Çelik",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 6,
    name: "Kerem",
    lastname: "Özsobacı",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 7,
    name: "Muhammed",
    lastname: "Aslan",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 8,
    name: "Mücahit",
    lastname: "Yıldız",
    gender: "Erkek",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 9,
    name: "Sude",
    lastname: "Çakır",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 10,
    name: "Zennur",
    lastname: "Gömek",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 11,
    name: "İrem",
    lastname: "Çoban",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
  {
    id: 12,
    name: "Şura",
    lastname: "Dede",
    gender: "Kadın",
    section: "Frontend",
    role: "Öğrenci",
  },
];

for(let i = 0; i < students.length; i++){
  console.log(`${i + 1}. ${students[i].name} ${students[i].lastname}`);
}

const studentsLists = document.querySelectorAll('.students-list');

const maleStudents = [];
const femaleStudents = [];

function sperateStudents(){
  for(let i = 0; i < students.length; i++){
    if(students[i].gender === 'Kadın'){
      femaleStudents.push(students[i]);
    } else{
      maleStudents.push(students[i]);
    }
  }
}

function listStudents(){
  sperateStudents();
  for(let i = 0; i < femaleStudents.length; i++){
    studentsLists[1].innerHTML += `<li><p>${i + 1}. ${femaleStudents[i].name} ${femaleStudents[i].lastname} </p></li>`
  }
  for(let i = 0; i < maleStudents.length; i++){
    studentsLists[0].innerHTML += `<li><p>${i + 1}. ${maleStudents[i].name} ${maleStudents[i].lastname} </p></li>`
  }
  femaleStudentsLength.innerText = `Toplam kadın öğrenci sayısı: ${femaleStudents.length}`
  maleStudentsLength.innerText = `Toplam erkek öğrenci sayısı: ${maleStudents.length}`
}

listStudents();

