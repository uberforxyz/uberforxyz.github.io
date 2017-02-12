function disrupt () {
  document.getElementById('best-elevator-pitch-in-the-world').innerHTML = '<img height="300px" src="./spinner.gif"/><br /><br /><p>Currently analyzing complex data models that you can\'t understand...</p>'
  setTimeout(function(){ generateUnicorn()}, 2300);

}

function generateUnicorn() {
  var disruptiveIdeas = [
    'birds', 'birds', 'actors', 'Uber', 'Lyft', 'tables', 'corn',
    'used chewing gums', 'Airbnb', 'horses', 'frappucinos', 'that missing sock',
    'leaving the toilet seat up', 'taking out the trash', 'cash', 'therapy sessions',
    'overcooked pasta', 'cars', 'unemployed taxi drivers', 'ice cubes', 'the lost remote',
    'dead batteries', 'stones in shoes', 'social networks', 'internet of things', 'toasters',
    'Donald Trump\'s Twitter account', 'fake news', 'alternative facts', 'apps', 'hamsters',
    'cereals...just cereals', 'washing the dishes', 'arguing with your wife', 'arguing with the neighbor',
    'sending your kids to their rooms', 'ice creams', 'pick-up lines', 'your regrets', 'your lost childhood',
    'photos of your ex', 'snobby art exhibits', 'second cheapest wines on the menu', 'empty toothpaste',
    'non-creepy dates', 'empty toilet paper', 'creepy ASMR videos', 'coffee breath', 'Netflix documentaries', 'LinkedIn endorsements',
    'old waiting room magazines', 'yoga pants', 'skipping Apple\'s product launch queues', 'bags of chips with more than 90% air',
    'instagram likes', 'your crush\'s beach pictures', 'when you forget to bring your phone to the toilet',
    'non-chatty Uber drivers'
];
  var disruptiveDescriptions = [
    'Think about it about it for a second, let it sink in.',
    'Not happy? You ALSO want us to take care of the business plan? Are you even useful to the world?',
    'It\'s not about the idea, it\'s about the execution.',
    'Stop making excuses for yourself, just do it.',
    'It\'s hard I know. But you can do it. Or don\'t, who cares anyway?',
    'Hey! You got that for free and didn\'t even have to sign an NDA.',
    'What? You haven\'t incorporated yet? What the hell are you waiting for?',
    '"Luck is where preparation meets opportunity"... Or some shit like that. Just buy your .io domain already!',
    'Already know your startup name? Not so fast! Look what domains are available first. You\'ll probably end up having to remove a couple of vowels, add a "Y", a "Z", an extra "R", and 3 "O"\'s.',
    '"As long as you\'re going to be thinking anyway, think big." ... yup.. that\'s right. "He" said that.',
    '"The value of an idea lies in the using of it." -- Kim Kardashian .. I think.',
    'Chase the money, not the vision.',
    '"Don\'t worry about failure; you only have to be right once." --Drew Houston',
    'Dude, you can do it. I believe in you just like everyone actually believes in "unicorns".',
    'Now that is what I call a startup idea! Am I right?',
    'Eh, still better than your social app idea.',
    'Don\'t build another shit that no one wants - build new shit that everyone hates!',
    'Ok, ok. I\'ll admit this is not the best one I came up with, but I only had like 4 seconds!',
    'That\'s what you get for interrupting me while I\'m watching Dr. Phil.',
    'Hey! This one is actually pretty good! Are you gonna use that? If not, I might...',
    'Yo! It\'s not about ideas. It\'s about making ideas happen.',
    'People said that Uber was a terrible idea at first. Now look at them, THEY MAKE FLYING CARS!',
    'If you judge a fish by its cover...wait no. What was that quote again?',





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
