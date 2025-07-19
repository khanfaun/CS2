

export const mirageStrategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Ramp, entry vào site, kiểm tra Default/Tetris, gọi hiệu lệnh nếu gặp địch." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill nếu Entry bị bắn, clear Firebox/Ticket, hỗ trợ Entry Ramp." },
          { role: "Awper", task: "Ở Ramp hoặc Palace. Nếu Ramp, Khang smoke Jungle hoặc flash Ramp ngay khi Entry vào. Nếu Palace, sẵn sàng flash Ramp hoặc Palace." },
          { role: "Lurker", task: "Palace, Thanh flash Palace, timing nhảy xuống với Entry, clear Pit/Under Balcony." },
          { role: "Support", task: "Ở Ramp, Hải smoke Stairs hoặc flash Ramp, bắn phụ Entry, cover khi Entry vào." },
        ],
        note: "Nếu setup, Khang smoke Jungle, Hải smoke Stairs, Thanh smoke CT, Trường smoke Palace. Đủ 4 smoke key, mọi utility còn lại ưu tiên flash/molly Firebox.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đã vào site, clear Default, hỗ trợ plant." },
          { role: "Play Maker", task: "Cover CT/Jungle, flash nếu Entry cần." },
          { role: "Awper", task: "Giữ ngoài site hoặc Palace, cover Jungle/CT, smoke hoặc flash khi cần." },
          { role: "Lurker", task: "Đã vào Pit, giữ lưng hoặc chặn rotate Connector." },
          { role: "Support", task: "Vào site sau Entry, hỗ trợ plant, giữ Ramp hoặc phụ Palace." },
        ],
        note: "Sau plant, chia người giữ Ramp, CT, Jungle, Palace, không đứng tụ.",
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
          { role: "Awper", task: "Apps hoặc Mid, Khang smoke Market hoặc flash apps khi Entry chuẩn bị vào." },
          { role: "Lurker", task: "Apps/Under, Thanh smoke Kitchen hoặc flash Deep site, giữ apps chặn flank, bắn phụ Entry." },
          { role: "Support", task: "Sau lưng Entry, Hải flash apps hoặc smoke Deep Bench hỗ trợ team." },
        ],
        note: "Nếu setup, Khang smoke Market, Thanh smoke Kitchen, Hải smoke Bench, Trường flash apps. Chia đều utility.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đã vào site, clear Bench/Default, plant bom." },
          { role: "Play Maker", task: "Cover Market/Kitchen." },
          { role: "Awper", task: "Giữ ngoài site hoặc apps, smoke/flash thêm khi Entry cần." },
          { role: "Lurker", task: "Giữ apps hoặc vòng vào site, cover lưng." },
          { role: "Support", task: "Vào site sau cùng, smoke bổ sung hoặc giữ lưng, hỗ trợ plant." },
        ],
        note: "Sau plant, chia người giữ Market, Apps, Short, Deep Bench.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast A Split (3 Ramp – 2 Palace)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường, Khang ra Ramp, entry kiểm tra Tetris/Default." },
          { role: "Play Maker", task: "Theo sát Entry, Trường smoke CT hoặc Jungle, bắn phụ Entry." },
          { role: "Awper", task: "Khang smoke Jungle hoặc flash Ramp cho Entry, cover Jungle/Connector." },
          { role: "Lurker", task: "Palace, Thanh flash Palace, timing nhảy xuống clear Pit/Under Balcony." },
          { role: "Support", task: "Palace, Hải flash Palace và xuống cùng Thanh, clear Pit/Default." },
        ],
        note: "Nếu setup, Khang smoke Jungle, Trường smoke CT, Thanh smoke Stairs, Hải flash Palace.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Ramp, clear Default, Tetris, gọi team nhảy Palace vào cùng lúc." },
          { role: "Play Maker", task: "Cover CT/Jungle, smoke nếu thiếu." },
          { role: "Awper", task: "Flash hoặc smoke Ramp, cover Jungle." },
          { role: "Lurker", task: "Nhảy Palace, clear Pit." },
          { role: "Support", task: "Nhảy Palace với Thanh, clear Under Balcony/Pit." },
        ],
        note: "Timing đồng loạt, chia người giữ Ramp, Jungle, Palace.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Mid Control rồi Split B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, kiểm soát Top Mid, check Window." },
          { role: "Play Maker", task: "Trường smoke Window hoặc flash Top Mid, cover Entry." },
          { role: "Awper", task: "Khang smoke Top Mid hoặc Connector khi Entry chuẩn bị split, cover Cat/Short." },
          { role: "Lurker", task: "Ở B apps, Thanh smoke Market hoặc flash apps chuẩn bị Entry, timing với team." },
          { role: "Support", task: "Ở Mid hoặc B apps, Hải smoke Cat hoặc flash Market, ready bọc vào site cùng team." },
        ],
        note: "Nếu setup, Khang smoke Window, Trường smoke Top Mid, Thanh smoke Market, Hải flash Cat.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Đẩy Cat vào site B, clear Short/Bench." },
          { role: "Play Maker", task: "Theo sau, trade kill, cover Market, flash Bench." },
          { role: "Awper", task: "Giữ Mid hoặc vào site trễ, cover Short/Mid, smoke/flash nếu Entry bị block." },
          { role: "Lurker", task: "Entry B apps, flash hoặc smoke Market nếu cần." },
          { role: "Support", task: "Theo apps, cover Market hoặc Bench, flash thêm cho Entry." },
        ],
        note: "Entry đồng loạt từ Cat/B apps, chia giữ Market, Apps, Short, Bench.",
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
          { role: "Lurker", task: "Palace, Thanh flash Palace tạo tiếng, chuẩn bị rút về apps." },
          { role: "Support", task: "Ramp hoặc Mid, Hải smoke Stairs hoặc flash Mid để hỗ trợ fake." },
        ],
        note: "Khi chuyển B, Khang smoke Market, Thanh smoke Kitchen, Hải flash apps, Trường flash Deep site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Rút về apps, Entry vào B." },
          { role: "Play Maker", task: "Theo Entry, smoke/flash hỗ trợ Entry." },
          { role: "Awper", task: "Smoke/flash Market khi Entry vào." },
          { role: "Lurker", task: "Entry apps, smoke Kitchen hoặc flash Deep site." },
          { role: "Support", task: "Theo sau apps, flash bổ sung, giữ lưng team." },
        ],
        note: "Setup chuyển hướng phải nhanh, chia smoke chính cho 4 người.",
      },
    ],
  },
];