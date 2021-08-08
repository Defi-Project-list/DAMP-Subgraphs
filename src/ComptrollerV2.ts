import { BigInt, log } from '@graphprotocol/graph-ts';
import { Comptroller } from '../generated/schema';
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

export function handleRequestAmount(event: RequestAmount): void {}

export function handleWithdrawal(event: Withdrawal): void {}
