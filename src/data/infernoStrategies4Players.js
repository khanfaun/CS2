

export const infernoStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu lên Mid, entry Short, check Default/Pit." },
          { role: "Play Maker", task: "Theo sát, trade kill, Trường flash Short hoặc smoke Library." },
          { role: "Awper", task: "Giữ Mid hoặc Apps, Khang smoke Arch hoặc flash Mid." },
          { role: "Lurker", task: "Apps, Thanh flash Balcony hoặc smoke Pit, nhảy xuống timing Entry." },
        ],
        note: "Nếu setup, Khang smoke Library, Thanh smoke Pit, Trường smoke Arch.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Vào site, clear Default/Pit, plant." },
          { role: "Play Maker", task: "Cover Entry, flash nếu Entry cần che góc." },
          { role: "Awper", task: "Giữ Mid/Apps, smoke hoặc flash hỗ trợ." },
          { role: "Lurker", task: "Nhảy Balcony, clear Pit, chặn rotate từ Apps." },
        ],
        note: "Sau plant, chia giữ các hướng.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Banana, entry site, check New Box, First Oranges." },
          { role: "Play Maker", task: "Theo Entry, trade kill, Trường smoke Coffins hoặc flash site." },
          { role: "Awper", task: "Ở Banana, Khang smoke CT hoặc flash Banana." },
          { role: "Lurker", task: "Mid, nghe tiếng, Thanh smoke Coffins hoặc flash Banana nếu có." },
        ],
        note: "Nếu setup, Khang smoke CT, Trường smoke Coffins, Thanh flash Banana.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry vào B, clear Emo/New Box." },
          { role: "Play Maker", task: "Cover Coffins/CT." },
          { role: "Awper", task: "Cover Banana, smoke/flash bổ sung." },
          { role: "Lurker", task: "Giữ Mid hoặc vòng Banana hỗ trợ." },
        ],
        note: "Sau plant, chia giữ Coffins, CT, Banana.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Banana Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Banana, kiểm tra Log/Sandbags." },
          { role: "Play Maker", task: "Trade kill, Trường flash Banana hoặc smoke Top Banana." },
          { role: "Awper", task: "Giữ T Ramp/Mid, Khang smoke Top Banana hoặc flash Mid." },
          { role: "Lurker", task: "Mid/Apps, Thanh flash Banana hoặc smoke Logs." },
        ],
        note: "Sau kiểm soát Banana, call hướng tiếp theo.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Top Banana, lấy info." },
          { role: "Play Maker", task: "Sẵn sàng flash/trade nếu CT đẩy lại." },
          { role: "Awper", task: "Đổi vị trí khi chuyển hướng." },
          { role: "Lurker", task: "Di chuyển Apps/Mid, gây áp lực." },
        ],
        note: "Sau kiểm soát Banana, phối hợp smoke/flash chuyển hướng.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (2 Mid – 2 Apps)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Mid, entry Short." },
          { role: "Play Maker", task: "Theo Entry, Trường smoke Library hoặc flash Short." },
          { role: "Awper", task: "Giữ Mid/Top Mid, Khang smoke Arch hoặc flash Mid." },
          { role: "Lurker", task: "Apps, Thanh flash Balcony hoặc smoke Pit." },
        ],
        note: "Nếu setup, Khang smoke Arch, Trường smoke Library, Thanh smoke Pit.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry Short, clear Default." },
          { role: "Play Maker", task: "Cover Entry, flash hỗ trợ plant." },
          { role: "Awper", task: "Giữ Mid, smoke/flash nếu Entry cần." },
          { role: "Lurker", task: "Nhảy Balcony, clear Pit." },
        ],
        note: "Sau plant, chia giữ Library, Arch, Pit.",
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
          { role: "Play Maker", task: "Giữ Mid, nghe tiếng, Trường smoke Mid hoặc flash Banana." },
          { role: "Awper", task: "Giữ Mid/T Ramp, Khang smoke Top Banana hoặc flash site." },
          { role: "Lurker", task: "Apps/Mid, tạo áp lực, Thanh flash Apps nếu cần." },
        ],
        note: "Nếu setup B, Khang smoke CT, Trường smoke Coffins, Thanh flash Banana.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, check site." },
          { role: "Play Maker", task: "Theo Entry, smoke/flash hỗ trợ." },
          { role: "Awper", task: "Cover CT/Coffins." },
          { role: "Lurker", task: "Di chuyển Banana, smoke/flash trước Entry." },
        ],
        note: "Entry đồng loạt, smoke/flash chuẩn.",
      },
    ],
  },
];