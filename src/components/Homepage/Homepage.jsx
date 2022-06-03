import React, {useState} from 'react';
import Students from "../Students";


const Homepage = () => {
  const [people, setPeople] = useState({
     firstname : "",
     lastname : "",
     university : "",
     phone: "",
     group: "",
     year: "",
     email: ""
  })
  const create = (e) => {
     e.preventDefault()
     console.log(people)
     setPeople({
        firstname : "",
        lastname : "",
        university : "",
        phone: "",
        group: "",
        year: "",
        email: ""
  })
  }
  const handleChange = (e) => {
     const students = {...people}
     students[e.target.id] = e.target.value
     setPeople(students)
  }
   return (
     <div>
        <Students />
        <div className="text-center mt-6">
        </div>
        <div className="max-w-2xl mx-auto bg-white p-16">
           <form onSubmit={create}>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First
                       name</label>
                    <input type="text" id="firstname"
                           onChange={(e) => handleChange(e)}
                           value={people.firstname}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Name" required />
                 </div>
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                    <input type="text" id="lastname"
                           onChange={(e) => handleChange(e)}
                           value={people.lastname}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Last Name" required />
                 </div>
                 <div>
                    <label htmlFor="university"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">University</label>
                    <input type="text" id="university"
                           onChange={(e) => handleChange(e)}
                           value={people.university}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Harvard University" required />
                 </div>
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                       number</label>
                    <input type="tel" id="phone"
                           onChange={(e) => handleChange(e)}
                           value={people.phone}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+12-345-67-89" required />
                 </div>
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Group</label>
                    <input type="text" id="group"
                           onChange={(e) => handleChange(e)}
                           value={people.group}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="NFT-22" required />
                 </div>
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Year(level)</label>
                    <input type="number" id="year"
                           onChange={(e) => handleChange(e)}
                           value={people.year}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="" required />
                 </div>
              </div>
              <div className="mb-6">
                 <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                    address</label>
                 <input type="email" id="email"
                        onChange={(e) => handleChange(e)}
                        value={people.email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="alabai@gmail.com" required />
              </div>
              <button type="submit"
                      onClick={create}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create
              </button>
           </form>
        </div>
     </div>
   );
};

export default Homepage;