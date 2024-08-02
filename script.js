//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////                                            TEST                                            //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const slideWrapper = document.querySelector('.slide-wrapper');
let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide > 3) {
    currentSlide = 0;
  }
  slideWrapper.style.marginLeft = `-${currentSlide * 100}%`;
}

// Démarre le diaporama
const interval = setInterval(nextSlide, 10000); // Changement toutes les 10 secondes

// Arrête le diaporama après avoir affiché toutes les images une fois
setTimeout(() => {
  clearInterval(interval);
}, 40000); // Le diaporama s'arrête après 40 secondes (10 secondes par image)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////                                    IMPORT HEADER AND FOOTER                                //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Récupérer le contenu de header.html
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Insérer le contenu dans le conteneur
        document.getElementById('headerContainer').innerHTML = data;
    })
    .catch(error => {
        console.log('Une erreur s\'est produite :', error);
    });

    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        // Insérer le contenu dans le conteneur
        document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(error => {
        console.log('Une erreur s\'est produite :', error);
    });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Trigger a function when the user scrolls the element into the viewport – Vanilla JavaScript //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const div = document.querySelector("#diapo")
// const nextDiv = document.querySelector('#navigation')

// div.addEventListener('click', (event) => {
//     event.preventDefault();
//     setTimeout(() =>{
//         window.scrollTo({
//             top: nextDiv.offsetTop,
//             behavior: 'smooth'
//         });
//     }, 0)

// });


// Sélectionner toutes les div à l'intérieur de la classe container
const divs = document.querySelectorAll('#main > div');

// Ajouter un gestionnaire d'événement de clic à chaque div
divs.forEach((div, index) => {
  div.addEventListener('click', () => {
    if (index < divs.length - 1) {
      const nextDiv = divs[index + 1];
      const rect = nextDiv.getBoundingClientRect();
      
      // Défiler vers la div suivante
      window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth'
      });
    }
  });
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Trigger a function when the user scrolls the element into the viewport – Vanilla JavaScript //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get the an HTML element
var element = document.querySelector('#navigation');

// Get its bounding client rectangle
var bounding = element.getBoundingClientRect();

function isInViewport(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();
    
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {



        // console.log('In the viewport! :)');



        return true;
        
    } else {
        // console.log('Not in the viewport. :(');
        return false;
    }
}


var counters = document.querySelectorAll('.counter');
var speed = 400;
var triggered = false;

function animateCounter(counter, target) {
  var count = 0;
  var inc = Math.ceil(target / speed);

  var timer = setInterval(function() {
    count += inc;

    if (count >= target) {
      clearInterval(timer);
      count = target;
    }

    counter.innerText = count.toLocaleString();
  }, 1);
}

window.addEventListener('scroll', function(event) {
  if (isInViewport(element) && triggered === false) {
    triggered = true;
    counters.forEach(function(counter) {
      var target = +counter.getAttribute('data-target');
      animateCounter(counter, target);
    });
  }
}, false);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////