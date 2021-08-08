import { BigInt, log } from '@graphprotocol/graph-ts';
import {
  ComptrollerFactory,
  ComptrollerCreated,
  OwnershipTransferred,
} from '../generated/ComptrollerFactory/ComptrollerFactory';

export function handleComptrollerCreated(event: ComptrollerCreated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
