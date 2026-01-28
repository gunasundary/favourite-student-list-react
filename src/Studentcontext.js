import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    const exists = favourites.find(s => s.id === student.id);
    if (!exists) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter(s => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}
