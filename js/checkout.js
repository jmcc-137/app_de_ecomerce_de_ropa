
  function increase(btn) {
    const quantitySpan = btn.previousElementSibling;
    let count = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = count + 1;
  }

  function decrease(btn) {
    const quantitySpan = btn.nextElementSibling;
    let count = parseInt(quantitySpan.textContent);
    if (count > 1) {
      quantitySpan.textContent = count - 1;
    }
  }

  document.getElementById('showAlert').addEventListener('click', () => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      html: `
        <div style="text-align: left;">
          <p><strong>Total (9 items):</strong> $1,014.95</p>
          <p><strong>Shipping Fee:</strong> $0.00</p>
          <p><strong>Discount:</strong> $0.00</p>
          <hr />
          <p><strong>Sub Total:</strong> $1,014.95</p>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: true,
    });
  });