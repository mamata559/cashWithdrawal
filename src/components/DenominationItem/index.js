// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, moneyChange} = props

  const changeMoney = () => {
    moneyChange(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="change-button" onClick={changeMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
