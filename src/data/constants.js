export const COMPETITIVE_MAPS = [
  "Mirage",
  "Inferno",
  "Dust 2",
  "Nuke",
  "Overpass",
  "Ancient",
  "Train"
];

export const T_SIDE_ROLE_DEFINITIONS = [
  { 
    id: "entry", 
    role: "Entry Fragger", 
    name: "Triều",
    description: `Định nghĩa:
Entry Fragger là người đi đầu khi team tấn công vào site (A hoặc B). Đây là người mở đường, vào trước để gây bất ngờ cho đối phương và lấy lợi thế bằng mạng đầu tiên (first kill).

Vai trò cụ thể:
• Luôn đi đầu trong các pha rush hoặc execute.
• Tìm cách trade kill nếu bị đối phương bắn, tạo khoảng trống cho đồng đội phía sau vào theo.
• Chấp nhận rủi ro cao, thường phải đối đầu với những vị trí khó chịu nhất của đối phương.
• Phối hợp tốt với Support để được flash hoặc smoke hợp lý khi vào site.`
  },
  { 
    id: "awper", 
    role: "Awper", 
    name: "Khang",
    description: `Định nghĩa:
AWP (Arctic Warfare Police) là role chuyên sử dụng khẩu súng ngắm AWP. Người chơi này tập trung vào việc lấy mạng từ xa và giữ các vị trí quan trọng.

Vai trò cụ thể:
• Nắm giữ các góc quan trọng hoặc vị trí “choke point”.
• Lấy thông tin sớm hoặc giữ mạng cho team bằng những pha bắn mở mạng (pick sớm).
• Có thể đổi vị trí liên tục để gây khó chịu cho đối thủ.
• Ở T-side: Đi pick góc hoặc giữ các vị trí an toàn, hỗ trợ Entry Fragger mở round.`
  },
  { 
    id: "lurker", 
    role: "Lurker", 
    name: "Thanh",
    description: `Định nghĩa:
Lurker là người chơi thường xuyên di chuyển độc lập so với team, đóng vai trò "gián điệp", đánh lạc hướng, và tiêu diệt kẻ địch ở phía sau hoặc bên lề bản đồ.

Vai trò cụ thể:
• Đẩy lẻ một mình ở khu vực khác so với team để cắt rotation hoặc bắt lẻ đối phương.
• Thu thập thông tin, nghe bước chân, phát hiện lối di chuyển của địch.
• Gây áp lực lên nhiều vị trí khác nhau trên bản đồ.
• Đảm bảo đối phương không dễ dàng di chuyển hoặc “rotate” khi team mình tấn công.`
  },
  { 
    id: "playmaker", 
    role: "Play Maker", 
    name: "Trường",
    description: `Định nghĩa:
Play Maker là người có khả năng tạo ra đột biến, làm nên sự khác biệt trong round đấu bằng kỹ năng cá nhân hoặc các pha xử lý sáng tạo.

Vai trò cụ thể:
• Có thể tự ý di chuyển, đánh lẻ hoặc thực hiện những pha xử lý bất ngờ.
• Thường nhận nhiệm vụ phá vỡ thế trận, tạo lợi thế bất ngờ (ví dụ: đẩy smoke, đổi vị trí nhanh, jump spot...).
• Làm đối phương mất kiểm soát hoặc rối loạn đội hình.
• Đôi khi chính là Entry Fragger hoặc Lurker, nhưng nổi bật ở tính sáng tạo.`
  },
  { 
    id: "support", 
    role: "Support", 
    name: "Hải",
    description: `Định nghĩa:
Support là người chơi hỗ trợ đồng đội bằng flash, smoke, molotov hoặc utility khác để tạo điều kiện tốt nhất cho team execute vào site hoặc phòng thủ hiệu quả.

Vai trò cụ thể:
• Ném utility (flash, smoke, molly, nade) để mở đường hoặc che chắn cho Entry Fragger.
• Đôi khi là người cầm bomb, theo sau Entry để plant bomb khi chiếm được site.
• Phối hợp timing utility hợp lý để phá chiến thuật đối phương hoặc bảo vệ teammate.
• Không cần kill nhiều, nhưng đóng góp rất lớn vào thành công của round đấu qua kỹ năng sử dụng utility.`
  }
];

export const CT_SIDE_ROLE_DEFINITIONS = [
  { 
    id: "anchorA", 
    role: "A Anchor",
    description: `Định nghĩa: Người chuyên thủ site A, giữ vị trí sâu nhất trong bombsite.\n\nMô tả: Không rotate sớm, ưu tiên sống sót. Dùng Utility (smoke, molly) cắt entry, cover plant, giữ góc khó.`
  },
  { 
    id: "anchorB", 
    role: "B Anchor",
    description: `Định nghĩa: Người chuyên thủ site B, trấn giữ site tới cùng.\n\nMô tả: Dùng Utility chặn rush, call team khi nghe đông, không di chuyển khi chưa cần, giữ site để team về retake.`
  },
  { 
    id: "awperMid", 
    role: "AWPer/Mid", 
    description: `Định nghĩa: Người cầm AWP (hoặc rifle) kiểm soát khu vực Mid, Window, hoặc các vị trí cần ngắm xa.\n\nMô tả: Lấy info Mid, pick đầu round, hỗ trợ rotate nhanh giữa A/B, giúp team kiểm soát bản đồ.`
  },
  { 
    id: "rotator", 
    role: "Rotator",
    description: `Định nghĩa: Người di chuyển linh hoạt giữa các khu vực, luôn sẵn sàng hỗ trợ site yếu.\n\nMô tả: Phụ trách Connector, Short, Jungle, sẵn sàng rotate khi có info, chia utility và setup retake.`
  },
  { 
    id: "support", 
    role: "Support", 
    description: `Định nghĩa: Người hỗ trợ, chia utility (smoke/flash/molly) và backup cho các Anchor/Rotator.\n\nMô tả: Thường giữ vị trí giữa (CT, Jungle...), hỗ trợ retake, ưu tiên sống lâu, ném bom late để đồng đội dễ giữ site.`
  }
];
