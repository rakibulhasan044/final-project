import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey:['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        },
    })
    return (
        <div>
            <h2 className="text-2xl">My payment history {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item, index) => (
            <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item.price}</td>
        <td>{item.transactionId}</td>
        <td>{item.status}</td>
      </tr>
        ))
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;