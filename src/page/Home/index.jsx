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
    // 監聽 data 如有改變即執行一次 (在第一次渲染會執行一次)
    useEffect(() => {
        // 綁定要作的事情
        return () => {
            // 取消綁定
        }
    }, [data])

    // useEffect(()=> {
    //     // 如果第二個參數為空陣列，即可獲得一個一開始可以執行一次的 function
    //     console.log("init useEffect")
    // }, [])

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

    return <div className="app">
        <Edit add={setData} submittingStatus={submittingStatus}></Edit>
        <List listData={data} deleteData={setData}></List>
    </div>
}

export default Home