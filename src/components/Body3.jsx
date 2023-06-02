import React, { useState, useEffect } from 'react'
import './body3.css';
import InvestItem from './InvestItem';
import { database } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';


const Body3 = () => {
  const collectionRef = collection(database, "properties");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const fetchedProperties = [];
        querySnapshot.forEach((doc) => {
          fetchedProperties.push({ id: doc.id, ...doc.data() });
        });
        setProperties(fetchedProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  },);

  console.log(properties);

  return (
    <div className='body3'>
    <h1>Fractional Investment Properties</h1>
    <p>These are specially curated Aasthy-exclusive fractional investment opportunities.</p>
    <div className="invest-items-container">
      <div className="invest-items">
        {properties.map((property) => (
          <InvestItem
            key={property.id}
            funded={property.funded}
            generatereturns={property.generatereturns}
            image={property.image}
            investment={property.investment}
            investors={property.investors}
            location={property.location}
            name={property.name}
            returns={property.returns}
            percentagefunded = {property.percentagefunded}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Body3