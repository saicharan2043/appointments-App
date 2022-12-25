// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    text: '',
    date: '',
    isTrue: false,
    listItems: [],
    staredItems: [],
    boolen: false,
  }

  startedValues = () => {
    const {listItems, boolen} = this.state
    const filterReslut = listItems.filter(echValue => echValue.isTrue === true)
    this.setState(privews => ({
      staredItems: filterReslut,
      boolen: !privews.boolen,
    }))
  }

  changeDate = event => {
    this.setState({date: event.target.value})
  }

  changeText = event => {
    this.setState({text: event.target.value})
  }

  clickStar = id => {
    this.setState(previws => ({
      listItems: previws.listItems.map(echValue => {
        if (echValue.id === id) {
          return {...echValue, isTrue: !echValue.isTrue}
        }
        return echValue
      }),
    }))
  }

  addValues = event => {
    event.preventDefault()

    const {text, date, isTrue, staredItems, boolen} = this.state
    const newItem = {
      id: uuidv4(),
      text,
      date,
      isTrue,
    }
    this.setState(previws => ({
      listItems: [...previws.listItems, newItem],
      text: '',
      date: '',
    }))
  }

  render() {
    const {listItems, date, text, staredItems, boolen} = this.state
    const reslut = boolen ? staredItems : listItems
    return (
      <div className="bg-color">
        <div className="container">
          <div className="form-container">
            <form className="from">
              <h1 className="heading-of-form">Add Appointment</h1>
              <label htmlFor="label" className="label">
                Title
              </label>
              <input
                type="text"
                id="label"
                className="input"
                placeholder="Title"
                onChange={this.changeText}
                value={text}
              />
              <label htmlFor="date" className="label">
                DATE
              </label>
              <input
                type="date"
                id="date"
                className="input"
                onChange={this.changeDate}
                value={date}
              />
              <button className="button" onClick={this.addValues}>
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="img"
            />
          </div>
          <hr className="hr" />
          <div className="bottom-container">
            <h1 className="bottom-heading">Appointments</h1>
            <button className="started-button" onClick={this.startedValues}>
              Starred
            </button>
          </div>
          <ul className="ul-order-list">
            {reslut.map(echValue => (
              <AppointmentItem
                details={echValue}
                key={echValue.id}
                clickStar={this.clickStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
