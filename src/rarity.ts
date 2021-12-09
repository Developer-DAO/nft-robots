import { Traits } from './types';

/**
 * Each index of the rarity array corresponds with a trait value at the same index.
 * An array of 1's means that there is no weight for this trait and the odds are neutral.
 *
 * @link https://chancejs.com/miscellaneous/weighted.html
 */

type RobotAttribute<T> = {
  variants: T extends 'base'
    ? Traits['base'][]
    : T extends 'background'
    ? Traits['background'][]
    : T extends 'color'
    ? Traits['color'][]
    : T extends 'chest'
    ? Traits['chest'][]
    : Traits['arms'][];
  rarity: number[];
};

/* Backgrounds */

export const background: RobotAttribute<'background'> = {
  variants: ['red', 'yellow', 'pink', '#bd5178', '#6c51bd', '#51bd8b'],
  rarity: [1, 1, 1, 1, 1, 1],
};

/* Base */

export const base: RobotAttribute<'base'> = {
  variants: ['Devie', 'Johnny', 'Maggie', 'Swervie'],
  rarity: [1, 1, 1, 1],
};

/* Color */

export const color: RobotAttribute<'color'> = {
  variants: ['gray'],
  rarity: [1],
};

/* Arms */

export const arms: RobotAttribute<'arms'> = {
  variants: ['arm1', 'arm2', 'arm3', 'arm4'],
  rarity: [1, 1, 1, 1],
};

/* Chest */

export const chest: RobotAttribute<'chest'> = {
  variants: ['dial', 'switch', 'clock', 'computer'],
  rarity: [1, 1, 1, 1],
};
