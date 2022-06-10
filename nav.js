const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}



document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

const ani1 = document.querySelector('header .menu-area .ani1');
const ani2 = document.querySelectorAll('header .menu-area ul li');

console.log(ani2);
ani2.forEach((list) => {
list.addEventListener('mouseover', () => {
    let position = list.getBoundingClientRect();
    ani1.classList.add('active');
    ani1.style.left = position.x + 'px';
    ani1.style.top = position.y + 'px';
    ani1.style.height = position.height + 'px';
    ani1.style.width = position.width + 'px';
});
list.addEventListener('mouseout', () => {
    ani1.classList.remove('active');
});
});
