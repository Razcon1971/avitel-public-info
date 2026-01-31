// Refresh automat la 5 minute (evită cache & blocaje)
setTimeout(() => {
  location.reload();
}, 5 * 60 * 1000);

// Dezactivează select text (touch accidental)
document.addEventListener("selectstart", e => e.preventDefault());
