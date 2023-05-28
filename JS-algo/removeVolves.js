const str = "This website is for losers LOL!"

function removeWalves (str) {
    const noVowels = str.replace(/[aeiou]/gi, '');
    console.log(noVowels)
}

removeWalves(str)

function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }

console.log(disemvowel(str))