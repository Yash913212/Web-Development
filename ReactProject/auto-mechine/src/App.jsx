import React, { Component } from "react"
import "./App.css"

const CardComponent = () => {
    var myCardDetails = [
        {
            "Image": "https://media.licdn.com/dms/image/v2/D5603AQHjwaD1VABUWg/profile-displayphoto-shrink_800_800/B56ZV1Us7rHoAc-/0/1741430116712?e=1760572800&v=beta&t=MFs1W58J3cE0bhXx4ejLsWu8BAToSpEe9MoVKpmvR40",
            "Name": "Durga Sai Prasad",
            "Role": "Main Mentor"
        },
        {
            "Image": "https://technicalhub.io/images/400x400/Hanumanthu.png",
            "Name": "Hanumanthu",
            "Role": "Mentor Pool-1"
        },
        {
            "Image": "https://technicalhub.io/images/400x400/5927.png",
            "Name": "Madhu",
            "Role": "Mentor Pool-2"
        },
        {
            "Image": "http://technicalhub.io/images/400x400/Satish.png",
            "Name": "Satish",
            "Role": "Mentor Pool-3"
        },
        {
            "Image": "https://technicalhub.io/images/400x400/GIRISH.png",
            "Name": "Girish",
            "Role": "Mentor Pool-4"
        },
        {
            "Image": "https://media.licdn.com/dms/image/v2/D5603AQHyLh5MK8fkqg/profile-displayphoto-shrink_800_800/B56ZbZB4KgHUAg-/0/1747397871198?e=1760572800&v=beta&t=IAGc-8I5ZI7l5WNoQZH9jDDfcCyijnukRvojsFGz3nQ",
            "Name": "Gangadhar",
            "Role": "Mentor Pool-5"
        }
    ]

    var card = myCardDetails.map((ele)=> {
        return (
            <div className="card-section">
                <div className="image-section">
                    <img src={ele.Image} />
                </div>
                <div class="info-section">
                    <div className="name-section">Name: {ele.Name}</div>
                    <div className="role-section">{ele.Role}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="card-container">
            {card}
        </div>
    )
}

export default CardComponent;