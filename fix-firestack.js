fs = require('fs');

const FIRESTACK_GRADLE_FILE = 'node_modules/react-native-firestack/android/build.gradle';

fs.readFile(FIRESTACK_GRADLE_FILE, 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }

  let fileLines = data.split('\n');

  lastIndex = (function() {
    for (var i = fileLines.length - 1; i > -1; i--) {
      if (fileLines[i].match('compile \'com.google.android.gms:play-services-base')) {
        return i;
      }
    }
  })();

  delete fileLines[lastIndex];

  fs.writeFile(FIRESTACK_GRADLE_FILE, fileLines.join('\n'), (err, data) => {
    if (err) {
      return console.log(err);
    }

    console.log('Firestack dependence fixed.');
  });
});
