// footer.js
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  })
  .catch(err => console.error('Footer failed to load:', err));