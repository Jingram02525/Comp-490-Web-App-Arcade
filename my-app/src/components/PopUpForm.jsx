import { useState } from "react";

export default function PopUpForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            data.name.length !== 0 &&
            data.email.length !== 0 &&
            data.feedback.length !== 0
        ) {
            console.log(data); // For debugging purposes
            localStorage.setItem("formData", JSON.stringify(data));
            alert(`Thank You ${data.name}, your feedback is greatly appreciated!`); // Display custom alert
        } else {
            alert("Please enter data first"); // Alert for empty fields
        }
    };

    return (
        <div className="flex justify-center items-center h-screen" style={{ paddingBottom: 0, marginBottom: 0 }}>
            <div className="App w-70%">
                <h1 className="h1" style={{ textAlign: "center" }}>Feedback Form</h1>
                <form className="feedback" onSubmit={handleSubmit}>
                    <div className="m1-rem">
                        <input
                            className="border border-gray-500 w-full"
                            placeholder="Name"
                            name="name"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="border border-gray-500 w-full"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="m1-rem">
                       <textarea
                            className="border border-gray-500 w-full h-20"
                            placeholder="Feedback"
                            name="feedback"
                            onChange={(e) => handleChange(e)}
                            required
                        ></textarea>
                    </div>
                    <button className="button text-yellow-500 hover:bg-yellow-500 hover:text-[white] hover:border-yellow-500" type="submit">
                        Submit feedback
                    </button>
                </form>
            </div>
        </div>
    );
}
