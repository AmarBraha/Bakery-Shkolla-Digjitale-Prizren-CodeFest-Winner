import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check credentials
    if (username === 'admin' && password === 'password') {
      setError('');
      setIsLoading(true);
      
      // Show loading screen for 2 seconds before navigating
      setTimeout(() => {
        setIsLoading(false);
        onClose();
        navigate('/dashboard');
        // Reset form
        setUsername('');
        setPassword('');
      }, 2000);
    } else {
      setError('Invalid username or password');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'login-popup-overlay') {
      onClose();
      setError('');
      setUsername('');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay" onClick={handleOverlayClick}>
      {isLoading ? (
        <div className="login-loading-container">
          <div className="login-loading-content">
            <div className="login-loading-spinner"></div>
            <div className="login-loading-checkmark">✓</div>
            <h3 className="login-loading-title">Credentials Verified!</h3>
            <p className="login-loading-text">Logging you in...</p>
          </div>
        </div>
      ) : (
        <div className={`login-popup-modal ${isShaking ? 'shake' : ''}`}>
          <button className="login-popup-close" onClick={onClose}>
            ×
          </button>

          <div className="login-popup-header">
            <div className="login-popup-icon">🔐</div>
            <h2 className="login-popup-title">Admin Login</h2>
            <p className="login-popup-subtitle">Enter your credentials to access the dashboard</p>
          </div>

          <form className="login-popup-form" onSubmit={handleSubmit}>
            {error && (
              <div className="login-popup-error">
                {error}
              </div>
            )}

            <div className="login-popup-input-group">
              <label className="login-popup-label">Username</label>
              <input
                type="text"
                className="login-popup-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>

            <div className="login-popup-input-group">
              <label className="login-popup-label">Password</label>
              <input
                type="password"
                className="login-popup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit" className="login-popup-button">
              Login
            </button>
          </form>

          <div className="login-popup-footer">
            <p>
              Default: <strong>admin</strong> / <strong>password</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}