function handleMenu() {
    const menu = document.querySelector('#nav-menu');
    const menuItems = document.querySelectorAll('.nav-menu');

    menu.addEventListener('click', () => {
        menuItems.forEach((item) => {
        item.classList.toggle('nav-menu--visible');
        });
    });
}