

const ROW_ORDER = ["Vị trí", "Kết hợp", "Người ném bom", "Đầu round", "Giữa round", "Cuối round", "Buy Kit", "Ghi chú"];

export const infernoStrategiesCT5Players = [
    {
        name: "Round: Full Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { 
                "A Anchor": "Giữ Pit, Graveyard, Default hoặc Backsite trên A.",
                "B Anchor": "Giữ New Box, 1st/2nd Oranges, Dark hoặc Backsite.",
                "AWPer/Mid": "Mid (Arch), Library, Moto, Long, hoặc Short.",
                "Rotator": "Arch, Library, Moto, CT – linh hoạt di chuyển backup site yếu.",
                "Support": "Library, Moto, Pit phụ hoặc Arch, hỗ trợ A/Mid hoặc backup B."
            },
            "Kết hợp": {
                "A Anchor": "Khi bị rush, phối hợp với Support hoặc Rotator tạo crossfire ở Pit/Default.",
                "B Anchor": "Khi bị rush, phối hợp Rotator tạo crossfire New Box/Oranges.",
                "AWPer/Mid": "Hỗ trợ Mid/A/B, di chuyển nhanh khi có call, phối hợp Rotator/Support.",
                "Rotator": "Di chuyển giữa hai site, phối hợp Anchor khi bị rush.",
                "Support": "Combo với A Anchor giữ A, backup Mid hoặc di chuyển backup site yếu."
            },
            "Người ném bom": {
                "A Anchor": "Chủ động smoke Long, molly Balcony hoặc Short nếu thấy áp lực.",
                "B Anchor": "Molly Banana đầu round, smoke Banana khi T áp lực.",
                "AWPer/Mid": "Smoke Mid hoặc Arch, molly Top Mid hoặc Boiler khi cần.",
                "Rotator": "Flash/Smoke CT/Arch/Moto hỗ trợ giữ hoặc retake.",
                "Support": "Smoke Library/Arch hoặc flash Short/Mid khi team retake hoặc bị rush."
            },
            "Đầu round": {
                "A Anchor": "Không peek xa Mid/Apps, giữ sâu site, tập trung nghe tiếng Mid/Apps.",
                "B Anchor": "Ném molly/chày Banana sớm, không đẩy sâu Banana trừ khi có backup và control.",
                "AWPer/Mid": "Lên Arch giữ góc, dùng flash/molly kiểm soát khi bị áp lực.",
                "Rotator": "Hỗ trợ Mid hoặc Banana bằng flash/molly, sẵn sàng rotate khi nguy hiểm.",
                "Support": "Hỗ trợ Anchor bằng smoke/flash, giữ vị trí linh hoạt Library/Moto."
            },
            "Giữa round": {
                "A Anchor": "Giữ Utility để retake, không rotate nếu chưa mất site, báo team khi nghe đông hoặc T control Apps.",
                "B Anchor": "Giữ Utility cho late round, báo team khi nghe đông Banana.",
                "AWPer/Mid": "Dịch chuyển hỗ trợ site yếu, smoke/flash kiểm soát Mid.",
                "Rotator": "Chia Utility hợp lý, cover cho Anchor, giữ mạng cho retake.",
                "Support": "Chia Utility hợp lý, backup site yếu, giữ smoke late round."
            },
            "Cuối round": {
                "A Anchor": "Nếu mất A, phối hợp retake, ưu tiên smoke Long/Short hoặc flash site khi vào lại.",
                "B Anchor": "Nếu mất B, giữ mạng đợi team, retake cùng nhau với smoke/molly/flash.",
                "AWPer/Mid": "Setup flash/smoke cho retake, giữ mạng hỗ trợ team.",
                "Rotator": "Setup smoke/flash khi team vào lại site, không entry đầu tiên khi retake.",
                "Support": "Flash/molly hỗ trợ retake, giữ mạng nếu không chắc thắng retake."
            },
            "Buy Kit": {
                "A Anchor": "✅ (luôn mua kit khi đủ tiền).",
                "B Anchor": "✅ (ưu tiên mua kit).",
                "AWPer/Mid": "✅ (luôn mua kit nếu đủ tiền).",
                "Rotator": "❌ (ít mua kit, trừ khi Anchor/Support không mua).",
                "Support": "✅ (luôn mua kit nếu đủ tiền)."
            },
            "Ghi chú": {
                "A Anchor": "Ưu tiên giữ mạng, sống để còn kit và hỗ trợ retake.",
                "B Anchor": "Giữ vị trí đến cùng, ưu tiên sống với kit.",
                "AWPer/Mid": "Lấy info Mid là ưu tiên, giữ mạng cho retake và giữ map control.",
                "Rotator": "Luôn để ý info toàn map, không rotate lung tung nếu chưa chắc chắn.",
                "Support": "Backup chính, chia Utility, giao tiếp tốt khi rotate."
            }
        }
    },
    {
        name: "Round: Force Buy",
        rowOrder: ROW_ORDER,
        data: {
            "Vị trí": { 
                "A Anchor": "Pit, Graveyard, Default, chọn góc khuất, tránh lộ để bị check đầu.",
                "B Anchor": "New Box, Oranges, Dark hoặc Backsite.",
                "AWPer/Mid": "Arch, Library hoặc Mid, chọn góc dễ close range trade.",
                "Rotator": "Arch, Library, CT, backup site yếu theo call.",
                "Support": "Library, Moto hoặc backup Arch, hỗ trợ A/Mid hoặc backup B."
            },
            "Kết hợp": { 
                "A Anchor": "Luôn phối hợp Support hoặc Rotator tạo crossfire, không đẩy lẻ.",
                "B Anchor": "Phối hợp Rotator giữ crossfire khi bị rush.",
                "AWPer/Mid": "Hỗ trợ lấy info Mid, giữ góc gần, không lên quá cao nếu không có flash/smoke.",
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
                "A Anchor": "Giữ sâu, không peek xa Mid/Apps.",
                "B Anchor": "Không đẩy Banana, thủ sâu site.",
                "AWPer/Mid": "Không peek xa, chỉ lấy info khi chắc chắn an toàn.",
                "Rotator": "Không lên Mid/Banana quá cao, chỉ lấy info, backup nhanh.",
                "Support": "Đứng linh hoạt, đổi giữa Library/Moto/Arch."
            },
            "Giữa round": { 
                "A Anchor": "Giữ utility, báo team khi nghe đông, ưu tiên sống.",
                "B Anchor": "Giữ vị trí, báo team khi nghe đông, ưu tiên sống.",
                "AWPer/Mid": "Nếu mất Mid, rút về giữ site, báo team.",
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
                "A Anchor": "Pit, Graveyard hoặc Default, tránh góc dễ bị check đầu.",
                "B Anchor": "New Box, Oranges, Dark hoặc stack chung nhiều người.",
                "AWPer/Mid": "Nếu có scout/deagle, giữ Arch, Library hoặc Mid.",
                "Rotator": "Library, Arch, CT, đứng vị trí dễ rotate hoặc stack chung đồng đội.",
                "Support": "Library, Moto hoặc gần Anchor để trade kill."
            },
            "Kết hợp": { 
                "A Anchor": "Chỉ peek khi call chung, hoặc stack nhiều người tại A.",
                "B Anchor": "Stack B nếu team call, phối hợp cùng nhau pick khi T vào.",
                "AWPer/Mid": "Bắn lén hoặc phối hợp đồng đội trade kill nếu stack mid.",
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
                "A Anchor": "Pit, Graveyard, Default, tránh các góc dễ bị rush/one tap.",
                "B Anchor": "New Box, Oranges, Dark, chọn góc an toàn, hạn chế close range trade.",
                "AWPer/Mid": "Arch, Library, Mid, không đứng góc dễ bị rush bất ngờ.",
                "Rotator": "Arch, Library, CT – backup site yếu theo call.",
                "Support": "Library, Moto, đứng gần Anchor để trade kill."
            },
            "Kết hợp": { 
                "A Anchor": "Phối hợp Support giữ crossfire, tránh solo.",
                "B Anchor": "Phối hợp Rotator giữ crossfire nếu bị rush.",
                "AWPer/Mid": "Lấy info Mid, nếu nghe đông T lên Mid, rút về giữ site.",
                "Rotator": "Hỗ trợ Anchor bằng flash/smoke khi bị rush.",
                "Support": "Combo với Anchor giữ site, backup khi bị rush."
            },
            "Người ném bom": { 
                "A Anchor": "Molly Apps, Short hoặc Mid để ngăn T rush nhanh.",
                "B Anchor": "Molly/HE Banana hoặc smoke chặn rush đầu round.",
                "AWPer/Mid": "Smoke/Molly Top Mid khi cần.",
                "Rotator": "Để dành Utility cho retake hoặc cản rush đầu round.",
                "Support": "Smoke/flash hỗ trợ backup/retake."
            },
            "Đầu round": { 
                "A Anchor": "Không cần peek xa, lấy info bằng nade hoặc nghe tiếng.",
                "B Anchor": "Không đẩy Banana, giữ vị trí thủ sâu.",
                "AWPer/Mid": "Giữ scope lấy info, không peek xa khi không có backup.",
                "Rotator": "Không đẩy lẻ, chỉ lấy info khi an toàn.",
                "Support": "Hỗ trợ Anchor ném nade, giữ vị trí an toàn."
            },
            "Giữa round": { 
                "A Anchor": "Nếu bị rush, giữ sâu, call team backup.",
                "B Anchor": "Nếu nghe đông, giữ Utility, chờ team backup.",
                "AWPer/Mid": "Nếu mất Mid, lùi về site.",
                "Rotator": "Backup hợp lý, chia Utility cho Anchor.",
                "Support": "Chia Utility cho Anchor, giữ mạng."
            },
            "Cuối round": { 
                "A Anchor": "Nếu mất site, giữ mạng, ưu tiên giữ vũ khí.",
                "B Anchor": "Nếu mất B, giữ mạng và vũ khí.",
                "AWPer/Mid": "Setup flash/retake, giữ mạng.",
                "Rotator": "Flash/smoke hỗ trợ retake.",
                "Support": "Flash/molly hỗ trợ team vào lại site."
            },
            "Buy Kit": { 
                "A Anchor": "✅ (ưu tiên mua kit).",
                "B Anchor": "✅ (ưu tiên mua kit).",
                "AWPer/Mid": "✅ (nếu đủ tiền).",
                "Rotator": "❌ (chỉ mua nếu không ai mua được).",
                "Support": "✅ (ưu tiên mua kit)."
            },
            "Ghi chú": { 
                "A Anchor": "Giữ mạng, tránh lao đổi mạng với pistol T.",
                "B Anchor": "Đứng vị trí an toàn, ưu tiên giữ mạng.",
                "AWPer/Mid": "Không entry trước, giữ mạng cho round sau.",
                "Rotator": "Không solo đẩy, backup hợp lý.",
                "Support": "Giao tiếp tốt, ưu tiên giữ mạng."
            }
        }
    }
];