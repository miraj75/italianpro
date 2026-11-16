import type { PuzzleChallenge } from '../academyTypes';
import { B2_PUZZLES_1 } from './puzzles-1';
import { B2_PUZZLES_2 } from './puzzles-2';

/**
 * 264 explicit B2 PuzzleChallenges spanning all 12 puzzle types (22 per type).
 * Combined with sentence-pool tile puzzles (728 B2 sentences), B2 offers 990+ total challenges.
 */
export const B2_PUZZLES: PuzzleChallenge[] = [
  ...B2_PUZZLES_1,
  ...B2_PUZZLES_2,
];
