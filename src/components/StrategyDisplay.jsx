import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// Type guard
function isTSideStrategy(strategy) {
  return 'timelines' in strategy;
}

// T-Side Table
const TSideStrategyTable = ({ strategy, selectedRoles }) => {
  const columnOrder = selectedRoles.map(r => r.role);

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', minWidth: 800, borderCollapse: 'collapse', fontSize: 14, color: '#eee' }}>
        <thead style={{ borderBottom: '2px solid #555' }}>
          <tr>
            <th style={{ padding: 12, width: 100, fontWeight: 'bold', color: '#999', textAlign: 'left' }}>Thời gian</th>
            {selectedRoles.map(roleDef => (
              <th key={roleDef.id} style={{ padding: 12, fontWeight: 'bold', color: '#ddd', textAlign: 'left' }}>
                {roleDef.role} {roleDef.name && <span style={{ color: '#888', fontWeight: 'normal' }}>({roleDef.name})</span>}
              </th>
            ))}
            <th style={{ padding: 12, fontWeight: 'bold', color: '#999', textAlign: 'left' }}>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {strategy.timelines.map((timeline, index) => {
            const tasksByRole = new Map(timeline.tasks.map(t => [t.role, t.task]));
            const bgColor = index % 2 === 0 ? '#222' : '#1a1a1a';
            return (
              <tr key={index} style={{ borderBottom: '1px solid #444', backgroundColor: bgColor }}>
                <td style={{ padding: 12, fontWeight: '600', verticalAlign: 'top', color: '#ddd' }}>{timeline.time}</td>
                {columnOrder.map(role => (
                  <td key={role} style={{ padding: 12, verticalAlign: 'top', color: '#ddd' }}>
                    {tasksByRole.get(role) || '-'}
                  </td>
                ))}
                <td style={{ padding: 12, verticalAlign: 'top', fontStyle: 'italic', color: '#888' }}>{timeline.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// CT-Side Table
const CTStrategyTable = ({ strategy, selectedRoles }) => {
  const columnOrder = selectedRoles.map(r => r.role);
  const hasGhiChu = strategy.rowOrder.some(cat => strategy.data[cat]?.['Ghi chú']);

  if (hasGhiChu && !columnOrder.includes('Ghi chú')) {
    for (const category in strategy.data) {
      if (strategy.data[category]['Ghi chú']) {
        columnOrder.push('Ghi chú');
        break;
      }
    }
  }

  const rolesToDisplay = selectedRoles.slice();
  if (hasGhiChu) {
    rolesToDisplay.push({ id: 'ghichu', role: 'Ghi chú', description: '' });
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', minWidth: 800, borderCollapse: 'collapse', fontSize: 14, color: '#eee' }}>
        <thead style={{ borderBottom: '2px solid #555' }}>
          <tr>
            <th style={{ padding: 10, width: 160, fontWeight: 'bold', color: '#999', textAlign: 'left' }}></th>
            {rolesToDisplay.map(roleDef => (
              <th key={roleDef.id} style={{ padding: 10, fontWeight: 'bold', color: '#ddd', textAlign: 'left' }}>
                {roleDef.role}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {strategy.rowOrder.map(category => {
            const bgColor = strategy.rowOrder.indexOf(category) % 2 === 0 ? '#222' : '#1a1a1a';
            return (
              <tr key={category} style={{ borderBottom: '1px solid #444', backgroundColor: bgColor }}>
                <td style={{ padding: 10, fontWeight: '600', verticalAlign: 'top', color: '#ddd' }}>{category}</td>
                {rolesToDisplay.map(roleDef => {
                  const task = strategy.data[category]?.[roleDef.role] || '-';
                  if (category === 'Buy Kit') {
                    return (
                      <td key={roleDef.id} style={{ padding: 10, verticalAlign: 'top' }}>
                        {task === '✅' ? (
                          <span style={{ color: '#4ade80', fontSize: 18 }}>✅</span>
                        ) : task === '❌' ? (
                          <span style={{ color: '#f87171', fontSize: 18 }}>❌</span>
                        ) : (
                          <span style={{ color: '#ddd' }}>{task}</span>
                        )}
                      </td>
                    );
                  }
                  return (
                    <td
                      key={roleDef.id}
                      style={{ padding: 10, verticalAlign: 'top', color: '#ddd', whiteSpace: 'pre-line' }}
                    >
                      {task}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Accordion Item
const StrategyAccordionItem = ({ strategy, selectedRoles, isOpen, onToggle }) => {
  return (
    <div
      style={{
        backgroundColor: '#2a2a2a',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.6)',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ddd',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(50,50,50,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>{strategy.name}</h3>
        <ChevronDown
          className={`h-6 w-6`}
          style={{
            color: '#999',
            transition: 'transform 0.3s',
            transform: isOpen ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>
      {isOpen && (
        <div style={{ padding: '0 16px 16px 16px' }}>
          {isTSideStrategy(strategy) ? (
            <TSideStrategyTable strategy={strategy} selectedRoles={selectedRoles} />
          ) : (
            <CTStrategyTable strategy={strategy} selectedRoles={selectedRoles} />
          )}
        </div>
      )}
    </div>
  );
};

// Strategy Display main
const StrategyDisplay = ({ strategies, error, selectedRoles }) => {
  const [openStrategyIndex, setOpenStrategyIndex] = useState(null);

  useEffect(() => {
    setOpenStrategyIndex(null);
  }, [strategies]);

  const handleToggle = index => {
    setOpenStrategyIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 32,
          backgroundColor: 'rgba(139, 0, 0, 0.5)',
          borderRadius: 12,
          color: '#f87171',
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: '600' }}>Không có dữ liệu</h3>
        <p style={{ marginTop: 8, color: '#fbb6b6' }}>{error}</p>
      </div>
    );
  }

  if (strategies.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: 32,
          backgroundColor: '#2a2a2a',
          borderRadius: 12,
          color: '#888',
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: '600' }}>Sẵn sàng nhận lệnh</h3>
        <p style={{ marginTop: 8, color: '#bbb' }}>Chọn map và đội hình để xem chiến thuật có sẵn.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {strategies.map((strategy, index) => (
        <StrategyAccordionItem
          key={strategy.name}
          strategy={strategy}
          selectedRoles={selectedRoles}
          isOpen={openStrategyIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default StrategyDisplay;
