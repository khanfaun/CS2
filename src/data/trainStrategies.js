// trainStrategies.js

export const trainStrategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Popdog hoặc Main, entry site A, check E-box, Default." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, Trường smoke Sandwich hoặc flash Popdog." },
          { role: "Awper", task: "Main hoặc Ivy, Khang smoke Connector hoặc flash Main." },
          { role: "Lurker", task: "Ivy hoặc Popdog, Thanh flash Ivy hoặc smoke Back site." },
          { role: "Support", task: "Ivy/Main, Hải smoke Z hoặc flash E-box phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke Connector, Thanh smoke Back site, Hải smoke Z, Trường smoke Sandwich.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry site, clear E-box/Default, plant bom." },
          { role: "Play Maker", task: "Cover Sandwich/Popdog, flash khi Entry bị block." },
          { role: "Awper", task: "Cover Connector, smoke/flash khi cần." },
          { role: "Lurker", task: "Ivy/Popdog, giữ lưng, hỗ trợ Entry." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant, giữ Z/Ivy." },
        ],
        note: "Sau plant chia giữ Connector, Ivy, Popdog, Main, Z.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Hầm (Lower), entry site B, check Default/Upper." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Oil hoặc flash Lower." },
          { role: "Awper", task: "Hầm hoặc Upper, Khang smoke Z hoặc flash B site." },
          { role: "Lurker", task: "Upper/Back lanes, Thanh smoke Back site hoặc flash Upper." },
          { role: "Support", task: "Hầm/Upper, Hải smoke Connector hoặc flash Deep B." },
        ],
        note: "Nếu setup, Khang smoke Z, Thanh smoke Back site, Hải smoke Connector, Trường smoke Oil.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Oil/Lower." },
          { role: "Awper", task: "Cover Z/B site, smoke/flash nếu cần." },
          { role: "Lurker", task: "Upper/Back lanes, giữ lưng." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant, giữ Connector." },
        ],
        note: "Sau plant chia giữ Z, Back lanes, Upper, Oil, Connector.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Ivy Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Main, di chuyển gần Ivy, chờ timing Entry." },
          { role: "Play Maker", task: "Ivy, Trường flash Ivy hoặc smoke Connector." },
          { role: "Awper", task: "Ivy/Main, Khang smoke Ivy cross hoặc flash Main." },
          { role: "Lurker", task: "Ivy/Popdog, Thanh smoke Back site hoặc flash E-box." },
          { role: "Support", task: "Ivy/Main, Hải smoke Connector hoặc flash Deep Ivy." },
        ],
        note: "Sau kiểm soát Ivy, chuyển hướng theo call.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Default." },
          { role: "Play Maker", task: "Cover Connector/Ivy." },
          { role: "Awper", task: "Ivy/Main, smoke/flash bổ sung." },
          { role: "Lurker", task: "Popdog/Ivy, giữ lưng, cover Entry." },
          { role: "Support", task: "Ivy/Main, smoke/flash khi plant." },
        ],
        note: "Entry Ivy đồng bộ với Main/Popdog.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (Main + Ivy + Popdog)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Main, chuẩn bị Entry A." },
          { role: "Play Maker", task: "Ivy, Trường smoke Connector hoặc flash Ivy." },
          { role: "Awper", task: "Main hoặc Popdog, Khang smoke E-box hoặc flash Main." },
          { role: "Lurker", task: "Popdog, Thanh smoke Sandwich hoặc flash Popdog." },
          { role: "Support", task: "Main/Ivy, Hải smoke Z hoặc flash Ivy." },
        ],
        note: "Nếu setup, Khang smoke E-box, Thanh smoke Sandwich, Hải smoke Z, Trường smoke Connector.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Main, clear Default." },
          { role: "Play Maker", task: "Ivy, cover Connector/Ivy." },
          { role: "Awper", task: "Popdog/Main, smoke/flash hỗ trợ Entry." },
          { role: "Lurker", task: "Popdog, giữ lưng/Back lanes." },
          { role: "Support", task: "Ivy/Main, smoke/flash khi plant, giữ Z/Popdog." },
        ],
        note: "Chia giữ Connector, Ivy, Main, Popdog, Z.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Hầm hoặc Upper, lấy info B site." },
          { role: "Play Maker", task: "Main/Ivy, Trường smoke Z hoặc flash Upper." },
          { role: "Awper", task: "Upper hoặc Hầm, Khang smoke B site hoặc flash Oil." },
          { role: "Lurker", task: "Back lanes hoặc Upper, Thanh smoke Back site hoặc flash B site." },
          { role: "Support", task: "Upper/Hầm, Hải smoke Connector hoặc flash B site." },
        ],
        note: "Nếu setup, Khang smoke B site, Thanh smoke Back site, Hải smoke Connector, Trường smoke Z.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear Default." },
          { role: "Play Maker", task: "Di chuyển từ Main/Ivy hỗ trợ Entry." },
          { role: "Awper", task: "Smoke/flash khi Entry vào B site." },
          { role: "Lurker", task: "Vào site từ Upper, giữ lưng, smoke/flash nếu còn." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant, giữ Connector." },
        ],
        note: "Sau plant chia giữ Z, Back lanes, Upper, Oil, Connector.",
      },
    ],
  },
];
