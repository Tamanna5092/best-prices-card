import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

 

const Phone = () => {
    const [phone, setPhone] = useState([]);
    
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
        })
    },[])
    return (
        <div>
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