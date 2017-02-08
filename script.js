function disrupt () {
  document.getElementById('best-elevator-pitch-in-the-world').innerHTML = '<img height="300px" src="./spinner.gif"/><br /><br /><p>Currently analyzing complex data models that you can\'t understand...</p>'
  setTimeout(function(){ generateUnicorn()}, 4200);

}

function generateUnicorn() {
  var disruptiveIdeas = [
    'birds', 'birds', 'actors', 'Uber', 'Lyft', 'tables', 'corn',
    'used chewing gums', 'Airbnb', 'horses', 'frappucinos', 'that missing sock',
    'leaving the toilet seat up', 'taking out the trash', 'cash', 'therapy sessions',
    'overcooked pasta', 'cars', 'unemployed taxi drivers', 'ice cubes', 'the lost remote',
    'dead batteries', 'stones in shoes',
];
  var disruptiveDescriptions = [
    'Think about it about it for a second, let it sink in.',
    'Not happy? You ALSO want us to take care of the business plan? Are you even useful to the world?',
    'It\'s not about the idea, it\'s about the execution.',
    'Stop making excuses for yourself, just do it.',
    'It\'s hard I know. But you can do it. Or don\'t, who cares anyway?'
  ];

  var min = Math.ceil(0);
  var maxIdea = Math.floor(disruptiveIdeas.length);
  var maxDescription = Math.floor(disruptiveDescriptions.length);

  var idea = Math.floor(Math.random() * (maxIdea - min)) + min;
  var description = Math.floor(Math.random() * (maxDescription - min)) + min;

  document.getElementById('best-elevator-pitch-in-the-world').innerHTML =
  '<h1 class="display-3">'+disruptiveIdeas[idea]+'</h1><br /><br /><p class="lead">'+disruptiveDescriptions[description]+'</p><hr><button type="button" onclick="disrupt()" class="btn btn-success">CLICK TO DISRUPT!</button>'
}

function dontsteal(){
  console.log('Don\'t even try to steal our code. It\'s way too advanced.');
}

function team(){
  document.getElementById('best-elevator-pitch-in-the-world').innerHTML = '<h1>Is built by a team of highly skilled Venture Capital-backed researchers from the top Ivy league schools in the nation.</p><br /><p>Our approach is data-driven and design-first.</p>'

}
