import React, { useState } from 'react';

const RealAIIDWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="real-aiid-container" style={styles.wrapper}>
      {/* The Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{
          ...styles.fab,
          backgroundColor: isOpen ? '#FF0000' : '#FFD700',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
      >
        {isOpen ? '+' : 'ID'}
      </button>

      {/* The Biometric Identity Panel */}
      {isOpen && (
        <div style={styles.panel}>
          <div style={styles.header}>
            <span style={styles.glitchText}>REALAIID BIOMETRIC HUB</span>
          </div>
          
          <div style={styles.content}>
            <p style={styles.status}>STATUS: <span style={{color: '#00FF00'}}>SCANNING FOR LEGACY...</span></p>
            
            <div style={styles.actionBox}>
              <p style={{fontSize: '10px', margin: '0 0 10px 0'}}>ANCHOR YOUR DIGITAL NEWBORN LIKENESS</p>
              <button style={styles.actionBtn}>START BIOMETRIC HASH</button>
            </div>

            <div style={styles.info}>
              <small>PROTECTING 195 NATIONS</small>
              <br />
              <small>ESTABLISHING FIRST-RIGHT IDENTITY</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    fontFamily: 'monospace',
  },
  fab: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '3px solid #000',
    color: '#000',
    fontSize: '20px',
    fontWeight: '900',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    width: '280px',
    backgroundColor: '#000',
    border: '2px solid #FFD700',
    borderRadius: '10px',
    marginBottom: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
  },
  header: {
    background: '#FFD700',
    color: '#000',
    padding: '10px',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    fontSize: '12px',
  },
  content: {
    padding: '15px',
    color: '#FFD700',
  },
  status: {
    fontSize: '11px',
    margin: '0 0 15px 0',
    borderBottom: '1px solid #333',
    paddingBottom: '5px',
  },
  actionBox: {
    textAlign: 'center' as const,
    padding: '10px',
    border: '1px dashed #FFD700',
    marginBottom: '15px',
  },
  actionBtn: {
    backgroundColor: '#FFD700',
    border: 'none',
    padding: '8px 12px',
    fontSize: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase' as const,
  },
  info: {
    fontSize: '9px',
    textAlign: 'center' as const,
    opacity: 0.7,
  },
  glitchText: {
    letterSpacing: '1px',
  }
};

export default RealAIIDWidget;