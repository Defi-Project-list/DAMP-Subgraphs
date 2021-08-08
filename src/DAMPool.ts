import {
  DAMPool,
  AdapterCalled,
  AddManager,
  PoolCreated,
  RemoveManager,
  TopupComptroller,
  TopupDAMPool,
  TrackToken,
  UntrackToken,
} from '../generated/templates/DAMPool/DAMPool';

export function handleAdapterCalled(event: AdapterCalled): void {}

export function handleAddManager(event: AddManager): void {}

export function handlePoolCreated(event: PoolCreated): void {}

export function handleRemoveManager(event: RemoveManager): void {}

export function handleTopupComptroller(event: TopupComptroller): void {}

export function handleTopupDAMPool(event: TopupDAMPool): void {}

export function handleTrackToken(event: TrackToken): void {}

export function handleUntrackToken(event: UntrackToken): void {}
