

export const nukeStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Hut, entry A, check Default/Heaven." },
          { role: "Play Maker", task: "Theo Entry, trade kill, Trường smoke Mini hoặc flash Hut." },
          { role: "Awper", task: "Squeaky/Door, Khang smoke Heaven hoặc flash Squeaky." },
          { role: "Lurker", task: "Outside/Lobby, Thanh smoke Main hoặc flash Silo." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Main, Trường flash Hut.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry site, clear Default/Heaven." },
          { role: "Play Maker", task: "Cover Mini/Silo." },
          { role: "Awper", task: "Cover Heaven/Mini, smoke/flash khi cần." },
          { role: "Lurker", task: "Vòng Main/Silo, hỗ trợ Entry." },
        ],
        note: "Chia giữ Hut, Heaven, Silo.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Ramp, entry B, check Decon/Control." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Decon hoặc flash site." },
          { role: "Awper", task: "Ramp/Secret, Khang smoke Control hoặc flash Ramp." },
          { role: "Lurker", task: "Outside, Thanh smoke Secret hoặc flash Decon, timing xuống B đúng với Entry." },
        ],
        note: "Nếu setup, Khang smoke Control, Thanh smoke Decon, Trường flash Deep B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Decon, plant bom." },
          { role: "Play Maker", task: "Cover Ramp, smoke/flash khi Entry vào." },
          { role: "Awper", task: "Cover Control/Ramp." },
          { role: "Lurker", task: "Từ Secret/Decon vào site, giữ lưng." },
        ],
        note: "Sau plant, chia giữ Decon, Ramp, Control.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Outside Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Đi đầu Outside, kiểm soát Red Box/Main." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Cross hoặc flash Outside." },
          { role: "Awper", task: "Lobby/Outside, Khang smoke Secret hoặc flash Main." },
          { role: "Lurker", task: "Silo/Outside, Thanh flash Outside hoặc smoke Garage." },
        ],
        note: "Sau chiếm Outside, split Main/Secret.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Di chuyển Main/Secret theo call." },
          { role: "Play Maker", task: "Trade nếu bị bắn, flash khi cần." },
          { role: "Awper", task: "Smoke/flash Outside/Main." },
          { role: "Lurker", task: "Vòng Hut/Silo, hỗ trợ Entry." },
        ],
        note: "Chia giữ Main, Secret, Silo.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (Hut + Squeaky)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Hut, entry A, clear Default/Heaven." },
          { role: "Play Maker", task: "Trade kill, Trường flash Hut hoặc smoke Mini." },
          { role: "Awper", task: "Squeaky/Door, Khang smoke Heaven hoặc flash Squeaky." },
          { role: "Lurker", task: "Outside/Main, Thanh smoke Main hoặc flash Silo." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Main, Trường flash Hut.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Default, hỗ trợ plant." },
          { role: "Play Maker", task: "Cover Mini, smoke/flash khi cần." },
          { role: "Awper", task: "Cover Heaven/Mini." },
          { role: "Lurker", task: "Bọc Main/Silo, hỗ trợ Entry." },
        ],
        note: "Chia giữ Hut, Heaven, Mini.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Lobby/Ramp, lấy info." },
          { role: "Play Maker", task: "Outside/Lobby, Trường smoke Main hoặc flash Ramp." },
          { role: "Awper", task: "Outside/Ramp, Khang smoke Control hoặc flash Decon." },
          { role: "Lurker", task: "Silo/Outside, Thanh smoke Secret hoặc flash B site." },
        ],
        note: "Nếu setup, Khang smoke Control, Thanh smoke Secret, Trường flash Deep B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Xuống B khi call, entry site." },
          { role: "Play Maker", task: "Trade kill, hỗ trợ smoke/flash." },
          { role: "Awper", task: "Cover Ramp/Control." },
          { role: "Lurker", task: "Từ Secret/Decon vào site, giữ lưng." },
        ],
        note: "Chia giữ Ramp, Decon, Control.",
      },
    ],
  },
];