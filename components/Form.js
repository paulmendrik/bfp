import React from 'react';
import {Button, Label, Input, Textarea, Column} from "rbx";



const Form = () => (

<Column.Group centered>
<Column className="form" size="half">
<h3>Add A Comment</h3>
<form action="https://getform.io/f/cbef965c-d5cd-4864-8dd3-e90d0252d2ac" method="POST">
<Label>Full Name</Label>
<Input type="text" name="name"   placeholder="Name" required></Input>
<Label>Email Address</Label>
<Input type="email" name="email" placeholder="Email" required></Input>
<Label>Message</Label>
<Textarea type="textarea" rows="5" name="message"  placeholder="Message" required ></Textarea>
<Input className="button" type="submit" value="Submit" ></Input>
</form>
</Column>
</Column.Group>

)

export default Form



