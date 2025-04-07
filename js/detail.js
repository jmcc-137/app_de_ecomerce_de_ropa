// Contador - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
  // Elementos del contador
  const countElement = document.getElementById('count');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  
  let count = 1;

  // Funciones del contador
  function updateCounter() {
      countElement.textContent = count;
  }

  if (increaseBtn && decreaseBtn && countElement) {
      increaseBtn.addEventListener('click', function(e) {
          e.preventDefault();
          count++;
          updateCounter();
      });

      decreaseBtn.addEventListener('click', function(e) {
          e.preventDefault();
          if (count > 1) {
              count--;
              updateCounter();
          }
      });
  }

  // Resto del código del diálogo (el que ya tenías funcionando)
  const dialog = document.querySelector("dialog");
  const openDialogBtn = document.getElementById("open_dialog");
  const closeDialogBtn = document.getElementById("close_dialog");

  // ... (mantén todo el código del diálogo que ya funciona)
});

function decrease() {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
}
// Código del diálogo (modificado)
document.addEventListener('DOMContentLoaded', function() {
  const dialog = document.querySelector("dialog");
  const openDialogBtn = document.getElementById("open_dialog");
  const closeDialogBtn = document.getElementById("close_dialog");

  // Verifica que los elementos existan
  if (!dialog || !openDialogBtn || !closeDialogBtn) return;

  const elements = dialog.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = elements[0];
  const lastElement = elements[elements.length - 1];

  const trapFocus = (e) => {
    if (e.key === "Tab") {
      const tabForwards = !e.shiftKey && document.activeElement === lastElement;
      const tabBackwards = e.shiftKey && document.activeElement === firstElement;
      if (tabForwards) {
        e.preventDefault();
        firstElement.focus();
      } else if (tabBackwards) {
        e.preventDefault();
        lastElement.focus();
      }
    }
  };

  const openDialog = (e) => {
    e.preventDefault();
    dialog.showModal();
    dialog.addEventListener("keydown", trapFocus);
  };

  const closeDialog = (e) => {
    e.preventDefault();
    dialog.close();
    dialog.removeEventListener("keydown", trapFocus);
    openDialogBtn.focus();
  };

  openDialogBtn.addEventListener("click", openDialog);
  closeDialogBtn.addEventListener("click", closeDialog);

  // Cargar polyfill solo si es necesario
  if (typeof HTMLDialogElement !== 'function' || typeof dialog.showModal !== 'function') {
    import('https://cdn.skypack.dev/dialog-polyfill@0.5.6')
      .then(module => {
        const dialogPolyfill = module.default;
        dialogPolyfill.registerDialog(dialog);
      })
      .catch(err => {
        console.error('Error loading dialog polyfill:', err);
      });
  }
});

