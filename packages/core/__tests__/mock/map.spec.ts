import { mockResponse } from '../../src';

test('Method type should be converted with package', () => {
  const source = `
  syntax = "proto3";
  
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      map<int32, string> test = 2;
  }
  `;
  const ts = mockResponse(source, 'SayHello');
  expect(ts).toEqual({ message: 'Hello', test: { '10': 'Hello' } });
});
