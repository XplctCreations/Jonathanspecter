'use strict';

const article = document.querySelector('.art');
const articleDrp = document.querySelector('.article');
const chat = document.querySelector('.cht');
const chatDrp = document.querySelector('.chats');
const award = document.querySelector('.awd');
const awardDrp = document.querySelector('.awards');
const about = document.querySelector('.abt');
const aboutDrp = document.querySelector('.about');

const hideVariable = function (x) {
  x.classList.toggle('hidden');
};
const hideVariableAll = function (x) {
  x.classList.add('hidden');
};
// console.log(articleDrp);

article.addEventListener('mouseover', function () {
  hideVariable(articleDrp);
  hideVariableAll(chatDrp);
  hideVariableAll(awardDrp);
  hideVariableAll(aboutDrp);
});

chat.addEventListener('mouseover', function () {
  hideVariable(chatDrp);
  hideVariableAll(articleDrp);
  hideVariableAll(awardDrp);
  hideVariableAll(aboutDrp);
});

award.addEventListener('mouseover', function () {
  hideVariable(awardDrp);
  hideVariableAll(articleDrp);
  hideVariableAll(chatDrp);
  hideVariableAll(aboutDrp);
});

about.addEventListener('mouseover', function () {
  hideVariable(aboutDrp);
  hideVariableAll(articleDrp);
  hideVariableAll(chatDrp);
  hideVariableAll(awardDrp);
});

document
  .querySelector('.body-without-top-menu')
  .addEventListener('mouseover', function () {
    hideVariableAll(articleDrp);
    hideVariableAll(chatDrp);
    hideVariableAll(awardDrp);
    hideVariableAll(aboutDrp);
  });

// article.addEventListener('mouseout', function () {
//   hideVariable(articleDrp);
// });

// chat.addEventListener('mouseout', function () {
//   hideVariable(chatDrp);
// });

// award.addEventListener('mouseout', function () {
//   hideVariable(awardDrp);
// });

// about.addEventListener('mouseout', function () {
//   hideVariable(aboutDrp);
// });
