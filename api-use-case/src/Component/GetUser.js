import React from 'react'

const GetUser = ({ data, handleEdit, handleDelete }) => {
     return (
          <div>
               <table className='table'>
                    <thead>
                         <tr>
                              <th>Name</th>
                              <th>User Name</th>
                              <th>Email Id</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((user) => (
                                   <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                             <button className='btn btn-info' onClick={() => { handleEdit(user) }}>Edit</button>
                                        </td>
                                        <td >
                                             <button className='btn btn-danger' onClick={() => { handleDelete(user.id) }}>Delete</button>
                                        </td>

                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </div>
     )
}

export default GetUser
