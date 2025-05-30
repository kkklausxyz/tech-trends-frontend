export function scaleValues(array, key) {
  if (!array.length) return [];

  const width = window.innerWidth;

  let minTarget = 20;
  let maxTarget = 100;

  if (width >= 1200) {
    minTarget = 60;
    maxTarget = 200;
  } else if (width >= 768) {
    minTarget = 40;
    maxTarget = 160;
  }

  const values = array.map((item) => item[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return array.map((item) => ({
      ...item,
      scaledValue: (minTarget + maxTarget) / 2,
    }));
  }

  return array.map((item) => {
    const scaled =
      ((item[key] - min) / (max - min)) * (maxTarget - minTarget) + minTarget;
    return {
      ...item,
      scaledValue: scaled,
    };
  });
}
