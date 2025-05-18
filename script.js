window.onload = () => {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const buttons = document.getElementById('buttons');
  const yesBtn = document.getElementById('yesButton');
  const noBtn = document.getElementById('noButton');

  // Mostrar sobre
  setTimeout(() => {
    envelope.style.bottom = '100px';

    // Abrir sobre
    setTimeout(() => {
      envelope.classList.add('open');
      letter.classList.add('show');
    }, 2000);

    // Mostrar botones después de 15s
    setTimeout(() => {
      buttons.style.display = 'flex';
    }, 15000);

  }, 1000);

  yesBtn.onclick = () => {
    window.location.href = 'gracias.html'; // cámbialo si quieres otro destino
  };
};
