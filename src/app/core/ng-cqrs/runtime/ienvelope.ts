export interface IEnvelope<T> {
  type: string;
  payload?: T;
}
