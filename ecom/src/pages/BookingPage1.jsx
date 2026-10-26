import React, { useState } from 'react'

const BookingPage1 = () => {
    const [Allseats, setAllseats] = useState([
        ["A1", "A2","A3","A4"],
        ["B1", "B2","B3","B4"],
        ["C1", "C2","C3","C4"],
        ["D1", "D2","D3","D4"],
    ]);

    const [selectedSeat, setselectedSeat] = useState([]);
    console.log(selectedSeat)

    const [bookedSeat, setbookedSeat] = useState([]);


    function handleSeatClick(seat){
        console.log(seat)
        if(bookedSeat.includes(seat)){
            return;
        }
        if(selectedSeat.includes(seat)){
            let filterArr = selectedSeat.filter((ele)=>ele !=seat);
            setselectedSeat(filterArr);
        }
        else{
            setselectedSeat([...selectedSeat,seat])
        }
    }

    function handleBooking(){
            setbookedSeat([...bookedSeat,...selectedSeat]);
            setselectedSeat([]);
    }
  return (
    <div>
            {
                Allseats.map((row,i)=>{
                    return <div key={i+1}>
                        <h3>Row {i+1}</h3>
                            {
                                row.map((seat,index)=>{
                                    return <button style={{backgroundColor:bookedSeat.includes(seat)?"red": selectedSeat.includes(seat)?"green":"gray"}} onClick={()=>handleSeatClick(seat)} key={seat}>{seat}</button>
                                })
                            }
                    </div>
                })
            }

            <button onClick={handleBooking}>Book seats</button>
    </div>
  )
}

export default BookingPage1
