const main = document.getElementById('main')

main.addEventListener('click', (event) => {
  alert("I was clicked!")
})

const input = document.querySelector('input')
input.addEventListener('keydown', (event) => {
  if (event.key === "g") {
    return event.preventDefault()
  } else {
    console.log(event.key)
  }
})