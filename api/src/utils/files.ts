import fs from 'fs';

const writeFile = (text: string) => {
  fs.writeFileSync('text.html', text);
};

export default writeFile;
