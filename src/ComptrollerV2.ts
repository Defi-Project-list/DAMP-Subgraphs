import { Address, BigInt, log } from '@graphprotocol/graph-ts';
import { Comptroller, UserComptroller } from '../generated/schema';
import {
  ComptrollerV2,
  AgreementCreated,
  AgreementTerminated,
  AgreementUpdated,
  ComptrollerCreated,
  RequestAmount,
  Withdrawal,
} from '../generated/templates/ComptrollerV2/ComptrollerV2';

export function handleAgreementCreated(event: AgreementCreated): void {}

export function handleAgreementTerminated(event: AgreementTerminated): void {}

export function handleAgreementUpdated(event: AgreementUpdated): void {}

export function handleComptrollerCreated(event: ComptrollerCreated): void {}

export function handleRequestAmount(event: RequestAmount): void {
  let comptroller = Comptroller.load(event.params._comptroller.toHexString());
  comptroller.requestedAmount.plus(event.params._amount);
  comptroller.save();
}

export function handleWithdrawal(event: Withdrawal): void {
  let userComptrollerID = createKey(
    event.params._receiver,
    event.params._comptroller
  );

  let userComptroller = UserComptroller.load(userComptrollerID);
  if (!userComptroller) {
    userComptroller = new UserComptroller(userComptrollerID);
    userComptroller.withdrawals = [event.params._amount];
  } else {
    let withdrawals = userComptroller.withdrawals;
    withdrawals.push(event.params._amount);
    userComptroller.withdrawals = withdrawals;
  }

  userComptroller.save();
}

const createKey = (user: Address, pool: Address): string => {
  return user
    .toHexString()
    .concat('-')
    .concat(pool.toHexString());
};
