export interface MutationData {
  data: {
    data: {
      [key: string]: string;
    };
    statusCode: number;
  };
}
export interface MutationError {
  response: {
    status: string;
    data: {
      message: string;
    };
  };
}
