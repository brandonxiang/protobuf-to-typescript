
import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';

const source = `
  syntax = "proto3";

  import "order.proto";
  
  service AppService {
      rpc GetProduct(GetProductReq) returns (GetProductResp) {}
  }
  
  message GetProductReq {
    uint64 product_id = 1;
  }
  
  message GetProductResp {
    repeated ProductInfo products = 1;
    ErrorCode error = 2;
  }
 `

 test('Field type should be converted when proto file cannot be found', () => {

  const ts = parseProto(source);

  assert.match(ts, 'type GetProduct');
  assert.match(ts, 'product_id?: number;');
  assert.match(ts, 'products?: ProductInfo[];');
});


test.run();