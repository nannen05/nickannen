import React, { Component } from 'react'
import { DATAFORMPOSTS } from '../firebase'
import '../Styles.css'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      budget: '',
      message: '',
      formErrors: { firstName: '', lastName: '', email: '' }
    }
  }

  checkEmail(email) {
    let error = false
    if (!this.isValidEmail(email)) {
      this.setState(prevState => ({
        formErrors: {
          ...prevState.formErrors,
          email: 'Please Enter a Valid Email'
        }
      }))
      error = true
    } else if (email.length === '') {
      this.setState(prevState => ({
        formErrors: {
          ...prevState.formErrors,
          email: 'Please Enter an Email'
        }
      }))
      error = true
    } else {
      this.setState(prevState => ({
        formErrors: {
          ...prevState.formErrors,
          email: ''
        }
      }))

      error = false
    }

    return error
  }

  checkField(input, inputName) {
    let error = false
    console.log(input)
    if (input === '') {
      switch (inputName) {
        case 'firstName':
          this.setState(prevState => ({
            formErrors: {
              ...prevState.formErrors,
              firstName: 'Please Enter a First Name'
            }
          }))
        case 'lastName':
          this.setState(prevState => ({
            formErrors: {
              ...prevState.formErrors,
              lastName: 'Please Enter a Last Name'
            }
          }))
        default:
          break
      }
      error = true
    } else {
      switch (inputName) {
        case 'firstName':
          this.setState(prevState => ({
            formErrors: {
              ...prevState.formErrors,
              firstName: ''
            }
          }))
        case 'lastName':
          this.setState(prevState => ({
            formErrors: {
              ...prevState.formErrors,
              lastName: ''
            }
          }))
      }
      error = false
    }
    return error
  }

  validateForm() {
    let error =
      this.checkEmail(this.state.email) &&
      this.checkField(this.state.firstName, Object.keys(this.state)[0]) &&
      this.checkField(this.state.lastName, Object.keys(this.state)[1])
    console.log(error)
    return error
  }

  isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  onChange = e => {
    const inputName = e.target.name
    const value = e.target.value
    this.setState({ [inputName]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    //const { firstName, lastName, email, phone, budget, message } = this.state

    console.log('clicked')

    this.validateForm()

    if (!this.validateForm()) {
      console.log('submit')
      DATAFORMPOSTS.push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        budget: this.state.budget,
        message: this.state.message
      })
    }
  }

  render() {
    const { firstName, lastName, email, phone, budget, message } = this.state

    return (
      <section id="contact">
        <div className="view-contact view space-bg dark-blue-bg">
          <div className="view-contact__content container">
            <div className="row">
              <div className="view-contact__form col push-l4 l4">
                <FormErrors formErrors={this.state.formErrors} />
                <form onSubmit={this.onSubmit}>
                  <div className="input-field col s12">
                    <input id="first_name" name="firstName" type="text" className="validate" value={firstName} onChange={this.onChange} />
                    {firstName.length >= 1 ? null : <label htmlFor="first_name">First Name</label>}
                  </div>

                  <div className="input-field col s12">
                    <input id="last_name" name="lastName" type="text" className="validate" value={lastName} onChange={this.onChange} />
                    {lastName.length >= 1 ? null : <label htmlFor="last_name">Last Name</label>}
                  </div>

                  <div className="input-field col s12">
                    <input id="email" type="text" name="email" value={email} onChange={this.onChange} />
                    {email.length >= 1 ? null : <label htmlFor="email">Email</label>}
                  </div>

                  <div className="input-field col s12">
                    <input id="phone" type="text" name="phone" className="validate" value={phone} onChange={this.onChange} />
                    {phone.length >= 1 ? null : <label htmlFor="phone">Phone Number</label>}
                  </div>

                  <div className="input-field col s12">
                    <input id="budget" type="text" name="budget" className="validate" value={budget} onChange={this.onChange} />
                    {budget.length >= 1 ? null : <label htmlFor="budget">Budget</label>}
                  </div>

                  <div className="input-field col s12">
                    <textarea id="message" name="message" className="materialize-textarea" value={message} onChange={this.onChange} />
                    {message.length >= 1 ? null : <label htmlFor="message">Message</label>}
                  </div>

                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="view-contact__bottom-footer">
                <p>Nick Annen</p>
                <p>(714) 743-1528</p>
                <p>nick@nickannen.com</p>
                <p>Tustin, CA</p>
                <p>© CopyRight 2017 | All rights reserved.</p>
              </div>
            </div>
          </div>

          <div className="view-contact__overlay" />
          <div className="view-contact__bg" />
        </div>
      </section>
    )
  }
}

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return <p key={i}>{formErrors[fieldName]}</p>
      } else {
        return ''
      }
    })}
  </div>
)

export default Contact
