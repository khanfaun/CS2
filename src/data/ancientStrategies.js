

export const ancientStrategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu A Main, entry site, check Close/Default/Donut." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Temple hoặc flash Donut." },
          { role: "Awper", task: "Main/Mid, Khang smoke Donut hoặc flash Main." },
          { role: "Lurker", task: "Mid, Thanh smoke Main hoặc flash Temple." },
          { role: "Support", task: "A Main hoặc Mid, Hải smoke CT hoặc flash Donut." },
        ],
        note: "Nếu setup, Khang smoke Donut, Thanh smoke Temple, Hải smoke CT, Trường smoke Main.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry site, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Temple, smoke/flash khi Entry bị block." },
          { role: "Awper", task: "Cover Donut/Temple, smoke/flash khi Entry vào." },
          { role: "Lurker", task: "Bọc Donut hoặc giữ Mid." },
          { role: "Support", task: "Theo Entry, smoke/flash phụ Entry, giữ Temple hoặc Main." },
        ],
        note: "Chia giữ Temple, Donut, Main, CT.",
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
          { role: "Support", task: "B Main hoặc Cave, Hải smoke Deep site hoặc flash Cave." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Cave, Hải smoke Deep site, Trường flash Cave.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Pillar/Default, plant bom." },
          { role: "Play Maker", task: "Cover Cave, smoke/flash khi Entry vào." },
          { role: "Awper", task: "Cover CT/Cave." },
          { role: "Lurker", task: "Vào sau, giữ Cave hoặc Mid." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant, giữ Deep site." },
        ],
        note: "Chia giữ Cave, CT, Ramp, Deep site.",
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
          { role: "Support", task: "Mid hoặc Main, Hải smoke Deep Mid hoặc flash Donut." },
        ],
        note: "Sau kiểm soát Mid, chuyển hướng theo call, utility chia đều.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Mid sâu, call chuyển hướng." },
          { role: "Play Maker", task: "Hỗ trợ Entry, flash khi cần." },
          { role: "Awper", task: "Smoke/flash khi chuyển hướng." },
          { role: "Lurker", task: "Di chuyển Main, gây áp lực hoặc bọc Mid." },
          { role: "Support", task: "Theo team, smoke/flash khi cần, giữ lưng." },
        ],
        note: "Chia giữ Main, Donut, Mid, Deep Mid.",
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
          { role: "Support", task: "Mid/A Main, Hải smoke Donut hoặc flash Deep Main." },
        ],
        note: "Nếu setup, Khang smoke Temple, Thanh smoke CT, Hải smoke Donut, Trường smoke Mid.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Donut vào A, clear Default." },
          { role: "Play Maker", task: "Theo sau, kiểm soát Temple." },
          { role: "Awper", task: "Cover Donut/Temple." },
          { role: "Lurker", task: "Vào Main timing đúng, clear Close/Default." },
          { role: "Support", task: "Theo Entry, smoke/flash phụ Entry, giữ Donut." },
        ],
        note: "Chia giữ Temple, Donut, Main, CT.",
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
          { role: "Support", task: "Ramp/Main, Hải smoke Deep site hoặc flash Cave." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Cave, Hải smoke Deep site, Trường flash B Ramp.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear site." },
          { role: "Play Maker", task: "Trade kill, smoke/flash hỗ trợ Entry." },
          { role: "Awper", task: "Cover CT/Cave." },
          { role: "Lurker", task: "Vào site, smoke/flash nếu còn." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant, giữ Deep site." },
        ],
        note: "Entry đồng loạt, chia giữ Cave, CT, Ramp, Deep site.",
      },
    ],
  },
];