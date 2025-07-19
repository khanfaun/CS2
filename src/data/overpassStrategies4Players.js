

export const overpassStrategies4Players = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Fountain, Entry Bathrooms vào A, check Truck/Default." },
          { role: "Play Maker", task: "Trade kill, Trường flash Bathrooms hoặc smoke Bank." },
          { role: "Awper", task: "Fountain/Long, Khang smoke Bank hoặc flash Long." },
          { role: "Lurker", task: "Connector, Thanh flash Short hoặc smoke Truck, timing Bathrooms/Long." },
        ],
        note: "Nếu setup, Khang smoke Bank, Thanh smoke Truck, Trường flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Truck/Default, plant bom." },
          { role: "Play Maker", task: "Cover Truck, flash nếu Entry cần." },
          { role: "Awper", task: "Cover Bank/Long, smoke/flash khi cần." },
          { role: "Lurker", task: "Vòng Bathrooms/Long hỗ trợ Entry." },
        ],
        note: "Sau plant, chia giữ Bathrooms, Long, Bank.",
      },
    ],
  },
  {
    name: "Chiến Thuật B: Rush B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Monster, entry B, check Barrels/Default/Water." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Heaven hoặc flash site." },
          { role: "Awper", task: "Monster/Short, Khang smoke Heaven hoặc flash Monster." },
          { role: "Lurker", task: "Short B, Thanh flash Water hoặc smoke Bridge." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Bridge, Trường flash Deep B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Barrels/Default, plant bom." },
          { role: "Play Maker", task: "Cover Water/Barrels." },
          { role: "Awper", task: "Cover Heaven/Monster." },
          { role: "Lurker", task: "Entry từ Short, giữ Water hoặc lưng." },
        ],
        note: "Chia giữ Monster, Short, Heaven, Water.",
      },
    ],
  },
  {
    name: "Chiến Thuật C: Fast Connector Control",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Entry Connector, kiểm tra Close Left/Right." },
          { role: "Play Maker", task: "Trade kill, Trường flash Connector hoặc smoke Top Con." },
          { role: "Awper", task: "T spawn/Fountain, Khang smoke Mid hoặc flash Con." },
          { role: "Lurker", task: "Monster/Short, Thanh flash Short hoặc smoke Monster." },
        ],
        note: "Chiếm Connector nhanh, smoke/flash chia đều.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Connector/Bathrooms, lấy info." },
          { role: "Play Maker", task: "Giữ Connector, hỗ trợ Entry, flash khi chuyển hướng." },
          { role: "Awper", task: "Smoke/flash hỗ trợ chuyển A/B." },
          { role: "Lurker", task: "B/Monster, sẵn sàng entry khi call chuyển hướng." },
        ],
        note: "Smoke/flash đồng bộ khi chuyển hướng.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (Bathrooms + Long)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Đi cùng Trường lên Bathrooms, Entry Short vào site." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Bank hoặc flash Short." },
          { role: "Awper", task: "Long, Khang smoke Dumpster hoặc flash Long." },
          { role: "Lurker", task: "Long cùng Khang, Thanh flash Long hoặc smoke Truck." },
        ],
        note: "Nếu setup, Khang smoke Dumpster, Thanh smoke Truck, Trường smoke Bank.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A từ Short, clear Default/Truck." },
          { role: "Play Maker", task: "Cover Truck/Bank." },
          { role: "Awper", task: "Vào site từ Long, kiểm tra Optimus/Dumpster." },
          { role: "Lurker", task: "Lên site từ Long, flash/cover Entry." },
        ],
        note: "Chia giữ Bank, Long, Bathrooms.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Monster, lấy info." },
          { role: "Play Maker", task: "Connector/Mid, Trường smoke Short hoặc flash Monster." },
          { role: "Awper", task: "T spawn/Monster, Khang smoke Heaven hoặc flash Water." },
          { role: "Lurker", task: "Short/Water, Thanh smoke Bridge hoặc flash Short." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Bridge, Trường flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear site, plant bom." },
          { role: "Play Maker", task: "Trade kill, smoke/flash khi cần." },
          { role: "Awper", task: "Cover Heaven/CT, smoke/flash hỗ trợ plant." },
          { role: "Lurker", task: "Entry từ Short/Water, giữ lưng." },
        ],
        note: "Chia giữ Monster, Short, Heaven, Water.",
      },
    ],
  },
];