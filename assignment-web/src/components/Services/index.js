import { MdWifi } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { RiCarFill } from "react-icons/ri";
import { IoIosBicycle } from "react-icons/io";
import { RiFlagFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import './index.css'

const Services = () => {
    return(
        <div className="services-page" id="service">
            <h1 className="heading-service">Services</h1>
            <ul className="unorder">
                <li className="list-item shadow">
                    <div>
                        <MdWifi  className="wifi-icon"/>
                        <h2 className="heading2">High Speed Internet</h2>
                        <p className="description"> Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas. 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <MdOutlineFastfood className="wifi-icon"/>
                        <h2 className="heading2">Healthy Meals</h2>
                        <p className="description">  A healthy breakfast and pleasant 
                            dinner will be serviced at your space 
                            every single day for your entire 
                            duration of stay with option of paid 
                            order within BriSphere. 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <MdHomeFilled className="wifi-icon"/>
                        <h2 className="heading2">Homely Stay</h2>
                        <p className="description">  Designed for working professionals 
                            with spacious interiors, comfortable 
                            beds and sleekly attached kitchen 
                            are some of the comforts providedin 
                            your space 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <RiCarFill className="wifi-icon"/>
                        <h2 className="heading2">Transportation</h2>
                        <p className="description">  Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas. 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <IoIosBicycle className="wifi-icon" />
                        <h2 className="heading2">Food Dellvery</h2>
                        <p className="description">  Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas.
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <MdWifi  className="wifi-icon"/>
                        <h2 className="heading2">Tourism</h2>
                        <p className="description">  Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas.
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <RiFlagFill className="wifi-icon"/>
                        <h2 className="heading2">Job</h2>
                        <p className="description">  Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <RiCarFill className="wifi-icon"/>
                        <h2 className="heading2">Rental Service</h2>
                        <p className="description"> Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas 
                        </p>

                    </div>
                </li>
                <li className="list-item shadow">
                    <div>
                        <FaShoppingCart className="wifi-icon"/>
                        <h2 className="heading2">Online Shop</h2>
                        <p className="description">  Optical fiber connections provided in 
                            not only in your cabins but rather to 
                            all of the BriSphere scenic working 
                            spaces and dinning areas 
                        </p>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Services
