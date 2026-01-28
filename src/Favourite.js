import { useContext } from "react";
import { StudentContext } from "./context/Studentcontext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <div className="text-center  ">
      <h1 className="text-red-500 text-2xl ">Favourite Students List</h1>

      {favourites.length === 0 ? (
        <p className="mt-3 p-2">No favourite students added yet.</p>
      ) : (
        favourites.map(student => (
          <div className="flex text-center justify-center ml-5 " key={student.id}>
            <p className="p-3">{student.name} - {student.roll}</p>
            <button className="mt-5 ml-8 border border-blue-500 bg-blue-500 text-white  px-4 py-2 rounded hover:bg-blue-600 transition"onClick={() => removeFavourite(student.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;
