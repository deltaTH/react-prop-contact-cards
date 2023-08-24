import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar img="https://media.licdn.com/dms/image/C4D03AQGN2LIG5p7Rkw/profile-displayphoto-shrink_400_400/0/1647798608533?e=1694649600&v=beta&t=lr15eOgzLol_PpnvbhE9bOcBRHnmmMMSkQSlrdIQGqQ" />
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />

      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      /> */}
    </div>
  );
}

export default App;
