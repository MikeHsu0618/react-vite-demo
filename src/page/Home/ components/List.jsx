import Item from "./Item"

const List = ({listData, deleteData}) => {
    return <div className="list">
        {listData.map((item) => {
            const {note, date, time, id} = item
            return <Item
                note={note}
                date={date}
                time={time}
                key={id}
                id={id}
                deleteData={deleteData}
            ></Item>
        })}
    </div>
}

export default List