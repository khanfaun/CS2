

const ROW_ORDER = ["Vị trí", "Kết hợp", "Người ném bom", "Đầu round", "Giữa round", "Cuối round", "Buy Kit"];

export const mirageStrategiesCT5Players = [
    {
        name: "Round: Full Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { 
                "A Anchor": "Giữ Default, Pit hoặc Triple trên A site.", 
                "B Anchor": "Giữ Bench, Van, Market, hoặc sâu trong B site.", 
                "AWPer/Mid": "Window, Top Mid, Connector, Short.", 
                "Rotator": "Connector, Short, Jungle – xoay backup site yếu.", 
                "Support": "CT, Jungle, hỗ trợ A/Mid hoặc backup site yếu.",
                "Ghi chú": "Xoay vị trí linh hoạt theo call, giữ map control"
            },
            "Kết hợp": { 
                "A Anchor": "Khi bị rush A, phối hợp với Support hoặc Rotator để tạo crossfire tại Default/Pit.", 
                "B Anchor": "Khi bị rush, phối hợp Rotator để giữ crossfire Bench/Van.", 
                "AWPer/Mid": "Hỗ trợ Mid/A/B, xoay nhanh khi có call, phối hợp Rotator hoặc Support.", 
                "Rotator": "Di chuyển giữa các site, phối hợp A Anchor hoặc B Anchor khi bị rush.", 
                "Support": "Combo cùng A Anchor giữ A, đôi lúc backup Mid hoặc A khi bị áp lực.",
                "Ghi chú": "Giao tiếp tốt, backup site yếu theo tình huống"
            },
            "Người ném bom": { 
                "A Anchor": "Chủ động smoke Ramp, molly Palace nếu thấy áp lực.", 
                "B Anchor": "Molly apps đầu round, smoke apps khi T rush mạnh.", 
                "AWPer/Mid": "Smoke Window hoặc flash Mid, molly Under khi cần kiểm soát Mid.", 
                "Rotator": "Flash hoặc smoke Short/Connector hỗ trợ giữ hoặc retake site.", 
                "Support": "Smoke CT/Jungle hoặc flash Ramp/Palace khi team retake hoặc bị rush.",
                "Ghi chú": "Chia Utility hợp lý, timing đúng khi bị rush"
            },
            "Đầu round": { 
                "A Anchor": "Luôn giữ sâu site, không peek xa, tập trung nghe tiếng Ramp/Palace để phản ứng.", 
                "B Anchor": "Ném molly apps sớm, không đẩy lên apps, giữ vị trí thủ sâu.", 
                "AWPer/Mid": "Lên Window lấy info Top Mid, ném smoke/flash nếu bị áp lực.", 
                "Rotator": "Hỗ trợ Mid bằng flash/molly, luôn sẵn sàng rotate khi thấy nguy hiểm.", 
                "Support": "Hỗ trợ A bằng smoke hoặc flash, giữ vị trí linh hoạt giữa CT và Jungle.",
                "Ghi chú": "Nếu thấy đông Mid/apps, Rotator hoặc Support xoay nhanh"
            },
            "Giữa round": { 
                "A Anchor": "Ưu tiên giữ Utility cho retake, không rotate khi chưa mất site, báo team nếu nghe đông.", 
                "B Anchor": "Giữ Utility, báo team khi nghe đông B, không rời site khi chưa chắc chắn.", 
                "AWPer/Mid": "Dịch chuyển hỗ trợ site yếu, smoke/flash khi cần, báo team nếu mất kiểm soát Mid.", 
                "Rotator": "Chia Utility hợp lý, cover cho Anchor, giữ mạng khi cần retake.", 
                "Support": "Chia Utility cho Anchor, backup site yếu, ưu tiên giữ smoke late round.",
                "Ghi chú": "Không entry lẻ, luôn giữ kit cho retake"
            },
            "Cuối round": { 
                "A Anchor": "Nếu mất A, cùng team retake, sử dụng smoke Ramp hoặc Palace để vào lại.", 
                "B Anchor": "Nếu mất B, phối hợp team retake, dùng molly/flash khi vào lại.", 
                "AWPer/Mid": "Setup flash/smoke khi team retake, không entry lẻ, giữ mạng cho retake.", 
                "Rotator": "Setup smoke/flash cho team vào lại site, không nên là người entry khi retake.", 
                "Support": "Flash/molly hỗ trợ team retake, giữ mạng nếu không chắc thắng retake.",
                "Ghi chú": "Nếu không retake được, save kit/súng"
            },
            "Buy Kit": { 
                "A Anchor": "✅", 
                "B Anchor": "✅", 
                "AWPer/Mid": "✅", 
                "Rotator": "❌", 
                "Support": "✅",
                "Ghi chú": "3-4 kit là tối ưu; Anchor + Support + AWPer"
            },
        }
    },
    {
        name: "Round: Force Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { "A Anchor": "Giữ Default, Pit hoặc Triple, ưu tiên vị trí khuất tầm nhìn T.", "B Anchor": "Bench, Van hoặc Market, không đứng lộ để tránh scout hoặc pistol T.", "AWPer/Mid": "Window, Connector hoặc Short, tùy theo vũ khí và buy của team.", "Rotator": "Connector, Jungle, Short, di chuyển backup nhanh khi nghe info.", "Support": "CT, Jungle hoặc vị trí có thể backup A/Mid, tùy site yếu." },
            "Kết hợp": { "A Anchor": "Luôn phối hợp Support hoặc Rotator tạo crossfire nếu T vào A, không tự đẩy lẻ.", "B Anchor": "Phối hợp Rotator để giữ crossfire khi B bị rush, không solo lẻ.", "AWPer/Mid": "Hỗ trợ lấy info Mid, nếu không có AWP thì đứng góc chờ close range.", "Rotator": "Không lao lên mid quá xa, giữ mạng cho retake.", "Support": "Hỗ trợ A Anchor hoặc Mid khi bị rush, ném utility giữ T lại." },
            "Người ném bom": { "A Anchor": "Nếu có smoke/molly thì giữ lại cho retake hoặc ném khi T bắt đầu vào site.", "B Anchor": "Nếu có molly, dùng sớm để cản entry hoặc giữ lại cho retake.", "AWPer/Mid": "Nếu có smoke hoặc flash, hỗ trợ đồng đội giữ mid/control short.", "Rotator": "Nếu có utility, để dành cho retake, flash/ smoke hỗ trợ team.", "Support": "Nếu có smoke/flash, giữ cho lúc team cần backup hoặc retake." },
            "Đầu round": { "A Anchor": "Ưu tiên thủ sâu, không peek ramp hoặc Palace trừ khi có info chắc chắn.", "B Anchor": "Không đẩy apps, chờ T vào mới bắn.", "AWPer/Mid": "Không lên window lộ nếu không có smoke/flash, ưu tiên giữ góc chặt.", "Rotator": "Không cần lên Mid, chỉ lấy info và sẵn sàng backup site yếu.", "Support": "Đứng vị trí linh hoạt, có thể đổi giữa CT/Jungle/Mid." },
            "Giữa round": { "A Anchor": "Giữ utility để retake, báo team khi thấy nhiều T đẩy A.", "B Anchor": "Báo team nếu nghe đông apps, giữ vị trí thủ site, không rotate lung tung.", "AWPer/Mid": "Nếu mất Mid, báo team và rút về giữ Jungle hoặc CT.", "Rotator": "Nếu thấy B/A yếu, di chuyển backup, không rotate khi chưa có call chắc chắn.", "Support": "Chia utility cho Anchor, backup site yếu, giữ mạng late round." },
            "Cuối round": { "A Anchor": "Nếu mất A, cùng team chờ smoke/flash rồi cùng retake.", "B Anchor": "Nếu mất B, giữ mạng và chờ team retake chung.", "AWPer/Mid": "Setup flash hỗ trợ retake, không đi lẻ.", "Rotator": "Setup smoke/flash cho team retake site, không entry trước.", "Support": "Flash/molly hỗ trợ retake, không solo lẻ." },
            "Buy Kit": { "A Anchor": "✅", "B Anchor": "✅", "AWPer/Mid": "✅", "Rotator": "❌", "Support": "✅" },
            "Ghi chú": { "A Anchor": "Hạn chế đổi mạng sớm, ưu tiên giữ mạng vì vũ khí yếu.", "B Anchor": "Đừng liều lao lên đổi mạng, giữ vũ khí cho round sau.", "AWPer/Mid": "Ưu tiên sống, giữ vũ khí mạnh cho round sau.", "Rotator": "Cẩn thận khi rotate, không để chết lẻ.", "Support": "Luôn giao tiếp tốt với Anchor, hạn chế đẩy lẻ." },
        }
    },
    {
        name: "Round: Eco/Full Save",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { "A Anchor": "Default hoặc Pit, né góc lộ tránh bị check đầu tiên.", "B Anchor": "Bench, Van hoặc Market, vị trí dễ one tap hoặc stack nhiều người.", "AWPer/Mid": "Nếu có scout hoặc deagle, giữ window, short hoặc connector.", "Rotator": "Jungle, Connector, Short, đứng vị trí dễ rotate hoặc stack cùng đồng đội.", "Support": "CT hoặc Jungle, dễ rotate hỗ trợ site nào yếu." },
            "Kết hợp": { "A Anchor": "Chỉ peek hoặc boost khi có call cùng team, không đẩy một mình.", "B Anchor": "Nếu team stack B, giữ cùng một góc để dễ trade.", "AWPer/Mid": "Bắn lén hoặc phối hợp đồng đội bắn chéo mid nếu stack mid.", "Rotator": "Luôn di chuyển theo call team, không đi lẻ.", "Support": "Nếu stack A/B, ở gần Anchor để trade kill." },
            "Người ném bom": { "A Anchor": "Không có utility, nếu lượm được thì để dành cho retake hoặc giữ T lại lâu nhất.", "B Anchor": "Không có utility, ưu tiên giữ mạng và chờ đồng đội trade.", "AWPer/Mid": "Không có utility, nếu lượm được thì để dành pick mạng hoặc giữ team lại lâu nhất.", "Rotator": "Không có utility, phối hợp chờ T vào site mới cùng nhau bắn.", "Support": "Không có utility, phối hợp cùng Anchor lấy mạng lẻ." },
            "Đầu round": { "A Anchor": "Ẩn nấp vị trí bất ngờ, phối hợp đồng đội stack site nếu có call.", "B Anchor": "Stack site với nhiều người hoặc giữ vị trí khó clear.", "AWPer/Mid": "Đứng góc unexpected, không peek xa, chờ T đẩy vào scope.", "Rotator": "Đứng cùng team, không cần lấy info mid, chờ call.", "Support": "Ẩn nấp góc khuất, không cần lộ vị trí sớm." },
            "Giữa round": { "A Anchor": "Giữ vị trí, báo team khi nghe tiếng hoặc thấy bomb.", "B Anchor": "Nếu thấy bomb, báo team và chờ cùng nhau đẩy hoặc giữ góc.", "AWPer/Mid": "Nếu lấy được súng, lùi về giữ mạng.", "Rotator": "Nếu thấy bomb, di chuyển cùng đồng đội, không solo.", "Support": "Giữ góc, hỗ trợ team backup hoặc trade nếu T vào site." },
            "Cuối round": { "A Anchor": "Nếu còn sống khi bomb nổ, giữ vị trí để lấy súng của T hoặc lượm vũ khí rơi.", "B Anchor": "Nếu còn sống, cố lấy vũ khí hoặc làm đối phương mất nhiều súng.", "AWPer/Mid": "Cố giữ súng, không cần entry khi retake.", "Rotator": "Nếu còn sống, cố lấy vũ khí, không cố defuse.", "Support": "Nếu lấy được súng, rút lui về giữ vũ khí." },
            "Buy Kit": { "A Anchor": "❌", "B Anchor": "❌", "AWPer/Mid": "❌", "Rotator": "❌", "Support": "❌" },
            "Ghi chú": { "A Anchor": "Ưu tiên giữ mạng, nếu có cơ hội thì lấy vũ khí hoặc bắt lẻ T.", "B Anchor": "Ưu tiên lấy súng, không cần defuse round này.", "AWPer/Mid": "Ưu tiên sống, nếu lấy được vũ khí thì giấu đi cho round sau.", "Rotator": "Stack cùng team, ưu tiên trade kill.", "Support": "Luôn ưu tiên giữ mạng và lượm vũ khí cho round sau." },
        }
    },
    {
        name: "Round: Anti-Eco (Biết T eco/pistol)",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { "A Anchor": "Giữ Default, Pit hoặc vị trí khuất, hạn chế đứng lộ ăn one tap.", "B Anchor": "Bench, Van hoặc Market, tránh các góc dễ bị pistol close range.", "AWPer/Mid": "Window hoặc Short, cẩn thận tránh rush mid bất ngờ.", "Rotator": "Connector, Jungle, Short – luôn di chuyển backup khi site yếu.", "Support": "CT hoặc Jungle, đứng gần Anchor để trade kill nếu bị rush." },
            "Kết hợp": { "A Anchor": "Phối hợp Support giữ crossfire khi nghe đông T hoặc nghi stack rush.", "B Anchor": "Nếu bị rush, phối hợp Rotator giữ crossfire.", "AWPer/Mid": "Lấy info Mid, nếu nghe đông T lên mid, rút về Jungle hoặc Connector.", "Rotator": "Hỗ trợ Anchor bằng flash/smoke khi bị rush.", "Support": "Combo cùng Anchor giữ A hoặc backup B/Mid khi cần." },
            "Người ném bom": { "A Anchor": "Ném molly Ramp/Palace để ngăn T lao nhanh vào A.", "B Anchor": "Molly apps hoặc short chặn rush, smoke apps nếu nghe đông.", "AWPer/Mid": "Smoke Window hoặc molly Under khi cần.", "Rotator": "Để dành Utility cho retake hoặc cản rush đầu round.", "Support": "Smoke CT/Jungle hoặc flash khi team cần retake." },
            "Đầu round": { "A Anchor": "Không cần peek xa, chỉ lấy info bằng nades hoặc nghe tiếng.", "B Anchor": "Không đẩy apps, chờ T vào site.", "AWPer/Mid": "Lấy info bằng scope, không peek khi không có backup.", "Rotator": "Không đẩy lẻ, chỉ lấy info khi chắc chắn an toàn.", "Support": "Hỗ trợ Anchor ném nade đầu round, giữ vị trí an toàn." },
            "Giữa round": { "A Anchor": "Nếu bị rush, giữ vị trí thủ sâu và call team backup.", "B Anchor": "Nếu bị áp lực, call team, giữ Utility cho retake.", "AWPer/Mid": "Nếu mất Mid, báo team và lùi lại site.", "Rotator": "Chia Utility hợp lý cho Anchor, hỗ trợ retake.", "Support": "Nếu site yếu, chia Utility, không solo lẻ." },
            "Cuối round": { "A Anchor": "Nếu mất site, giữ mạng để giữ vũ khí, chờ team retake chung.", "B Anchor": "Nếu mất site, giữ mạng và vũ khí.", "AWPer/Mid": "Setup flash hỗ trợ retake, giữ mạng và vũ khí.", "Rotator": "Setup flash/smoke cho team vào lại site.", "Support": "Flash/molly hỗ trợ team retake." },
            "Buy Kit": { "A Anchor": "✅", "B Anchor": "✅", "AWPer/Mid": "✅", "Rotator": "❌", "Support": "✅" },
            "Ghi chú": { "A Anchor": "Ưu tiên giữ mạng, không lao đổi mạng với pistol T.", "B Anchor": "Đứng góc an toàn, giữ vị trí, ưu tiên không chết.", "AWPer/Mid": "Không entry trước, giữ mạng cho round sau.", "Rotator": "Không solo đẩy, chỉ đi chung backup team.", "Support": "Luôn giữ mạng, giao tiếp tốt, chia Utility cho đồng đội." },
        }
    }
];