// Buffer exercises

var buf = Buffer.from('Hello', 'utf8');
// convert to binary data, use utf8 encoding
console.log(buf);

// go back up tree, convert to chars
console.log(buf.toString());

// pull out, convert to base10
console.log(buf.toJSON());

// testing array-like behavior
console.log(buf[2]);

// testing writing data to buffer
buf.write('yo');
console.log(buf.toString());
