import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleShowAlbums = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => {
        setAlbums(response.data);
        setSelectedUserId(userId);
        setSelectedAlbumId(null); // Скинути вибраний альбом
      })
      .catch(error => {
        console.error(`Error fetching albums for user ${userId}:`, error);
      });
  };

  const handleShowPhotos = (albumId) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        setPhotos(response.data);
        setSelectedAlbumId(albumId);
      })
      .catch(error => {
        console.error(`Error fetching photos for album ${albumId}:`, error);
      });
  };

  return (
    <div className='bg  img-fluid'>
      <div className='container pt-3 bg-warning' style={{paddingTop: '20px',backgroundColor: '#fec007',borderRadius: '20px'}}>
        <h3>Користувачі: </h3>
        <div className='users-list'>
          
          {users.map(user => (
            <div key={user.id} className='user-item'>
              {user.name}
              <button className='bg-warning' onClick={() => handleShowAlbums(user.id)}>Album</button>
            </div>
          ))}
        </div>
        
        {selectedUserId && (
         
          <div className='albums-list'>
            {albums.map(album => (
              <div key={album.id} className='album-item'>
                {album.title}
                <button className='bg-warning' onClick={() => handleShowPhotos(album.id)}>Photos</button>
              </div>
            ))}
          </div>
        )}

        {selectedAlbumId && (
          <div>
            <h3>Фото користувачів: {selectedAlbumId}</h3>
            <div className="photos-grid mb-3">
              {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <p>{photo.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUsers;
