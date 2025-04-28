'use client';
import { useState } from 'react';

const LocationPopup = ({ onClose }) => {
    const [step, setStep] = useState(1);

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [device, setDevice] = useState('');
    const [payment, setPayment] = useState('');
    const [total, setTotal] = useState(0);
    const [totalClicked, setTotalClicked] = useState(false);
    const [userId, setUserId] = useState('');
    const [idClicked, setIdClicked] = useState(false);




    const handleNext = () => {
        if (step === 1) {
            setStep(2); // Go to next step
        } else {
            // Handle payment flow
            const paymentParams = new URLSearchParams({
                amount: total,
                userId: userId,
                locationId: 'LOCATION_ID', // Replace with actual location ID
                locationName: 'LOCATION_NAME' // Replace with actual location name
            });
            
            window.location.href = `/payment?${paymentParams.toString()}`;
        }
    };

    const getFieldStyle = (value) => ({
        ...inputStyle,
        backgroundColor: value ? '#c2185b' : 'white',
        color: value ? 'white' : 'black'
    });

    const getDropdownStyle = (value) => ({
        ...dropdownBase,
        backgroundColor: value ? '#c2185b' : 'white',
        color: value ? 'white' : 'black',
    });

    const handleTotalClick = () => {
        let base = 100;
        if (device === 'Laptop') base += 200;
        if (device === 'Tablet') base += 100;
        if (payment === 'Cash') base -= 50;

        setTotal(base);
        setTotalClicked(true);
    };

    const handleIdClick = () => {
        const generatedId = `ID-${Math.floor(100000 + Math.random() * 900000)}`;
        setUserId(generatedId);
        setIdClicked(true);
    };




    return (
        <div style={backdropStyle}>
            <div style={popupStyle}>
                <h2 style={headingStyle}>
                    {step === 1 ? 'Enter Your Details' : 'Chose Your Hero'}
                </h2>

                {step === 1 && (
                    <>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            style={getFieldStyle(name)}
                        />

                        <div style={dropdownWrapper}>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                style={getDropdownStyle(state)}
                            >
                                <option value="">Select State</option>
                                <option>Uttar Pradesh</option>
                                <option>Bihar</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                style={getDropdownStyle(city)}
                            >
                                <option value="">Select City</option>
                                <option>Lucknow</option>
                                <option>Patna</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={ageGroup}
                                onChange={(e) => setAgeGroup(e.target.value)}
                                style={getDropdownStyle(ageGroup)}
                            >
                                <option value="">Choose Age Group (in years)</option>
                                <option>18-24</option>
                                <option>25-34</option>
                                <option>55+</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={device}
                                onChange={(e) => setDevice(e.target.value)}
                                style={getDropdownStyle(device)}
                            >
                                <option value="">Select Device</option>
                                <option>Mobile Only</option>
                                <option>Mobile in VR(with VR controller)</option>
                                <option>Mobile in VR(without VR controller)</option>
                                <option>Laptop/PC/Desktop</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                                style={getDropdownStyle(payment)}
                            >
                                <option value="">Select Payment Mode</option>
                                <option>UPI</option>
                                <option>ATM</option>
                                <option>Net Banking</option>
                                <option>Wallet</option>
                            </select>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div style={dropdownWrapper}>
                            <select
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                style={getDropdownStyle(state)}
                            >
                                <option value="">Select State</option>
                                <option>Uttar Pradesh</option>
                                <option>Bihar</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                style={getDropdownStyle(city)}
                            >
                                <option value="">Select City</option>
                                <option>Lucknow</option>
                                <option>Patna</option>
                            </select>
                        </div>

                        <div style={dropdownWrapper}>
                            <select
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                                style={getDropdownStyle(payment)}
                            >
                                <option value="">Select Your Hero</option>
                                <option>UPI</option>
                                <option>Cash</option>
                                <option>Net Banking</option>
                            </select>
                        </div>
                        <div
                            onClick={handleIdClick}
                            style={{
                                ...inputStyle,
                                backgroundColor: idClicked ? '#c2185b' : 'white',
                                color: idClicked ? 'white' : 'black',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {idClicked ? userId : 'Hero ID'}
                        </div>


                        <div
                            onClick={handleTotalClick}
                            style={{
                                ...inputStyle,
                                backgroundColor: totalClicked ? '#c2185b' : 'white',
                                color: totalClicked ? 'white' : 'black',
                                cursor: 'pointer',
                                textAlign: 'left',
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingRight: '12px', // space for the amount on the right
                            }}
                        >
                            <span>Total</span>
                            {totalClicked && <span>₹{total}</span>}
                        </div>




                    </>
                )}

                <div style={btnWrapper}>
                    <button style={nextBtnStyle} onClick={handleNext}>
                        {step === 1 ? 'Next' : 'Pay To Start '}
                    </button>
                </div>

                <button onClick={onClose} style={closeBtnStyle}>✖</button>
            </div>
        </div>
    );
};

export default LocationPopup;



// 🎨 Styles
const backdropStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
};

const popupStyle = {
    position: 'relative',
    background: 'white',
    padding: '30px 20px 20px',
    borderRadius: '10px',
    width: '95%',
    maxWidth: '500px',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
    fontFamily: 'sans-serif'
};

const headingStyle = {
    marginBottom: '3px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
};

const inputStyle = {
    width: '100%',
    padding: '3px 12px',
    marginBottom: '3px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    boxSizing: 'border-box'
};

const dropdownBase = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%23333\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '16px 16px',
};

const dropdownWrapper = {
    marginBottom: '3px',
};

const ageLabel = {
    display: 'block',
    fontSize: '12px',
    marginBottom: '5px',
    color: '#444',
    textAlign: 'left'
};

const nextBtnStyle = {
    width: '30%',
    padding: '10px',
    background: '#ccc',
    border: 'none',
    color: '#555',
    fontWeight: 'bold',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
};

const btnWrapper = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px'
};

const closeBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#888'
};

