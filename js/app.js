let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.pres-text',{delay:200, origin:'top'});
sr.reveal('.pres-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

const txtAnim = document.getElementById('anim');

new Typewriter(txtAnim, {
    //deleteSpeed: 20
})
.typeString('Découvrez mes compétences')
.start()