export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  course: string;
  generation: string;
  role: string;
}

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
