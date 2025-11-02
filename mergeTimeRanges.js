/**
 * Merge time ranges that overlap or have only a small gap between them.
 *
 * @param {Array<[number, number]>} ranges  List of (start, end) timestamps
 * @param {number} threshold               Max allowed gap to still merge
 * @returns {Array<[number, number]>}      Merged time ranges
 */
const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];

  // First sort by start time to make merging easier
  const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);

  const merged = [];
  let start = sortedRanges[0][0];
  let end = sortedRanges[0][1];

  for (let i = 1; i < sortedRanges.length; i++) {
    const [nextStart, nextEnd] = sortedRanges[i];

    // If the next range overlaps or is close enough, just extend the current range
    if (nextStart <= end + threshold) {
      end = Math.max(end, nextEnd);
    } else {
      // Otherwise, the current range is done, push it and move on
      merged.push([start, end]);
      start = nextStart;
      end = nextEnd;
    }
  }

  // Push the final range after finishing the loop
  merged.push([start, end]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
