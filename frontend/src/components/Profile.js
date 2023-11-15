import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    lastname: '',
    email: '',
    // Agrega más propiedades según sea necesario
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
    <div>
      <h1>Perfil</h1>
      <p>Nombre: {profile.name}</p>
      <p>Apellido: {profile.lastname}</p>
      <p>Email: {profile.email}</p>
      {/* Agrega el resto de la información del perfil aquí */}
    </div>
  );
};

export default Profile;
