

export const infernoStrategies5Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu lên Mid, Entry Short, kiểm tra Default/Pit." },
          { role: "Play Maker", task: "Theo sát, trade kill, Trường flash Short hoặc smoke Library." },
          { role: "Awper", task: "Giữ Mid hoặc Apps, Khang smoke Arch hoặc flash Mid." },
          { role: "Lurker", task: "Đi Apps, Thanh smoke Pit hoặc flash Balcony, timing nhảy xuống Entry." },
          { role: "Support", task: "Ở Mid hoặc Apps, Hải flash Short hoặc smoke Long phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke Library, Thanh smoke Pit, Trường smoke Arch, Hải flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Vào site, clear Default/Pit, plant bom." },
          { role: "Play Maker", task: "Cover Entry, flash nếu Entry cần che góc." },
          { role: "Awper", task: "Giữ Mid/Apps, smoke hoặc flash khi Entry vào." },
          { role: "Lurker", task: "Nhảy Balcony, clear Pit, hỗ trợ Entry." },
          { role: "Support", task: "Theo sau Entry, flash/cover plant." },
        ],
        note: "Chia giữ Library, Arch, Pit, Long.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Banana, Entry B site, check New Box, First Oranges." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Coffins hoặc flash site." },
          { role: "Awper", task: "Banana, Khang smoke CT hoặc flash Banana." },
          { role: "Lurker", task: "Giữ Mid, Thanh smoke Coffins hoặc flash Banana." },
          { role: "Support", task: "Banana, Hải flash Deep site hoặc smoke Garden phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke CT, Trường smoke Coffins, Thanh smoke Banana, Hải flash Deep site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry vào B, clear Emo/New Box, plant nhanh." },
          { role: "Play Maker", task: "Cover Coffins/CT, smoke/flash khi cần." },
          { role: "Awper", task: "Giữ Banana, smoke/flash bổ sung khi Entry bị block." },
          { role: "Lurker", task: "Giữ Mid hoặc vòng Banana hỗ trợ Entry." },
          { role: "Support", task: "Theo Entry vào B, flash/cover plant, giữ Coffins/Banana." },
        ],
        note: "Chia giữ Coffins, CT, Banana, Garden.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Banana Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Banana, kiểm tra Logs/Sandbags." },
          { role: "Play Maker", task: "Trade kill, Trường flash Banana hoặc smoke Top Banana." },
          { role: "Awper", task: "Giữ T Ramp/Mid, Khang smoke Top Banana hoặc flash Banana." },
          { role: "Lurker", task: "Mid/Apps, Thanh flash Banana hoặc smoke Logs." },
          { role: "Support", task: "Banana, Hải flash Top Banana hoặc smoke Car phụ Entry." },
        ],
        note: "Sau kiểm soát Banana, call hướng tiếp theo, chia utility cho 4 người.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Top Banana, lấy info." },
          { role: "Play Maker", task: "Sẵn sàng flash/trade nếu CT đẩy lại." },
          { role: "Awper", task: "Đổi vị trí khi chuyển hướng." },
          { role: "Lurker", task: "Di chuyển Apps/Mid, gây áp lực." },
          { role: "Support", task: "Ở Banana, sẵn sàng flash/cover Entry nếu chuyển hướng." },
        ],
        note: "Smoke/flash phối hợp chuyển hướng.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (2 Mid – 3 Apps)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, Entry Short." },
          { role: "Play Maker", task: "Trường smoke Library hoặc flash Short." },
          { role: "Awper", task: "Giữ Mid/Top Mid, Khang smoke Arch hoặc flash Mid." },
          { role: "Lurker", task: "Apps, Thanh flash Balcony hoặc smoke Pit." },
          { role: "Support", task: "Apps, Hải flash Apps hoặc smoke Pit cùng Thanh, timing vào site." },
        ],
        note: "Nếu setup, Khang smoke Arch, Trường smoke Library, Thanh smoke Pit, Hải flash Balcony.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Short, clear Default." },
          { role: "Play Maker", task: "Cover Entry, flash hỗ trợ plant." },
          { role: "Awper", task: "Giữ Mid, smoke/flash nếu Entry cần." },
          { role: "Lurker", task: "Nhảy Balcony, clear Pit." },
          { role: "Support", task: "Theo Thanh nhảy Balcony, clear Pit, giữ lưng." },
        ],
        note: "Chia giữ Library, Arch, Pit, Apps.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Banana, không đẩy sâu." },
          { role: "Play Maker", task: "Mid, Trường smoke Mid hoặc flash Banana." },
          { role: "Awper", task: "Mid/T Ramp, Khang smoke Top Banana hoặc flash Banana." },
          { role: "Lurker", task: "Apps/Mid, Thanh flash Banana hoặc smoke Apps." },
          { role: "Support", task: "Banana, Hải smoke CT hoặc flash Banana." },
        ],
        note: "Nếu setup B, Khang smoke CT, Trường smoke Coffins, Thanh flash Banana, Hải flash site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, check site." },
          { role: "Play Maker", task: "Smoke/flash hỗ trợ Entry." },
          { role: "Awper", task: "Cover CT/Coffins." },
          { role: "Lurker", task: "Di chuyển Banana, smoke/flash trước Entry." },
          { role: "Support", task: "Theo Entry, smoke/flash khi plant." },
        ],
        note: "Entry đồng loạt, smoke/flash chuẩn.",
      },
    ],
  },
];