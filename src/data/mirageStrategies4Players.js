

export const mirageStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Ramp, entry vào site, kiểm tra Default/Tetris, gọi hiệu lệnh khi thấy địch." },
          { role: "Play Maker", task: "Theo sát, trade kill nếu Entry bị bắn, clear Firebox/Ticket." },
          { role: "Awper", task: "Ở Ramp hoặc Palace. Nếu Ramp, Khang smoke Jungle hoặc flash Ramp ngay khi Entry vào site." },
          { role: "Lurker", task: "Palace, Thanh flash Palace rồi nhảy xuống timing với Entry, clear Pit/Under Balcony." },
        ],
        note: "Nếu setup, Khang smoke Jungle, Thanh smoke Stairs, Trường smoke CT. Đủ smoke cho 3 góc quan trọng.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đã vào site, clear Default, hỗ trợ plant." },
          { role: "Play Maker", task: "Cover CT/Jungle, hỗ trợ Entry, cover plant bom." },
          { role: "Awper", task: "Giữ ngoài site hoặc Palace, flash hoặc smoke nếu Entry bị block." },
          { role: "Lurker", task: "Đã Palace vào, cover lưng hoặc chặn rotate Connector." },
        ],
        note: "Sau plant, chia giữ Ramp, CT, Jungle, Palace.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu B apps, entry site, check Close/Bench/Default." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, clear Back site." },
          { role: "Awper", task: "Ở apps hoặc Mid, Khang smoke Market hoặc flash apps khi Entry chuẩn bị vào." },
          { role: "Lurker", task: "Ở apps hoặc Under, Thanh smoke Kitchen hoặc flash Deep site, giữ apps ngăn flank." },
        ],
        note: "Nếu setup, Khang smoke Market, Thanh smoke Kitchen, Trường flash Deep site. Entry đồng loạt.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đã vào site, clear Bench/Default, plant nhanh." },
          { role: "Play Maker", task: "Cover Market/Kitchen." },
          { role: "Awper", task: "Giữ ngoài site, smoke/flash bổ sung khi Entry vào site." },
          { role: "Lurker", task: "Giữ apps, vòng vào site hoặc cover lưng." },
        ],
        note: "Sau plant, chia giữ Market, Apps, Short.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast A Split (3 Ramp – 1 Palace)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Đi cùng Trường, Khang ra Ramp, entry kiểm tra Tetris/Default." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, cầm Trường smoke CT hoặc Jungle." },
          { role: "Awper", task: "Cầm Khang smoke Jungle hoặc flash Ramp, kiểm tra Jungle/Connector." },
          { role: "Lurker", task: "Palace, Thanh flash Palace, chuẩn bị nhảy xuống khi Ramp entry, clear Pit." },
        ],
        note: "Nếu setup, Khang smoke Jungle, Thanh smoke Stairs, Trường smoke CT.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Ramp, clear Default, Tetris." },
          { role: "Play Maker", task: "Cover Entry, smoke CT nếu thiếu." },
          { role: "Awper", task: "Flash hoặc smoke thêm nếu cần, cover Entry." },
          { role: "Lurker", task: "Nhảy Palace khi Ramp entry, clear Pit." },
        ],
        note: "Timing đồng loạt. Không để Palace vào trước Ramp.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Mid Control rồi Split B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, kiểm soát Top Mid." },
          { role: "Play Maker", task: "Theo Entry, Trường smoke Window hoặc flash Cat." },
          { role: "Awper", task: "Ở Mid/Top Mid, Khang smoke Top Mid/Connector hoặc flash Mid, cover Cat." },
          { role: "Lurker", task: "Ở B apps, Thanh smoke Market hoặc flash apps đúng timing Entry." },
        ],
        note: "Nếu setup, Khang smoke Window, Trường smoke Top Mid/Connector, Thanh smoke Market.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đẩy Cat vào B, clear Bench/Short." },
          { role: "Play Maker", task: "Theo sau, trade kill, flash Market hoặc Bench." },
          { role: "Awper", task: "Giữ Mid hoặc vào site trễ, cover Short/Mid." },
          { role: "Lurker", task: "Entry apps cùng timing, flash Market nếu còn." },
        ],
        note: "Split B phải đồng loạt từ Cat/Mid và Apps.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Fake A về B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Gây tiếng Ramp, làm giả push A." },
          { role: "Play Maker", task: "Giữ Mid, Trường smoke Connector hoặc flash Ramp." },
          { role: "Awper", task: "Giữ Top Mid, Khang smoke Jungle hoặc flash Palace." },
          { role: "Lurker", task: "Palace, Thanh flash Palace tạo tiếng, rút về Apps khi call chuyển hướng." },
        ],
        note: "Khi chuyển về B, Khang smoke Market, Thanh smoke Kitchen, Trường flash Deep site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Rút về Apps, entry vào B." },
          { role: "Play Maker", task: "Theo Entry, smoke/flash hỗ trợ." },
          { role: "Awper", task: "Smoke/flash Market khi Entry vào." },
          { role: "Lurker", task: "Entry Apps, smoke Kitchen hoặc flash Deep site." },
        ],
        note: "Setup chuyển hướng phải nhanh, smoke/flash phối hợp.",
      },
    ],
  },
];