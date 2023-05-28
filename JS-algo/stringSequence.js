let seq = "abbqqqhhhh"

function seqString(s) {
    var array = [];
    for (i = 0; i < (s.length); i++) {
      array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    };
    return array.join("-");
  }

function accum(str) {
    var res = [];
    for(var i = 0; i < str.length; i++) {
        var row = '';
        console.log(str[i])
      for(var j = 0; j < i + 1; j++) {
        console.log(str[j])
        row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
      }
      res.push(row);
    }
    return res.join('-');
  }
  console.log(accum(seq))
  console.log(seqString(seq))
