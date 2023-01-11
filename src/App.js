import React from 'react'
import Data from './data.json'

const App = () => {

  const total = Data.items.reduce((a , curant) => {
    return a + curant.quantity;
  },0);

  const totalPrice = Data.items.reduce((a , curant) => {
    return a + curant.price;
  },0);
  
  return (
    <div>
      <table border={1}>
        <tbody>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>quantity</td>
          <td>price</td>
          <td colSpan={2}>options</td>
        </tr>
        {
          Data.items.map((i) => {
            return(
                <tr key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  {/* <td> */}
                    {i.options.map((j) => {
                        return( 
                          <td key={Math.random()}>{j.color }{j.size} </td>
                        )
                    })}
                  {/* </td> */}
                </tr>
            )
          })
        }    
        <tr>
          <td></td>
          <td></td>
          <td>{total}</td>
          <td>{totalPrice}</td>
          <td colSpan={2}></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
