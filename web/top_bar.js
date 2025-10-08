  const closeBtn = document.getElementById('close-bar');
  const bar = document.getElementById('notification-bar');

  closeBtn.addEventListener('click', () => {
    bar.classList.add('closed');
    setTimeout(() => bar.style.display = 'none', 400); // matches CSS transition
  });
