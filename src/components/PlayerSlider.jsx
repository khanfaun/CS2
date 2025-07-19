import React from 'react';

const RoleTooltip = ({ role }) => (
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-black/70 backdrop-blur-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
    <h4 className="font-bold text-[var(--accent-color)] mb-2">{role.role}</h4>
    <p className="text-xs text-text-primary whitespace-pre-line">
      {role.description}
    </p>
  </div>
);

const PlayerSlider = ({ 
  selectedRoles, 
  onSelectedRolesChange,
  roleDefinitions,
  selectedSide
}) => {

  const playerCount = selectedRoles.length;

  const handleRoleClick = (role) => {
    // Không cho chọn role bên CT
    if (selectedSide === 'CT') {
      return;
    }
    // Phe T chỉ cho phép bật/tắt support
    if (role.id !== 'support') {
      return;
    }
    
    const isSelected = selectedRoles.some(r => r.id === role.id);
    if (isSelected) {
      onSelectedRolesChange(selectedRoles.filter(r => r.id !== role.id));
    } else {
      // Add support role và re-sort lại đúng thứ tự gốc
      const newSelectedRoles = [...selectedRoles, role].sort((a, b) => 
          roleDefinitions.findIndex(def => def.id === a.id) - 
          roleDefinitions.findIndex(def => def.id === b.id)
      );
      onSelectedRolesChange(newSelectedRoles);
    }
  };

 return (
  <div className="space-y-4">
    <div>
      <div className="flex items-center w-full" style={{ minHeight: "48px" }}>
        <div className="flex flex-wrap gap-3" style={{ flex: 1 }}>
          {roleDefinitions.map(roleDef => {
            const isSelected = selectedRoles.some(r => r.id === roleDef.id);
            const isTSupport = roleDef.id === 'support' && selectedSide === 'T';
            const isCTSide = selectedSide === 'CT';

            let buttonClass = 'px-3 py-2 text-sm font-semibold rounded-md border role-button ';

            if (isCTSide) {
              buttonClass += ' role-button-ct';
              if (isSelected) buttonClass += ' selected';
            }
            else if (isTSupport) {
              if (isSelected) {
                buttonClass += ' role-button-support-t selected';
              } else {
                buttonClass += ' role-button-support-t';
              }
            }
            else {
              if (isSelected) {
                buttonClass += ' bg-[var(--accent-color)] border-[var(--accent-color)] text-[var(--accent-color-text)] shadow-md shadow-[var(--accent-shadow)] selected';
              } else {
                buttonClass += ' bg-bg-secondary border-transparent text-text-primary hover:border-[var(--accent-color)] hover:text-white';
              }
            }

            let textClass = 'font-normal ';
            if (isCTSide) {
              textClass += 'text-black';
            } else if (isSelected) {
              textClass += 'text-black';
            } else {
              textClass += 'text-text-muted';
            }

            return (
              <div key={roleDef.id} className="relative group">
                <button
                  onClick={() => handleRoleClick(roleDef)}
                  className={buttonClass}
                  style={{ minWidth: 0, margin: "0 8px" }} // không để flex: 1 để tránh kéo dãn đều các nút
                  aria-pressed={isSelected}
                  disabled={
                    isCTSide || (selectedSide === 'T' && roleDef.id !== 'support')
                  }
                >
                  {roleDef.role} {roleDef.name && <span className={textClass}>({roleDef.name})</span>}
                </button>
                <RoleTooltip role={roleDef} />
              </div>
            );
          })}
        </div>
        {/* Số người chơi nằm SÁT PHẢI, cùng hàng với role */}
        <span
          className="text-sm font-medium text-[var(--accent-color)]"
          style={{
            marginLeft: "auto",
            fontSize: "16px",
            fontWeight: "bold",
            whiteSpace: "nowrap"
          }}
        >
          {playerCount} người chơi
        </span>
      </div>
    </div>
  </div>
);
};
export default PlayerSlider;
