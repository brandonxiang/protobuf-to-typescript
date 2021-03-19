import { parseProto } from '../../src';

test('Enum type should be converted', () => {
  const source = `
  syntax = "proto3";

  import "common/order.proto";
  
  service AppService {
      rpc GetProduct(GetProductReq) returns (GetProductResp) {}
  }
  
  message GetProductReq {
    uint64 product_id = 1;
  }
  
  message GetProductResp {
    repeated ProductInfo products = 1;
  }
  `;
  const ts = parseProto(source, { isDefinition: false });
  console.log(ts);
});
