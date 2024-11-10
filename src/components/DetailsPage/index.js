import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import DatePicker from '../DatePicker';
import AboutUs from '../AboutUs';
import './index.css';
import { AppContext } from '../../context/AppProvider';

class DetailsPage extends Component {
    state = { errorNameMsg: false, errorMailmsg: false, errorPhoneMsg: false, errorAdultMsg: false, errorChildrenMsg: false }
    render() {
        return (
            <>
                <Header />
                <AppContext.Consumer>
                    {({
                        store,
                        incrRoomCount,
                        decrRoomCount,
                        setCheckInDate,
                        setCheckOutDate,
                        setName,
                        setGmail,
                        setPhoneNumber,
                        setAdult,
                        setChildren,
                        saveBooking,
                    }) => {
                        const onBlurName = () => {
                            if (store.name === '') {
                                this.setState({ errorNameMsg: true })
                            } else {
                                this.setState({ errorNameMsg: false })
                            }
                        }

                        const onBlurMail = () => {
                            if (store.gmail === '') {
                                this.setState({ errorMailMsg: true })
                            } else {
                                this.setState({ errorMailMsg: false })
                            }
                        }

                        const onBlurPhone = () => {
                            if (store.phone === '') {
                                this.setState({ errorPhoneMsg: true })
                            } else {
                                this.setState({ errorPhoneMsg: false })
                            }
                        }

                        const onBlurAdult = () => {
                            if (store.adult === '') {
                                this.setState({ errorAdultMsg: true })
                            } else {
                                this.setState({ errorAdultMsg: false })
                            }
                        }

                        const onBlurChildren = () => {
                            if (store.children === '') {
                                this.setState({ errorChildrenMsg: true })
                            } else {
                                this.setState({ errorChildrenMsg: false })
                            }
                        }

                        const handleNextClick = () => {
                            if (store.name === '') {
                                this.setState({ errorNameMsg: true })
                            }
                            if (store.gmail === '') {
                                this.setState({ errorMailMsg: true })
                            }
                            if (store.phone === '') {
                                this.setState({ errorPhoneMsg: true })
                            }
                            if (store.adult === '') {
                                this.setState({ errorAdultMsg: true })
                            }
                            if (store.children === '') {
                                this.setState({ errorChildrenMsg: true })
                            }
                        }


                        const { errorNameMsg, errorMailMsg, errorPhoneMsg, errorAdultMsg, errorChildrenMsg } = this.state
                        return (
                            <div className="bg-container">
                                <div className="main-container">
                                    <div className="container1">
                                        <div className="container2">
                                            <div>
                                                <input
                                                    type="text"
                                                    className="input-element"
                                                    placeholder="Name"
                                                    value={store.name}
                                                    onChange={setName} // Add onChange handler
                                                    onBlur={onBlurName}
                                                />
                                                {errorNameMsg && (<p className='errorMsg'>Enter name</p>)}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="input-element"
                                                    placeholder="Email"
                                                    value={store.gmail}
                                                    onChange={setGmail} // Add onChange handler
                                                    onBlur={onBlurMail}
                                                />
                                                {errorMailMsg && (<p className='errorMsg'>Enter mailid</p>)}
                                            </div>
                                        </div>
                                        <div className="container3">
                                            <div>
                                                <input
                                                    type="tel"
                                                    className="input-element"
                                                    placeholder="Phone number"
                                                    value={store.phone}
                                                    onChange={setPhoneNumber} // Add onChange handler
                                                    onBlur={onBlurPhone}
                                                />
                                                {errorPhoneMsg && (<p className='errorMsg'>Enter Phone number</p>)}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="input-element1"
                                                    placeholder="1 Adult"
                                                    value={store.adult}
                                                    onChange={setAdult} // Add onChange handler
                                                    onBlur={onBlurAdult}
                                                />
                                                {errorAdultMsg && (<p className='errorMsg'>Enter Adilt count</p>)}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="input-element1"
                                                    placeholder="1 Children"
                                                    value={store.children}
                                                    onChange={setChildren} // Add onChange handler
                                                    onBlur={onBlurChildren}
                                                />
                                                {errorChildrenMsg && (<p className='errorMsg'>Enter child count</p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-ele1">
                                        <div className="check-in">
                                            <p>CHECK-IN</p>
                                            <DatePicker date={store.checkInDate} onSelect={setCheckInDate} />
                                        </div>
                                        <div className="check-out">
                                            <p>CHECK-OUT</p>
                                            <DatePicker date={store.checkOutDate} onSelect={setCheckOutDate} />
                                        </div>
                                        <div>
                                            <p>ROOMS</p>
                                            <div className="button-increment">
                                                <button className="minus" onClick={decrRoomCount}>-</button>
                                                <p className="value">{store.room}</p>
                                                <button className="plus" onClick={incrRoomCount}>+</button>
                                            </div>
                                        </div>
                                        <div className="cont">
                                            {/* <Link to="/success" className="button-element">
                                                <button className="book-button" onClick={saveBooking}>
                                                    Pay {store.amount}
                                                </button>
                                            </Link> */}
                                            <Link
                                                to={store.name && store.gmail && store.phone && store.adult && store.children ? "/success" : "#"} // Prevents navigation if fields are empty
                                                className="button-element"
                                            >
                                                <button
                                                    className="book-button"
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevent navigation if there are errors
                                                        handleNextClick(); // Call handleNextClick to validate fields
                                                        if (store.name && store.gmail && store.phone && store.adult && store.children) {
                                                            saveBooking(); // Save booking only if all fields are filled
                                                            this.props.history.push("/success"); // Programmatically navigate if no errors
                                                        }
                                                    }}
                                                >
                                                    Pay {store.amount}
                                                </button>
                                            </Link>

                                            <p className="pay">Click to pay token amount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </AppContext.Consumer>

                <AboutUs />
            </>
        );
    }
}

export default DetailsPage;
