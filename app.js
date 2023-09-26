let conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(160);
let piano = conductor.createInstrument();

piano.note('quarter', 'G3');
piano.note('quarter', 'D4');
piano.note('quarter', 'B4');
piano.note('quarter', 'A4');
piano.note('quarter', 'B4');
piano.note('quarter', 'D4');
piano.note('quarter', 'B4');
piano.note('quarter', 'D4');
piano.note('quarter', 'G3');

let player = conductor.finish();

let play = document.getElementById('play') 

play.addEventListener('click', () => {
    player.play();
})

let photo = document.createElement('img')
photo.src = "https://d3fr1q02b1tb0i.cloudfront.net/wp-content/uploads/2017/11/06075602/Bach-bye-bye.jpg"
document.querySelector('#bach').appendChild(photo)



let newMusic = new BandJS();
newMusic.setTimeSignature(4,4);
newMusic.setTempo(200)
let instrument = newMusic.createInstrument();

instrument.note('quarter', '')
instrument.note('quarter', 'G4')
instrument.note('quarter', 'G4')
instrument.note('quarter', 'G4')
instrument.note('whole', 'Eb4')
instrument.note('quarter', '')
instrument.note('quarter', 'F4')
instrument.note('quarter', 'F4')
instrument.note('quarter', 'F4')
instrument.note('whole', 'D4')

let player1 = newMusic.finish();
let play1 = document.getElementById('beethovenPlay')
play1.addEventListener('click', () => {
    player1.play()
})


let markMusic = new BandJS();
markMusic.setTimeSignature(4,4);
markMusic.setTempo(60);
let melody = markMusic.createInstrument('square');
let harmony = markMusic.createInstrument('square');
let bassline = markMusic.createInstrument('sawtooth');

//bar 1
melody.note('half', 'Bb4')
    .note('half', 'F4')
harmony.note('half', 'D4')
    .note('half', 'Eb4')
bassline.note('eighth', 'G3')
    .note('eighth', 'F3')
    .note('tripletEighth', 'Eb3')
    .note('tripletEighth', 'D3')
    .note('tripletEighth', 'C3')
    .note('half', 'Bb3')

//bar 2
melody.note('quarter', 'G4')
    .note('quarter', 'Ab4')
    .note('quarter', 'A4')
    .note('quarter', 'Bb4')
harmony.note('half', 'E4')
    .note('half', 'F4')
bassline.note('half', 'A3')
    .note('half', 'B3')

//bar 3
melody.note('whole', 'Bb3')
harmony.note('quarter', 'F#4')
    .note('dottedHalf', 'F4')
bassline.note('quarter', 'C3')
    .note('quarter', 'F3')
    .note('half', 'Bb3')

// bar 4
melody.rest('whole')
harmony.rest('whole')
bassline.rest('whole')

// bar 5
markMusic.setTempo(180);
melody.rest('eighth')
    .note('sixteenth', 'Eb5')
    .note('sixteenth', 'C5')
    .note('eighth', 'Eb5')
    .note('eighth', 'C5')
    .note('quarter', 'Eb5')
    .note('quarter', 'C5')
harmony.rest('eighth')
    .note('sixteenth', 'Eb4')
    .note('sixteenth', 'C4')
    .note('eighth', 'Eb4')
    .note('eighth', 'C4')
    .note('quarter', 'Eb4')
    .note('quarter', 'C4')
bassline.note('quarter', 'C3')

//bar 6
melody.note('eighth', 'C4')
harmony.note('eighth', 'C3')
bassline.note('eighth', 'C2')




let player2 = markMusic.finish();
let play2 = document.getElementById('madeup')
play2.addEventListener('click', () => {
    player2.play();
})