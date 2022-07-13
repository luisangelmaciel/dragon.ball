/*setTimeout(function() {
  if(document.querySelector(".response").classList.contains('efecto')) {
    
    document.querySelector(".response").classList.remove('efecto');
    document.querySelector(".response").classList.add('quitarEfecto');
    
  } else {
    
    document.querySelector(".response").classList.remove('quitarEfecto');
    
  }
  document.querySelector(".response").classList.remove('efecto');
}, 5000);*/

function conceder() {
  document.querySelector(".response").classList.add('efecto');
}