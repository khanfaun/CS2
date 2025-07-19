// trainStrategies4Players.js

export const trainStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Popdog hoặc Main, entry site A, check E-box, Default." },
          { role: "Play Maker", task: "Theo sát, trade kill, Trường smoke Sandwich hoặc flash Popdog." },
          { role: "Awper", task: "Main hoặc Ivy, Khang smoke Connector hoặc flash Main." },
          { role: "Lurker", task: "Ivy hoặc Popdog, Thanh flash Ivy hoặc smoke Back site." },
        ],
        note: "Nếu setup, Khang smoke Connector, Thanh smoke Back site, Trường smoke Sandwich.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry site, clear E-box/Default, plant bom." },
          { role: "Play Maker", task: "Cover Sandwich/Popdog." },
          { role: "Awper", task: "Cover Connector, smoke/flash nếu cần." },
          { role: "Lurker", task: "Ivy/Popdog, cover lưng, hỗ trợ Entry." },
        ],
        note: "Sau plant chia giữ Connector, Ivy, Popdog, Main.",
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
          { role: "Lurker", task: "Upper hoặc Back lanes, Thanh smoke Back site hoặc flash Upper." },
        ],
        note: "Nếu setup, Khang smoke Z, Thanh smoke Back site, Trường smoke Oil.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Oil/Lower." },
          { role: "Awper", task: "Cover Z/B site." },
          { role: "Lurker", task: "Upper/Back lanes, giữ lưng." },
        ],
        note: "Sau plant chia giữ Oil, Z, Upper, Back lanes.",
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
        ],
        note: "Sau kiểm soát Ivy, chuyển hướng theo call.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Default." },
          { role: "Play Maker", task: "Cover Connector/Ivy." },
          { role: "Awper", task: "Ivy/Main, smoke/flash bổ sung." },
          { role: "Lurker", task: "Popdog hoặc Ivy, giữ lưng." },
        ],
        note: "Entry Ivy cùng timing Main/Popdog.",
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
        ],
        note: "Nếu setup, Khang smoke E-box, Thanh smoke Sandwich, Trường smoke Connector.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Main, clear Default." },
          { role: "Play Maker", task: "Ivy, cover Connector/Ivy." },
          { role: "Awper", task: "Popdog/Main, smoke/flash hỗ trợ Entry." },
          { role: "Lurker", task: "Popdog, cover lưng hoặc Back lanes." },
        ],
        note: "Chia giữ Connector, Ivy, Main, Popdog.",
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
        ],
        note: "Nếu setup, Khang smoke B site, Thanh smoke Back site, Trường smoke Z.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear Default." },
          { role: "Play Maker", task: "Di chuyển từ Main/Ivy hỗ trợ Entry." },
          { role: "Awper", task: "Smoke/flash khi Entry vào B site." },
          { role: "Lurker", task: "Vào site từ Upper, giữ lưng, smoke/flash nếu còn." },
        ],
        note: "Sau plant chia giữ Z, Back lanes, Upper, Oil.",
      },
    ],
  },
];
