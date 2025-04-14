function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    // Define theme functions using closures
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  

    function createButton(text, onClickFunction) {
      const button = document.createElement('button');
      button.textContent = text;
      button.style.margin = '5px';
      button.addEventListener('click', onClickFunction);
      document.body.appendChild(button);
    }
  

    createButton('Spooky', spooky);
    createButton('Dark mode', darkMode);
    createButton('Scream mode', screamMode);
  }
  
  // Run main
  main();
  