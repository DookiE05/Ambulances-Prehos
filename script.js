//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////                                    IMPORT HEADER AND FOOTER                                //////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

function typeWriterEffect(element, text, speed = 50) {
  let index = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.textContent = '_';
  element.appendChild(cursor);

  function writeCharacter() {
      if (index < text.length) {
          element.textContent = text.substring(0, index + 1); // Ajoute le texte au fur et à mesure
          element.appendChild(cursor); // Réattache le curseur après chaque mise à jour
          index++;
          setTimeout(writeCharacter, speed);
      } else {
          //cursor.classList.add('finished'); // Stop le clignotement du curseur
      }
  }
  writeCharacter();
}

function isVisibleInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function initTypewriterAnimation() {
  const elements = document.querySelectorAll('.anim-typewriter');

  elements.forEach((element) => {
      const text = element.textContent.trim(); // Récupérer le texte original
      element.textContent = ''; // Vider le contenu pour l'animation

      function checkVisibility() {
          if (isVisibleInViewport(element)) {
              window.removeEventListener('scroll', checkVisibility);
              typeWriterEffect(element, text);
          }
      }

      window.addEventListener('scroll', checkVisibility);
      checkVisibility();
  });
}


document.addEventListener('DOMContentLoaded', initTypewriterAnimation);