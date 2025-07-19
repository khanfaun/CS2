

const ROW_ORDER = ["Vị trí", "Kết hợp", "Người ném bom", "Đầu round", "Giữa round", "Cuối round", "Buy Kit", "Ghi chú"];

export const trainStrategiesCT5Players = [
    {
        name: "Round: Full Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": {
                "A Anchor": "Giữ Bomb Train (Default), Green Train, Back Green, E-box hoặc giữa site A.",
                "B Anchor": "Giữ Default B (Bomb Train), Backsite, Heaven, hoặc Close Ramp.",
                "AWPer/Mid": "Ivy, Connector, Back Green, hoặc B Heaven, Mid Train.",
                "Rotator": "Connector, Green, Z Connector, B Heaven, linh hoạt backup A/B.",
                "Support": "CT Spawn, E-box, Connector hoặc Ivy, backup A/Mid/B."
            },
            "Kết hợp": {
                "A Anchor": "Khi bị rush A, phối hợp Support hoặc Rotator tạo crossfire tại Default/E-box/Green.",
                "B Anchor": "Khi bị rush, phối hợp Rotator tạo crossfire Default/Heaven/Backsite.",
                "AWPer/Mid": "Hỗ trợ Ivy/A/B, xoay nhanh khi có call, phối hợp Rotator/Support.",
                "Rotator": "Di chuyển giữa các site, phối hợp Anchor khi bị rush.",
                "Support": "Combo cùng A Anchor giữ A, backup Ivy/Mid hoặc nhanh rotate B khi cần."
            },
            "Người ném bom": {
                "A Anchor": "Chủ động smoke Main hoặc Popdog, molly Popdog hoặc T-Main nếu thấy áp lực.",
                "B Anchor": "Molly Upper Ramp đầu round, smoke Ramp hoặc Lower khi T áp lực.",
                "AWPer/Mid": "Smoke Ivy hoặc Popdog, molly Popdog/Ivy/Upper khi cần kiểm soát.",
                "Rotator": "Flash hoặc smoke Connector/Ivy/Ramp hỗ trợ giữ hoặc retake.",
                "Support": "Smoke Connector/E-box hoặc flash Popdog/Ivy khi team retake hoặc bị rush."
            },
            "Đầu round": {
                "A Anchor": "Giữ sâu site, không peek xa T-Main/Popdog, tập trung nghe tiếng.",
                "B Anchor": "Ném molly Ramp sớm, không đẩy sâu Ramp, giữ vị trí thủ sâu hoặc Heaven.",
                "AWPer/Mid": "Lấy info Ivy/Popdog/Connector, ném smoke/flash nếu bị áp lực.",
                "Rotator": "Hỗ trợ Mid/Ivy bằng flash/molly, luôn sẵn sàng rotate khi thấy nguy hiểm.",
                "Support": "Hỗ trợ A bằng smoke hoặc flash, giữ vị trí linh hoạt giữa E-box/CT/Connector."
            },
            "Giữa round": {
                "A Anchor": "Ưu tiên giữ Utility cho retake, không rotate khi chưa mất site, báo team khi nghe đông.",
                "B Anchor": "Giữ Utility cho retake, báo team khi nghe đông B hoặc Upper.",
                "AWPer/Mid": "Dịch chuyển hỗ trợ site yếu, smoke/flash khi cần, báo team nếu mất kiểm soát Mid/Ivy.",
                "Rotator": "Chia Utility hợp lý, cover cho Anchor, giữ mạng khi cần retake.",
                "Support": "Chia Utility cho Anchor, backup site yếu, ưu tiên giữ smoke late round."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, cùng team retake, ưu tiên smoke Popdog/Main hoặc flash site khi vào lại.",
                "B Anchor": "Nếu mất B, cùng team retake, dùng molly/flash khi vào lại.",
                "AWPer/Mid": "Setup flash/smoke cho team retake, không entry lẻ, giữ mạng cho retake.",
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
                "AWPer/Mid": "Lấy info Ivy/Mid là ưu tiên, sống để giữ map control và kit.",
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
                "A Anchor": "Default, Green, E-box, chọn góc khuất, tránh lộ để bị check đầu.",
                "B Anchor": "Default B, Heaven, Backsite, chọn góc khuất, tránh lộ.",
                "AWPer/Mid": "Ivy, Connector, E-box, hoặc Heaven, chọn góc dễ close range trade.",
                "Rotator": "Connector, Green, Heaven, linh hoạt backup site yếu.",
                "Support": "CT Spawn, Connector, backup A hoặc Mid."
            },
            "Kết hợp": {
                "A Anchor": "Luôn phối hợp Support hoặc Rotator tạo crossfire khi T đẩy A, không solo lẻ.",
                "B Anchor": "Phối hợp Rotator giữ crossfire khi bị rush, không đứng lẻ.",
                "AWPer/Mid": "Hỗ trợ lấy info Ivy/Mid, nếu không có AWP thì giữ góc close, không peek lẻ.",
                "Rotator": "Đứng sẵn vị trí dễ rotate, giữ mạng cho retake.",
                "Support": "Hỗ trợ A Anchor hoặc Mid khi bị rush, ném utility giữ T lại."
            },
            "Người ném bom": {
                "A Anchor": "Nếu có smoke/molly, giữ lại cho retake hoặc ném khi T bắt đầu vào site.",
                "B Anchor": "Nếu có molly, dùng sớm để cản entry hoặc giữ cho retake.",
                "AWPer/Mid": "Nếu có smoke/flash, hỗ trợ đồng đội giữ Ivy/Popdog.",
                "Rotator": "Nếu có utility, để dành cho retake, flash/smoke hỗ trợ team.",
                "Support": "Nếu có smoke/flash, giữ cho lúc team cần backup hoặc retake."
            },
            "Đầu round": {
                "A Anchor": "Thủ sâu, không peek xa T-Main/Popdog trừ khi có info chắc chắn.",
                "B Anchor": "Không đẩy Ramp, giữ sâu B site.",
                "AWPer/Mid": "Không lên Ivy/Mid lộ nếu không có smoke/flash, ưu tiên giữ góc.",
                "Rotator": "Không cần lên Mid/Ivy quá cao, chỉ lấy info, backup nhanh.",
                "Support": "Đứng linh hoạt, có thể đổi giữa CT/E-box/Connector."
            },
            "Giữa round": {
                "A Anchor": "Giữ utility, báo team khi nghe đông, ưu tiên giữ mạng.",
                "B Anchor": "Báo team nếu nghe đông B, giữ vị trí, không rotate lung tung.",
                "AWPer/Mid": "Nếu mất Ivy/Mid, báo team và lùi về giữ site.",
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
                "A Anchor": "Default, E-box, Green hoặc stack nhiều người ở A site.",
                "B Anchor": "Default B, Heaven, Backsite hoặc stack nhiều người trong B.",
                "AWPer/Mid": "Nếu có scout hoặc deagle, giữ Ivy, E-box hoặc Heaven.",
                "Rotator": "Connector, Green, Heaven, đứng vị trí dễ rotate hoặc stack cùng đồng đội.",
                "Support": "CT Spawn, E-box, Connector, dễ rotate hỗ trợ site nào yếu."
            },
            "Kết hợp": {
                "A Anchor": "Chỉ peek hoặc boost khi có call cùng team, không đi lẻ.",
                "B Anchor": "Nếu team stack B, giữ cùng một góc để dễ trade.",
                "AWPer/Mid": "Bắn lén hoặc phối hợp đồng đội bắn chéo Ivy/Mid nếu stack mid.",
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
                "A Anchor": "Default, E-box, Green, tránh các góc dễ bị rush/one tap.",
                "B Anchor": "Default B, Heaven, Backsite, tránh các góc dễ bị pistol close range.",
                "AWPer/Mid": "Ivy, Heaven, Connector, tránh các vị trí dễ bị rush bất ngờ.",
                "Rotator": "Connector, Green, Heaven – luôn di chuyển backup khi site yếu.",
                "Support": "CT Spawn, E-box, Connector, đứng gần Anchor để trade kill nếu bị rush."
            },
            "Kết hợp": {
                "A Anchor": "Phối hợp Support giữ crossfire khi nghe đông T hoặc nghi stack rush.",
                "B Anchor": "Nếu bị rush, phối hợp Rotator giữ crossfire.",
                "AWPer/Mid": "Lấy info Ivy/Mid, nếu nghe đông T lên Ivy/Mid, rút về E-box/Back Green hoặc site.",
                "Rotator": "Hỗ trợ Anchor bằng flash/smoke khi bị rush.",
                "Support": "Combo cùng Anchor giữ A hoặc backup B/Mid khi cần."
            },
            "Người ném bom": {
                "A Anchor": "Ném molly T-Main hoặc Popdog để ngăn T lao nhanh vào A.",
                "B Anchor": "Molly Ramp hoặc smoke Ramp chặn rush đầu round.",
                "AWPer/Mid": "Smoke Ivy hoặc molly Popdog khi cần.",
                "Rotator": "Để dành Utility cho retake hoặc cản rush đầu round.",
                "Support": "Smoke Connector/E-box hoặc flash Popdog/Ivy khi team retake."
            },
            "Đầu round": {
                "A Anchor": "Không cần peek xa, chỉ lấy info bằng nades hoặc nghe tiếng.",
                "B Anchor": "Không đẩy Ramp, chờ T vào site.",
                "AWPer/Mid": "Lấy info bằng scope, không peek khi không có backup.",
                "Rotator": "Không đẩy lẻ, chỉ lấy info khi chắc chắn an toàn.",
                "Support": "Hỗ trợ Anchor ném nade đầu round, giữ vị trí an toàn."
            },
            "Giữa round": {
                "A Anchor": "Nếu bị rush, giữ vị trí thủ sâu và call team backup.",
                "B Anchor": "Nếu bị áp lực, call team, giữ Utility cho retake.",
                "AWPer/Mid": "Nếu mất Ivy/Mid, báo team và lùi lại site.",
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
