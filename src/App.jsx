// import "./App.css";
import { PaymentHistory } from "./constants/tabledata";

function App() {
  return (
    <>
      <div>
        {/* payment history table */}
        {/* payment history table final check */}
        <table>
          <thead>
            <th>no</th>
            <th>Amount</th>
            <th>PaymentType</th>
            <th>paymentDate</th>
          </thead>
          <tbody style={{ display: "flex" }}>
            <tr>
              {PaymentHistory.length > 0 ? (
                PaymentHistory.map((pay, index) => (
                  <>
                    <td>{index + 1}</td>
                    <td>{pay.paymentType}</td>
                    <td>{pay.paymentDate}</td> 
                    <td>{pay.amount}</td>
                  </>
                ))
              ) : (
                <p>
                  Sorry Your Payment History Is Not Avilable Make Sure You Done
                  Your Payment Autometically Show Your History Thank You So Much
                  For You Comming
                </p>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
