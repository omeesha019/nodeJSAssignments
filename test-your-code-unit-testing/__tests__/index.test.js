const request = require('supertest');
const app = require('../index'); // Update the path if necessary
const multer = require('multer');

describe('File Upload System', () => {
  it('handles file upload successfully', async () => {
    const response = await request(app)
      .post('/upload')
      .attach('file', __dirname + '/../uploads/uploadtest.png');

    expect(response.status).toBe(200);
    expect(response.text).toBe('File uploaded successfully.');
  });

  it('serves the HTML form for file upload', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toMatch(/text\/html/);
  });
  

  
  it('handles missing file gracefully', async () => {
    const response = await request(app).post('/upload');
    expect(response.status).toBe(200);
    expect(response.text).toBe('No file selected.');
  });
// Mocking the upload function to throw an error
jest.mock('multer', () => {
  return jest.fn((config) => ({
    single: (fieldname) => (req, res, next) => {
      const error = new Error('Simulated error during upload');
      next(error);
    }
  }));
});
//   it('handles upload errors', async () => {
//     const response = await request(app)
//       .post('/upload').send();
//       // .attach('file', __dirname + '/../uploads/uploadtest.png');
  
//     expect(response.status).toBe(500);
//     expect(response.text).toContain('Simulated error during upload:');
//   });
// });

  it('handles simulated 500 error', async () => {
    const response = await request(app)
      .post('/simulate-error')
      .send(); // You can send any data you need here

    expect(response.status).toBe(500);
    expect(response.text).toBe('Simulated 500 Error');
  });
});
