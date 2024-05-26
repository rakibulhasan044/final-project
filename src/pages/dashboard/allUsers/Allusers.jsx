import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an admin now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }
  const handleDeleteUser = id => {
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .delete(`/users/${id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                  refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your item has been deleted.",
                  icon: "success",
                });
              }
            });
        }
      });
  }
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                { user.role === 'admin' ? <td>Admin</td> : <td 
                onClick={() => handleMakeAdmin(user)}
                 className="bg-orange-300 flex items-center justify-center rounded-lg w-1/2 m-2"> <FaUser className=" text-white" size={25}/> </td> 
                 }
                <td><FaTrashAlt className="text-red-600" size={25} 
                onClick={() => handleDeleteUser(user._id)}/> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
