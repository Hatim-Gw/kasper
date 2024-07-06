//show menu

const menu = document.querySelector('header nav > i');

menu.addEventListener('click', ()=>{
  document.querySelector('header nav ul').classList.toggle('display');
})




//landing images

//variables

var btn = document.querySelectorAll('.imgs-btn');; 

// set timeer
setInterval(()=>{
    /* ladning page image*/ 
    let landing_page = document.querySelector('.landing');

//select landing page images
    let imgsArray = ['1.jpg', '2.jpg', '3.jpg'];
    let random_img = Math.floor(Math.random() * Number(imgsArray.length));
    landing_page.style.backgroundImage = `url("images/${imgsArray[random_img]}")`;
    btn.forEach(bt => bt.classList.remove('active'));
    btn[random_img].classList.add('active')
},4000)

//change imgs by clicking:
//sidebar arrows
const arrows = document.querySelectorAll('.landing .arrows i');

for (let arrow of arrows) {
    let i = 0;
  arrow.addEventListener('click', function() {

    let imgsArray = ['1.jpg', '2.jpg', '3.jpg']; 
    let landing_page = document.querySelector('.landing');

    landing_page.style.backgroundImage = `url("images/${imgsArray[(i++)%imgsArray.length]}")`;

    btn.forEach(bt => bt.classList.remove('active'));
    btn[(i)%imgsArray.length].classList.add('active')
  });
}  


//images popup box

const images = document.querySelectorAll('.portfolio .imgs-container .image-box img');

console.log(images);

images.forEach(img =>{
  img.addEventListener('click', handleClick);
})

function handleClick(e){
  //overlay
  console.log(e.target);
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  //popup box , popup image
  let popupBox = document.createElement('div');
  popupBox.className = 'popup-box';

  //close button

  let closebtn = document.createElement('span');
  let closebtnText = document.createTextNode('X');
  closebtn.appendChild(closebtnText);
  popupBox.appendChild(closebtn);
  
  let popupImg = document.createElement('img');
  popupImg.className = 'popup-img';
  popupImg.src = e.target.src;

  //appending

  popupBox.appendChild(popupImg);
  document.body.appendChild(popupBox);

  closebtn.addEventListener('click', () => {
    overlay.remove();
    popupBox.remove();
})
}