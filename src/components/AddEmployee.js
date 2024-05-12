import React, {useState} from "react";

export const AddEmployee = () => {


    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        department: "",
        hireDate: "",
        salary: ""
    })

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>
                        Add New Employee
                    </h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        First Name
                    </label>
                    <input type="text" name="firstName" value={employee.firstName} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        Last Name
                    </label>
                    <input type="text" name="lastName" value={employee.lastName} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        Email
                    </label>
                    <input type="text" name="email" value={employee.email} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        Job Title
                    </label>
                    <input type="text" name="jobTitle" value={employee.jobTitle} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        Department
                    </label>
                    <input type="text" name="department" value={employee.department} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                        Hire Date
                    </label>
                    <input type="text" name="hireDate" value={employee.hireDate} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-slate-600 text-sm font-normal">
                       Salary
                    </label>
                    <input type="text" name="salary" value={employee.salary} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>

                <div className="items-center justify-center h-14 w-full my-4 space-x-64 pt-4">
                    {/*<button className="rounded text-white font-semibold py-2 px-2 bg-gray-500 hover:bg-gray-800">*/}
                    {/*    Save*/}
                    {/*</button>*/}

                    <button className="group relative">
                        <div
                            className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-green-400 px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">
                            Save
                        </div>
                        <div
                            className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>
                    </button>

                    <button className="group relative">
                        <div
                            className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-red-500 px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">
                            Clear
                        </div>
                        <div
                            className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>
                    </button>


                    {/*<button className="rounded text-white font-semibold py-2 px-2 bg-red-400 hover:bg-red-700">*/}
                    {/*    Clear*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    )
}
