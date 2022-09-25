// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Combination = {
  lengths: number[],
  bands: string[],
  diff: number
}

// assume descending
const bands = ['40m', '30m', '20m', '17m', '15m', '12m', '10m', '6m'];
const feets = [32.73, 22.72, 16.51, 12.92, 11.02, 9.38, 8.21, 4.50];
// 1 ft = .3048 meter
const mtrs = [9.976, 6.925, 5.032, 3.938, 3.359, 2.859, 2.5, 1.37];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Combination[]>
) {
  res.status(200).json(linkedDipole());
}

function linkedDipole(): Combination[] {
  const res: number[][] = [];
  for (let x = 2; x < mtrs.length; x++) {
    const curr = generateCombinations(mtrs, x);
    res.push(...curr);
  }
  const tgt = 5.032;
  const tolerance = .15;
  const filtered = filterCombosCloseToTarget(res, tgt, tolerance);

  // printCombinations(filtered);
  const ret = filtered.map(x => ({
    lengths: x,
    bands: x.map(y => bands[mtrs.indexOf(y)]),
    diff: tgt - x.reduce((p, c) => p + c)
  }));

  // sort by ABS lowest diff first
  return ret.sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff));
}

function filterCombosCloseToTarget(combos: number[][], target: number, tolerancePercent: number) {
  const filterPass: number[][] = [];
  const toleranceValue = target * tolerancePercent;
  const low = target - toleranceValue;
  const high = target + toleranceValue;
  // for each combo is the sum close to the target?
  combos.forEach(c => {
    const sum = c.reduce((prev, curr) => prev + curr);
    if ((low < sum) && (sum < high)) {
      filterPass.push(c);
    }
  });
  return filterPass;
}

function printCombinations(combos: number[][]) {
  combos.flatMap(x => x.flatMap(y => console.log(y)));
}


/**
* Generate all combinations of an array.
* @param {Array} sourceArray - Array of input elements.
* @param {number} comboLength - Desired length of combinations.
* @return {Array} Array of combination arrays.
*/
function generateCombinations(sourceArray: number[], comboLength: number): number[][] {
  const sourceLength = sourceArray.length;
  if (comboLength > sourceLength) return [];

  const combos: number[][] = []; // Stores valid combinations as they are generated.

  // Accepts a partial combination, an index into sourceArray, 
  // and the number of elements required to be added to create a full-length combination.
  // Called recursively to build combinations, adding subsequent elements at each call depth.
  const makeNextCombos = (workingCombo: number[], currentIndex: number, remainingCount: number) => {
    const oneAwayFromComboLength = remainingCount == 1;

    // For each element that remaines to be added to the working combination.
    for (let sourceIndex = currentIndex; sourceIndex < sourceLength; sourceIndex++) {
      // Get next (possibly partial) combination.
      const next = [...workingCombo, sourceArray[sourceIndex]];

      if (oneAwayFromComboLength) {
        // Combo of right length found, save it.
        combos.push(next);
      }
      else {
        // Otherwise go deeper to add more elements to the current partial combination.
        makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
      }
    }
  }

  makeNextCombos([], 0, comboLength);
  return combos;
}



