'use strict';

const data = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'FullStack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

const filterCard = document.querySelector('.filter-card');
const contentCard = document.querySelector('.content-card');
const clearButton = document.querySelector('.filter-card__clear .btn');

let allCards,
  closeBtns,
  arr = [],
  newArr = [],
  html,
  timer,
  cards,
  filterArea = document.querySelector('.col-10');

const loadData = arrayValue => {
  contentCard.innerHTML = '';

  data.forEach(val => {
    const buttons = [val.role, val.level, ...val.tools, ...val.languages];
    const comparisonOfArrays = arrayValue.every(val => buttons.includes(val));

    if (comparisonOfArrays) {
      html = `<div class="card fade ${val.featured && 'card-featured'}">
        <div class="u-card-display-positioning">
          <div class="col-md-6 u-column-positioning">
            <div class="content-card__img">
              <img src="${val.logo}" alt="${val.id}" />
            </div>
            <div class="d-block my-auto ml-3">
              <div class="content-card__text">
                <span class="content-card__text--title">${val.company}</span>
                ${
                  val.new
                    ? '<span class="content-card__text--new">new!</span>'
                    : ''
                }
                ${
                  val.featured
                    ? '<span class="content-card__text--featured">featured</span>'
                    : ''
                }
              </div>
              <div class="content-card__role">
                ${val.position}
              </div>
              <div class="content-card__attributes">
                <span>${val.postedAt}</span>
                <span>${val.contract}</span>
                <span>${val.location}</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 my-auto u-content-side">
          <hr class="u-hidden-hor-line">
          <a href="#" class="btn" data-value="${val.role}">${val.role}</a>
          <a href="#" class="btn" data-value="${val.level}">${val.level}</a>
            ${val.tools
              .map(
                tools =>
                  `<a href="#" class="btn" data-value="${tools}">${tools}</a>`
              )
              .join('')}
            ${val.languages
              .map(
                languages =>
                  `<a href="#" class="btn" data-value="${languages}">${languages}</a>`
              )
              .join('')}
          </div>
        </div>
      </div>`;

      contentCard.insertAdjacentHTML('beforeend', html);
    }
    allCards = document.querySelectorAll('.content-card [data-value]');
  });

  init();

  timer = 0;
  cards = document.querySelectorAll('.card');

  const fadeInOnLoad = setInterval(() => {
    try {
      cards[timer].style.opacity = 100;
      cards[timer].style.animation = 'loadAnimation 0.75s ease-out';
      if (timer === 5) clearInterval(fadeInOnLoad);
      timer++;
    } catch (err) {}
  }, 150);

  const reveal = function (entries, observer) {
    entries.forEach(ent => {
      if (!ent.isIntersecting) return;

      ent.target.style.opacity = 100;
      ent.target.style.animation = 'loadAnimation 0.75s ease-out';
      observer.unobserve(ent.target);
    });
  };

  const sectionObserver = new IntersectionObserver(reveal, {
    root: null,
    threshold: 0.8,
  });

  cards.forEach(function (card, i) {
    if (i > 4) {
      sectionObserver.observe(card);
      card.style.opacity = 0;
    }
  });
};

function init() {
  allCards.forEach(val => {
    val.addEventListener('click', e => {
      e.preventDefault();

      if (!arr.includes(val.textContent)) {
        arr.push(val.textContent);
        filterCard.classList.remove('hidden');

        html = `
          <div class="filter-card__buttons d-inline pr-2">
              <span class='close' data-value="${val.textContent}">${val.textContent}
                  <a href="#" class="btn">
                      <i class="fas fa-times"></i>
                  </a>
              </span>
          </div>
          `;

        filterArea.insertAdjacentHTML('beforeend', html);
        loadData(arr);
        closeButtons();
      }
    });
  });
}

window.load = loadData(arr);

function closeButtons() {
  closeBtns = document.querySelectorAll('.close');
  closeBtns.forEach(val => {
    val.addEventListener('click', e => {
      e.preventDefault();

      if (arr.includes(val.getAttribute('data-value'))) {
        val.remove();

        let indexOfPressedButton = arr.indexOf(val.getAttribute('data-value'));
        arr.splice(indexOfPressedButton, 1);

        if (arr.length === 0) {
          filterCard.classList.add('hidden');
        }

        loadData(arr);
      }
    });
  });
}

clearButton.addEventListener('click', e => {
  e.preventDefault();

  filterArea.innerHTML = '';
  arr = [];
  filterCard.classList.add('hidden');
  loadData(arr);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
