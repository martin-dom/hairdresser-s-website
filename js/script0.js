console.log("Hello World.");
    
var checkbox = document.querySelector('input[type="checkbox"]');
var spanb = document.getElementById("bars");
var shadow = document.getElementById("shadow");

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        spanb.style.display = 'none';
        shadow.style.display = 'block';
    } else {
        spanb.style.display = '';
        shadow.style.display = 'none';
    }
});

var hiddenElement = document.getElementById("hidden-element");

window.addEventListener('scroll', function() {
  // Zkontrolujte, zda se uživatel posunul dolů dostatečně, aby zobrazil skrytý prvek.
  if (window.scrollY > 100) {
    hiddenElement.classList.remove('hidden');
  } else {
    hiddenElement.classList.add('hidden');
  }
});

