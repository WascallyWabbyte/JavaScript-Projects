function alphabet(charA, charZ){
  let arr = [], a = charA.charCodeAt(0), z = charZ.charCodeAt(0);
  for(; a <= z; a += 1){
    arr.push([`${(String.fromCharCode(a))}: ` + `${a - 96}`]);
  }
  return arr;
}
alphabet('a', 'z');
