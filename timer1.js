
const time = process.argv.slice(2);

for (let alarm of time) {
  if (alarm < 0 ) continue;
  setTimeout(() => process.stdout.write('\x07'), alarm * 1000)  
  
};