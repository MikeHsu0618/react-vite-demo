import {useEffect, useState, useRef} from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./ components/Edit";
import List from "./ components/List"
import "./index.css"

const fetchData = async (setData) => {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

const fetchSetData = async (data) => {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {
    const [data, setData] = useState([])
    const submittingStatus = useRef(false)

    useEffect(() => {
        if (!submittingStatus.current) {
            return
        }
        fetchSetData(data)
            .then(data => submittingStatus.current = false)
    }, [data])

    useEffect(()=> {
        fetchData(setData)
    }, [])

    return (
        <div className="app">
            <Edit add={setData} submittingStatus={submittingStatus}></Edit>
            <List listData={data} deleteData={setData}></List>
        </div>
    )
}

export default Home