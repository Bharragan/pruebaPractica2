import React, { useEffect, useState } from 'react';
import '../styles.css';

const renderInterests = (hobbies) => (
  <div className="col-md-6">
    <h2>Intereses</h2>
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby.name}: {hobby.description}</li>
      ))}
    </ul>
  </div>
);

const renderFrameworks = (frameworks) => (
  <div className="col-md-6">
    <h2>Frameworks</h2>
    <ul>
      {frameworks.map((framework, index) => (
        <li key={index}>{framework.name}: {framework.level}</li>
      ))}
    </ul>
  </div>
);

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    lastname: '',
    email: '',
    city: '',
    country: '',
    summary: '',
    frameworks: [],
    hobbies: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/profile/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-center align-items-center">
        <img
          src="/assets/0a12e130650543cf5b165a008d1604e3.gif"
          alt="Encabezado"
          className="img-fluid rounded"
          style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
        />
      </header>
      <div className="row">
        <div className="col-md-12">
          <h1>{profile.name} {profile.lastname}</h1>
          {profile.summary && <p>{profile.summary}</p>}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Datos Personales</h2>
          <table className="table table-dark">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{profile.email}</td>
              </tr>
              <tr>
                <td>Ciudad</td>
                <td>{profile.city}</td>
              </tr>
              <tr>
                <td>País</td>
                <td>{profile.country}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {profile.hobbies.length > 0 && renderInterests(profile.hobbies)}
        {profile.frameworks.length > 0 && renderFrameworks(profile.frameworks)}
      </div>
    </div>
  );
};

export default Profile;

