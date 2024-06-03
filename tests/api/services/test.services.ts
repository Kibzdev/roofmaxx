// tests/api/services/service.test.ts
import {supertest} from 'supertest';
import handler from '../services/service';
import { createServer } from 'http';
import { apiResolver } from 'next/dist/server/api-utils';

const request = supertest(createServer((req, res) => apiResolver(req, res, undefined, handler, {previewModeEncryptionKey: '', previewModeId: '', previewModeSigningKey: ''}, true)));

describe('/api/services/service', () => {
  it('should return a list of services and a 200 status', async () => {
    const response = await request.get('/api/services/service');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    // Additional checks can be added here, for example:
    // expect(response.body[0]).toHaveProperty('serviceName');
  });

  it('should handle errors correctly and return a 500 status', async () => {
    // Mock fetchServiceData to throw an error
    jest.mock('@/sanity/lib/fetch', () => ({
      fetchServiceData: jest.fn().mockRejectedValue(new Error('Failed to fetch'))
    }));
    
    const response = await request.get('/api/services/service');
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Failed to fetch services: Failed to fetch');
  });
});
