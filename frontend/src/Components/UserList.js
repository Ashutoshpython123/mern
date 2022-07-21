import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../redux/actions/userAction";

const style_h2 = { justifyContent: "center", textAlign: "center", fontSize: 30, fontWeight: 600, margin: 20 }
const UserList = () => {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser());
    }, [])

    return (
        <div>
            <h2 style={style_h2}>Users</h2>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg " style={{ justifyContent: "center", marginLeft: '10%', marginRight: '10%' }}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                First Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Last Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DOB
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Gender
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Phone
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.data && user.data.length ? user.data.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.first_name}</td>
                                <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.last_name}</td>
                                <td className="py-4 px-6">{item.dob}</td>
                                <td className="py-4 px-6">{item.gender}</td>
                                <td className="py-4 px-6">{item.email}</td>
                                <td className="py-4 px-6">{item.phone}</td>
                            </tr>
                        )) : ""}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserList