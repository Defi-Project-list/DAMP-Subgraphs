import { log } from '@graphprotocol/graph-ts';
import {
  DAMPoolCreated,
  OwnershipTransferred,
} from '../generated/DAMPoolFactory/DAMPoolFactory';
import { ComptrollerV2, DAMPool } from '../generated/templates';
import { Comptroller, Pool } from '../generated/schema';

export function handleDAMPoolCreated(event: DAMPoolCreated): void {
  ComptrollerV2.create(event.params._comptroller);
  DAMPool.create(event.params._DAMPool);

  let comptroller = new Comptroller(event.params._comptroller.toHexString());
  comptroller.pool = event.params._DAMPool;
  comptroller.save();

  let pool = new Pool(event.params._DAMPool.toHexString());
  pool.assetName = event.params._denomAssetName;
  pool.comptroller = event.params._comptroller;
  pool.name = event.params._name;
  pool.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
