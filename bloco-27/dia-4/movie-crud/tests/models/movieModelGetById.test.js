const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const e = require('express');
const MoviesModel = requeira('../../models/movieModel');

describe('Busca filme a partir de uma "id"', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();

  before(async () => {
    const URLMock = await DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((conn) => conn.db('model_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Quando o "id" não está cadastrado', () => {
    it('retorna um array', async () => {
      const movie = await MoviesModel.getById(id);

      expect(movie).to.be.an('array');
    });

    it('o array é vazio', async () => {
      const movie = await MoviesModel.getById(id);

      expect(movie).to.be.empty;
    });
  });

  describe('Quando o "id" está cadastrado', async () => {
    const expectedMovie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async () => {
      await connectionMock.collection('movies').insertOne(expectedMovie);
    });

    after(async () => {
      await connectionMock.collection('movies').drop();
    })

    it('retorna um array', async () => {
      const movie = await MoviesModel.getById(expectedMovie.id);

      expect(movie).to.be.an('array');
    });

    it('o array deve conter um objeto com o "id" buscado', async () => {
      const movie = await MoviesModel.getById(expectedMovie.id)
    })
  })
})