// example: toggle category selection
document.querySelectorAll('.cat-item').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.cat-item.selected')?.classList.remove('selected');
        el.classList.add('selected');
    });
});




(function () {
    const avatarBtn = document.getElementById('avatarBtn');
    const avatarWrapper = document.querySelector('.avatar-dropdown');

    avatarBtn.addEventListener('click', e => {
        e.stopPropagation();
        avatarWrapper.classList.toggle('show-menu');
    });

    document.addEventListener('click', () => {
        avatarWrapper.classList.remove('show-menu');
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') avatarWrapper.classList.remove('show-menu');
    });
})();