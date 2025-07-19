

export const dust2Strategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu ra Long, entry kiểm tra Car/Blue/Pit." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, clear Car/Pit, bắn phụ Entry." },
          { role: "Awper", task: "Long hoặc T spawn, Khang smoke Cross hoặc flash Long khi Entry vào site." },
          { role: "Lurker", task: "Mid, Thanh smoke Long Corner hoặc flash Deep Long, kiểm tra Short, giữ flank." },
          { role: "Support", task: "Long, Hải flash Long hoặc smoke Ramp hỗ trợ Entry." },
        ],
        note: "Nếu setup, Khang smoke Cross, Thanh smoke Long Corner, Hải smoke Ramp, Trường flash Long.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Ramp, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Ramp, bắn phụ Entry, smoke/flash nếu cần." },
          { role: "Awper", task: "Giữ Cross/Long, smoke/flash khi Entry bị block." },
          { role: "Lurker", task: "Có thể vòng lên Short hoặc giữ Mid." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Long hoặc Ramp." },
        ],
        note: "Chia giữ Long, Ramp, Cross, Short.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu vào Tunnel, entry site B, check Close/Plat/Back site." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, clear Back site/Window." },
          { role: "Awper", task: "Tunnel hoặc Mid, Khang smoke Window hoặc flash Tunnel." },
          { role: "Lurker", task: "Lower hoặc Mid, Thanh smoke Door hoặc flash Deep B, giữ flank." },
          { role: "Support", task: "Tunnel, Hải flash Tunnel hoặc smoke Back site phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke Window, Thanh smoke Door, Hải smoke Back site, Trường flash Tunnel.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry vào B, clear Plat/Default, plant nhanh." },
          { role: "Play Maker", task: "Cover Window/Doors, smoke/flash nếu Entry bị block." },
          { role: "Awper", task: "Giữ ngoài site, smoke/flash bổ sung." },
          { role: "Lurker", task: "Cắt vòng hoặc giữ Tunnel." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Window/Back site." },
        ],
        note: "Chia giữ Window, Doors, Tunnel, Platform.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Short to A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Catwalk, entry Short vào site, clear Ramp/Default." },
          { role: "Play Maker", task: "Theo Entry, trade kill, clear Goose." },
          { role: "Awper", task: "Mid, Khang smoke CT hoặc flash Cat." },
          { role: "Lurker", task: "Long, Thanh flash Ramp hoặc smoke Long Corner." },
          { role: "Support", task: "Cat/Short, Hải flash Short hoặc smoke Ramp cho Entry." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Long Corner, Hải smoke Ramp, Trường flash Cat.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Short, clear Ramp/Default, plant." },
          { role: "Play Maker", task: "Cover plant, kiểm soát Goose/Elevator." },
          { role: "Awper", task: "Cat/Mid, smoke/flash khi Entry cần." },
          { role: "Lurker", task: "Ramp hỗ trợ Entry hoặc giữ Long." },
          { role: "Support", task: "Theo Entry Short, flash/cover plant, giữ Short." },
        ],
        note: "Chia giữ Short, Long, Ramp, Goose, Elevator.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Mid to B Split",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, chuẩn bị vào B qua cửa Mid." },
          { role: "Play Maker", task: "Trade kill, Trường smoke CT hoặc flash Mid." },
          { role: "Awper", task: "T spawn/Mid, Khang smoke CT hoặc flash B Door." },
          { role: "Lurker", task: "Upper Tunnel, Thanh flash Tunnel hoặc smoke Window." },
          { role: "Support", task: "Mid/Tunnel, Hải flash Mid hoặc smoke Deep B." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Window, Hải smoke Deep B, Trường flash Mid.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry qua cửa Mid vào B, clear Close/Window." },
          { role: "Play Maker", task: "Trade kill, kiểm soát cửa lớn, hỗ trợ plant." },
          { role: "Awper", task: "Cover Doors/Window, smoke/flash nếu cần." },
          { role: "Lurker", task: "Entry Tunnel, clear Back site/Platform." },
          { role: "Support", task: "Theo sau Entry, flash/cover plant, giữ Tunnel/Window." },
        ],
        note: "Chia giữ Window, Doors, Tunnel, Platform.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Fake A về B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Ở Long, gây tiếng giả push A." },
          { role: "Play Maker", task: "Cat/Mid, Trường flash Short hoặc smoke Cat tạo áp lực." },
          { role: "Awper", task: "Mid/Long, Khang smoke Cross hoặc flash Long." },
          { role: "Lurker", task: "Tunnel, Thanh flash Tunnel hoặc smoke Window." },
          { role: "Support", task: "Mid/Long, Hải smoke Door hoặc flash Deep B." },
        ],
        note: "Khi chuyển về B, Khang smoke Window, Thanh smoke Door, Hải flash Deep B, Trường flash Tunnel.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Rút về Tunnel, Entry B." },
          { role: "Play Maker", task: "Theo Entry, smoke/flash hỗ trợ." },
          { role: "Awper", task: "Smoke/flash Window/Door." },
          { role: "Lurker", task: "Entry Tunnel, clear site." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ lưng." },
        ],
        note: "Entry đồng loạt, chia giữ Window, Doors, Tunnel, Platform.",
      },
    ],
  },
];