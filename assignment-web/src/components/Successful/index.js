import { Component } from 'react'
import Header from '../Header'
import AboutUs from '../AboutUs'
import { AppContext } from '../../context/AppProvider'
import './index.css'

class Successful extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ store }) => {
                    const formattedCheckInDate = store.checkInDate
                    ? new Date(store.checkInDate).toLocaleDateString()
                    : 'Not set'; // Fallback if not set
                    const formattedCheckOutDate = store.checkOutDate
                    ? new Date(store.checkOutDate).toLocaleDateString()
                    : 'Not set'; // Fallback if not set
                    return (
                        <>
                            <Header />
                            <div className='success-container'>
                                <div className='success-container1'>
                                    <div className='success-details'>
                                        <p>{store.name}</p>
                                        <p>{store.phone}</p>
                                        <p>{store.gmail}</p>
                                        <p>{`${store.adult} and ${store.children}`}</p>
                                    </div>
                                    <div className='order-container'>
                                        <div className='image-container'>
                                            <img src='https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png' alt="complete" className='success-image' />
                                        </div>
                                        <div className='contact-container'>
                                            <p className='order'>order complete</p>
                                            <p className='question'>have questions?</p>
                                            <a href="#about" className='query'>contact us</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='container-ele2'>
                                    <div className='check-in'>
                                        <p>CHECK-IN</p>
                                        {formattedCheckInDate}
                                    </div>
                                    <div className='check-out'>
                                        <p>CHECK-OUT</p>
                                        {formattedCheckOutDate}
                                    </div>
                                    <div>
                                        <p>ROOMS</p>
                                        <p className='value'>{store.room}</p>
                                    </div>
                                    <button className='book-button'>{store.amount}</button>
                                </div>
                            </div>
                            <AboutUs />
                        </>
                    )
                }}
            </AppContext.Consumer>

        )
    }
}

export default Successful
