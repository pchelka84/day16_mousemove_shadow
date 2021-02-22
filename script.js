const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  const walk = 50; //100px

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width * walk) - (walk / 2);
  const yWalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,07),
  ${xWalk * -1}px ${yWalk}px 0 rgba(0,0,255,07),
  ${yWalk}px ${xWalk* -1}px 0 rgba(0,255,0,07),
  ${yWalk * -1}px ${xWalk}px 0 rgba(255,255,0,07)
  `
}


hero.addEventListener('mousemove', shadow);