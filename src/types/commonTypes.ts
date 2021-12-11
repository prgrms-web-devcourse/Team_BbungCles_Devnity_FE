export interface MutationData {
  data: {
    data: {
      [key: string]: string | null;
    };
    statusCode: number;
  };
}
export interface MutationError {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

export interface Unknown {
  unknown: unknown;
}
