import { Traits } from './types';

interface Metadata {
  trait_type: string;
  value: string;
}

/**
 * Format trait config object into OpenSea compatible `attributes` metadata
 * @link https://docs.opensea.io/docs/metadata-standards
 *
 * @param config
 * @returns array of attributes in metadata object
 */

export function formatMetadata(config: Traits) {
  let attributes: Metadata[] = [];

  for (const [key, value] of Object.entries(config)) {
    attributes.push({ trait_type: key, value });
  }
  return { attributes };
}

export function containsObject(obj: object, list: object[]) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}
