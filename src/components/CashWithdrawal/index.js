// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class DemoninationItem extends Component {
  state = {money: 2000}

  moneyChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container ">
          <div className="name-container">
            <div className="logo-container">
              <p className="para-s">S</p>
            </div>
            <p className="name-para">Sarah Williams</p>
          </div>
          <div className="money-container">
            <p className="balance">Your Balance</p>
            <p className="money">{money}</p>
          </div>
          <p className="rupee">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-container">
            {denominationsList.map(each => (
              <DenominationItem
                value={each.value}
                key={each.id}
                moneyChange={this.moneyChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DemoninationItem
