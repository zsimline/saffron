import fs  from 'fs';

function countFiles() {
  let sum = 0;
  const dirs = fs.readdirSync('/opt/img')
  for(let i = 0; i < dirs.length; i++) {
    const files = fs.readdirSync(`/opt/img/${dirs[i]}`);
  	sum += files.length;
  };
  console.log(sum);
}

countFiles();
