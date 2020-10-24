import React from "react";
import { Hero } from "../Hero/Hero";
import {Filter} from "../Filter/Filter"
import {Link} from "react-router-dom"
import {SingleRoom} from "./SingleRoom"
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import ImageGif from "../../images/gif/loading-arrow.gif"
import {RoomsContext} from "../Context"
import "./Rooms.scss"

export class Rooms extends React.Component {
  static contextType = RoomsContext
  render(){
    let {rooms, sortedRooms, loaded} = this.context  
    
    // Get 
    const Rooms = !loaded ? rooms.map((room)=>{ 
      return(
        <SingleRoom  room={room} key={room.id}/>
      )
    }):<img src={ImageGif} alt="img" style={{margin: "0 auto"}} />
    return (
    <section>
      <Hero hero="roomsHero">
        <Banner
          title="our rooms"
          subtitle="search through our gorgious rooms "
        > <Link to="/" className="btn-primary">Back to Home</Link></Banner>
      </Hero>
      <div className="rooms">
        <Title title="search rooms"/>
        <div className="rooms-center">
          <Filter />
           {sortedRooms.length===0? Rooms: <p>Sorted rooms</p>}  
        </div>
      </div>
      
    </section>
  );
  }
};
