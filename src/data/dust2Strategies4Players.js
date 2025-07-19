

export const dust2Strategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu ra Long, entry kiểm tra Car/Blue/Pit." },
          { role: "Play Maker", task: "Theo sát, trade kill, clear Car/Pit." },
          { role: "Awper", task: "Ở Long hoặc T spawn, smoke Cross, flash Long khi Entry chuẩn bị vào site." },
          { role: "Lurker", task: "Giữ Mid, smoke Long Corner hoặc flash Deep Long, nghe tiếng, kiểm tra Short nếu cần." },
        ],
        note: "Nếu setup, Khang smoke Cross, Thanh smoke Long Corner, Trường flash Ramp/Long.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry lên Ramp, clear Default, plant bom." },
          { role: "Play Maker", task: "Cover Ramp, hỗ trợ Entry." },
          { role: "Awper", task: "Giữ Cross/Long, flash hoặc smoke thêm nếu cần." },
          { role: "Lurker", task: "Có thể vòng lên Short hoặc giữ Mid ngăn flank." },
        ],
        note: "Sau plant chia nhau giữ Long, Ramp, Cross.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu vào Tunnel, entry site B, check Close/Platform." },
          { role: "Play Maker", task: "Theo sát, trade kill, clear Back site/Window." },
          { role: "Awper", task: "Ở Tunnel hoặc Mid, smoke Window hoặc flash Tunnel cho Entry vào." },
          { role: "Lurker", task: "Ở Lower hoặc Mid, smoke Door hoặc flash Deep B, chặn CT rotate." },
        ],
        note: "Nếu setup, Khang smoke Window, Thanh smoke Door, Trường flash Deep Site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry vào B, clear Default, plant nhanh." },
          { role: "Play Maker", task: "Cover Window/Doors, hỗ trợ Entry." },
          { role: "Awper", task: "Giữ ngoài site, flash thêm nếu Entry bị block." },
          { role: "Lurker", task: "Cắt vòng hoặc giữ Tunnel, cover lưng." },
        ],
        note: "Smoke/flash chia đều cho Khang, Thanh, Trường nếu setup bài.",
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
          { role: "Awper", task: "Ở Mid, smoke CT hoặc flash Cat khi Entry vào." },
          { role: "Lurker", task: "Giữ Long, flash Ramp hoặc smoke Long Corner nếu có, không cho CT bọc lên." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Long Corner, Trường flash Cat/Ramp.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Short vào site, clear Ramp/Default." },
          { role: "Play Maker", task: "Cover plant, kiểm soát Goose." },
          { role: "Awper", task: "Ở Cat/Mid, flash hoặc smoke cover Entry." },
          { role: "Lurker", task: "Lên Ramp hỗ trợ hoặc giữ Long." },
        ],
        note: "Chia người giữ Short, Long, Ramp, Goose.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Mid to B Split",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Đi cùng Trường lên Mid, chuẩn bị vào B qua cửa Mid." },
          { role: "Play Maker", task: "Trade kill, smoke CT hoặc flash Mid để cắt sight." },
          { role: "Awper", task: "Ở T spawn/Mid, smoke CT hoặc flash B Door khi Entry vào site." },
          { role: "Lurker", task: "Upper Tunnel, flash Tunnel hoặc smoke Window, timing vào cùng lúc với nhóm Mid." },
        ],
        note: "Nếu setup, Khang smoke CT, Thanh smoke Window, Trường flash Mid/B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry qua cửa Mid, clear Close/Window." },
          { role: "Play Maker", task: "Trade kill, kiểm soát cửa lớn, hỗ trợ plant." },
          { role: "Awper", task: "Cover Doors/Window, bắn trả phản công." },
          { role: "Lurker", task: "Entry từ Tunnel, clear Back site/Platform." },
        ],
        note: "Smoke/flash chủ yếu do Khang và Thanh, chia đều nếu setup bài.",
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
          { role: "Play Maker", task: "Ở Cat/Mid, flash Short hoặc smoke Cat tạo áp lực." },
          { role: "Awper", task: "Giữ Mid/Long, smoke Cross hoặc flash Long để fake A." },
          { role: "Lurker", task: "Ở Tunnel, flash Tunnel hoặc smoke Window, nghe tiếng chuẩn bị entry B khi call." },
        ],
        note: "Khi chuyển về B, Khang smoke Window, Thanh smoke Door, Trường flash Deep B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Rút về Tunnel, entry B." },
          { role: "Play Maker", task: "Theo Entry, smoke/flash hỗ trợ Entry." },
          { role: "Awper", task: "Smoke/flash Window/Door, cover Entry." },
          { role: "Lurker", task: "Entry Tunnel, clear site, plant bom." },
        ],
        note: "Timing utility phải đồng bộ, entry đồng loạt.",
      },
    ],
  },
];