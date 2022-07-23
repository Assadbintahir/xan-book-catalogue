import * as supertest from 'supertest';
import { startApp, stopApp } from 'apps/xan-book-server/src/express/app';
import { Server } from 'http';
import { MockBookRepository } from '../../../mocks';

describe('BookController Integration Tests', () => {
  let express: Server;

  describe('BookController Success Scenarios', () => {
    beforeEach(async () => {
      express = await startApp();
    });

    afterEach((done) => {
      jest.resetAllMocks();
      express.close(done);
      stopApp(jest.fn());
    });

    it('should return books', async () => {
      const { status, body } = await supertest(express).get('/api/v1/books');
      expect(status).toBe(200);
      expect(body.length).toBe(10);
    });
    it('should return book by id', async () => {
      const { status, body } = await supertest(express).get('/api/v1/book/dc9f0e08-117f-42cd-bbca-ffc8c4e1125e');
      expect(status).toBe(200);
      expect(body.id).toBe('dc9f0e08-117f-42cd-bbca-ffc8c4e1125e');
    });
  });

  describe('BookController Error Scenarios', () => {
    let errorMessage = 'test error from repository';
    beforeEach(async () => {
      jest.resetModules();

      jest.mock('apps/xan-book-server/src/repositories', () => {
        const originalModule = jest.requireActual('apps/xan-book-server/src/repositories');

        //Mock the repository to throw error
        return {
          __esModule: true,
          ...originalModule,
          BookRepository: MockBookRepository,
        };
      });

      express = await startApp();
    });

    afterEach((done) => {
      jest.resetAllMocks();
      express.close(done);
      stopApp(jest.fn());
    });

    it('should throw error when fetching books', async () => {
      const { status, body } = await supertest(express).get('/api/v1/books');
      expect(status).toBe(500);
      expect(body.message).toBe(`Internal Server Error: ${errorMessage}`);
    });
    it('should throw error when fetching book by ID', async () => {
      const { status, body } = await supertest(express).get('/api/v1/book/dc9f0e08-117f-42cd-bbca-ffc8c4e1125e');
      expect(status).toBe(500);
      expect(body.message).toBe(`Internal Server Error: ${errorMessage}`);
    });
  });
});
