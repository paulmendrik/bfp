import React from 'react';
import {Field, Label, Input, Textarea, Column} from "rbx";


const Form = () => (
    <Column.Group centered>
        <Column className="form" size="half">
            <h3>Add A Comment</h3>
    <form  action="https://formspree.io/f/xwkwqlge" method="post">
    <Field id="fs-frm-inputs">
    <Label>Full Name</Label>
    <Input type="text" name="name" id="full-name" placeholder="Name" required />
    <Label>Email Address</Label>
    <Input type="email" name="_replyto" id="email-address" placeholder="email" required />
    <Label>Message</Label>
    <Textarea rows="5" name="message" id="message" placeholder="Message" required />
    <Input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
    </Field>
        <Input className="button is-normal" type="submit" value="Submit" />
    </form>
        </Column>
    </Column.Group>



)

export default Form



