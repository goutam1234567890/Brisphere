// AppProvider.js
import React, { createContext, Component } from 'react';

export const AppContext = createContext();

class AppProvider extends Component {
    state = {
        checkInDate: new Date(),
        checkOutDate: new Date(),
        room: 1,
        name: '',
        gmail: '',
        phone: '',
        adult: '',
        children: '',
        amount: 10000, // Default amount for 1 room
        list: []
    };

    setCheckInDate = value => {
        this.setState({ checkInDate: new Date(value) });
    };

    setCheckOutDate = value => {
        this.setState({ checkOutDate: new Date(value) });
    };

    setName = event => {
        this.setState({name: event.target.value})
    }

    setGmail = event => {
        this.setState({gmail: event.target.value})
    }

    setPhoneNumber = event => {
        this.setState({phone: event.target.value})
    }

    setAdult = event => {
        this.setState({adult: event.target.value})
    }

    setChildren = event => {
        this.setState({children: event.target.value})
    }

    incrRoomCount = () => {
        this.setState(
            prevState => ({ room: prevState.room + 1 }),
            this.setAmount // Update amount after room count changes
        );
    };

    decrRoomCount = () => {
        this.setState(
            prevState => {
                if (prevState.room > 1) {
                    return { room: prevState.room - 1 };
                }
                return null; // No state change if room is already 1
            },
            this.setAmount // Update amount after room count changes
        );
    };

    setAmount = () => {
        const totalAmount = this.state.room * 10000;
        this.setState({ amount: totalAmount });
    };

    saveBooking = () => {
        const { checkInDate, checkOutDate, room, name, gmail, phone, adult, children, list } = this.state;
        const newBooking = {
            checkInDate,
            checkOutDate,
            room,
            name,
            gmail,
            phone,
            adult,
            children,
            amount: this.state.amount
        };
        this.setState({ list: [...list, newBooking] });
        console.log("Booking saved:", newBooking); // Optional: log to confirm saving
    };

    resetForm = () => {
        this.setState({
            checkInDate: new Date(),
            checkOutDate: new Date(),
            room: 1,
            name: '',
            gmail: '',
            phone: '',
            adult: '',
            children: '',
            amount: 10000,
        });
    };

    // Other functions remain unchanged...

    render() {
        return (
            <AppContext.Provider
                value={{
                    store: this.state,
                    setCheckInDate: this.setCheckInDate,
                    setCheckOutDate: this.setCheckOutDate,
                    incrRoomCount: this.incrRoomCount,
                    decrRoomCount: this.decrRoomCount,
                    setName: this.setName,
                    setGmail: this.setGmail,
                    setPhoneNumber: this.setPhoneNumber,
                    setAdult: this.setAdult,
                    setChildren: this.setChildren,
                    setAmount: this.setAmount,
                    saveBooking: this.saveBooking,
                    resetForm: this.resetForm,
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
