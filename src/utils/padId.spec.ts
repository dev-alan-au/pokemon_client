import { padId } from './padId';

describe("padId", () => {
  it("Adds two zeros to numbers < 10", () => {
    const paddedId = padId(1);
    expect(paddedId).toBe("001");
  });

  it("Adds one zero to numbers >= 10 and < 100", () => {
    const paddedId = padId(10);
    expect(paddedId).toBe("010");
  });

  it("Returns same number as string for values >= 100", () => {
    const paddedId1 = padId(110);
    const paddedId2 = padId(1110);
    expect(paddedId1).toBe("110");
    expect(paddedId2).toBe("1110");
  });
  
});