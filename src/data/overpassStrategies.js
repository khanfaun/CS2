

export const overpassStrategies = [
  {
    name: "Chiến Thuật A: Rush A",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Chạy đầu Fountain, entry Bathrooms vào A, check Truck/Default." },
          { role: "Play Maker", task: "Theo sát Entry, trade kill, clear Truck/Optimus, Trường flash Bathrooms hoặc smoke Bank." },
          { role: "Awper", task: "Fountain/Long, Khang smoke Bank hoặc flash Long khi Entry vào site." },
          { role: "Lurker", task: "Connector hoặc Long, Thanh flash Short hoặc smoke Truck, giữ flank hoặc hỗ trợ Entry." },
          { role: "Support", task: "Fountain hoặc Bathrooms, Hải smoke Dumpster hoặc flash Short hỗ trợ Entry." },
        ],
        note: "Nếu setup, Khang smoke Bank, Thanh smoke Truck, Hải smoke Dumpster, Trường flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A, clear Truck/Default, plant bom." },
          { role: "Play Maker", task: "Cover Truck, smoke/flash khi Entry bị block." },
          { role: "Awper", task: "Cover Bank/Long, smoke/flash bổ sung khi cần." },
          { role: "Lurker", task: "Vòng Bathrooms/Long, giữ lưng hoặc phụ Entry." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Dumpster/Bank." },
        ],
        note: "Sau plant chia giữ Bathrooms, Long, Bank, Dumpster.",
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
          { role: "Play Maker", task: "Trade kill, clear site, Trường smoke Heaven hoặc flash site." },
          { role: "Awper", task: "Monster hoặc Short, Khang smoke Heaven hoặc flash Monster cho Entry." },
          { role: "Lurker", task: "Short B, Thanh flash Water hoặc smoke Bridge, timing vào site cùng Entry." },
          { role: "Support", task: "Monster hoặc Short, Hải smoke CT hoặc flash Water phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Bridge, Hải smoke CT, Trường flash Deep B.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B, clear Barrels/Default." },
          { role: "Play Maker", task: "Cover Water/Barrels." },
          { role: "Awper", task: "Cover Heaven/Monster, smoke/flash khi Entry bị block." },
          { role: "Lurker", task: "Entry từ Short, giữ Water hoặc lưng." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ CT/Bridge." },
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
          { role: "Awper", task: "T spawn/Fountain, Khang smoke Mid hoặc flash Con cho Entry." },
          { role: "Lurker", task: "Monster/Short, Thanh flash Short hoặc smoke Monster." },
          { role: "Support", task: "Connector hoặc Mid, Hải flash Bathrooms hoặc smoke Connector phụ Entry." },
        ],
        note: "Sau kiểm soát Connector, chuyển hướng tùy info, chia đều utility khi chuyển site.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Connector/Bathrooms, lấy info, call hướng." },
          { role: "Play Maker", task: "Giữ Connector, hỗ trợ Entry hoặc chuyển ra Mid/Bathrooms." },
          { role: "Awper", task: "Smoke/flash cover khi chuyển hướng." },
          { role: "Lurker", task: "Ở B/Monster, sẵn sàng Entry nếu call B." },
          { role: "Support", task: "Theo Entry Connector, giữ lưng hoặc chuyển hướng hỗ trợ Entry." },
        ],
        note: "Smoke/flash đồng bộ khi chuyển site.",
      },
    ],
  },
  {
    name: "Chiến Thuật D: Split A (Bathrooms + Long)",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Cùng Trường lên Bathrooms, Entry Short vào site." },
          { role: "Play Maker", task: "Trade kill, Trường smoke Bank hoặc flash Short." },
          { role: "Awper", task: "Long, Khang smoke Dumpster hoặc flash Long khi Entry vào site." },
          { role: "Lurker", task: "Long, Thanh flash Long hoặc smoke Truck timing đồng bộ với Entry." },
          { role: "Support", task: "Bathrooms hoặc Long, Hải smoke Bank hoặc flash Bathrooms phụ Entry." },
        ],
        note: "Nếu setup, Khang smoke Dumpster, Thanh smoke Truck, Hải smoke Bank, Trường flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry A từ Short, clear Default/Truck, plant." },
          { role: "Play Maker", task: "Cover Truck/Bank, flash khi Entry cần." },
          { role: "Awper", task: "Vào site từ Long, kiểm tra Optimus/Dumpster." },
          { role: "Lurker", task: "Lên site từ Long, flash/cover Entry." },
          { role: "Support", task: "Theo Entry, giữ Bathrooms/Long, flash/cover plant." },
        ],
        note: "Chia giữ Bank, Long, Bathrooms, Dumpster.",
      },
    ],
  },
  {
    name: "Chiến Thuật E: Default rồi Execute B",
    timelines: [
      {
        time: "1:55",
        tasks: [
          { role: "Entry Fragger", task: "Giữ Monster, lấy info, không đẩy sâu." },
          { role: "Play Maker", task: "Connector/Mid, Trường smoke Short hoặc flash Monster." },
          { role: "Awper", task: "T spawn/Monster, Khang smoke Heaven hoặc flash Water." },
          { role: "Lurker", task: "Short/Water, Thanh smoke Bridge hoặc flash Short." },
          { role: "Support", task: "Monster/Short, Hải smoke CT hoặc flash Deep B." },
        ],
        note: "Nếu setup, Khang smoke Heaven, Thanh smoke Bridge, Hải smoke CT, Trường flash Short.",
      },
      {
        time: "1:48",
        tasks: [
          { role: "Entry Fragger", task: "Entry B khi call, clear site, plant bom." },
          { role: "Play Maker", task: "Trade kill, smoke/flash khi cần." },
          { role: "Awper", task: "Cover Heaven/CT, smoke/flash hỗ trợ plant." },
          { role: "Lurker", task: "Entry từ Short/Water, giữ lưng." },
          { role: "Support", task: "Theo Entry, flash/cover plant, giữ Deep B/Water." },
        ],
        note: "Chia giữ Monster, Short, Heaven, Water.",
      },
    ],
  },
];