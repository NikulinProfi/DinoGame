const dino = document.querySelector('#dino')
console.log(dino)
const cactus = document.querySelector('#cactus')
console.log(cactus)

document.addEventListener('keydown', function (event) {
  jump()
})

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump')
  }
  setTimeout(() => {
    dino.classList.remove('jump')
  }, 300)
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  )
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('Проиграл!!')
  }
})
