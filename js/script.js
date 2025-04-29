// example: toggle category selection
document.querySelectorAll('.cat-item').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.cat-item.selected')?.classList.remove('selected');
        el.classList.add('selected');
    });
});
