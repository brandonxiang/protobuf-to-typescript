import { mockResponse } from '../../src';

test('Method type should be converted', () => {
  const source = `
  syntax = "proto3";
  
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message Teacher {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      number test = 2;
      Teacher teacher = 3;
  }
  `;
  const ts = mockResponse(source, 'SayHello');
  expect(ts).toEqual({
    message: 'Hello',
    test: 10,
    teacher: { name: 'Hello' }
  });
});

test('Array type should be converted with package', () => {
  const source = `
  syntax = "proto3";
    
  service Greeter {
      rpc SayHello (HelloRequest) returns (HelloReply) {}
  }
  
  message HelloRequest {
    string name = 1;
  }
  
  message Teacher {
    string name = 1;
  }
  
  message HelloReply {
      string message = 1;
      number test = 2;
      repeated Teacher teacher = 3;
  }
  `;
  const ts = mockResponse(source, 'SayHello');
  expect(ts).toEqual({
    message: 'Hello',
    test: 10,
    teacher: [{ name: 'Hello' }]
  });
});
