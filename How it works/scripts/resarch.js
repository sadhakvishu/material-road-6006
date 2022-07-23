const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right')
const indicaterParents = document.querySelector('ul');

var sectionIndex = 0;

document.querySelectorAll('li').forEach(function (indicater, ind) {
  indicater.addEventListener('click', function () {
    sectionIndex = ind;
    document.querySelector('.selected').classList.remove('selected');
    indicater.classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
  });
})

leftArrow.addEventListener('click', function () {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  document.querySelector('.selected').classList.remove('selected');
  indicaterParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})

rightArrow.addEventListener('click', function () {
  sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
  document.querySelector('.selected').classList.remove('selected');
  indicaterParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})