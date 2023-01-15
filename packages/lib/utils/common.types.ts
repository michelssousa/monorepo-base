import type { MsgProps } from './common-msg'

export type Platform = 'WEB' | 'APP' | 'ALL'

export type Error = Partial<MsgProps>

export type OK = Partial<MsgProps>

class success<V, E extends Error> {
  constructor(private value: V) { }

  isSuccess = (): this is success<V, E> => true;
  isFailure = (): this is failure<V, E> => false;

  run = () => this.value;

  getValue = () => {
    return this.value;
  };

  getError = () => {
    return 'Nothing Error';
  };
}

class failure<V, E extends Error> {
  constructor(private error: E) { }

  isSuccess = (): this is success<V, E> => false;
  isFailure = (): this is failure<V, E> => true;

  run = () => {
    throw this.error;
  };

  getValue = () => {
    throw this.error;
  };

  getError = () => {
    return this.error;
  };
}

export const combine = (
  results: SuccessOrFailure<any, Error>[]
): SuccessOrFailure<any | boolean, Error> => {
  for (const result of results) {
    if (result.isFailure()) return result;
  }
  return Success(true);
};

export const Success = <V, E extends Error>(value: V) =>
  new success<V, E>(value);
export const Failure = <V, E extends Error>(error: E) =>
  new failure<V, E>(error);

export type SuccessOrFailure<V, E extends Error> =
  | success<V, E>
  | failure<V, E>;


