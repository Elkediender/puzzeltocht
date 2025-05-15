// Dit bestand regelt de logica van het checken of de code juist is of niet.
// Gelijk hieronder staat iets als const secret = 'PUZZEL123';
// de code is in dat geval PUZZEL123. Je kan dat vervangen voor elke tekst die je als code
// wil, maar het is dan heel belangrijk dat je de aanhalingstekens er wel omheen houdt en
// de puntkomma aan het eind van de regel laat staan!

// Het bericht dat je ziet als je de foute code invult staat bij
// document.getElementById('message').textContent = 'Welke tekst je dan ook maar wil';

const secret = 'PUZZEL123'; // vervang door jullie echte code

document.getElementById('submitBtn').addEventListener('click', () => {
  const guess = document.getElementById('codeInput').value.trim();
  if (guess === secret) {
    window.location.href = 'juist.html';
  } else {
    document.getElementById('message').textContent = '❌ Foute code, probeer nog eens.';
  }
});
