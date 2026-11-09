import { filterCountriesByQuery } from "./filterCountries";

const mockCountries = [
  {
    cca2: "IE",
    name: { common: "Ireland", official: "Republic of Ireland" },
    altSpellings: ["IE", "Éire", "Republic of Ireland"],
  },
  {
    cca2: "TR",
    name: { common: "Turkey", official: "Republic of Türkiye" },
    altSpellings: ["TR", "Turkiye", "Republic of Turkey"],
  },
];

describe("filterCountriesByQuery", () => {
  it("returns all countries when search query is empty", () => {
    expect(filterCountriesByQuery(mockCountries, "")).toHaveLength(2);
  });

  it("filters countries by common name case-insensitively", () => {
    const result = filterCountriesByQuery(mockCountries, "ireland");
    expect(result).toHaveLength(1);
    expect(result[0].cca2).toBe("IE");
  });

  it("filters countries by alternate spelling", () => {
    const result = filterCountriesByQuery(mockCountries, "turkiye");
    expect(result).toHaveLength(1);
    expect(result[0].cca2).toBe("TR");
  });

  it("returns empty array when no country matches", () => {
    expect(filterCountriesByQuery(mockCountries, "Atlantis")).toHaveLength(0);
  });
});
