function checkAnagram(str1, str2) {
  if (str1.length === str2.length) {
    var result = 0;
    for (var i = 0; i < str1.length; i++) {
      for (var j = 0; j < str1.length; j++) {
        if (str1[i] === str2[j]) {
          var a = 1;
          result += a;
        } else {
          var a = 0;
        }
      }
    }
    if (result === str1.length) {
      console.log("This is  an anagram");
    } else {
      console.log("This is not an anagram");
    }
  } else {
    console.log("This is not an anagram");
  }
}

checkAnagram("roy", "yur");
