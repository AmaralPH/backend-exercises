const express = require('express');
const app = express();

const controllers = require('./controllers/Plant');

app.use(express.json());

app.post('/plant', controllers.createPlant);
app.get('/plants', controllers.getPlants);
app.get('/plant/:id', controllers.getPlantById);
app.delete('/plant/:id', controllers.removePlantById);
app.post('/plant/:id', controllers.editPlant);
app.get('/sunny/:id', controllers.getPlantsThatNeedsSunWithId);

// app.get('/plants/:id', controllers.plantById)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
