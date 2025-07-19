import React, { useState, useEffect } from 'react';
import './index.css';

import { T_SIDE_ROLE_DEFINITIONS, CT_SIDE_ROLE_DEFINITIONS } from './data/constants.js';
// T-Side 5 Player Data
import { mirageStrategies5Players } from './data/mirageStrategies.js';
import { infernoStrategies5Players } from './data/infernoStrategies.js';
import { dust2Strategies5Players } from './data/dust2Strategies.js';
import { overpassStrategies } from './data/overpassStrategies.js';
import { ancientStrategies5Players } from './data/ancientStrategies.js';
import { nukeStrategies5Players } from './data/nukeStrategies.js';
import { trainStrategies5Players } from './data/trainStrategies.js';

// T-Side 4 Player Data
import { mirageStrategies4Players } from './data/mirageStrategies4Players.js';
import { infernoStrategies4Players } from './data/infernoStrategies4Players.js';
import { nukeStrategies4Players } from './data/nukeStrategies4Players.js';
import { overpassStrategies4Players } from './data/overpassStrategies4Players.js';
import { ancientStrategies4Players } from './data/ancientStrategies4Players.js';
import { trainStrategies4Players } from './data/trainStrategies4Players.js';
import { dust2Strategies4Players } from './data/dust2Strategies4Players.js';

// CT-Side Data
import { mirageStrategiesCT5Players } from './data/mirageStrategiesCT5Players.js';
import { infernoStrategiesCT5Players } from './data/infernoStrategiesCT5Players.js';
import { dust2StrategiesCT5Players } from './data/dust2StrategiesCT5Players.js';
import { overpassStrategiesCT5Players } from './data/overpassStrategiesCT5Players.js';
import { ancientStrategiesCT5Players } from './data/ancientStrategiesCT5Players.js';
import { nukeStrategiesCT5Players } from './data/nukeStrategiesCT5Players.js';
import { trainStrategiesCT5Players } from './data/trainStrategiesCT5Players.js';

import Header from './components/Header.jsx';
import MapSelector from './components/MapSelector.jsx';
import PlayerSlider from './components/PlayerSlider.jsx';
import SideSelector from './components/SideSelector.jsx';
import StrategyDisplay from './components/StrategyDisplay.jsx';

const T_SIDE_STRATEGY_DATA_5_PLAYERS = {
  Mirage: mirageStrategies5Players,
  Inferno: infernoStrategies5Players,
  "Dust 2": dust2Strategies5Players,
  Overpass: overpassStrategies,
  Ancient: ancientStrategies5Players,
  Nuke: nukeStrategies5Players,
  Train: trainStrategies5Players,
};

const T_SIDE_STRATEGY_DATA_4_PLAYERS = {
  Mirage: mirageStrategies4Players,
  Inferno: infernoStrategies4Players,
  "Dust 2": dust2Strategies4Players,
  Nuke: nukeStrategies4Players,
  Overpass: overpassStrategies4Players,
  Ancient: ancientStrategies4Players,
  Train: trainStrategies4Players,
};

const CT_SIDE_STRATEGY_DATA_5_PLAYERS = {
  Mirage: mirageStrategiesCT5Players,
  Inferno: infernoStrategiesCT5Players,
  "Dust 2": dust2StrategiesCT5Players,
  Overpass: overpassStrategiesCT5Players,
  Ancient: ancientStrategiesCT5Players,
  Nuke: nukeStrategiesCT5Players,
  Train: trainStrategiesCT5Players,
};

const App = () => {
  const [selectedMap, setSelectedMap] = useState('Mirage');
  const [selectedSide, setSelectedSide] = useState('T');
  const [selectedRoles, setSelectedRoles] = useState(
    T_SIDE_ROLE_DEFINITIONS.filter(r => r.id !== 'support')
  );
  const [strategies, setStrategies] = useState([]);
  const [error, setError] = useState(null);

  const playerCount = selectedRoles.length;
  const roleDefinitions = selectedSide === 'T' ? T_SIDE_ROLE_DEFINITIONS : CT_SIDE_ROLE_DEFINITIONS;

  // Effect to handle theme and role reset when side changes
  useEffect(() => {
    document.body.classList.remove('theme-t', 'theme-ct');
    document.body.classList.add(selectedSide === 'T' ? 'theme-t' : 'theme-ct');
    if (selectedSide === 'T') {
      // Reset to default T-Side (4 players, support is optional)
      const newDefaultRoles = T_SIDE_ROLE_DEFINITIONS.filter(r => r.id !== 'support');
      setSelectedRoles(newDefaultRoles);
    } else {
      // Default to full 5-player roster for CT-Side and lock it
      setSelectedRoles([...CT_SIDE_ROLE_DEFINITIONS]);
    }
  }, [selectedSide]);

  // Effect to load strategies based on selections
  useEffect(() => {
    if (!selectedMap) {
      setError('Vui lòng chọn một map để xem chiến thuật.');
      setStrategies([]);
      return;
    }
    setError(null);

    let dataForMap;

    if (selectedSide === 'T') {
      const dataSet = playerCount === 5 ? T_SIDE_STRATEGY_DATA_5_PLAYERS : T_SIDE_STRATEGY_DATA_4_PLAYERS;
      dataForMap = dataSet[selectedMap];
    } else { // CT Side is always 5 players now
      const dataSet = CT_SIDE_STRATEGY_DATA_5_PLAYERS;
      dataForMap = dataSet[selectedMap];
    }

    if (dataForMap) {
      setStrategies(dataForMap);
    } else {
      setStrategies([]);
      setError(`Hiện tại chưa có dữ liệu chiến thuật ${playerCount} người cho phe ${selectedSide} tại map ${selectedMap}.`);
    }
  }, [selectedMap, selectedSide, playerCount]);

  return (

<div className="min-h-screen bg-bg-primary text-text-primary">

      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-bg-secondary rounded-2xl shadow-2xl shadow-black/20">
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">1. Chọn Map thi đấu</h2>
              <MapSelector selectedMap={selectedMap} onSelectMap={setSelectedMap} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">2. Chọn phe</h2>
              <SideSelector selectedSide={selectedSide} onSelectSide={setSelectedSide} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[var(--accent-color)]">3. Tùy chỉnh đội hình</h2>

                <PlayerSlider
                selectedRoles={selectedRoles}
                onSelectedRolesChange={setSelectedRoles}
                roleDefinitions={roleDefinitions}
                selectedSide={selectedSide}
              />
            </div>
          </div>
        </div>
          <div style={{ marginTop: "30px" }}></div>  {/* <-- Tăng số px nếu muốn cách xa hơn */}

        <div className="mt-12 max-w-6xl mx-auto">
          <StrategyDisplay strategies={strategies} error={error} selectedRoles={selectedRoles} />
        </div>
      </main>
    </div>
  );
};

export default App;
