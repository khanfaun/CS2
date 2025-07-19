import React, { useState } from 'react';
import { COMPETITIVE_MAPS } from '../data/constants.js';
import { Search } from 'lucide-react';
import MapModal from './MapModal.jsx';

// Map thumb - phải đúng tên file .jpg trong images/
const mapImageUrls = {
  "Mirage": "/images/Mirage.jpg",
  "Inferno": "/images/Inferno.jpg",
  "Dust 2": "/images/Dust2.jpg",
  "Nuke": "/images/Nuke.jpg",
  "Overpass": "/images/Overpass.jpg",
  "Ancient": "/images/Ancient.jpg",
  "Train": "/images/Train.jpg",
};

// Map chi tiết (callouts) - đúng tên file .jpg trong images/
const mapDetailImages = {
  "Mirage": ["/images/Mirage-callouts.jpg", "/images/Mirage-notext.jpg"],
  "Inferno": ["/images/Inferno-callouts.jpg", "/images/Inferno-notext.jpg"],
  "Dust 2": ["/images/Dust2-callouts.jpg", "/images/Dust2-notext.jpg"],
  "Nuke": ["/images/Nuke-A-callouts.jpg", "/images/Nuke-B-callouts.jpg", "/images/Nuke-notext.jpg"],
  "Overpass": ["/images/Overpass-callouts.jpg", "/images/Overpass-notext.jpg"],
  "Ancient": ["/images/Ancient-callouts.jpg", "/images/Ancient-notext.jpg"],
  "Train": ["/images/Train-callouts.jpg", "/images/Train-notext.jpg"],
};

function MapSelector({ selectedMap, onSelectMap }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMap, setModalMap] = useState(null);

  const handleShowDetails = (map) => {
    setModalMap(map);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalMap(null);
  };

  return (
    <>
  <div className="map-grid-row">
  {COMPETITIVE_MAPS.map((map) => (
    <MapCard
      key={map}
      map={map}
      isSelected={selectedMap === map}
      onSelect={() => onSelectMap(map)}
      onShowDetails={() => handleShowDetails(map)}
    />
  ))}
</div>

      {modalOpen && modalMap && (
        <MapModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          images={mapDetailImages[modalMap] || []}
          mapName={modalMap}
        />
      )}
    </>
  );
}

// Thumb map nhỏ gọn, kính lúp luôn bên trong, không button lồng button, không hiện tên map
function MapCard({ map, isSelected, onSelect, onShowDetails }) {
  return (
    <div className="relative">
  <button
  onClick={onSelect}
  className="map-thumb-btn"
  tabIndex={0}
  aria-label={`Chọn bản đồ ${map}`}
>
  <img
    src={mapImageUrls[map]}
    alt={map}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "1rem",
      display: "block",
      filter: isSelected ? "none" : "grayscale(100%)"
    }}
    draggable={false}
  />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" style={{borderRadius: "1rem"}}></div>
  </button>
      {/* Icon kính lúp (absolute trên frame ảnh) */}
      <button
        type="button"
        onClick={e => { e.stopPropagation(); onShowDetails(); }}
        className="absolute top-2 right-2 bg-black/50 text-white rounded-full h-7 w-7 flex items-center justify-center hover:bg-black/80 border border-white/20 transition"
        aria-label={`Xem chi tiết bản đồ ${map}`}
        tabIndex={0}
        style={{ zIndex: 20 }}
      >
        <Search size={18} />
      </button>
    </div>
  );
}

export default MapSelector;
