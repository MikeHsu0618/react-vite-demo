const Item = ({id, note, date, time, deleteData}) => {
    const deleteItem = () => deleteData(prev => prev.filter(item => item.id !== id))

    return<div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
}

export default Item