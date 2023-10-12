import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("throws error if no array supplied", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples(3);
    }).toThrow("arr must be an array");
  })

  test("returns zero if arr is empty", () => {
    expect(sumMultiples([])).toBe(0);
  });

  test("returns zero if arr contains no multiples of 3 or 5", () => {
    expect(sumMultiples([2, 4, 8])).toBe(0);
  });

  test("returns sum of multiples of 3 or 5", () => {
    expect(sumMultiples([-3, 0, 1.1, 3, 5.0, 9.0, 10])).toBe(24);
  })
});

describe("isValidDNA", () => {
  test("throws error if no string argument supplied", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");

    expect(() => {
      isValidDNA(true);
    }).toThrow("str must be a string");
  });

  test("returns false if str is empty", () => {
    expect(isValidDNA("")).toBe(false);
  })

  test("returns false for any characters other than C, G, T or A", () => {
    expect(isValidDNA("BD")).toBe(false);
    expect(isValidDNA("CGTAa")).toBe(false);
  });

  test("returns true for string containing characters C, G, T or A", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("CGTAATCG")).toBe(true);
  })
});

describe("getComplementaryDNA", () => {
  test("throws error if invalid DNA string", () => {
    expect(() => {
      getComplementaryDNA("BD");
    }).toThrow("str must be a valid DNA string");
  });

  test("returns T -> A", () => expect(getComplementaryDNA("T")).toBe("A"));
  test("returns A -> T", () => expect(getComplementaryDNA("A")).toBe("T"));
  test("returns C -> G", () => expect(getComplementaryDNA("C")).toBe("G"));
  test("returns G -> C", () => expect(getComplementaryDNA("G")).toBe("C"));

  test("returns complementary DNA", () => {
    expect(getComplementaryDNA("CGTAGCAT")).toBe("GCATCGTA");
  });
});

describe("isItPrime", () => {
  test("non-integers should return false", () => expect(isItPrime(11.1)).toBe(false));
  test("negative numbers should return false", () => expect(isItPrime(-1)).toBe(false));
  test("zero should return false", () => expect(isItPrime(0)).toBe(false));
  test("one should return false", () => expect(isItPrime(1)).toBe(false));
  test("ten should return false", () => expect(isItPrime(10)).toBe(false));

  test("7 and 17 should both return true", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(17)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("throws error if n is not supplied", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required");
  });

  test("throws error if fill is not supplied", () => {
    expect(() => {
      createMatrix(3);
    }).toThrow("fill is required");
  });

  test("throw error if n is negative", () => {
    expect(() => {
      createMatrix(-1, "a");
    }).toThrow("n must be zero or more");
  });

  test("zero should returns an empty array", () => expect(createMatrix(0, "a")).toStrictEqual([]));

  test("one should return a sub array of one element ", () => {
    expect(createMatrix(1, "a")).toStrictEqual([["a"]]);
  });

  test("two should return two sub arrays each with 2 elements", () => {
    expect(createMatrix(2, "a")).toStrictEqual([["a", "a"], ["a", "a"]]);
  });
});

describe("areWeCovered", () => {
  test("throws error if array of staff not supplied", () => {
    expect(() => {
      areWeCovered();
    }).toThrow("staff is required");
  });

  test("throws error if day is not supplied", () => {
    expect(() => {
      areWeCovered([]);
    }).toThrow("day is required");
  });

  const staff = [
    { name: "Batman", rota: ["Tuesday", "Wednesday"] },
    { name: "Robin", rota: ["Tuesday", "Wednesday", "Friday"] },
    { name: "Sally", rota: ["Tuesday", "Monday", "Friday"] },
    { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
  ];

  test("returns true when 3 or more staff", () => {
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Wednesday")).toBe(true);
  });

  test("returns false when less than 3 staff", () => {
    expect(areWeCovered(staff, "Thursday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(false);
  });
});