// SIDEBAR

const closeSidebar = document.querySelector('.sidebar__close-btn');
const menuToggle = document.querySelector('.nav__navbar--btn');
const sidebar = document.querySelector('.sidebar');
const sidebarImg = document.querySelector('.sidebar-img');

const userImg = localStorage.getItem('profile-img');
if (userImg) {
  sidebarImg.innerHTML = `<img src="${userImg}" class="img img-sidebar" alt="" />
<a href="profile.html" class="profile-link">Edit Profile</a>`;
}

menuToggle.addEventListener('click', () =>
  sidebar.classList.toggle('sidebar__show')
);
closeSidebar.addEventListener('click', () =>
  sidebar.classList.remove('sidebar__show')
);

const sidebarUserName = document.querySelector('.sidebar-user-name');

const name = localStorage.getItem('name');
sidebarUserName.textContent = name;

export default sidebar;
