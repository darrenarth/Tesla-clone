const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.content', {})

/*SCROLL ABOUT*/
sr.reveal('.content p', {interval: 350})

/*SCROLL SKILLS*/
sr.reveal('.skills', {interval: 300})


/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__container', {interval: 400})

/*SCROLL CONTACT*/
sr.reveal('.contact', {interval: 400})
