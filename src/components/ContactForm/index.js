import React from 'react';
// import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";


export default function ContactForm() {
    return (
        <div>
            <Typography gutterBottom variant="h3" component="h2">
                Contact Me
            </Typography>
            <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Your message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" />
            </div>
            </form>
            <button className="btn btn-primary">Send</button>
        </div>
    )
}