/**
 * Each index of the rarity array corresponds with a trait value at the same index.
 * An array of 1's means that there is no weight for this trait and the odds are neutral.
 *
 * @link https://chancejs.com/miscellaneous/weighted.html
 */

import { Traits } from './types';

export const bg: Traits['background'][] = [
  'red',
  'yellow',
  'pink',
  '#bd5178',
  '#6c51bd',
  '#51bd8b',
];
export const bg_rarity = [1, 1, 1, 1, 1, 1];

export const base: Traits['base'][] = ['Devie', 'Johnny', 'Maggie', 'Swervie'];
export const base_rarity = [1, 1, 1, 1];

export const color: Traits['color'][] = ['gray'];
export const color_rarity = [1];

export const arm: Traits['arms'][] = ['arm1', 'arm2', 'arm3', 'arm4'];
export const arm_rarity = [1, 1, 1, 1];

export const chest: Traits['chest'][] = ['dial', 'switch', 'clock', 'computer'];
export const chest_rarity = [1, 1, 1, 1];
