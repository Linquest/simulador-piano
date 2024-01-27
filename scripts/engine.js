const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');

let mapedKeys = [];
let audio = new Audio('./tunes/./a.wav');

const playTune = (key) => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => clickedKey.classList.remove('active'), 150);
}

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (event) => {
    if (mapedKeys.includes(event.key)) {
        playTune(event.key);
    }
})

volumeSlider.addEventListener('input', (event) => {
    audio.volume = event.target.value
})

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle('hide'));
}

keysCheckbox.addEventListener('click', showHideKeys)