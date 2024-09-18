export interface Data<T> {
  model: T;
  messages: Message[];
  fieldErrors: string[];
  success: boolean;
}

export interface Message {
  type: string;
  message: string;
  code?: number;
}
