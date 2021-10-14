const fs = require('fs/promises');

function readSimpsons() {
  fs.readFile('simpsons.json', 'utf8')
    .then((data) => {
      const newData = JSON.parse(data);
      for (let i = 0; i < newData.length; i += 1) {
        console.log(`${newData[i].id} - ${newData[i].name}`)
      }
    })
    .catch((err) => console.error(err));
};

// readSimpsons(fileName);

function findSimpson(id) {
  return new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', 'utf8')
      .then((json) => {
        const data = JSON.parse(json);
        const buscado = data.find((simp) => simp.id == id);
        if (buscado === undefined) {
          reject (new Error('id não encontrado'))
        }
        resolve(buscado);
      })
      .catch((err) => console.error(err));
  })
};


// findSimpson(15)
//   .then((personagem) => console.log(personagem))
//   .catch((err) => console.error(err));

async function deletaSimpsons() {
  const remainingSimpsons = await fs.readFile('simpsons.json', 'utf8')
    .then((json) => {
      const data = JSON.parse(json);
      const result = data.filter((simp) => !(["6", "10"].includes(simp.id)))
      return JSON.stringify(result);
    })
  fs.writeFile('simpsons.json', remainingSimpsons)
    .then(() => console.log('Arquivo escrito'))
    .catch((err) => console.error(err.message))
}

// deletaSimpsons();

async function criaNewSimpsons() {
  const jsonSimp = await fs.readFile('simpsons.json', 'utf8');
  const allSimpsons = JSON.parse(jsonSimp);
  const someSimpsons = allSimpsons.filter((simp) => ["1", "2", "3", "4"].includes(simp.id));
  const someSimpJson = JSON.stringify(someSimpsons);
  fs.writeFile('simpsonFamily.json', someSimpJson);
};

// criaNewSimpsons();

async function getDocumentJS(doc) {
  const json = await fs.readFile(doc, 'utf8');
  return JSON.parse(json);
}

async function createNemSimp(name, array) {
  const simpsons = await array
  const id = String(Number(simpsons[simpsons.length - 1].id) + 1)
  return { id, name }
}

function updateArq(arc, infoJS) {
  const input = JSON.stringify(infoJS);
  fs.writeFile(arc, input);
}

async function addNelson() {
  const simpFam = await getDocumentJS('simpsonFamily.json');
  const nelson = await createNemSimp('Nelson Muntz', simpFam);
  simpFam.push(nelson);
  updateArq('simpsonFamily.json', simpFam);
}

// addNelson();

async function editNelson() {
  const family = await getDocumentJS('simpsonFamily.json');
  family[4].name = "Maggie Simpson";
  updateArq('simpsonFamily.json', family);
}

editNelson();