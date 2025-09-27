import React from "react";
import "./registrationform.css";


function RegistrationForm() {
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" placeholder="Enter Full Name"/><br></br>
                    <input type="number" placeholder="Enter your age"/><br></br>
                    <input type="email" placeholder="Enter Your Email" /><br></br>
                    <input type="password" placeholder="Enter Password" /><br></br>
                    <input type="radio" name="hi"/>
                    <label htmlFor="">Male</label>
                    <input type="radio" name="hi"/>
                    <label>Female</label>
                    <input type="radio" name="hi"/>
                    <label htmlFor="">Others</label> <br></br>

                    <select name="" id="">
                        <option value="">Html</option><br></br>
                        <option value="">css</option><br></br>
                    </select>
                    <label>html</label><br></br>
                    <input type="checkbox" name="hii"/>
                </form>
                <button>hit me</button>
            </div>
        </>
    );
}
export default RegistrationForm;