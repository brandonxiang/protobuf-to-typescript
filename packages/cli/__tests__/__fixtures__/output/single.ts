interface MyMethod {
  (params: MyRequest): Promise<MyResponse>;
}

interface MyRequest {
  path: string;
}

interface MyResponse {
  status: number;
}

