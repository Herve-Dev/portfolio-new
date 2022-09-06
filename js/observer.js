window.onload = () => {

    const animationAbout = document.getElementById('about');
    const animationLearning = document.querySelector('.card-learning__body');
    const animationProficiency = document.querySelector('.card-proficiency__body')
    console.log(animationProficiency);

    const Observe = (target, onIntersection) => {
        const test = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (onIntersection && typeof onIntersection == "function") {
                        onIntersection(entry)
                        //observer.unobserve(target)
                    }   
                } else {
                    onIntersection(entry)
                }
            })
        })

        test.observe(target)
    }

    Observe(animationAbout, function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-about')
        } else {
            setTimeout(function(){
                entry.target.classList.remove('anim-about')
           },500);
        }   
    })

    Observe(animationLearning, function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-card-learning')
        } else {
            setTimeout(function(){
                entry.target.classList.remove('anim-card-learning')
           },500);
        } 
    })

    Observe(animationProficiency, function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-proficiency')
        } else {
            setTimeout(function(){
                entry.target.classList.remove('anim-proficiency')
           },500);
        } 
    })
}