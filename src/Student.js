import { useContext } from "react";
import { StudentContext } from "./context/Studentcontext";
import students from "./data/studentdetails";
function StudentList() {
  const { addFavourite } = useContext(StudentContext);

  return (
    <div className="text-center">
      <h2 className="text-red-500 text-2xl">Student List</h2>

      {students.map(student => (
        <div className="flex text-center justify-center ml-5"key={student.id}>
          <p className="p-3 mt-2">{student.name} - {student.roll}</p>
          <button  className=" mt-5 ml-3 border border-blue-500 bg-blue-500 text-white rounded hover:bg-blue-600 transition"onClick={() => addFavourite(student)}>
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;