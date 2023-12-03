// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, change} = props

  const call = () => {
    change(value)
  }
  return (
    <li className="button-container">
      <button className="button" type="button" onClick={call}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
