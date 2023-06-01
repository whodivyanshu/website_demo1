import React, { useState, useEffect } from 'react';
import { app, database } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Admin = () => {
  const collectionRef = collection(database, "users");
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: ""
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const fetchedUsers = [];
      querySnapshot.forEach((doc) => {
        fetchedUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  console.log(users)

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: formData.email,
      first: formData.first,
      last: formData.last
    })
      .then(() => {
        alert('Data added successfully');
        fetchUsers();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="admin">
      <label htmlFor="first">First name</label>
      <input type="text" id='first' name="first" value={formData.first} onChange={handleInputChange} />
      <br />
      <label htmlFor="last">Last name</label>
      <input type="text" id='last' name="last" value={formData.last} onChange={handleInputChange} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name="email" value={formData.email} onChange={handleInputChange} />
      <br />
      <button type='submit' onClick={handleSubmit}>Submit</button>
      
      <h2>Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first} {user.last} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
