/**
 * Make sure the object key perfectly matches the attribute value.
 * Each index of the rarity array corresponds with the trait value.
 * An array of 1 means that there is no weight for this trait and the odds are neutral.
 *
 * @link https://chancejs.com/miscellaneous/weighted.html
 */
import { Traits } from './types';

export const bg: Traits['background'][] = ['red', 'yellow', 'pink', 'purple'];
export const bg_rarity = [1, 1, 1, 2];

export const base: Traits['base'][] = ['Devie', 'Johnny', 'Maggie', 'Swervie'];
export const base_rarity = [1, 1, 1, 1];

export const color: Traits['color'][] = ['gray', 'red'];
export const color_rarity = [1, 1];

export const arm: Traits['arms'][] = ['gray', 'red'];
export const arm_rarity = [1, 1];

export const chest: Traits['chest'][] = ['gray', 'red'];
export const chest_rarity = [1, 1];
