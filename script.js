const mainMediaButton = document.querySelector('.main_media_button');
const navMenu = document.querySelector('.nav-menu');

mainMediaButton.addEventListener('click', () => {
  mainMediaButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mainMediaButton.classList.remove('active');
  navMenu.classList.remove('active');
}));

const projects = [
  {
    name: 'health-summit',
    featuredImg: 'Assets/other-images/health-summit1.png',
    featuredImgMobile: 'Assets/other-images/health-summit-mobile.png',
    description:
      'A conference website project for the World Health Summit',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://temesgena.github.io/health-summit/',
    sourceCode: 'https://github.com/TemesgenA/health-summit',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'Assets/other-images/2nd-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-2.jpg',
    description:
      'Multi post Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://temesgena.github.io/Portfolio-mobile/',
    sourceCode: 'https://github.com/TemesgenA/Portfolio-mobile',
  },

  {
    name: 'Tonic',
    featuredImg: 'Assets/other-images/3rd-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-3.jpg',
    description:
      'Another Tonic Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://temesgena.github.io/Portfolio-mobile/',
    sourceCode: 'https://github.com/TemesgenA/Portfolio-mobile',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'Assets/other-images/4th-project-image.png',
    featuredImgMobile: 'Assets/other-images/project-4.jpg',
    description:
      'Another multipost Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://temesgena.github.io/Portfolio-mobile/',
    sourceCode: 'https://github.com/TemesgenA/Portfolio-mobile',
  },
];

projects.forEach((element, i) => {
  const projectContainer = document.querySelector('#projects');
  const projectDiv = document.createElement('div');
  const projectImageDiv = document.createElement('div');
  const projectContentDiv = document.createElement('div');
  const projectImageWeb = document.createElement('img');
  const projectImageMobile = document.createElement('img');
  const countImage = document.createElement('img');
  const countImage2 = document.createElement('img');
  const canopyText = document.createElement('h3');
  const backText = document.createElement('h3');
  const yearText = document.createElement('h3');
  const projectHeader = document.createElement('h2');
  const projectBody = document.createElement('div');
  const projectDescription = document.createElement('div');
  const pDescription = document.createElement('p');
  const languageUl = document.createElement('ul');
  const projectBtn = document.createElement('button');

  projectImageWeb.src = element.featuredImg;
  projectImageWeb.classList.add('project-image-web');
  projectImageWeb.alt = 'project-image';
  projectImageMobile.src = element.featuredImgMobile;
  projectImageMobile.classList.add('first-project-image');
  projectImageMobile.alt = 'First-project';
  projectHeader.classList.add('project-heading');
  projectHeader.innerText = element.name;
  canopyText.innerText = 'canopy';
  canopyText.classList.add('content-text', 'canopy');
  countImage.src = './Assets/vectors/Counter.svg';
  countImage.classList.add('count-vector');
  backText.innerText = 'Back end dev';
  backText.classList.add('content-text');
  countImage2.src = './Assets/vectors/Counter.svg';
  countImage2.classList.add('count-vector');
  yearText.innerText = '2018';
  yearText.classList.add('content-text');
  pDescription.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required';
  languageUl.classList.add('languages');
  projectDiv.classList.add('project');
  projectDiv.append(projectImageDiv, projectContentDiv);
  projectImageDiv.classList.add('project-image');
  projectImageDiv.append(projectImageMobile, projectImageWeb);
  projectContentDiv.classList.add('project-content');
  projectContentDiv.append(projectHeader, projectBody);
  projectBody.classList.add('project-body');
  projectBody.append(projectDescription, pDescription, languageUl, projectBtn);
  projectDescription.classList.add('description');
  projectDescription.append(
    canopyText,
    countImage,
    backText,
    countImage2,
    yearText,
  );

  projects[i].technologies.forEach((tech, n) => {
    const languageLi = document.createElement('li');
    languageLi.classList.add('language-used');
    languageUl.append(languageLi);
    languageLi.innerText = projects[i].technologies[n];
  });

  projectContainer.appendChild(projectDiv);

  projectBtn.classList.add('btn', 'project-link');
  projectBtn.innerText = 'see project';
  projectBtn.setAttribute('id', i);
  if (i % 2 !== 0) {
    projectDiv.classList.add('card-reverse');
  }
});

const modalContainer = document.querySelector('.modal-container');
const modal = document.createElement('div');
modalContainer.append(modal);
modal.classList.add('modal');

const modalBtnPop = document.querySelectorAll('.project-link');
// eventlistener to open modal
modalBtnPop.forEach((n) => {
  const btnId = n.id;
  n.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
    modal.innerHTML = `
<div class="modal-header">
    <h4 class="modal-heading">${projects[btnId].name}</h4>
    <button class="modal-close">&times;</button>
</div>
<div class="small-description">
  <p class="canopy modal-describe">CANOPY</p>
  <img src="./Assets/vectors/Counter.svg" class="count-vector" alt="null"/>
  <p class="modal-describe">BACK END DEV</p>
  <img src="./Assets/vectors/Counter.svg" class="count-vector" alt="null"/>
  <p class="modal-describe">2015</p>
</div>
<img src="./${projects[btnId].featuredImg}" class="modal-img" alt="null"/>
<div class="modal-content">
  <p class="modal-texts">${projects[btnId].description}</p>
  <div class="modal-contact">
    <ul class="languages modal-ul">
      <li class="language-used modal-li">HTML</li>
      <li class="language-used modal-li">CSS</li>
      <li class="language-used modal-li">Bootstrap</li>
      <li class="language-used modal-li">gitHub</li>
      <li class="language-used modal-li">Ruby</li>
      <li class="language-used modal-li">javaScript</li>
    </ul>
    <hr class="modal-hr" />
    <a href="https://temesgena.github.io/Portfolio-mobile/">
      <button class="btn modal-btn" type="submit">
        See live
        <img src="./Assets/vectors/git-modalicon.svg" class="modal-vectors" alt="git"/>
      </button>
    </a>
    <a href="https://temesgena.github.io/Portfolio-mobile/">
      <button class="btn modal-btn" type="submit">
        See Source
        <img src="./Assets/vectors/source-code-icon.svg" class="modal-vectors" alt="source-code"/>
      </button>
    </a>
  </div>
</div>
`;
    // listen for close
    const closeButton = document.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  });
});

const contactForm = document.querySelector('#contact-form');
const contactEmail = document.querySelector('#email-address');
const errorHolder = document.querySelector('.error');
contactForm.addEventListener('submit', (e) => {
  const message = contactEmail.value;
  const messageList = message.replace(/[^a-zA-Z]/g, '').split('');
  for (let i = 0; i < messageList.length; i += 1) {
    if (messageList[i] === messageList[i].toUpperCase()) {
      errorHolder.innerText = 'Error: Write your email with lowercase letters';
      e.preventDefault();
    }
  }
});
