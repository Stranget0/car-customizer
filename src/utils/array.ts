export type ObjectWithId = { id: string };

export const findIndexById = <T extends ObjectWithId[]>(
  targetArr: T,
  id: string
): number | undefined => {
  const index = targetArr.findIndex(({ id: _id }) => id === _id);
  if (index < 0) return undefined;
  return index;
};
export const findById = <T extends ObjectWithId>(
  targetArr: (T | null)[],
  id: string
): T | undefined => targetArr.find((t) => id === t?.id) as T | undefined;

export const invalidToNull = <T extends ObjectWithId>(
  allArray: T[],
  validArray: ObjectWithId[]
): (T | null)[] =>
  allArray.map((item) => {
    const { id } = item;
    if (findById(validArray, id)) return item;
    return null;
  });
