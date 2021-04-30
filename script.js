let listExperience = document.querySelector('#listExperience');
const addExp = document.querySelector('.add-exp');

let listWorkshop = document.querySelector('#listWorkshop');
const addWs = document.querySelector('.add-ws');

let listEdu = document.querySelector('#listEdu');
const addEdu = document.querySelector('.add-edu');

let dataExperience = [];
let dataWorkshop = [];
let dataEducation = [];

const addExperience = (e) => {
  e.preventDefault();

  let messageTitle = prompt('Tambahkan pekerjaan anda');
  let messageDesc = prompt('Tambahkan deskripsi pekerjaan anda');

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataExperience.push(newData);

  newData = {
    title: '',
    desc: '',
  };

  let displayList = document.createElement('li');
  let displayTitle = document.createElement('p');
  displayTitle.classList.add('tags');

  dataExperience.map((item) => {
    displayTitle.innerHTML = `${item.title}<br /><span>${item.desc} <span>January, 2019 - now</span></span>`;
    displayList.appendChild(displayTitle);
    listExperience.appendChild(displayList);
  });
};

const addWorkshop = (e) => {
  e.preventDefault();

  let messageTitle = prompt('Tambahkan Tempat Workshop Anda');
  let messageDesc = prompt('Tambahkan Deskripsi Workshop Anda');

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataWorkshop.push(newData);

  newData = {
    title: '',
    desc: '',
  };

  let displayList = document.createElement('li');
  let displayTitle = document.createElement('p');
  displayTitle.classList.add('tags');

  dataWorkshop.map((item) => {
    displayTitle.innerHTML = `${item.title}<br /><span>${item.desc} <span>January, 2019 - now</span></span>`;
    displayList.appendChild(displayTitle);
    listWorkshop.appendChild(displayList);
  });
};

const addEducation = (e) => {
  e.preventDefault();

  let messageTitle = prompt('Tambahkan Tempat Sekolah');
  let messageDesc = prompt('Tambahkan Jurusan Sekolah');

  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataEducation.push(newData);

  newData = {
    title: '',
    desc: '',
  };

  let displayList = document.createElement('li');
  let displayTitle = document.createElement('p');
  displayTitle.classList.add('tags');

  dataEducation.map((item) => {
    displayTitle.innerHTML = `${item.title}<br /><span>${item.desc} <span>January, 2019 - now</span></span>`;
    displayList.appendChild(displayTitle);
    listEdu.appendChild(displayList);
  });
};

addExp.addEventListener('click', addExperience);
addWs.addEventListener('click', addWorkshop);
addEdu.addEventListener('click', addEducation);
