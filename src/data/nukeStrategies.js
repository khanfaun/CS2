

export const nukeStrategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Hut, entry site A, kiểm tra Default/Heaven, gọi hiệu lệnh khi thấy địch." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, clear Mini/Silo, phụ smoke/flash khi Entry vào." },
          { role: "Awper", task: "Squeaky/Door, Khang smoke Heaven hoặc flash Mini/Squeaky cho Entry vào." },
          { role: "Lurker", task: "Outside/Lobby, Thanh smoke Main hoặc flash Silo, giữ Outside, chống flank." },
          { role: "Support", task: "Hut hoặc Squeaky, Hải smoke Mini hoặc flash Hut cho Entry, cover sau Entry." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Main, Hải smoke Mini, Trường flash Hut.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đã vào site, clear Default/Heaven, hỗ trợ plant." },
          { role: "Play Maker", task: "Cover Mini/Silo, smoke/flash khi Entry bị block." },
          { role: "Awper", task: "Cover Heaven/Mini, smoke/flash bổ sung." },
          { role: "Lurker", task: "Bọc Main/Silo, giữ Outside, vào site khi plant." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Hut/Squeaky." },
        ],
        note: "Chia người giữ Hut, Heaven, Mini, Silo.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Ramp, entry xuống B, kiểm tra Decon/Control." },
          { role: "Play Maker", task: "Theo Entry, trade kill, Trường smoke Decon hoặc flash site B." },
          { role: "Awper", task: "Ramp/Secret, Khang smoke Control hoặc flash Ramp." },
          { role: "Lurker", task: "Outside, Thanh smoke Secret hoặc flash Decon, timing xuống B cùng Entry." },
          { role: "Support", task: "Ramp hoặc Lobby, Hải smoke Double Door hoặc flash B site." },
        ],
        note: "Nếu setup, Khang smoke Control, Thanh smoke Decon, Hải smoke Double Door, Trường flash B site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Decon/Control, plant nhanh." },
          { role: "Play Maker", task: "Cover Ramp, smoke/flash khi Entry vào." },
          { role: "Awper", task: "Cover Control/Ramp." },
          { role: "Lurker", task: "Từ Secret/Decon vào site, giữ lưng." },
          { role: "Support", task: "Theo Entry, smoke/flash plant, giữ Decon." },
        ],
        note: "Sau plant chia giữ Decon, Ramp, Control, Double Door.",
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
          { role: "Play Maker", task: "Theo sát, trade kill, Trường smoke Cross hoặc flash Outside." },
          { role: "Awper", task: "Lobby/Outside, Khang smoke Secret hoặc flash Main." },
          { role: "Lurker", task: "Silo/Outside, Thanh flash Outside hoặc smoke Garage." },
          { role: "Support", task: "Lobby hoặc Silo, Hải smoke Garage hoặc flash Outside, cover lưng team." },
        ],
        note: "Sau chiếm Outside, call split Main hoặc Secret.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Di chuyển Main/Secret theo call, giữ chặt Outside." },
          { role: "Play Maker", task: "Trade nếu bị bắn, flash khi cần, hỗ trợ Entry." },
          { role: "Awper", task: "Smoke/flash Outside/Main, cover team." },
          { role: "Lurker", task: "Vòng Hut/Silo, vào site khi Entry." },
          { role: "Support", task: "Theo team, giữ Outside/Garage, smoke/flash nếu còn." },
        ],
        note: "Chia giữ Main, Secret, Silo, Garage.",
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
          { role: "Play Maker", task: "Theo sát, trade kill, Trường flash Hut hoặc smoke Mini." },
          { role: "Awper", task: "Squeaky/Door, Khang smoke Heaven hoặc flash Squeaky." },
          { role: "Lurker", task: "Outside/Main, Thanh smoke Main hoặc flash Silo." },
          { role: "Support", task: "Hut hoặc Squeaky, Hải smoke Mini hoặc flash Hut." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Main, Hải smoke Mini, Trường flash Hut.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Default/Heaven." },
          { role: "Play Maker", task: "Cover Mini, smoke/flash khi Entry bị block." },
          { role: "Awper", task: "Cover Heaven/Mini." },
          { role: "Lurker", task: "Bọc Main/Silo, hỗ trợ Entry." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Hut/Squeaky." },
        ],
        note: "Chia giữ Hut, Heaven, Mini, Silo.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Lobby/Ramp, lấy info, không đẩy sâu." },
          { role: "Play Maker", task: "Outside/Lobby, Trường smoke Main hoặc flash Ramp." },
          { role: "Awper", task: "Outside/Ramp, Khang smoke Control hoặc flash Decon." },
          { role: "Lurker", task: "Silo/Outside, Thanh smoke Secret hoặc flash B site." },
          { role: "Support", task: "Lobby/Ramp, Hải smoke Double Door hoặc flash B site." },
        ],
        note: "Nếu setup, Khang smoke Control, Thanh smoke Secret, Hải smoke Double Door, Trường flash Ramp.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Xuống B khi call, entry site, clear Decon/Control." },
          { role: "Play Maker", task: "Trade kill, smoke/flash hỗ trợ Entry." },
          { role: "Awper", task: "Cover Ramp/Control." },
          { role: "Lurker", task: "Từ Secret/Decon vào site, giữ lưng." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Decon." },
        ],
        note: "Chia giữ Ramp, Decon, Control, Double Door.",
      },
    ],
  },
];