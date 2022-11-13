import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AddMemberRow from "./AddMemberRow";

const AddMember = () => {
  const [allMembers, setAllMembers] = useState([]);

  const {
    register: addMember,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addMemberDB", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("add member successfully");
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/allMembers")
      .then((data) => setAllMembers(data.data));
  }, []);

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
              {...addMember("email", { required: true })}
              type="text"
              placeholder="user name or email"
              id="email"
              className="input input-bordered input-sm w-full md:w-60 max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <p className="text-error">user name or email is required</p>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="Add Member"
            className="btn btn-primary btn-sm sm:mt-10 text-white"
          />
        </div>
      </form>

      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>User name or Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody  style={{
                writingMode: "vertical-rl",
              }} >
              {allMembers.slice(0).reverse().map((member, index) => (
                <AddMemberRow
                  key={member._id}
                  member={member}
                  index={index}
                ></AddMemberRow>
              ))}            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
