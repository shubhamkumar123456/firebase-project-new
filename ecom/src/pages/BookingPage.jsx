import React, { useState } from 'react'

const BookingPage = () => {

    const [selectedSeat, setselectedSeat] = useState([]);
    const [bookedSeats, setBookedSeats] = useState([]);
    console.log("selected seats", selectedSeat)
    console.log("bookedSeats seats", bookedSeats)
  
  const seats = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]
  ];

  function bookSeats() {
  if (selectedSeat.length === 0) {
    alert("Please select at least one seat");
    return;
  }

  setBookedSeats([...bookedSeats, ...selectedSeat]);
  setselectedSeat([]);

  alert("Seats booked successfully!");
}

  function selectSeat(seat){
     if (bookedSeats.includes(seat)) {
    return;
  }
        if(selectedSeat.includes(seat)){
            setselectedSeat(selectedSeat.filter((s)=>s !== seat));
        }
        else{
             setselectedSeat([...selectedSeat, seat]);
        }
  }

  return (
    <div>
      {seats.map((row, index) => (
        <div key={index}>
          <h3>Row {index + 1}</h3>

          {row.map((seat) => (
            <button style={{backgroundColor:bookedSeats.includes(seat)?"red":selectedSeat.includes(seat)?"green":"gray"}} onClick={()=>selectSeat(seat)} key={seat}>{seat}</button>
          ))}
        </div>
      ))}

      <button onClick={bookSeats}>
  Book Seats
</button>
    </div>
  );
}

export default BookingPage
