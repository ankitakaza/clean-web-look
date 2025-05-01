
import React from "react";

const Index = () => {
  return (
    <div className="university-portal">
      {/* Header with navigation */}
      <header className="header">
        <div className="logo-container">
          <img 
            src="/lovable-uploads/ccd2ab5b-950f-4324-b514-18f7fd1b8673.png" 
            alt="University Buzz Logo" 
            className="logo"
          />
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#clubs">Clubs</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </nav>
        <div className="auth-links">
          <a href="#notifications" className="notification-icon">
            <span className="notification-dot"></span>
            🔔
          </a>
          <a href="#signup">Signup</a>
          <a href="#login" className="active">Login</a>
          <div className="profile-icon">👤</div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="login-container">
          <h2>Login</h2>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="loginAs">Login as:</label>
              <select id="loginAs" name="loginAs" className="form-control">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                required
              />
            </div>
            
            <button type="submit" className="login-button">
              Login
            </button>
            
            <div className="signup-link">
              Don't have an account? <a href="#signup">Sign up</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Index;
