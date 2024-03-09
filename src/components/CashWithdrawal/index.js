import React, {useState} from 'react'
import './index.css'
const CashWithdrawal = ({denominationsList}) => {
  const [amount, setAmount] = useState(2000)

  const deduct = deductAmount => {
    setAmount(prevAmount => prevAmount - deductAmount)
  }

  return (
    <div className="main">
      <h2>Sarah Williams</h2>
      <p className="text1">Your Balance</p>
      <p>
        {amount}
        <br /> in Rupees
      </p>
      <p className="text2">
        Withdraw <br />
        CHOOSE SUM (IN RUPEES)
      </p>
      <ul>
        {denominationsList.map(denomination => (
          <li key={denomination.id}>
            <button onClick={() => deduct(denomination.value)}>
              {denomination.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CashWithdrawal
