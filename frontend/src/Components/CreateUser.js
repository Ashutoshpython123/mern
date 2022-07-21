import React, {useState} from 'react'
import { postDataAPI } from '../utils/API';
import { useNavigate } from "react-router-dom";

const styles = {
  heading: { justifyContent: "center", textAlign: "center", fontSize: 30, fontWeight: 600, margin: 20 },
  form: { justifyContent: "center", marginLeft: 200, marginRight: 200 }
}

const CreateUser = () => {
  const [error, setError] = useState('')
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, dob, email, gender, phone, password } = e.target.elements;

    let details = {
      first_name: first_name ? first_name.value : "",
      last_name: last_name ? last_name.value : last_name,
      dob: dob ? dob.value : "",
      email: email ? email.value : "",
      gender: gender ? gender.value : "",
      phone: phone ? phone.value : "",
      password: password ? password.value : "",
    };

    const res = await postDataAPI('user/create', details)
    if (res.data.status) {
      navigate('/user-list')
    }else {
      setError(res.data.errors)
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Create User</h2>

      <form onSubmit={handleSubmit.bind(this)} style={styles.form}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            {error.first_name ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.first_name} !</p> :""}         
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            {error.last_name ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.last_name} !</p> : ""}         
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          {error.email ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.email} !</p>  : ""}      
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          {error.password ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.password} !</p>        : ""}
        </div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your gender</label>
        <select name='gender' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>male</option>
          <option>female</option>
        </select>
        {error.gender ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span> {error.gender} !</p> : ""}

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
            {error.phone ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.phone} !</p> : ""}          
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input type="date" name="dob" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="dob" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            {error.dob ? <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>{error.dob} !</p> : ""}
          </div>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  )
}

export default CreateUser