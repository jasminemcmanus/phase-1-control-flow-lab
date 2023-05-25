function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <=400) {
    return 'This one is on me!';
  }
  else if(feet <=2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.' :'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
      case 'generous':
        return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
      default:
        return 'Bye.'
  }
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Los Angeles'));

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('nothing'));