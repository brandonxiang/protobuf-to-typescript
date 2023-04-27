//Service: AppService
export type GetProduct = (params: GetProductReq) => Promise<GetProductResp>;

export interface GetProductReq {
  product_id?: string;
}

export interface GetProductResp {
  products?: ProductInfo[];
}

export enum ErrorCode {
  kSuccess = 0, //null
  kFail = 1, //null
}

