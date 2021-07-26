const modal = document.querySelector('.modal');

function getId() {
  modal.addEventListener('click', function (e) {
    const id = e.target.dataset.id;

    if (id) {
      localStorage.setItem('movie', id);
    } else {
      return;
    }
  });
}

export default getId;
