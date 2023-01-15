import _ from './packages/lib'
import { Success, SuccessOrFailure, Failure, Error } from './packages/lib/utils/common.types';


console.log(_.Utl.makeId());

const dddd = (vl1: number, vl2: number): SuccessOrFailure<boolean, Error> => {

  if (_.Ck.isGreaterThat(vl1, vl2)) {
    return Success(true)
  }
  return Failure(_.Msg.failure.bad_request)
}

const _resultokOrError = dddd(2, 5)

if (_resultokOrError.isFailure()) {
  console.log(`Error: ${_resultokOrError.getError().msg}`);
}
else {
  console.log(`Result: ${_resultokOrError.getValue()}`);
}









