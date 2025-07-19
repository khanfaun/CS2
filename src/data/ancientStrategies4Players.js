

export const ancientStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu A Main, entry site, check Close/Default/Donut." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Temple hoặc flash Donut." },
          { role: "Awper", task: "Main hoặc Mid, Khang smoke Donut hoặc flash Main." },
          { role: "Lurker", task: "Mid, Thanh smoke Main hoặc flash Temple." },
        ],
        note: "Nếu setup, Khang smoke Donut, Thanh smoke Temple, Trường smoke Main.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry site, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Temple, smoke/flash nếu Entry bị block." },
          { role: "Awper", task: "Cover Donut/Temple." },
          { role: "Lurker", task: "Bọc Donut hoặc giữ Mid." },
        ],
        note: "Chia giữ Temple, Donut, Main.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu B Ramp, entry site, check Close/Pillar/Default." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Cave hoặc flash site." },
          { role: "Awper", task: "Ramp/Mid, Khang smoke CT hoặc flash Ramp." },
          { role: "Lurker", task: "Cave/Mid, Thanh smoke Cave hoặc flash Ramp." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Cave, Trường flash Deep site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Pillar/Default, plant bom." },
          { role: "Play Maker", task: "Cover Cave, hỗ trợ Entry." },
          { role: "Awper", task: "Cover CT/Cave." },
          { role: "Lurker", task: "Vào sau, giữ Cave hoặc Mid." },
        ],
        note: "Sau plant chia giữ Cave, CT, Ramp.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Mid Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Mid, kiểm tra Deep Mid/Close Left." },
          { role: "Play Maker", task: "Trade kill, Trường flash Mid hoặc smoke Doors." },
          { role: "Awper", task: "Deep Mid/Donut, Khang smoke Donut hoặc flash Mid." },
          { role: "Lurker", task: "A/B Main, Thanh flash Main hoặc smoke Donut." },
        ],
        note: "Sau kiểm soát Mid, chuyển hướng theo call.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Mid sâu, call chuyển hướng." },
          { role: "Play Maker", task: "Hỗ trợ Entry, flash khi cần." },
          { role: "Awper", task: "Smoke/flash hỗ trợ chuyển hướng." },
          { role: "Lurker", task: "Di chuyển Main gây áp lực hoặc bọc Mid." },
        ],
        note: "Smoke/flash chia đều khi chuyển hướng.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (Mid + A Main)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, chuẩn bị split A qua Donut." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Donut hoặc flash Mid." },
          { role: "Awper", task: "Mid/A Main, Khang smoke Temple hoặc flash Main." },
          { role: "Lurker", task: "A Main, Thanh flash Main hoặc smoke CT." },
        ],
        note: "Nếu setup, Khang smoke Temple, Thanh smoke CT, Trường smoke Donut.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Donut vào A, clear Default." },
          { role: "Play Maker", task: "Theo sau, kiểm soát Temple." },
          { role: "Awper", task: "Cover Donut/Temple." },
          { role: "Lurker", task: "Vào Main timing đúng, clear Close/Default." },
        ],
        note: "Chia giữ Temple, Donut, Main.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ B Ramp, lấy info." },
          { role: "Play Maker", task: "Mid, Trường smoke Mid hoặc flash B Ramp." },
          { role: "Awper", task: "Deep Mid hoặc Ramp, Khang smoke Cave hoặc flash Ramp." },
          { role: "Lurker", task: "Cave/B Main, Thanh smoke Cave hoặc flash B Main." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Cave, Trường flash Deep site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear site." },
          { role: "Play Maker", task: "Trade kill, hỗ trợ smoke/flash." },
          { role: "Awper", task: "Cover CT/Cave." },
          { role: "Lurker", task: "Vào site, smoke/flash nếu còn." },
        ],
        note: "Entry đồng loạt, chia giữ Cave, CT, Ramp.",
      },
    ],
  },
];