export const getClosestCorrelation = (
  targetCorr: number,
  array: Record<string, unknown>[]
) => {
  const diffs = array.map((obj) => ({
    ...obj,
    diff: Math.abs((obj as any).corr - targetCorr),
  }));

  diffs.sort((a, b) => a.diff - b.diff);

  return diffs.slice(1, 10).map((obj) => {
    const { diff, ...originalObj } = obj;
    return originalObj;
  });
};
