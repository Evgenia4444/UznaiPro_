// const card = document.querySelector('.card_inner');

// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped')
// });

document.querySelectorAll('.card_inner').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('is-flipped')
    })
  })