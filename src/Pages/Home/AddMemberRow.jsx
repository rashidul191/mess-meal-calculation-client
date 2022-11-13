import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddMemberRow = ({ member, index }) => {
  const { memberName, email, _id } = member;
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `Deleted!!! ${memberName}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/member/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.deletedCount) {
                toast.success("Delete Done");
                window.location.reload();
              }
            });

          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{memberName}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-error text-white"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AddMemberRow;
