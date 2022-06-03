import React, {useEffect, useState} from 'react';
import axios from "axios";

const Students = () => {
   const [students, setStudents] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   useEffect(() => {
      axios('https://6299eb5d6f8c03a9784cec35.mockapi.io/students')
        .then(({data}) =>
          setStudents(data))
         setIsLoading(false)
   }, [])
   const deleteUser = async (id) => {
      await axios.delete(`https://6299eb5d6f8c03a9784cec35.mockapi.io/students/${id}`)
      const studentsList = students.filter(student => student.id !== id)
      setStudents(studentsList)
   }
   if (isLoading){
      return 'Loading....'
   }
   return (
     <div>
        <div className="md:px-32 py-8 w-full">
           <div className="shadow overflow-hidden rounded border-b border-gray-200">
              <table className="min-w-full bg-white">
                 <thead className="bg-gray-800 text-white">
                 <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">University</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Group</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Year</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Delete</th>
                 </tr>
                 </thead>
                 <tbody className="text-gray-700">
                 {
                    students.map((student) => (
                      <tr className="bg-gray-100" key={student.id}>
                         <td className="w-1/5 text-left py-3 px-4">{student.firstname}</td>
                         <td className="w-1/5 text-left py-3 px-4">{student.lastname}</td>
                         <td className="w-1/5 text-left py-3 px-4">{student.university}</td>
                         <td className="text-left py-3 px-4"><a className="hover:text-blue-500"
                                                                href="tel:622322662">{student.phone}</a></td>
                         <td className="w-1/5 text-left py-3 px-4">{student.group}</td>
                         <td className="w-1/5 text-left py-3 px-4">{student.year}</td>
                         <td className="text-left py-3 px-4"><a className="hover:text-blue-500"
                                                                href="mailto:jonsmith@mail.com">{student.email}</a></td>
                         <td className="w-1/3 text-left py-3 px-4">
                            <button type="button"
                                    onClick={() => deleteUser(student.id)}
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete

                            </button>
                         </td>
                      </tr>
                    ))
                 }
                 </tbody>
              </table>
           </div>
        </div>
     </div>
   );
};

export default Students;