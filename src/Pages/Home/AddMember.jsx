import React from "react";
import { useForm } from "react-hook-form";

const AddMember = () => {
  const {
    register: addMember,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="card w-full md:w-3/4 bg-base-100 shadow-md mx-auto mt-10 px-10">
      <h2 className="text-center text-3xl font-bold">Add a New Member</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="name">
              Name :
            </label>
            <input
              {...addMember("memberName", { required: true })}
              type="text"
              placeholder="name"
              id="name"
              className="input input-bordered input-sm w-full md:w-60  max-w-xs"
            />
            <label className="label">
              {errors.memberName?.type === "required" && (
                <p className="text-error">name is required</p>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="email">
             User Name or Email :
            </label>
            <input
              {...addMember("mail", { required: true })}
              type="text"
              placeholder="user name or email"
              id="email"
              className="input input-bordered input-sm w-full md:w-60 max-w-xs"
            />
            <label className="label">
              {errors.mail?.type === "required" && (
                <p className="text-error">user name or email is required</p>
              )}
            </label>
          </div>

          <input type="submit" value="Add Member" className="btn btn-primary btn-sm sm:mt-10 text-white" />
        </div>
      </form>

      <div className="card-body">

      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">

    <thead>
      <tr>
        <th>S/N</th>
        <th>Name</th>
        <th>User name or Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>


      </div>
    </div>
  );
};

export default AddMember;
