import { mockResponse } from '../../src/index';

test('Enum in a message should be converted', () => {
  const source = `
  syntax = "proto3";

  service MyService {
    rpc MyMethod (MyRequest) returns (MyResponse);
  }

  message MyRequest {
      string path = 1;
  }

  message MyResponse {
    string path = 1;
    enum PhoneType 
    {
        MOBILE = 0;
        HOME = 1;
        WORK = 2;
    }
  }
  `;
  const ts = mockResponse(source, 'MyMethod');
  expect(ts).toEqual({
    path: 'Hello',
    PhoneType: 0
  });
});
