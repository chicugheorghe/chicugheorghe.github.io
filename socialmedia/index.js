

const button = document.querySelector('.icon-dropdown')
const down = document.querySelector('.dropdown')
button.addEventListener('click', () => {
  if (down.style.display ==='none') {
    down.style.display = 'block'
  } else {
    down.style.display = 'none'
  }
})




//More
const more = document.querySelector('.downmore')
const downmore = document.querySelector('.more')
more.addEventListener('click', () => {
  if (downmore.style.display ==='none') {
    downmore.style.display = 'block'
  } else {
    downmore.style.display = 'none'
  }
})



///Addfriends

let addfriends = document.querySelector('.accepta-refuza')
let add = document.querySelector('.add-friends')
addfriends.addEventListener('click', () => {
  if (add.style.display ==='none') {
    add.style.display = 'block'
    
  } else {
    add.style.display = 'none'
  }
  
})

 document.getElementById('grayButton').onclick = switchGray;
document.getElementById('pinkButton').onclick = switchPink;
document.getElementById('greenButton').onclick = switchGreen;

function switchGray() {
  document.getElementsByTagName('header')[0].style.backgroundColor = 'gray'; 
}


function switchPink() {
  document.getElementsByClassName('headercolor')[0].style.backgroundColor = 'pink'; 
  // document.querySelectorAll('.icon-content')[0].style.color = 'pink'; 
}

function switchGreen() {
  document.getElementsByTagName('header')[0].style.backgroundColor = 'green'; 
}




let numbersOfLikes;
let isLiked = false;
function toggleLikes() {
  numberOfLikesElement.innerHTML = isLiked
    ? ++numbersOfLikes: numbersOfLikes;
    
}

function getNumberOfLikes() {
 return numbersOfLikes = numbersOfLikes || 12;
}

function setNumberOfLIkes(number) {
  numbersOfLikes = number;
}

const numberOfLikesElement = document.getElementById("likesCount");
const likesIcon = document.getElementById("likesIcon");
getNumberOfLikes();
numberOfLikesElement.innerHTML = numbersOfLikes;

const likesButton = document.getElementsByClassName("likeReaction");
likesButton[0].addEventListener("click", function (event) {
  isLiked = !isLiked;
  likesIcon.classList.toggle("active");
  toggleLikes();
});


//scrollTop
const scroll = document.querySelector('#scroll'); {
scroll.addEventListener('click', function (){
window.scrollTo(0,0);
});
}


// let input = document.getElementById('input');
// let comentBox = document.querySelector('.box')
// let coment = document.getElementById ('comment');
// coment.addEventListener("click", function () {
//   debugger;
// let span = document.createElement('span');
// span.innerHTML=input.value; 
// comentBox.appendChild(span);


  
// })

////coment

$(document).ready(function(){

$('#comment').click(function(){
  let input = $('#input').val();
  debugger;
  $('.box').append(input + '<br>');
  $('#input').val('');
  $('.boxcontainer').slideDown();
});



});