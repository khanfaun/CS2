

const ROW_ORDER = ["Vị trí", "Kết hợp", "Người ném bom", "Đầu round", "Giữa round", "Cuối round", "Buy Kit", "Ghi chú"];

export const overpassStrategiesCT5Players = [
    {
        name: "Round: Full Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Giữ Default A (Truck), Bank, Optimus, hoặc bên cạnh site (Dice/Default Box).",
                "B Anchor": "Giữ Default B (Water), Pillar, Pit, Heaven hoặc Backsite.",
                "AWPer/Mid": "Giữ Mid/Toilets, Long A, Fountain, hoặc Heaven B, linh hoạt.",
                "Rotator": "CT Spawn, Truck, Heaven, Graffiti – linh hoạt backup A/B hoặc Mid.",
                "Support": "Bank, Truck, CT, Graffiti hoặc Heaven, backup A/Mid/B."
            },
            "Kết hợp": {
                "A Anchor": "Khi bị rush A, phối hợp với Support hoặc Rotator tạo crossfire tại Truck/Optimus/Bank.",
                "B Anchor": "Khi bị rush, phối hợp Rotator tạo crossfire Default/Pillar/Water.",
                "AWPer/Mid": "Hỗ trợ Mid/A/B, xoay nhanh khi có call, phối hợp Rotator/Support.",
                "Rotator": "Di chuyển giữa các site, phối hợp Anchor khi bị rush, ưu tiên giữ info Mid/B.",
                "Support": "Combo cùng A Anchor giữ A, backup Toilet/Mid hoặc rotate B khi bị áp lực."
            },
            "Người ném bom": {
                "A Anchor": "Chủ động smoke Toilet hoặc Bank, molly Long/Toilet khi nghe đông hoặc bị rush.",
                "B Anchor": "Molly Monster đầu round, smoke Monster hoặc Short khi nghe đông hoặc bị rush.",
                "AWPer/Mid": "Smoke Mid/Toilet hoặc flash Fountain/Long, molly Balloon/Party khi cần kiểm soát.",
                "Rotator": "Flash hoặc smoke Bank/Toilet/Heaven/Short hỗ trợ giữ hoặc retake.",
                "Support": "Smoke Bank/CT hoặc flash Toilet/Monster khi team retake hoặc bị rush."
            },
            "Đầu round": {
                "A Anchor": "Giữ sâu site, không peek xa Long/Toilet, tập trung nghe tiếng T di chuyển và thông tin team Mid/Long.",
                "B Anchor": "Ném molly/chày Monster hoặc Short, không đẩy xa Monster, giữ vị trí thủ sâu hoặc Heaven.",
                "AWPer/Mid": "Lấy info Mid/Fountain, ném smoke/flash nếu bị áp lực, không peek Mid lẻ khi nhiều T.",
                "Rotator": "Hỗ trợ Mid hoặc B bằng flash/molly, sẵn sàng rotate khi thấy nguy hiểm.",
                "Support": "Hỗ trợ A bằng smoke hoặc flash, giữ vị trí linh hoạt giữa Bank/CT/Heaven."
            },
            "Giữa round": {
                "A Anchor": "Ưu tiên giữ Utility cho retake, không rotate khỏi A khi chưa mất site, báo team khi nghe đông.",
                "B Anchor": "Giữ Utility cho retake, báo team khi nghe đông B hoặc áp lực từ Short/Monster.",
                "AWPer/Mid": "Dịch chuyển hỗ trợ site yếu, smoke/flash khi cần, báo team nếu mất kiểm soát Mid/Long.",
                "Rotator": "Chia Utility hợp lý, cover cho Anchor, giữ mạng khi cần retake.",
                "Support": "Chia Utility cho Anchor, backup site yếu, ưu tiên giữ smoke late round."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, cùng team retake, ưu tiên smoke Toilet/Bank hoặc flash site khi vào lại.",
                "B Anchor": "Nếu mất B, cùng team retake, dùng molly/flash khi vào lại.",
                "AWPer/Mid": "Setup flash/smoke khi team retake, không entry lẻ, giữ mạng cho retake.",
                "Rotator": "Setup smoke/flash cho team vào lại site, không entry đầu tiên khi retake.",
                "Support": "Flash/molly hỗ trợ team retake, giữ mạng nếu không chắc thắng retake."
            },
            "Buy Kit": {
                "A Anchor": "✅ (luôn mua kit khi có tiền).",
                "B Anchor": "✅ (ưu tiên mua kit).",
                "AWPer/Mid": "✅ (luôn mua kit nếu đủ tiền).",
                "Rotator": "❌ (ít mua kit trừ khi Anchor/Support không mua được).",
                "Support": "✅ (luôn mua kit nếu đủ tiền)."
            },
            "Ghi chú": {
                "A Anchor": "Ưu tiên sống sót, không đổi mạng sớm để giữ kit cho defuse.",
                "B Anchor": "Giữ site tới cùng, ưu tiên sống nếu còn kit.",
                "AWPer/Mid": "Lấy info Mid là ưu tiên, sống để giữ map control và kit.",
                "Rotator": "Luôn chú ý info toàn map, không rotate khi chưa có call chắc chắn.",
                "Support": "Vai trò backup chính, chia Utility hợp lý, giao tiếp tốt khi rotate."
            }
        }
    },
    {
        name: "Round: Force Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Default, Optimus, Bank, chọn góc khuất, tránh lộ để bị check đầu.",
                "B Anchor": "Default B, Pit, Water, Heaven, chọn vị trí khó clear, tránh góc lộ.",
                "AWPer/Mid": "Toilets, Fountain, Long hoặc Heaven, chọn góc dễ close range trade.",
                "Rotator": "CT, Heaven, Truck, backup site yếu theo call.",
                "Support": "Bank, CT, Heaven, backup A/Mid/B."
            },
            "Kết hợp": {
                "A Anchor": "Luôn phối hợp Support hoặc Rotator tạo crossfire, không đẩy lẻ.",
                "B Anchor": "Phối hợp Rotator giữ crossfire khi bị rush.",
                "AWPer/Mid": "Hỗ trợ lấy info Mid/Long, giữ góc gần, không lên quá cao nếu không có flash/smoke.",
                "Rotator": "Đứng gần vị trí dễ rotate, giữ mạng cho retake.",
                "Support": "Combo với Anchor giữ site hoặc backup Mid khi có áp lực."
            },
            "Người ném bom": {
                "A Anchor": "Nếu có smoke/molly, giữ lại cho retake hoặc ném khi T chuẩn bị vào site.",
                "B Anchor": "Nếu có molly, dùng chặn rush hoặc giữ cho retake.",
                "AWPer/Mid": "Nếu có smoke/flash, hỗ trợ đồng đội giữ mid hoặc backup A/B.",
                "Rotator": "Nếu có utility, để dành retake hoặc hỗ trợ khi Anchor call.",
                "Support": "Nếu có smoke/flash, giữ cho backup hoặc retake."
            },
            "Đầu round": {
                "A Anchor": "Giữ sâu, không peek xa Toilet/Long.",
                "B Anchor": "Không đẩy Monster/Short, giữ sâu site.",
                "AWPer/Mid": "Không peek xa, chỉ lấy info khi chắc chắn an toàn.",
                "Rotator": "Không lên Mid quá cao, chỉ lấy info, backup nhanh.",
                "Support": "Đứng linh hoạt, đổi giữa Bank/CT/Heaven."
            },
            "Giữa round": {
                "A Anchor": "Giữ utility, báo team khi nghe đông, ưu tiên sống.",
                "B Anchor": "Giữ vị trí, báo team khi nghe đông, ưu tiên sống.",
                "AWPer/Mid": "Nếu mất Mid/Long, rút về giữ site, báo team.",
                "Rotator": "Backup site yếu, giữ mạng cho retake.",
                "Support": "Chia utility, backup site yếu, giữ mạng."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, phối hợp retake, chờ smoke/flash rồi cùng vào lại.",
                "B Anchor": "Nếu mất B, giữ mạng và retake chung với team.",
                "AWPer/Mid": "Flash hỗ trợ retake, không entry đầu.",
                "Rotator": "Flash/smoke cho team vào lại site, không entry đầu tiên.",
                "Support": "Flash/molly cho retake, không solo."
            },
            "Buy Kit": {
                "A Anchor": "✅ (nếu đủ tiền, ưu tiên hơn Utility).",
                "B Anchor": "✅ (nếu đủ tiền).",
                "AWPer/Mid": "✅ (nếu đủ tiền).",
                "Rotator": "❌ (chỉ mua nếu không ai khác mua được).",
                "Support": "✅ (nếu đủ tiền)."
            },
            "Ghi chú": {
                "A Anchor": "Giữ mạng vì vũ khí yếu, hạn chế đổi mạng sớm.",
                "B Anchor": "Giữ site, ưu tiên giữ vũ khí cho round sau.",
                "AWPer/Mid": "Giữ vũ khí mạnh, ưu tiên giữ mạng.",
                "Rotator": "Chỉ rotate khi chắc chắn, không solo.",
                "Support": "Luôn backup Anchor, giao tiếp liên tục."
            }
        }
    },
    {
        name: "Round: Eco/Full Save",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Default, Optimus, Bank hoặc stack nhiều người tại A site.",
                "B Anchor": "Default B, Pit, Water hoặc stack chung nhiều người trong site.",
                "AWPer/Mid": "Nếu có scout/deagle, giữ Toilets, Fountain hoặc Heaven.",
                "Rotator": "CT, Heaven, Truck, đứng vị trí dễ rotate hoặc stack chung đồng đội.",
                "Support": "Bank, CT, Heaven hoặc gần Anchor để trade kill."
            },
            "Kết hợp": {
                "A Anchor": "Chỉ peek khi call chung, hoặc stack nhiều người tại A.",
                "B Anchor": "Stack B nếu team call, phối hợp cùng nhau pick khi T vào.",
                "AWPer/Mid": "Bắn lén hoặc phối hợp đồng đội trade kill nếu stack Mid.",
                "Rotator": "Di chuyển theo call team, không đi lẻ.",
                "Support": "Nếu stack site, giữ gần Anchor, ưu tiên trade kill."
            },
            "Người ném bom": {
                "A Anchor": "Không có utility, nếu lượm được, để dành giữ site hoặc retake.",
                "B Anchor": "Không có utility, ưu tiên giữ mạng và trade kill.",
                "AWPer/Mid": "Không có utility, nếu lượm được dùng để giữ mạng hoặc pick mạng.",
                "Rotator": "Không có utility, phối hợp cùng nhau khi T vào site.",
                "Support": "Không có utility, phối hợp cùng Anchor giữ mạng."
            },
            "Đầu round": {
                "A Anchor": "Ẩn nấp vị trí bất ngờ, phối hợp stack site nếu call.",
                "B Anchor": "Stack nhiều người B hoặc giữ góc bất ngờ.",
                "AWPer/Mid": "Giữ góc unexpected, không peek xa.",
                "Rotator": "Stack cùng team, không lấy info một mình.",
                "Support": "Ẩn nấp, tránh bị check lẻ."
            },
            "Giữa round": {
                "A Anchor": "Giữ vị trí, báo team nếu nghe tiếng hoặc bomb.",
                "B Anchor": "Nếu bomb vào B, trade kill chung, không đi lẻ.",
                "AWPer/Mid": "Nếu lấy được vũ khí, rút về giữ mạng.",
                "Rotator": "Nếu bomb vào site, cùng đồng đội pick hoặc giữ mạng.",
                "Support": "Giữ góc, hỗ trợ backup nếu T vào site."
            },
            "Cuối round": {
                "A Anchor": "Nếu còn sống khi bomb nổ, lấy vũ khí hoặc săn mạng T cuối round.",
                "B Anchor": "Nếu còn sống, lấy vũ khí hoặc lượm súng cho round sau.",
                "AWPer/Mid": "Cố giữ vũ khí, không entry khi retake.",
                "Rotator": "Nếu còn sống, lấy vũ khí hoặc gây damage.",
                "Support": "Nếu lấy được súng, rút lui giữ vũ khí."
            },
            "Buy Kit": {
                "A Anchor": "❌ (không mua kit).",
                "B Anchor": "❌ (không mua kit).",
                "AWPer/Mid": "❌ (không mua kit).",
                "Rotator": "❌ (không mua kit).",
                "Support": "❌ (không mua kit)."
            },
            "Ghi chú": {
                "A Anchor": "Ưu tiên lấy súng, bắt lẻ hoặc gây damage kinh tế cho T.",
                "B Anchor": "Ưu tiên lấy vũ khí, không cần cố defuse.",
                "AWPer/Mid": "Giữ mạng, lấy vũ khí cho round sau.",
                "Rotator": "Stack chung team, trade kill.",
                "Support": "Giữ mạng, ưu tiên lấy vũ khí."
            }
        }
    },
    {
        name: "Round: Anti-Eco (Biết T eco/pistol)",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Default, Optimus, Bank, tránh các góc dễ bị rush/one tap.",
                "B Anchor": "Default B, Pit, Water, tránh các góc dễ bị pistol close range.",
                "AWPer/Mid": "Toilets, Long, Heaven, tránh các vị trí dễ bị rush bất ngờ.",
                "Rotator": "CT, Heaven, Truck – luôn di chuyển backup khi site yếu.",
                "Support": "Bank, CT, Heaven, đứng gần Anchor để trade kill nếu bị rush."
            },
            "Kết hợp": {
                "A Anchor": "Phối hợp Support giữ crossfire khi nghe đông T hoặc nghi stack rush.",
                "B Anchor": "Nếu bị rush, phối hợp Rotator giữ crossfire.",
                "AWPer/Mid": "Lấy info Mid, nếu nghe đông T lên Mid hoặc Long, rút về site hoặc Bank/Heaven.",
                "Rotator": "Hỗ trợ Anchor bằng flash/smoke khi bị rush.",
                "Support": "Combo cùng Anchor giữ A hoặc backup B/Mid khi cần."
            },
            "Người ném bom": {
                "A Anchor": "Molly Toilet/Long hoặc smoke Toilet ngăn T lao nhanh vào A.",
                "B Anchor": "Molly Monster hoặc smoke Short/Monster chặn rush đầu round.",
                "AWPer/Mid": "Smoke Toilet/Long hoặc molly Balloon khi cần.",
                "Rotator": "Để dành Utility cho retake hoặc cản rush đầu round.",
                "Support": "Smoke Bank/CT hoặc flash Toilet/Monster khi team retake."
            },
            "Đầu round": {
                "A Anchor": "Không cần peek xa, lấy info bằng nade hoặc nghe tiếng.",
                "B Anchor": "Không đẩy Monster/Short, chờ T vào site.",
                "AWPer/Mid": "Lấy info bằng scope, không peek khi không có backup.",
                "Rotator": "Không đẩy lẻ, chỉ lấy info khi chắc chắn an toàn.",
                "Support": "Hỗ trợ Anchor ném nade đầu round, giữ vị trí an toàn."
            },
            "Giữa round": {
                "A Anchor": "Nếu bị rush, giữ vị trí thủ sâu và call team backup.",
                "B Anchor": "Nếu bị áp lực, call team, giữ Utility cho retake.",
                "AWPer/Mid": "Nếu mất Mid/Long, báo team và lùi lại site.",
                "Rotator": "Chia Utility hợp lý cho Anchor, hỗ trợ retake.",
                "Support": "Nếu site yếu, chia Utility, không solo lẻ."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất site, giữ mạng để giữ vũ khí, chờ team retake chung.",
                "B Anchor": "Nếu mất site, giữ mạng và vũ khí.",
                "AWPer/Mid": "Setup flash/retake, giữ mạng và vũ khí.",
                "Rotator": "Setup flash/smoke cho team vào lại site.",
                "Support": "Flash/molly hỗ trợ team retake."
            },
            "Buy Kit": {
                "A Anchor": "✅ (ưu tiên mua kit).",
                "B Anchor": "✅ (ưu tiên mua kit).",
                "AWPer/Mid": "✅ (nếu đủ tiền).",
                "Rotator": "❌ (chỉ mua khi Anchor/Support không mua).",
                "Support": "✅ (ưu tiên mua kit)."
            },
            "Ghi chú": {
                "A Anchor": "Ưu tiên giữ mạng, không lao đổi mạng với pistol T.",
                "B Anchor": "Đứng góc an toàn, giữ vị trí, ưu tiên không chết.",
                "AWPer/Mid": "Không entry trước, giữ mạng cho round sau.",
                "Rotator": "Không solo đẩy, chỉ đi chung backup team.",
                "Support": "Luôn giữ mạng, giao tiếp tốt, chia Utility cho đồng đội."
            }
        }
    }
];
