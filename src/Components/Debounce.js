import React from 'react'
import axios from "axios";
export default function Debounce() {
    const [pinCode, setPinCode] = React.useState("");
    React.useEffect(() => {
        const getData = setTimeout(() => {
          axios
          .get(`https://api.postalpincode.in/pincode/${pinCode}`)
          .then((response) => {
            console.log(response.data[0]);
          });
        }, 2000)

        return () => clearTimeout(getData)
      }, [pinCode])
  return (
    <div>
        <input
      placeholder="Search Input.."
      onChange={(event) => setPinCode(event.target.value)}
 />
    </div>
  )
}

