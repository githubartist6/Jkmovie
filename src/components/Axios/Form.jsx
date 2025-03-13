import { useState } from "react"
import { PostData } from "./PostApi";

export const Form = ({ data, setData }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev) => {
            return {
                ...prev, [name]: value,
            }
        })
    };

    const addPostData = async () => {
        const res = await PostData(addData);
        console.log("add res data", res);

        if ((res.status === 201)) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" })
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor=""></label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="off"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor=""></label>
                <input
                    type="text"
                    name="body"
                    id="body"
                    autoComplete="off"
                    placeholder="Add Post"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}