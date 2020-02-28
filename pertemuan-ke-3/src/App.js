import React from "react";
import "./App.css";
import Foto from "./assets/foto.jpg";
import Info from "./components/Info";
import Profile from "./components/Profile";
import { Container } from "reactstrap";

import MentorKodingIcon from "./assets/mentorkoding.png";
import RewangKerjoIcon from "./assets/rewangkerjo.png";
import LaundryPintarIcon from "./assets/laundrypintar.png";
import NoIcon from "./assets/no-icon.png";

function App() {
  const myBiodata = {
    name: "Daffa Akbar Dwiputra Damarriyanto",
    address: "Jl Kembang Turi 4B, Kota Malang",
    phone: "085755557954",
    email: "daffaputradamar@gmail.com",
    projects: [
      {
        name: "Mentor Koding",
        description:
          "A Platform where Mentor and Mentee can set up find each other giving and learning new knowledge about IT",
        icon: MentorKodingIcon,
        github:
          "https://github.com/daffaputradamar/mentorkoding-backend-monolith"
      },
      {
        name: "Rewang Kerjo",
        description:
          "Event management system for event organizer so that the event organizing progress can be tracked more easily",
        icon: RewangKerjoIcon,
        github: "https://github.com/daffaputradamar/rewangkerjo"
      },
      {
        name: "Marketplace Koperasi",
        description:
          "Marketplace website for Koperasi to sell and buy their products with Koperasi functionality like Iuran Wajib, Sisa Hasil Usaha, etc.",
        icon: NoIcon,
        github: "https://github.com/daffaputradamar/rewangkerjo"
      },
      {
        name: "Laundry Pintar",
        description:
          "A Website for Laundry Management to Manage income, outcome, and discount. Member can also track their landry progress on the website",
        icon: LaundryPintarIcon,
        github: "https://github.com/daffaputradamar/laundry-frontend-management"
      }
    ]
  };
  return (
    <Container className="mb-5">
      <Info name={myBiodata.name} photo={Foto} />
      <div className="mb-5 pb-1">
        <hr />
      </div>
      <Profile biodata={myBiodata} />
    </Container>
  );
}

export default App;
