const fs = require('fs/promises');

async function criaVariosArquivos() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createdFiles = strings.map((string, i) => {
    fs.writeFile(`file${i+1}.txt`, string);
  });

  await Promise.all(createdFiles);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile((fileName), 'utf8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('fileAll.txt', newFileContent);
}

criaVariosArquivos();