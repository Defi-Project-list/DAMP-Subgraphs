import { BigInt } from '@graphprotocol/graph-ts';
import {
  DAMPoolCreated,
  OwnershipTransferred,
} from '../generated/DAMPoolFactory/DAMPoolFactory';
import { ComptrollerV2, DAMPool } from '../generated/templates';
import { Comptroller, Manager, Pool } from '../generated/schema';

export function handleDAMPoolCreated(event: DAMPoolCreated): void {
  ComptrollerV2.create(event.params._comptroller);
  DAMPool.create(event.params._DAMPool);

  let comptroller = new Comptroller(event.params._comptroller.toHexString());
  comptroller.requestedAmount = new BigInt(0);
  comptroller.deployer = event.params._deployer;

  let pool = new Pool(event.params._DAMPool.toHexString());
  pool.name = event.params._name;
  pool.comptroller = comptroller.id;
  pool.deployer = event.params._deployer;
  pool.assetName = event.params._denomAssetName;

  let managers = event.params._managers;
  let managersID: Array<string>;
  let length = managers.length;
  let i = 0;

  while (i < length) {
    let manager = Manager.load(managers[i].toHexString());
    if (!manager) {
      manager = new Manager(managers[i].toHexString());
      manager.pools = [pool.id];
    } else {
      let pools = manager.pools;
      pools.push(pool.id);
      manager.pools = pools;
    }
    i += 1;
    managersID.push(manager.id);
    manager.save();
  }

  comptroller.Managers = managersID;
  pool.Managers = managersID;
  comptroller.pool = pool.id;

  pool.save();
  comptroller.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
