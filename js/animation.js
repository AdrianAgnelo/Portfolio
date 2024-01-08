/* Escrever texto animação*/

const instance = new TypeIt('#text', {
  speed: 1,
  startDelay: 2000,
  waitUntilVisible: true
}).go();

/* Carousel*/

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  loop: true,

});

/* reveal effect*/

window.revelar = ScrollReveal({reset:true})

// topo //

revelar.reveal('.efect-top', {
  duration: 1500,
  distance: '90px'
});

// titulos //

revelar.reveal('.title-reveal', {
  duration: 1500,
  distance: '90px'
});

// sobre //

revelar.reveal('.text-reveal', {
  duration: 1500,
  origin: 'right',
  distance: '100px',
  delay: '500'
});

revelar.reveal('.img-reveal', {
  duration: 1500,
  origin: 'right',
  distance: '100px',
  delay: '500'
});

// projetos //

revelar.reveal('.flip-reveal', {
  duration: 1500,
  distance: '90px',
});

// habilidades //

revelar.reveal('.skill-reveal', {
  duration: 1500,
  distance: '120px',
  delay: '600'
});

// formulario //

revelar.reveal('.form-reveal1', {
  duration: 1500,
  distance: '120px',
  delay: '600'
});
revelar.reveal('.form-reveal2', {
  duration: 1500,
  distance: '120px',
  delay: '750'
});
revelar.reveal('.form-reveal3', {
  duration: 1500,
  distance: '120px',
  delay: '850'
});
revelar.reveal('.form-reveal4', {
  duration: 1500,
  distance: '120px',
  delay: '950'
});
revelar.reveal('.form-reveal5', {
  duration: 1500,
  distance: '120px',
  delay: '1050'
});