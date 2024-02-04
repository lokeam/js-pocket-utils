function greet(callback) {
  console.log('Hello!');
  var data = {
    name: 'John Doe'
  };

  callback(data);
};

greet(function(data) {
  console.log('callback invoked!');
  console.log('data: ', data);
});

greet(function(data) {
  console.log('kor! a different callback!');
  console.log(data.name);
});
