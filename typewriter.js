const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 + (i * 50));
}

setTimeout(() => console.log(""), (sentence.length * 50));