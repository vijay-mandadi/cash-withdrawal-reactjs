// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}

  change = value => {
    this.setState(prev => ({money: prev.money - value}))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="username">
          <p className="letter">s</p>
          <p className="name">Sarah Williams</p>
        </div>
        <div className="balance">
          <p className="balance-description">Your Balance</p>
          <div className="balance-container">
            <p className="amount">{money}</p>
            <p className="rupees">In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="balance-description">CHOOSE SUM (IN RUPEES)</p>
        <ul className="buttons-container">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              value={each.value}
              change={this.change}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
