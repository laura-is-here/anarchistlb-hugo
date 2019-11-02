 function animateWhenVisible() {
    var targets = document.querySelectorAll('.animateWhenVisible');
    var intersectionObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    var observer = new IntersectionObserver(onIntersection, intersectionObserverOptions);
    targets.forEach(q => {
      observer.observe(q);
    });
    function onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animated', 'fadeInUpSmall');
        }
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
        }
      });
    }
  }
  animateWhenVisible();