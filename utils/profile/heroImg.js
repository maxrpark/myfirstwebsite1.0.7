// HERO CAMERA

const heroCamera = document.getElementById('hero-camera');
const uploadHeroImg = document.getElementById('user-upload-hero');

heroCamera.addEventListener('click', () =>
  uploadHeroImg.classList.toggle('upload-hero-img-show')
);

function heroImgs() {
  uploadHeroImg.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('hero-img', reader.result);
      location.reload();
    });
    reader.readAsDataURL(this.files[0]);
  });
}
heroImgs();

const herooImg = localStorage.getItem('hero-img');
const heroImgContainer = document.querySelector('.hero-container-img');

window.addEventListener('change', function () {
  // location.reload();
});

if (herooImg) {
  window.addEventListener('load', function () {
    heroImgContainer.innerHTML = `<img
            src="${herooImg}"
            alt=""
            class="profile__container--hero-img"
            id="profile-img"
          />`;
  });
}

export default heroImgs;
