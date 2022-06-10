import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import AddStudentModal from "../AddStudentModal";

const Homepage = () => {
   const [students, setStudents] = useState([])
   const [editingStudent, setEditingStudent] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   const [isLoader, setIsLoader] = useState(true)
   useEffect(() => {
      axios.get('https://6299eb5d6f8c03a9784cec35.mockapi.io/students')
        .then((res) => {
           setStudents(res.data)
           setIsLoader(false)
      })
   })
   const deleteStudent = async (id) => {
      await axios.delete(`https://6299eb5d6f8c03a9784cec35.mockapi.io/students/${id}`)
      const studentsList = students.filter(item => item.id !== id)
      setStudents(studentsList)
   }
   const handleEdit =(student)=>{
      setEditingStudent(student)
      setOpenModal(true)
   }
if (isLoader) {
   <Spinner />
}
   return (
     <div>
        <div className="table w-full p-2">
           {
              openModal &&
              <AddStudentModal setOpenModal = {setOpenModal} students={students} setStudents={setStudents} editingStudent={editingStudent} setEditingStudent={setEditingStudent}/>
           }
           <button onClick={() => setOpenModal(true)}
                   className="mt-10 mb-6 rounded-xl border  py-1 px-4 text-white bg-gray-700 hover:bg-gray-600 hover:text-black text-primary my-6">
              Add New Student
           </button>
           <table className="w-full border">
              <thead>
              <tr className="bg-gray-50 border-b">
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       ID
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Full Name
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Year
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Group
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Phone
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Email
                    </div>
                 </th>
                 <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div className="flex items-center justify-center">
                       Action
                    </div>
                 </th>
              </tr>
              </thead>
              <tbody>
              {
                 students.map((student) => (
                   <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                      <td className="p-2 border-r">{student.id}</td>
                      <td className="p-2 border-r">{student.fullName}</td>
                      <td className="p-2 border-r">{student.year}</td>
                      <td className="p-2 border-r">{student.group}</td>
                      <td className="p-2 border-r">{student.phone}</td>
                      <td className="p-2 border-r">{student.email}</td>
                      <td>
                         <button onClick={() => handleEdit(student)} className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                         <button onClick={() => deleteStudent(student.id)} className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                      </td>
                   </tr>
                 ))
              }
              </tbody>
           </table>
        </div>
     </div>
   );
};

export default Homepage;