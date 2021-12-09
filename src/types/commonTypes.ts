export interface MutationData {
  data: {
    data: string;
    statusCode: number;
  };
  status: number;
}
export interface MutationError {
  response: {
    status: string;
    data: {
      message: string;
    };
  };
}
