import React, { useState } from "react";

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassWord ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const formStyle = {
        margin: "auto",
        width: "300px",
        textAlign: "left",
    }
}