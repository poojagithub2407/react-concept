import React from 'react'

const AddUser = ({ formData, handleChange, handleSubmit }) => {
     return (
          <div>
               <h2>Add User</h2>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label>Enter name</label>
                         <input
                              type='text'
                              value={formData.name}
                              id='name'
                              name='name'
                              onChange={handleChange}
                              className='form-control'
                         />
                    </div>
                    <div>
                         <label>Enter User Name</label>
                         <input
                              type='text'
                              value={formData.username}
                              id='username'
                              name='username'
                              onChange={handleChange}
                              className='form-control'
                         />

                    </div>
                    <div>
                         <label>Enter  Email</label>
                         <input
                              type='email'
                              value={formData.email}
                              id='email'
                              name='email'
                              onChange={handleChange}
                              className='form-control'

                         />

                    </div>
                    <div className='mt-3 w-100'>
                         <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>

               </form>
          </div>
     )
}

export default AddUser
