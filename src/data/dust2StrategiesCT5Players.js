

const ROW_ORDER = ["Vị trí", "Kết hợp", "Người ném bom", "Đầu round", "Giữa round", "Cuối round", "Buy Kit", "Ghi chú"];

export const dust2StrategiesCT5Players = [
    {
        name: "Round: Full Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Giữ Goose, Default, Ramp hoặc Long A.",
                "B Anchor": "Giữ Plat, Backsite, Doors hoặc Window trên B site.",
                "AWPer/Mid": "Giữ Mid Doors, Xbox, Catwalk (Short), hoặc Long A.",
                "Rotator": "CT Spawn, CT Ramp, Elevator, hoặc Car – linh hoạt backup A/B.",
                "Support": "CT Spawn, Ramp, Long A, backup A hoặc Mid."
            },
            "Kết hợp": {
                "A Anchor": "Khi bị rush A, phối hợp với Support hoặc Rotator tạo crossfire tại Ramp/Goose.",
                "B Anchor": "Khi bị rush, phối hợp Rotator tạo crossfire Backsite/Window hoặc Plat.",
                "AWPer/Mid": "Hỗ trợ Mid/A/B, xoay nhanh khi có call, phối hợp Rotator/Support.",
                "Rotator": "Di chuyển giữa các site, phối hợp Anchor khi bị rush.",
                "Support": "Combo cùng A Anchor giữ A, backup Long hoặc Cat khi bị áp lực."
            },
            "Người ném bom": {
                "A Anchor": "Chủ động smoke Long hoặc Short, molly Short hoặc Pit nếu bị áp lực.",
                "B Anchor": "Molly Tunnels đầu round, smoke cửa B khi nghe đông hoặc bị rush.",
                "AWPer/Mid": "Smoke Mid Doors hoặc flash Mid, molly Lower Tunnels khi cần kiểm soát.",
                "Rotator": "Flash hoặc smoke CT/Mid hỗ trợ giữ hoặc retake.",
                "Support": "Smoke CT/Long hoặc flash Short khi team retake hoặc bị rush."
            },
            "Đầu round": {
                "A Anchor": "Giữ sâu site, không peek xa Long hoặc Short, tập trung nghe tiếng T.",
                "B Anchor": "Ném molly/chày Tunnels sớm, không đẩy sâu Tunnels, giữ vị trí thủ sâu.",
                "AWPer/Mid": "Lấy info Mid Doors, ném smoke/flash nếu bị áp lực, không peek Mid lẻ khi có nhiều T.",
                "Rotator": "Hỗ trợ Mid hoặc A bằng flash/molly, sẵn sàng rotate khi thấy nguy hiểm.",
                "Support": "Hỗ trợ A bằng smoke hoặc flash, giữ vị trí linh hoạt giữa CT và Ramp."
            },
            "Giữa round": {
                "A Anchor": "Ưu tiên giữ Utility cho retake, không rotate khi chưa mất site, báo team khi nghe đông Long/Short.",
                "B Anchor": "Giữ Utility cho retake, báo team khi nghe đông B.",
                "AWPer/Mid": "Dịch chuyển hỗ trợ site yếu, smoke/flash khi cần, báo team nếu mất kiểm soát Mid.",
                "Rotator": "Chia Utility hợp lý, cover cho Anchor, giữ mạng khi cần retake.",
                "Support": "Chia Utility cho Anchor, backup site yếu, ưu tiên giữ smoke late round."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, cùng team retake, sử dụng smoke Short/Long hoặc flash vào site.",
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
                "B Anchor": "Giữ site tới cùng, ưu tiên giữ mạng nếu còn kit.",
                "AWPer/Mid": "Lấy info Mid là ưu tiên, sống để giữ map control và kit.",
                "Rotator": "Luôn chú ý info toàn map, không rotate khi chưa có call chắc chắn.",
                "Support": "Vai trò chính là backup, chia Utility hợp lý, giao tiếp tốt khi rotate."
            }
        }
    },
    {
        name: "Round: Force Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Goose, Default, Ramp hoặc lùi sâu Long.",
                "B Anchor": "Plat, Backsite, Window hoặc Doors, chọn góc khuất, tránh lộ.",
                "AWPer/Mid": "Mid Doors, Xbox, Short, hoặc góc dễ close range trade.",
                "Rotator": "CT Spawn, CT Ramp, Elevator, linh hoạt backup site yếu.",
                "Support": "CT Spawn, Ramp, backup A hoặc Mid."
            },
            "Kết hợp": {
                "A Anchor": "Luôn phối hợp Support hoặc Rotator tạo crossfire khi T đẩy A, không solo lẻ.",
                "B Anchor": "Phối hợp Rotator giữ crossfire khi bị rush, không đứng lẻ.",
                "AWPer/Mid": "Hỗ trợ lấy info Mid, nếu không có AWP thì giữ góc close, không peek lẻ.",
                "Rotator": "Đứng sẵn vị trí dễ rotate, giữ mạng cho retake.",
                "Support": "Hỗ trợ A Anchor hoặc Mid khi bị rush, ném utility giữ T lại."
            },
            "Người ném bom": {
                "A Anchor": "Nếu có smoke/molly thì giữ lại cho retake hoặc ném khi T bắt đầu vào site.",
                "B Anchor": "Nếu có molly, dùng sớm để cản entry hoặc giữ cho retake.",
                "AWPer/Mid": "Nếu có smoke/flash, hỗ trợ đồng đội giữ mid/control short.",
                "Rotator": "Nếu có utility, để dành cho retake, flash/ smoke hỗ trợ team.",
                "Support": "Nếu có smoke/flash, giữ cho lúc team cần backup hoặc retake."
            },
            "Đầu round": {
                "A Anchor": "Thủ sâu, không peek xa Long/Short trừ khi có info chắc chắn.",
                "B Anchor": "Không đẩy Tunnels, giữ sâu B site.",
                "AWPer/Mid": "Không lên Mid lộ nếu không có smoke/flash, ưu tiên giữ góc.",
                "Rotator": "Không cần lên Mid, chỉ lấy info, backup nhanh.",
                "Support": "Đứng linh hoạt, có thể đổi giữa CT/Ramp/Long."
            },
            "Giữa round": {
                "A Anchor": "Giữ utility, báo team khi nghe đông, ưu tiên giữ mạng.",
                "B Anchor": "Báo team nếu nghe đông B, giữ vị trí, không rotate lung tung.",
                "AWPer/Mid": "Nếu mất Mid, báo team và lùi về CT/A/B giữ site.",
                "Rotator": "Nếu site yếu, di chuyển backup, không rotate khi chưa có call chắc chắn.",
                "Support": "Chia utility cho Anchor, backup site yếu, giữ mạng late round."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, cùng team chờ smoke/flash rồi retake chung.",
                "B Anchor": "Nếu mất B, giữ mạng, đợi team retake cùng nhau.",
                "AWPer/Mid": "Setup flash hỗ trợ retake, không đi lẻ.",
                "Rotator": "Setup smoke/flash cho team retake, không entry trước.",
                "Support": "Flash/molly hỗ trợ retake, không solo lẻ."
            },
            "Buy Kit": {
                "A Anchor": "✅ (nếu đủ tiền thì mua, ưu tiên hơn Utility).",
                "B Anchor": "✅ (nếu đủ tiền).",
                "AWPer/Mid": "✅ (nếu đủ tiền).",
                "Rotator": "❌ (chỉ mua nếu không ai khác mua được).",
                "Support": "✅ (nếu đủ tiền)."
            },
            "Ghi chú": {
                "A Anchor": "Giữ mạng vì vũ khí yếu, không đổi mạng đầu round.",
                "B Anchor": "Đừng lao lên đổi mạng, giữ vũ khí cho round sau.",
                "AWPer/Mid": "Giữ mạng, giữ vũ khí mạnh cho round sau.",
                "Rotator": "Cẩn thận khi rotate, không để chết lẻ.",
                "Support": "Luôn giao tiếp tốt với Anchor, hạn chế đẩy lẻ."
            }
        }
    },
    {
        name: "Round: Eco/Full Save",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Goose, Ramp, Default, hoặc stack nhiều người ở A site.",
                "B Anchor": "Plat, Backsite, Window hoặc stack nhiều người trong B.",
                "AWPer/Mid": "Nếu có scout hoặc deagle, giữ Mid Doors, CT hoặc Short.",
                "Rotator": "CT Ramp, CT Spawn, Elevator, đứng vị trí dễ rotate hoặc stack cùng đồng đội.",
                "Support": "CT Spawn, Ramp, dễ rotate hỗ trợ site nào yếu."
            },
            "Kết hợp": {
                "A Anchor": "Chỉ peek hoặc boost khi có call cùng team, không đi lẻ.",
                "B Anchor": "Nếu team stack B, giữ cùng một góc để dễ trade.",
                "AWPer/Mid": "Bắn lén hoặc phối hợp đồng đội bắn chéo mid nếu stack mid.",
                "Rotator": "Luôn di chuyển theo call team, không đi lẻ.",
                "Support": "Nếu stack A/B, ở gần Anchor để trade kill."
            },
            "Người ném bom": {
                "A Anchor": "Không có utility, nếu lượm được thì để dành cho retake hoặc giữ T lại lâu nhất.",
                "B Anchor": "Không có utility, ưu tiên giữ mạng và chờ đồng đội trade.",
                "AWPer/Mid": "Không có utility, nếu lượm được thì để dành pick mạng hoặc giữ team lại lâu nhất.",
                "Rotator": "Không có utility, phối hợp chờ T vào site mới cùng nhau bắn.",
                "Support": "Không có utility, phối hợp cùng Anchor lấy mạng lẻ."
            },
            "Đầu round": {
                "A Anchor": "Ẩn nấp vị trí bất ngờ, phối hợp đồng đội stack site nếu có call.",
                "B Anchor": "Stack site với nhiều người hoặc giữ vị trí khó clear.",
                "AWPer/Mid": "Đứng góc unexpected, không peek xa, chờ T đẩy vào scope.",
                "Rotator": "Đứng cùng team, không cần lấy info mid, chờ call.",
                "Support": "Ẩn nấp góc khuất, không cần lộ vị trí sớm."
            },
            "Giữa round": {
                "A Anchor": "Giữ vị trí, báo team khi nghe tiếng hoặc thấy bomb.",
                "B Anchor": "Nếu thấy bomb, báo team và chờ cùng nhau đẩy hoặc giữ góc.",
                "AWPer/Mid": "Nếu lấy được súng, lùi về giữ mạng.",
                "Rotator": "Nếu thấy bomb, di chuyển cùng đồng đội, không solo.",
                "Support": "Giữ góc, hỗ trợ team backup hoặc trade nếu T vào site."
            },
            "Cuối round": {
                "A Anchor": "Nếu còn sống khi bomb nổ, giữ vị trí để lấy súng hoặc bắt lẻ T.",
                "B Anchor": "Nếu còn sống, cố lấy vũ khí hoặc làm đối phương mất nhiều súng.",
                "AWPer/Mid": "Cố giữ súng, không cần entry khi retake.",
                "Rotator": "Nếu còn sống, cố lấy vũ khí, không cố defuse.",
                "Support": "Nếu lấy được súng, rút lui về giữ vũ khí."
            },
            "Buy Kit": {
                "A Anchor": "❌ (không mua kit).",
                "B Anchor": "❌ (không mua kit).",
                "AWPer/Mid": "❌ (không mua kit).",
                "Rotator": "❌ (không mua kit).",
                "Support": "❌ (không mua kit)."
            },
            "Ghi chú": {
                "A Anchor": "Ưu tiên giữ mạng, nếu có cơ hội thì lấy vũ khí hoặc bắt lẻ T.",
                "B Anchor": "Ưu tiên lấy súng, không cần defuse round này.",
                "AWPer/Mid": "Ưu tiên sống, nếu lấy được vũ khí thì giấu đi cho round sau.",
                "Rotator": "Stack cùng team, ưu tiên trade kill.",
                "Support": "Luôn ưu tiên giữ mạng và lượm vũ khí cho round sau."
            }
        }
    },
    {
        name: "Round: Anti-Eco (Biết T eco/pistol)",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Goose, Ramp, Default, tránh các góc dễ bị rush/one tap.",
                "B Anchor": "Plat, Backsite, Window, tránh các góc dễ bị pistol close range.",
                "AWPer/Mid": "Mid Doors hoặc Short, cẩn thận tránh rush mid bất ngờ.",
                "Rotator": "CT Ramp, CT Spawn, Elevator – luôn di chuyển backup khi site yếu.",
                "Support": "CT Ramp, Long, đứng gần Anchor để trade kill nếu bị rush."
            },
            "Kết hợp": {
                "A Anchor": "Phối hợp Support giữ crossfire khi nghe đông T hoặc nghi stack rush.",
                "B Anchor": "Nếu bị rush, phối hợp Rotator giữ crossfire.",
                "AWPer/Mid": "Lấy info Mid, nếu nghe đông T lên mid, rút về CT hoặc site.",
                "Rotator": "Hỗ trợ Anchor bằng flash/smoke khi bị rush.",
                "Support": "Combo cùng Anchor giữ A hoặc backup B/Mid khi cần."
            },
            "Người ném bom": {
                "A Anchor": "Ném molly Short, Long hoặc Pit để ngăn T lao nhanh vào A.",
                "B Anchor": "Molly Tunnels hoặc smoke cửa B chặn rush đầu round.",
                "AWPer/Mid": "Smoke Mid hoặc molly Lower Tunnels khi cần.",
                "Rotator": "Để dành Utility cho retake hoặc cản rush đầu round.",
                "Support": "Smoke CT/Long hoặc flash Short khi team retake."
            },
            "Đầu round": {
                "A Anchor": "Không cần peek xa, chỉ lấy info bằng nades hoặc nghe tiếng.",
                "B Anchor": "Không đẩy Tunnels, chờ T vào site.",
                "AWPer/Mid": "Lấy info bằng scope, không peek khi không có backup.",
                "Rotator": "Không đẩy lẻ, chỉ lấy info khi chắc chắn an toàn.",
                "Support": "Hỗ trợ Anchor ném nade đầu round, giữ vị trí an toàn."
            },
            "Giữa round": {
                "A Anchor": "Nếu bị rush, giữ vị trí thủ sâu và call team backup.",
                "B Anchor": "Nếu bị áp lực, call team, giữ Utility cho retake.",
                "AWPer/Mid": "Nếu mất Mid, báo team và lùi lại site.",
                "Rotator": "Chia Utility hợp lý cho Anchor, hỗ trợ retake.",
                "Support": "Nếu site yếu, chia Utility, không solo lẻ."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất site, giữ mạng để giữ vũ khí, chờ team retake chung.",
                "B Anchor": "Nếu mất site, giữ mạng và vũ khí.",
                "AWPer/Mid": "Setup flash hỗ trợ retake, giữ mạng và vũ khí.",
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