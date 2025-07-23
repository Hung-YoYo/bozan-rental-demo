
import { useState } from 'react'

const rooms = Array.from({ length: 79 }, (_, i) => ({
  id: i + 1,
  rented: Math.random() > 0.5,
  images: Array.from({ length: 4 }, (_, j) =>
    `https://via.placeholder.com/300x200?text=Room+${i + 1}+Photo+${j + 1}`
  ),
}))

export default function RentalPage() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        寶贊大樓出租網
      </h1>
      {!selectedRoom ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#fff' }}
            >
              <p style={{ fontWeight: 'bold' }}>房間 {room.id}</p>
              <p style={{ color: room.rented ? 'red' : 'green' }}>
                {room.rented ? '已出租' : '可出租'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedRoom(null)} style={{ marginBottom: '1rem' }}>
            ← 返回房間列表
          </button>
          <h2 style={{ fontSize: '1.5rem' }}>房間 {selectedRoom.id}</h2>
          <p style={{ color: selectedRoom.rented ? 'red' : 'green' }}>
            {selectedRoom.rented ? '已出租' : '可出租'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {selectedRoom.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Room ${selectedRoom.id} Photo ${idx + 1}`}
                style={{ borderRadius: '8px', width: '100%' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
