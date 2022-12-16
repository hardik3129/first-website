import './App.css';
import data from './data.json';

// Medicune Data
let medicine = data.filter((i) => i.role === "Medicine");
let prc = medicine.filter((i) => i.price >= 300);
let qauSum = medicine.reduce((fix,liq) => {
  return fix += liq.quantity
},0);
let prcSum = medicine.reduce((fix,liq) => {
  return fix += liq.price
},0);
let qauSum1 = prc.reduce((fix,liq) => {
  return fix += liq.quantity
},0);
let prcSum1 = prc.reduce((fix,liq) => {
  return fix += liq.price
},0);

// Employes Data
let employes = data.filter((i) => i.role === "Employee");
let sal = employes.filter((i) => i.salary > 35000);
let salSum = employes.reduce((fix,liq) => {
  return fix += liq.salary
},0);
let bonSum = employes.reduce((fix,liq) => {
  return fix += liq.bonus
},0);
let salSum1 = sal.reduce((fix,liq) => {
  return fix += liq.salary
},0);
let bonSum1 = sal.reduce((fix,liq) => {
  return fix += liq.bonus
},0);

function App() {
  return (
    <>
      {/* --------------------- MEDICINE DATA -------------- */}
      <h2>Total of Medicine quantity and price </h2>
      <div className='d-flex'>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>quantity</td>
              <td>price</td>
              <td>expiry</td>
            </tr>
            {medicine.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.expiry}</td>
                </tr>
              )
            })}
            <tr>
              <td>Total</td>
              <td></td>
              <td>{qauSum}</td>
              <td>{prcSum}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>quantity</td>
              <td>price</td>
              <td>expiry</td>
            </tr>
            {prc.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.expiry}</td>
                </tr>
              )
            })}
            <tr>
              <td>Total</td>
              <td></td>
              <td>{qauSum1}</td>
              <td>{prcSum1}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* --------------------- EMPLOYES DATA -------------- */}
      <h2>Total of Employee Salary and Bonus</h2>
      <div className='d-flex'>
        <table>
          <tbody>
            <tr>
              <td>name</td>
              <td>age</td>
              <td>salary</td>
              <td>bonus</td>
            </tr>
            {employes.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{"₹"+i.salary}</td>
                  <td>{i.bonus}</td>
                </tr>
              )
            })}
            <tr>
              <td>Total</td>
              <td></td>
              <td>{salSum}</td>
              <td>{bonSum}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>name</td>
              <td>age</td>
              <td>salary</td>
              <td>bonus</td>
            </tr>
            {sal.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{"₹"+i.salary}</td>
                  <td>{i.bonus}</td>
                </tr>
              )
            })}
            <tr>
              <td>Total</td>
              <td></td>
              <td>{salSum1}</td>
              <td>{bonSum1}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;
