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

export interface Position {
  lat: number;
  lng: number;
}

export interface CartesianPosition {
  y: number;
  x: number;
}
