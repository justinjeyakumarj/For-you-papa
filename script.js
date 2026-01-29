const scenes = document.querySelectorAll('.scene');
let index = 0;

function showScene() {
  scenes.forEach(s => s.classList.remove('active'));
  scenes[index].classList.add('active');

  index++;
  if (index < scenes.length) {
    setTimeout(showScene, 4000);
  }
}

showScene();
