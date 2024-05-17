import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { Audio } from 'react-loader-spinner';
 

const Phone = () => {
    const [phone, setPhone] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phoneWithFakeData);
            setPhone(phoneWithFakeData)
            setLoading(false)
        })
    },[])
    return (
        <div>
            {loading && <div>
                <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
            </div>}
            <h2 className="text-5xl">Phone: {phone.length}</h2>
            <BarChart width={1000} height={500} data={phone}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={'price'} fill="#ffc658"></Bar>
            </BarChart> 
        </div>
    );
};

export default Phone;