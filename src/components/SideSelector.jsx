import React from 'react';

const SideSelector = ({ selectedSide, onSelectSide }) => {
  return (
    <div className="side-selector">
      <button
        className={`side-button ${selectedSide === 'T' ? 'selected-t' : 'unselected'}`}
        onClick={() => onSelectSide('T')}
        onMouseEnter={e => selectedSide === 'T' && e.currentTarget.classList.add('hovered')}
        onMouseLeave={e => selectedSide === 'T' && e.currentTarget.classList.remove('hovered')}
      >
        T Side
      </button>
      <button
        className={`side-button ${selectedSide === 'CT' ? 'selected-ct' : 'unselected'}`}
        onClick={() => onSelectSide('CT')}
        onMouseEnter={e => selectedSide === 'CT' && e.currentTarget.classList.add('hovered')}
        onMouseLeave={e => selectedSide === 'CT' && e.currentTarget.classList.remove('hovered')}
      >
        CT Side
      </button>
    </div>
  );
};

export default SideSelector;
