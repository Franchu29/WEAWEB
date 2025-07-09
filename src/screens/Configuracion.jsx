import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Configuracion.css';

export default function Configuracion() {
  const [ip, setIp] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const ipGuardada = localStorage.getItem('API_BASE_URL');
    if (ipGuardada) {
      setIp(ipGuardada);
    }
  }, []);

  const guardarIP = () => {
    if (!ip.startsWith('http://') && !ip.startsWith('https://')) {
      alert('La IP debe comenzar con http:// o https://');
      return;
    }

    localStorage.setItem('API_BASE_URL', ip);
    alert(`Nueva IP guardada: ${ip}`);
  };

  return (
    <div
      className="config-form-background"
      style={{
        backgroundImage: `url(/assets/fondo.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="config-form-container">
        <h2>Dirección IP del backend:</h2>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="config-input"
          placeholder="http://192.168.0.15:5000"
        />
        <div className="buttons-row">
          <button className="config-cancel-button" onClick={() => navigate('/')}>
            Cancelar
          </button>
          <button className="config-save-button" onClick={guardarIP}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
