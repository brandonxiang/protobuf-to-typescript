
import { parseProto } from '../../src/index.js';
import { test } from 'uvu';
import * as assert from 'uvu/assert';


const source = `

message UpdateHostBankAccWalletInfoResp {
  // 0:成功  非0:错误码   
  //50010 bank account already exist
  //50011: bank account number already exist but the bank name or bank account name mismatch
  //50012 bank account mismatch the one on bank side
  optional ErrorCode errorCode                      = 1;
  optional string errorMsg                          = 2;
  optional UpdateHostBankAccWalletInfoRespData data = 3;
}

`;

test('Comment of Field type should be converted', () => {
  const ts = parseProto(source);

  assert.match(ts, '//50010 bank account already exist');
  assert.match(ts, '//50011: bank account number already exist');
  assert.match(ts, '//50012 bank account mismatch the one on');
});


test.run();