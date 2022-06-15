import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {toast} from "react-toastify";


const AddStudentModal = ({students, setStudents, setOpenModal, editingStudent, setEditingStudent}) => {
   const formik = useFormik({
      initialValues: {
         fullName: editingStudent?.fullName || '',
         group: editingStudent?.group || '',
         year: editingStudent?.year || '',
         phone: editingStudent?.phone || '',
         email: editingStudent?.email || ''
      },
      validationSchema: Yup.object({
         fullName: Yup.string()
           .min(3, 'Must be 3 characters or more')
           .max(20, 'Must be 15 characters or less')
           .required('Please enter your fullName'),
         group: Yup.string()
           .min(3, 'Must be 3 characters or more')
           .max(20, 'Must be 20 characters or less')
           .required('Please enter your group'),
         year: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Please enter year'),
         phone: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Please enter your phone'),
         email: Yup.string().email('Invalid email address').required('Please enter your email'),
      }),
      onSubmit: async (values) => {
         if (typeof editingStudent !== "undefined" && editingStudent !== null){
            const {data: updateStudent} = await axios.put(`https://6299eb5d6f8c03a9784cec35.mockapi.io/students/${editingStudent.id}`, values)
            const updateStudentList = students.map(item => item.id === editingStudent.id ? updateStudent : item)
            setStudents(updateStudentList)
            toast.success("Student saved successfully")
         } else {
            const uploadStudent = await axios.post('https://6299eb5d6f8c03a9784cec35.mockapi.io/students', values)
            setStudents([...students, uploadStudent.data])
         }
         setOpenModal(false)
      },
   });
   return (
     <div>
        <div className='bg-white p-6 mt-20'>
           <div className=' absolute right-1/4 top-6' onClick={() => {
              setOpenModal(false)
              setEditingStudent(null)
           }}>
              <button className='text-2xl'>
                 <FontAwesomeIcon icon={faXmark}/>
              </button>
           </div>
        </div>
        <div className="mx-auto bg-white fixed justify-center flex w-full">
           <form onSubmit={formik.handleSubmit} className="p-16 rounded-lg shadow-inner bg-slate-300">
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                 <div>
                    <label htmlFor="full_name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Full
                       name</label>
                    <input type="text"
                           id="full_name"
                           name="fullName"
                           onChange={formik.handleChange}
                           value={formik.values.fullName}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Name"/>
                    {formik.errors.fullName ? <div className="text-red-400">{formik.errors.fullName}</div> : null}
                 </div>
                 <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Phone
                       number</label>
                    <input type="tel"
                           id="phone"
                           name="phone"
                           onChange={formik.handleChange}
                           value={formik.values.phone}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+12-345-67-89"/>
                    {formik.errors.phone ? <div className="text-red-400">{formik.errors.phone}</div> : null}
                 </div>
                 <div>
                    <label htmlFor="group"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Group</label>
                    <input type="text"
                           id="group"
                           name="group"
                           onChange={formik.handleChange}
                           value={formik.values.group}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="NFT-22"/>
                    {formik.errors.group ? <div className="text-red-400">{formik.errors.group}</div> : null}
                 </div>
                 <div>
                    <label htmlFor="year"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Year</label>
                    <input type="date"
                           id="year"
                           name="year"
                           onChange={formik.handleChange}
                           value={formik.values.year}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder=""/>
                    {formik.errors.year ? <div className="text-red-400">{formik.errors.year}</div> : null}
                 </div>
              </div>
              <div className="mb-6">
                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Email
                    address</label>
                 <input type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="alabai@gmail.com"/>
                 {formik.errors.email ? <div className="text-red-400">{formik.errors.email}</div> : null}
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