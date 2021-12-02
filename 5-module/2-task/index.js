function toggleText() {
  // ваш код...
  let textToggle = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  
  textToggle.addEventListener('click', () => {

    text.hidden = !text.hidden;
    
  })
}
