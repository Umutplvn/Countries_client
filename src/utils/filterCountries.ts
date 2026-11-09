import { CountryType } from "../types";

export function filterCountriesByQuery(countries: CountryType[], query: string): CountryType[] {
  const searchLower = query.trim().toLowerCase();
  if (!searchLower) {
    return countries;
  }
  return (countries || []).filter((country) => {
    const commonName = country?.name?.common?.toLowerCase() || "";
    const officialName = country?.name?.official?.toLowerCase() || "";
    const altSpellings = country?.altSpellings?.map((spelling) => spelling.toLowerCase()) || [];
    return (
      commonName.includes(searchLower) ||
      officialName.includes(searchLower) ||
      altSpellings.some((spelling) => spelling.includes(searchLower))
    );
  });
}
