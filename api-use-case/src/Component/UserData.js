import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddUser from './AddUser';
import GetUser from './GetUser';

const UserData = () => {
     const userData = {
          name: '',
          username: '',
          email: ''
     }
     const [data, setData] = useState([]);
     const [formData, setFormData] = useState(userData);
     const [editId, setEditId] = useState(null);

     const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               let res;
               if (editId !== null) {
                    res = await axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`, formData); // corrected URL
                    const updateData = data.map(user => {
                         if (user.id === editId) {
                              return {
                                   ...user,
                                   name: formData.name,
                                   username: formData.username,
                                   email: formData.email
                              }
                         }
                         return user;
                    });
                    setData(updateData);
                    setEditId(null);
               } else {
                    res = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
                    setData([...data, res.data]);
               }

          } catch (error) {
               console.error('Error submitting data:', error);
          }
          setFormData(userData);
     }


     const handleEdit = (user) => {
          setEditId(user.id);
          setFormData({
               name: user.name,
               username: user.username,
               email: user.email
          })
     }

     const fetchData = async () => {
          const res = await axios.get('https://jsonplaceholder.typicode.com/users');
          setData(res.data);
     }

     const handleDelete = async (id) => {
          try {
               await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
               setData(prevData => prevData.filter(user => user.id !== id));
          } catch (error) {
               console.error('getting deleting user', error);
          }

     }

     useEffect(() => {
          fetchData()
     }, [])
     return (
          <div className='container'>

               <AddUser
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
               />
               <GetUser
                    data={data}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
               />
     

          </div>
     )
}

export default UserData
