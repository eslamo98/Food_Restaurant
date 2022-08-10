import React from 'react'
import "./order.scss";
const OrderForm = () => {
    let [formData, setFormData] = React.useState({
        firstname: "",
        order: "",
        quantity: "",
        address: "",
        number: 0,
        additionalfood: "",
        date: "",
        message: ""
      })
    
      function changeHandle(event) {
        let {name, value, type, checked} = event.target
        setFormData((oldState)=> {
          return {...oldState, [name]: type == "checkbox" ? checked : value}
        })
      }
    
      function submitHandle(event) {
        event.preventDefault();
        let passMatch = formData.password === formData.confirm ? 
        "successfully signed up" : "Passwords didn't match";
        console.log(passMatch);
        
        if(formData.isMember) {
          console.log("Thanks for signing up for our newsletter!")
        }
        
      }
  return (
    <section className="order-form" id='orderForm'>
        <span className="order-now">
        Order Now
        </span>
        <h2 className="order-form-heading">
        FREE AND FAST
        </h2>
        <form onSubmit={submitHandle} className="custom-form">
            <div className="inner-form">
                <div className="left-custom-form">
                    <div className="input-group">
                        <label htmlFor="firstname">Your Name</label>
                        <input value={formData.firstname} onChange={changeHandle} type="text" placeholder='enter your name' id="firstname" name='firstname'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="order">Your Order</label>
                        <input value={formData.order} onChange={changeHandle} type="text" placeholder='enter your order' id="order" name='order'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="quantity">How Much</label>
                        <input value={formData.quantity} onChange={changeHandle} type="text" placeholder='how many orders' id="quantity" name='times'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <textarea value={formData.address} onChange={changeHandle} name="address" placeholder='enter your address' id="address" cols="30" rows="10"/>
                    </div>
                </div>
                <div className="left-custom-form">
                    <div className="input-group">
                        <label htmlFor="number">Your Name</label>
                        <input value={formData.number} onChange={changeHandle} type="number" placeholder='enter your name' id="number" name='number'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="additionalfood">Your Order</label>
                        <input value={formData.additionalfood} onChange={changeHandle} type="text" placeholder='extra with food' id="additionalfood" name='additionalfood'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="date">How Much</label>
                        <input value={formData.date} onChange={changeHandle} type="date" placeholder='how many orders' id="date" name='date'/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Your message</label>
                        <textarea value={formData.message} onChange={changeHandle} name="message" placeholder='enter your message' id="address" cols="30" rows="10"/>
                    </div>
                </div>
            </div>
            <button className='custom-btn' type='submit'>Order Now</button>
        </form>
    </section>
  )
}

export default OrderForm