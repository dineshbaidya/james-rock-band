console.log('script is Running');
const LatestImg = document.getElementsByClassName('speacial-feture-img')[0];
const LatestDiv = document.getElementsByClassName('third-footer-content-div')[0];
LatestImg.addEventListener("mouseover", mouseover);
LatestImg.addEventListener("mouseout", mouseout);
LatestDiv.addEventListener("mouseover", mouseover);
LatestDiv.addEventListener("mouseout", mouseout);
function mouseover(){
LatestImg.style.transform='scale(1.03)';
LatestDiv.style.transform='scale(1.01)';
}
function mouseout(){
LatestImg.style.transform='scale(1)';
LatestDiv.style.transform='scale(1)';
}
const cardDiv = document.querySelectorAll('.cards');
const images = document.querySelectorAll('.front-main-img');
//Mouse Hover Pic Change Part
function cardMouseOver(x)
{  
for(let j=0; j<images.length; j++){
images[j].classList.add('image-none');
}images[x].classList.remove('image-none');
}


//Right Navbar Part

const rightNavDiv = document.querySelectorAll('.right-nav-sub-div');
const allRightNavDiv = document.querySelectorAll('.right-div-navbar-link-div');

window.addEventListener("load", (event) => {
  rightNavDiv[1].style.opacity = '0';
  rightNavDiv[1].style.zIndex = '-1';
  rightNavDiv[2].style.opacity = '0';
  rightNavDiv[2].style.zIndex = '-2';

  allImageMainDiv[1].style.opacity = '0';
  allImageMainDiv[2].style.opacity = '0';
  allImageMainDiv[3].style.opacity = '0';

  allImageMainDiv[1].style.zIndex = '-3';
  allImageMainDiv[2].style.zIndex = '-4';
  allImageMainDiv[3].style.zIndex = '-5';

  allRightNavDiv[0].classList.add('active0');
  categoryLinkDivs[0].classList.add('activeSecond0');
});

let currentIndexNo = 0;
let isAnimating = false;
function rightNav(i) {
  if (i === currentIndexNo || isAnimating) return;
  isAnimating = true;

  const currentRightNavDiv = rightNavDiv[currentIndexNo];
  currentRightNavDiv.style.transition = 'opacity .9s ease-in';
  currentRightNavDiv.style.opacity = '0';

  const newRightNavDiv = rightNavDiv[i];
  newRightNavDiv.style.opacity = '0';
  newRightNavDiv.style.visibility = 'visible';

  setTimeout(() => {
    newRightNavDiv.style.transition = 'opacity .9s ease-in';
    newRightNavDiv.style.opacity = '1';
    newRightNavDiv.style.zIndex = '1';
  }, 200);

  setTimeout(() => {
    currentRightNavDiv.style.visibility = 'hidden';
    isAnimating = false;
  }, 900);

  allRightNavDiv[i].classList.add('active');
  allRightNavDiv[i].classList.remove('inactive');
  allRightNavDiv[currentIndexNo].classList.add('inactive');
  allRightNavDiv[currentIndexNo].classList.remove('active');
  allRightNavDiv[0].classList.remove('active0');
  currentIndexNo = i;
}

//Second Navbar Part
const categoryLinkDivs = document.querySelectorAll('.categories-nav-link-div');
const allImageMainDiv = document.querySelectorAll('.categories-images-main-div');
let currentIndex = 0;
let isAnimating2 = false;

function secondNav(j) {
  if (j === currentIndex || isAnimating2) return;
  isAnimating2 = true;

  const currentImageMainDiv = allImageMainDiv[currentIndex];
  currentImageMainDiv.style.transition = 'opacity .9s ease-in';
  currentImageMainDiv.style.opacity = '0';

  const newImageMainDiv = allImageMainDiv[j];
  newImageMainDiv.style.opacity = '0';
  newImageMainDiv.style.display = 'block';

  setTimeout(() => {
    newImageMainDiv.style.transition = 'opacity .9s ease-in';
    newImageMainDiv.style.opacity = '1';
    newImageMainDiv.style.zIndex = '1';
  }, 200);

  setTimeout(() => {
    currentImageMainDiv.style.display = 'none';
    isAnimating2 = false;
  }, 900);

  categoryLinkDivs[j].classList.add('activeSecond');
  categoryLinkDivs[j].classList.remove('inactiveSecond');
  categoryLinkDivs[currentIndex].classList.add('inactiveSecond');
  categoryLinkDivs[currentIndex].classList.remove('activeSecond');
  categoryLinkDivs[0].classList.remove('activeSecond0');
  currentIndex = j;
}
