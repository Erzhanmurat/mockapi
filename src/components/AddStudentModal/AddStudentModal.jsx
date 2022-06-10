import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

const AddStudentModal = ({students, setStudents, setOpenModal, editingStudent, setEditingStudent}) => {
   const {register, formState: { errors }, handleSubmit} = useForm()
   const [studentInfo, setStudentInfo] = useState({
      fullName: editingStudent?.fullName || '',
      group: editingStudent?.group || '',
      year: editingStudent?.year || '',
      phone: editingStudent?.phone || '',
      email: editingStudent?.email || ''
   })
   const updateStudent = async () => {

      const {data: updateStudent} = await axios.put(`https://6299eb5d6f8c03a9784cec35.mockapi.io/students/${editingStudent.id}`, studentInfo)
      const updateStudentList = students.map(item => item.id === editingStudent.id ? updateStudent : item)
      setStudents(updateStudentList)
      setOpenModal(false)
      setEditingStudent(null)

   }
   const handleChange = (e) => {
      setStudentInfo({...studentInfo, [e.target.name]: e.target.value})
   }
   const handleCreate = async () => {

      const uploadStudent = await axios.post('https://6299eb5d6f8c03a9784cec35.mockapi.io/students', studentInfo)
      setStudents([...students, uploadStudent.data])
      setStudentInfo({fullName: "", group: "", year: "", phone: "", email: ""})
      setOpenModal(false)
   }
   return (
     <div>
        <div className='bg-white p-6 mt-20'>
           <div className=' absolute right-1/4 top-6' onClick={() => {
              setOpenModal(false)
              setEditingStudent(null)
           }}>
              <button className='text-2xl hover:outline-offset-2'>
                 <FontAwesomeIcon icon={faXmark} />
              </button>
           </div>
        </div>
        <div className="mx-auto bg-white fixed justify-center flex w-full" >
           <form onSubmit={handleSubmit(editingStudent ? updateStudent : handleCreate)} className="p-16 rounded-lg shadow-inner bg-slate-200">
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                 <div>
                    <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Full
                       name</label>
                    <input type="text"
                           {...register("fullName", {required: "required to fill"})}
                           id="full_name"
                           name="fullName"
                           onChange={handleChange}
                           value={studentInfo.fullName}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Name" required />
                    <div className="h-2">{errors?.fullName && <p>Error</p>}</div>
                 </div>
                 <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:dark:text-gray-600">Phone
                       number</label>
                    <input type="tel"
                           id="phone"
                           name="phone"
                           onChange={handleChange}
                           value={studentInfo.phone}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+12-345-67-89" required />
                 </div>
                 <div>
                    <label htmlFor="group" className="block mb-2 text-sm font-medium text-gray-900 dark:dark:text-gray-600">Group</label>
                    <input type="text"
                           id="group"
                           name="group"
                           onChange={handleChange}
                           value={studentInfo.group}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="NFT-22" required />
                 </div>
                 <div>
                    <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:dark:text-gray-600">Year(level)</label>
                    <input type="date"
                           id="year"
                           name="year"
                           onChange={handleChange}
                           value={studentInfo.year}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required />
                 </div>
              </div>
              <div className="mb-6">
                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:dark:text-gray-600">Email
                    address</label>
                 <input type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={studentInfo.email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="alabai@gmail.com" required />
              </div>
              <button type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >{editingStudent ? "Save" : "Create"}
              </button>
           </form>
        </div>
     </div>
   );
};

export default AddStudentModal;