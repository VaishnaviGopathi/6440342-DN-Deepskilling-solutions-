import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const { name, email, password } = formData;
    if (name.length < 5) {
      alert('Full Name must be 5 characters long!');
      return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Email is not valid!');
      return false;
    }

    if (password.length < 8) {
      alert('Password must be 8 characters long!');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Registration Successful!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1 style={{ color: 'red' }}>Register Here!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br /><br />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br /><br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
