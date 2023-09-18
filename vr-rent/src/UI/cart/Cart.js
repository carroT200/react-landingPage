import { useState, useEffect } from 'react';

import Modal from '../Modal';
import './Cart.css';

const Cart = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [sendLetter, setSendLetter] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const EmailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    if (enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredEmailIsValid]);

  const EmailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const EmailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmitionHanlder = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredEmailIsValid) {
      return;
    }
    setEnteredEmail('');
    setSendLetter(true);
    setEnteredEmailTouched(false);
  };

  const inputClasses = EmailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmitionHanlder}>
        <p>
          Please enter your email@ so that we can send a receipt there for
          payment
        </p>
        <div className={inputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onBlur={EmailInputBlurHandler}
            onChange={EmailInputChangeHandler}
            value={enteredEmail}
          />
        </div>
        {EmailInputIsInvalid && (
          <p className="error"> Email must not be empty</p>
        )}
        {sendLetter && <p className="correct">Success </p>}
        <div className="buttons">
          <button disabled={!formIsValid} className="btn">
            {' '}
            Submite
          </button>
          <button className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Cart;
