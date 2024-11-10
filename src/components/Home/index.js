import { Component } from 'react';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import AboutUs from '../AboutUs';
import Header from '../Header';
import Services from '../Services';
import Discover from '../Discover';
import { Link } from 'react-router-dom';
import DatePicker from '../DatePicker';
import {AppContext} from '../../context/AppProvider';
import './index.css';

class Home extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ store, incrRoomCount, decrRoomCount, setCheckInDate, setCheckOutDate }) => {
                    return (
                        <>
                            <Header />
                            <div className='home-container'>
                                <div className='container-details'>
                                    <h1 className='heading-details'>Work from Ladakh</h1>
                                    <p className='description-details'>India's first true digital tourism ecosystem</p>
                                    <div className='icons-container'>
                                        <FaFacebook className='facebook' />
                                        <RiInstagramFill className='instagram' />
                                    </div>
                                </div>
                                <div className='mountain'>
                                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1731059383/sourav-bhadra-4_vxxkqpY2w-unsplash_wp25ji.jpg" alt='mountain' className='mountain' />
                                </div>

                                <div className='container-ele'>
                                    <div className='check-in'>
                                        <p>CHECK-IN</p>
                                        <DatePicker onSelect={setCheckInDate} />
                                        {/* <DatePicker date={store.checkInDate.toISOString().split('T')[0]} onSelect={setCheckInDate} /> */}
                                    </div>
                                    <div className='check-out'>
                                        <p>CHECK-OUT</p>
                                        <DatePicker onSelect={setCheckOutDate} />
                                        {/* <DatePicker date={store.checkOutDate.toISOString().split('T')[0]} onSelect={setCheckOutDate} /> */}
                                    </div>
                                    <div>
                                        <p className='room-p'>ROOMS</p>
                                        <div className='button-increment'>
                                            <button className='minus' onClick={decrRoomCount}>-</button>
                                            <p className='value'>{store.room}</p>
                                            <button className='plus' onClick={incrRoomCount}>+</button>
                                        </div>
                                    </div>
                                    <Link to="/details">
                                        <button className='book-button'>BOOK</button>
                                    </Link>
                                </div>



                            </div>
                            <Discover />
                            <Services />
                            <AboutUs />
                        </>
                    )
                }}
            </AppContext.Consumer>

        );
    }
}

export default Home;
