const load = document.querySelector('.loading');
const textt = document.querySelector('.textt');


function init() {
    setTimeout(() => {
        load.style.opacity = 0;
        load.style.display = 'none';

        textt.style.display = 'block';
        setTimeout(() => (textt.style.opacity = 1), 50);
    }, 1000);
}

init();