/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

/** BELOW ARE DEFINITIONS FOR EVM ERROR CLASSIFICATION IN RECEIPT STATUS */
export enum ReceiptStatus {
  Failure = 0,
  Success = 1,
  /** ErrUnknown - 1xx for EVM ErrorCode */
  ErrUnknown = 100,
  ErrOutOfGas = 101,
  ErrCodeStoreOutOfGas = 102,
  ErrDepth = 103,
  ErrContractAddressCollision = 104,
  ErrNoCompatibleInterpreter = 105,
  ErrExecutionReverted = 106,
  ErrMaxCodeSizeExceeded = 107,
  ErrWriteProtection = 108,
  /** ErrLoadAccount - 2xx for Staking ErrorCode */
  ErrLoadAccount = 200,
  ErrNotEnoughBalance = 201,
  ErrInvalidBucketIndex = 202,
  ErrUnauthorizedOperator = 203,
  ErrInvalidBucketType = 204,
  ErrCandidateNotExist = 205,
  ErrReduceDurationBeforeMaturity = 206,
  ErrUnstakeBeforeMaturity = 207,
  ErrWithdrawBeforeUnstake = 208,
  ErrWithdrawBeforeMaturity = 209,
  ErrCandidateAlreadyExist = 210,
  ErrCandidateConflict = 211,
  ErrInvalidBucketAmount = 212,
  ErrWriteAccount = 213,
  ErrWriteBucket = 214,
  ErrWriteCandidate = 215,
  UNRECOGNIZED = -1,
}

export function receiptStatusFromJSON(object: any): ReceiptStatus {
  switch (object) {
    case 0:
    case "Failure":
      return ReceiptStatus.Failure;
    case 1:
    case "Success":
      return ReceiptStatus.Success;
    case 100:
    case "ErrUnknown":
      return ReceiptStatus.ErrUnknown;
    case 101:
    case "ErrOutOfGas":
      return ReceiptStatus.ErrOutOfGas;
    case 102:
    case "ErrCodeStoreOutOfGas":
      return ReceiptStatus.ErrCodeStoreOutOfGas;
    case 103:
    case "ErrDepth":
      return ReceiptStatus.ErrDepth;
    case 104:
    case "ErrContractAddressCollision":
      return ReceiptStatus.ErrContractAddressCollision;
    case 105:
    case "ErrNoCompatibleInterpreter":
      return ReceiptStatus.ErrNoCompatibleInterpreter;
    case 106:
    case "ErrExecutionReverted":
      return ReceiptStatus.ErrExecutionReverted;
    case 107:
    case "ErrMaxCodeSizeExceeded":
      return ReceiptStatus.ErrMaxCodeSizeExceeded;
    case 108:
    case "ErrWriteProtection":
      return ReceiptStatus.ErrWriteProtection;
    case 200:
    case "ErrLoadAccount":
      return ReceiptStatus.ErrLoadAccount;
    case 201:
    case "ErrNotEnoughBalance":
      return ReceiptStatus.ErrNotEnoughBalance;
    case 202:
    case "ErrInvalidBucketIndex":
      return ReceiptStatus.ErrInvalidBucketIndex;
    case 203:
    case "ErrUnauthorizedOperator":
      return ReceiptStatus.ErrUnauthorizedOperator;
    case 204:
    case "ErrInvalidBucketType":
      return ReceiptStatus.ErrInvalidBucketType;
    case 205:
    case "ErrCandidateNotExist":
      return ReceiptStatus.ErrCandidateNotExist;
    case 206:
    case "ErrReduceDurationBeforeMaturity":
      return ReceiptStatus.ErrReduceDurationBeforeMaturity;
    case 207:
    case "ErrUnstakeBeforeMaturity":
      return ReceiptStatus.ErrUnstakeBeforeMaturity;
    case 208:
    case "ErrWithdrawBeforeUnstake":
      return ReceiptStatus.ErrWithdrawBeforeUnstake;
    case 209:
    case "ErrWithdrawBeforeMaturity":
      return ReceiptStatus.ErrWithdrawBeforeMaturity;
    case 210:
    case "ErrCandidateAlreadyExist":
      return ReceiptStatus.ErrCandidateAlreadyExist;
    case 211:
    case "ErrCandidateConflict":
      return ReceiptStatus.ErrCandidateConflict;
    case 212:
    case "ErrInvalidBucketAmount":
      return ReceiptStatus.ErrInvalidBucketAmount;
    case 213:
    case "ErrWriteAccount":
      return ReceiptStatus.ErrWriteAccount;
    case 214:
    case "ErrWriteBucket":
      return ReceiptStatus.ErrWriteBucket;
    case 215:
    case "ErrWriteCandidate":
      return ReceiptStatus.ErrWriteCandidate;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReceiptStatus.UNRECOGNIZED;
  }
}

export function receiptStatusToJSON(object: ReceiptStatus): string {
  switch (object) {
    case ReceiptStatus.Failure:
      return "Failure";
    case ReceiptStatus.Success:
      return "Success";
    case ReceiptStatus.ErrUnknown:
      return "ErrUnknown";
    case ReceiptStatus.ErrOutOfGas:
      return "ErrOutOfGas";
    case ReceiptStatus.ErrCodeStoreOutOfGas:
      return "ErrCodeStoreOutOfGas";
    case ReceiptStatus.ErrDepth:
      return "ErrDepth";
    case ReceiptStatus.ErrContractAddressCollision:
      return "ErrContractAddressCollision";
    case ReceiptStatus.ErrNoCompatibleInterpreter:
      return "ErrNoCompatibleInterpreter";
    case ReceiptStatus.ErrExecutionReverted:
      return "ErrExecutionReverted";
    case ReceiptStatus.ErrMaxCodeSizeExceeded:
      return "ErrMaxCodeSizeExceeded";
    case ReceiptStatus.ErrWriteProtection:
      return "ErrWriteProtection";
    case ReceiptStatus.ErrLoadAccount:
      return "ErrLoadAccount";
    case ReceiptStatus.ErrNotEnoughBalance:
      return "ErrNotEnoughBalance";
    case ReceiptStatus.ErrInvalidBucketIndex:
      return "ErrInvalidBucketIndex";
    case ReceiptStatus.ErrUnauthorizedOperator:
      return "ErrUnauthorizedOperator";
    case ReceiptStatus.ErrInvalidBucketType:
      return "ErrInvalidBucketType";
    case ReceiptStatus.ErrCandidateNotExist:
      return "ErrCandidateNotExist";
    case ReceiptStatus.ErrReduceDurationBeforeMaturity:
      return "ErrReduceDurationBeforeMaturity";
    case ReceiptStatus.ErrUnstakeBeforeMaturity:
      return "ErrUnstakeBeforeMaturity";
    case ReceiptStatus.ErrWithdrawBeforeUnstake:
      return "ErrWithdrawBeforeUnstake";
    case ReceiptStatus.ErrWithdrawBeforeMaturity:
      return "ErrWithdrawBeforeMaturity";
    case ReceiptStatus.ErrCandidateAlreadyExist:
      return "ErrCandidateAlreadyExist";
    case ReceiptStatus.ErrCandidateConflict:
      return "ErrCandidateConflict";
    case ReceiptStatus.ErrInvalidBucketAmount:
      return "ErrInvalidBucketAmount";
    case ReceiptStatus.ErrWriteAccount:
      return "ErrWriteAccount";
    case ReceiptStatus.ErrWriteBucket:
      return "ErrWriteBucket";
    case ReceiptStatus.ErrWriteCandidate:
      return "ErrWriteCandidate";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
