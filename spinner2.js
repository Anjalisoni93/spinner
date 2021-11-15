process.stdout.write('hello from spinner1.js... \rheyyy\n');
const pattern = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\n'];

const spinner = function(words) {
  for (let i = 0; i < words.length; i++) {
    setTimeout(() => {
      process.stdout.write(words[i]);
    }, i * 300);
  }
};
spinner(pattern);

