import React from "react";
import "./Events.css";
import SharkTank from "../images/Events/shark.png";
import Tth from "../images/Events/tth.png";
import brocode from "../images/Events/brocode.png";
import hireFire from "../images/Events/dragon.png";
import rcCar from "../images/Events/rcCar1.png";
import techSangam from "../images/Events/techsangam.png";
import catiaWars from "../images/Events/catiaWars.png";
import mun from "../images/Events/mun.png";
import bgmi from "../images/Events/bgmi.png"
import EventLCard from "../components/EventLCard";

const Events = ({ reference }) => {
  return (
    <div className="Events" ref={reference}>
      <div className="heading">
        <div>Events</div>
      </div>
      <div className="cards">
        <EventLCard
          name={"Sharktank"}
          image={SharkTank}
          content={
            "Entrepreneurs pitch ideas to investors for funding and mentorship."
          }
          link={"/sharktank"}
        />
        <EventLCard
          name={"Tech Treasure Hunt"}
          image={Tth}
          content={
            "Seek clues, unravel mysteries, and find the hidden treasure trove."
          }
          link={"/techtreasurehunt"}
        />
        <EventLCard
          name={"The Bro Code"}
          image={brocode}
          content={
            "Code, debug, collaborate, complete: Bro Code, where champions emerge!."
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"Hire or Fire"}
          image={hireFire}
          content={
            "Gear up for the ultimate skills showdown in Hire Or Fire!"
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"Fast & Furious"}
          image={rcCar}
          content={
            "Get ready for an electrifying adrenaline rush the Fast and Furious RC Car Race!"
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"TECHसंगम"}
          image={techSangam}
          content={
            "Solve puzzles, find clues, escape the room before time's up!"
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"Catia Wars"}
          image={catiaWars}
          content={
            "Design prowess, engineering battles, ultimate CATIA War: Create, Compete, Conquer!"
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"MUN"}
          image={mun}
          content={
            "Debate, diplomacy, global issues: Model United Nations, shaping future leaders."
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"BGMI-Valorant"}
          image={bgmi}
          content={
            "Play, compete, strategize, challenge, entertain: Dive into the world of games."
          }
          link={"/thebrocode"}
        />
        <EventLCard
          name={"IPL Auction"}
          image={bgmi}
          content={
            "Bidding war, cricket stars, fortunes made: The IPL Auction spectacle."
          }
          link={"/thebrocode"}
        />
      </div>
    </div>
  );
};

export default Events;
