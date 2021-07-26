// PROFILE IMG

const profileCamera = document.getElementById('profile-camera');

profileCamera.addEventListener('click', () =>
  uploadImg.classList.toggle('show-upload-profile-img')
);

const uploadImg = document.getElementById('user-upload-img');
const UserImg = document.querySelector('.profile-img-user');
const ContainerUserImg = document.querySelector(
  '.profile__container--user-img'
);

function profileImgs() {
  uploadImg.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      localStorage.setItem('profile-img', reader.result);
      location.reload();
    });
    reader.readAsDataURL(this.files[0]);
  });
}
profileImgs();

const userImg = localStorage.getItem('profile-img');
window.addEventListener('change', function () {
  // location.reload();
});

if (userImg) {
  window.addEventListener('load', function () {
    ContainerUserImg.innerHTML = ` <img
            src="${userImg}"
            alt=""
            class="profile-img-user"
            id="img-user"
          />`;
  });
}

export default profileImgs;
