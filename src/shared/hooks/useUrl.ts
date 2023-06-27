import { useSearchParams, useNavigate } from "react-router-dom";

export const useUpdateQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function updateQueryString(key: string, value: string) {
    if (searchParams.has(key)) {
      if (searchParams.get(key) === value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    } else {
      searchParams.set(key, value);
    }

    setSearchParams(searchParams);
    navigate(`?${searchParams.toString()}`);
  }

  function updateQuery(key: string, value: string) {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    navigate(`?${searchParams.toString()}`);
  }

  function updateQueryStrings(key: string, value: string | string[]) {
    if (Array.isArray(value)) {
      const existingValues = searchParams.getAll(key);
      const updatedValues = [...existingValues, ...value];
      searchParams.delete(key);
      updatedValues.forEach((v) => searchParams.append(key, v));
    } else {
      searchParams.set(key, value);
    }
    setSearchParams(searchParams);
    navigate(`?${searchParams.toString()}`);
  }

  return { updateQueryString, updateQuery, searchParams, updateQueryStrings };
};
