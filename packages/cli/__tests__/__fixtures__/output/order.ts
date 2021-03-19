interface GetProduct {
  (params: GetProductReq): Promise<GetProductResp>;
}

interface GetProductReq {
  productId: string;
}

interface GetProductResp {
  products: ProductInfo[];
}

