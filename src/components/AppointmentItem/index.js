// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, clickStar} = props
  const {id, text, date, isTrue} = details
  const stringDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const starClick = () => {
    clickStar(id)
  }
  const imgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list">
      <div className="name-container">
        <p className="name">{text}</p>
        <button className="button-star" onClick={starClick} testid="star">
          <img src={imgUrl} alt="star" className="img-star" />
        </button>
      </div>
      <p className="date-year">{stringDate}</p>
    </li>
  )
}

export default AppointmentItem
