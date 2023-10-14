import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("returns sum of individual digits", () => {
    expect(sumDigits(123)).toBe(6);
  });
});

describe("createRange", () => {
  test("default step returns all numbers", () => {
    expect(createRange(-1, 3)).toStrictEqual([-1, 0, 1, 2, 3]);
  });

  test("step of 1 returns all numbers", () => {
    expect(createRange(-1, 3, 1)).toStrictEqual([-1, 0, 1, 2, 3]);
  });

  test("always return at least the start number", () => {
    expect(createRange(10, 100, 100)).toStrictEqual([10]);
  })

  test("negative step returns descending numbers", () => {
    expect(createRange(5, 0, -2)).toStrictEqual([5, 3, 1]);
  });

  test("+ve range with -ve step returns an empty array", () => {
    expect(createRange(0, 5, -1)).toStrictEqual([]);
  });

  test("-ve range with +ve step returns an empty array", () => {
    expect(createRange(5, 0)).toStrictEqual([]);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        { date: "2019-06-11", usage: { twitter: 80, instagram: 10, facebook: 10 } }, // 100 mins
        { date: "2019-06-12", usage: { twitter: 90, instagram: 10, facebook: 10 } }  // 110 mins
      ]
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0 } },  // 0 mins
        { date: "2019-06-12", usage: { mapMyRun: 90, whatsApp: 10, facebook: 1 } },  // 101 mins
      ]
    },
  ];

  test("return empty array when no usage data for supplied date", () => {
    expect(getScreentimeAlertList(users, "2023-06-10")).toStrictEqual([]);
  });

  test("return empty array with no users exceeding 100 minutes", () => {
    expect(getScreentimeAlertList(users, "2019-06-11")).toStrictEqual([]);
  });

  test("return all users exceeding 100 minutes", () => {
    expect(getScreentimeAlertList(users, "2019-06-12")).toStrictEqual(["beth_1234", "sam_j_1989"]);
  });
});

describe("hexToRGB", () => {
  test("throws error for invalid hex numbers", () => {
    expect(() => {
      hexToRGB("#FF");
    }).toThrow("hexStr must be a valid hex number");
  });

  test("throws error for invalid hex numbers", () => {
    expect(() => {
      hexToRGB("#FF00GB");
    }).toThrow("hexStr must be a valid hex number");
  });


  test("transforms a well formed hex code to rgb", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
  });
});

describe("findWinner", () => {
  test("throws error if both win", () => {
    const both = [
      ["X", "X", "X"],
      [null, null, null],
      ["0", "0", "0"]
    ];

    expect(() => {
      findWinner(both)
    }).toThrow("board must have, at most, one winner")
  });

  test("identifies winning rows", () => {
    const zeroRow = [
      ["X", "X", null],
      ["0", "0", "0"],
      [null, null, null]
    ];

    expect(findWinner(zeroRow)).toBe('0');
  });

  test("identifies winning columns", () => {
    const xColumn = [
      ["0", "X", null],
      ["0", "X", null],
      [null, "X", null]
    ];

    expect(findWinner(xColumn)).toBe('X');
  });

  test("identifies winning diagonals", () => {
    const zeroBackSlash = [
      ["0", "X", null],
      ["X", "0", null],
      ["X", null, "0"]
    ];

    const xForwardSlash = [
      ["0", "0", "X"],
      ["0", "X", null],
      ["X", null, null]
    ];

    expect(findWinner(zeroBackSlash)).toBe('0');
    expect(findWinner(xForwardSlash)).toBe('X');
  });

  test("returns null when neither win", () => {
    const neither = [
      ["X", "0", null],
      ["X", null, "X"],
      [null, "0", "0"]
    ];

    expect(findWinner(neither)).toBeNull();
  });

  test("identifies one winner with multiple lines", () => {
    const multiple = [
      ["X", "0", "X"],
      ["X", "X", "0"],
      ["X", "0", "0"]
    ];

    expect(findWinner(multiple)).toBe("X");
  });
});