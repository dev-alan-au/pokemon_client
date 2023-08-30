const MAX_ID_LENGTH = 3;

export const padId = (id: string | number) => {
  let strId = typeof id == 'number' ? id.toString() : id;
  const pad = strId.length > MAX_ID_LENGTH ? 0 : MAX_ID_LENGTH - strId.length;
  return new Array(pad).fill("0").join("") + strId;
}