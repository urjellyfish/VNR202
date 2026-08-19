// src/data/slidesData.js
// Dữ liệu 17 slide bài thuyết trình: "Đảng lãnh đạo chuyển hướng chiến lược giải phóng dân tộc và Cách mạng Tháng Tám (1939 – 1945)"

export const presentationInfo = {
  title: "Đảng Lãnh Đạo Chuyển Hướng Chiến Lược Giải Phóng Dân Tộc & Cách Mạng Tháng Tám",
  period: "1939 – 1945",
  author: "Bài thuyết trình Lịch sử Đảng Cộng sản Việt Nam",
  subtitle: "Hành trình từ chuyển hướng chiến lược đến Thắng lợi vĩ đại Mùa Thu tháng Tám năm 1945",
  totalSlides: 17,
};

export const slides = [
  {
    id: 1,
    slideNumber: "01",
    layoutType: "hero",
    badge: "Bối Cảnh Lịch Sử",
    period: "1939 – 1940",
    title: "Bối Cảnh Lịch Sử Thế Giới & Trong Nước",
    subtitle: "Sự chuyển biến mau lẹ của tình hình chính trị và nỗi đau 'Một cổ hai tròng'",
    themeColor: "red",
    heroMetrics: [
      { label: "09/1939", value: "CTTG II Bùng Nổ", desc: "Đức tấn công Ba Lan, Pháp tham chiến" },
      { label: "06/1940", value: "Pháp Đầu Hàng Đức", desc: "Chính quyền thuộc địa siết chặt bóc lột" },
      { label: "09/1940", value: "Nhật Vào Đông Dương", desc: "Nhân dân chịu cảnh 'Một cổ hai tròng'" }
    ],
    content: {
      leftPillar: {
        title: "Tình Hình Thế Giới: CTTG II",
        icon: "Globe",
        points: [
          "Tháng 9/1939: Chiến tranh thế giới thứ hai bùng nổ tác động sâu sắc toàn cầu.",
          "Tháng 6/1940: Phát xít Đức chiếm Paris, Chính phủ Pháp quỳ gối đầu hàng.",
          "Thực dân Pháp ở Đông Dương thi hành chính thức chính sách kinh tế chỉ huy, vơ vét sức người sức của phục vụ chiến tranh."
        ]
      },
      rightPillar: {
        title: "Tình Hình Trong Nước: 'Một Cổ Hai Tròng'",
        icon: "ShieldAlert",
        points: [
          "Tháng 9/1940: Phát xít Nhật tràn vào Đông Dương, Pháp dâng quyền lợi và câu kết với Nhật.",
          "Nhân dân Việt Nam lâm vào thảm cảnh bị cả Pháp và Nhật bóc lột, vơ vét tận cùng.",
          "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp và phát xít Nhật trở thành mâu thuẫn chủ yếu duy nhất."
        ]
      }
    },
    historicalQuote: {
      quote: "Mâu thuẫn giữa dân tộc Việt Nam với thực dân Pháp và phát xít Nhật là mâu thuẫn chủ yếu, gay gắt nhất cần phải giải quyết ngay lập tức.",
      speaker: "Văn kiện Đảng 1939-1940"
    }
  },
  {
    id: 2,
    slideNumber: "02",
    layoutType: "timeline-stepper",
    badge: "Bước Đầu Chuyển Hướng",
    period: "11/1939 – 11/1940",
    title: "Bước Đầu Chuyển Hướng Chỉ Đạo Chiến Lược",
    subtitle: "Mở đầu sự chuyển hướng chiến lược qua hai Hội nghị Trung ương quan trọng",
    themeColor: "amber",
    steps: [
      {
        stepNumber: "01",
        time: "11/1939",
        title: "Hội Nghị Trung Ương 6",
        location: "Bà Điểm (Hóc Môn)",
        chair: "Tổng Bí thư Nguyễn Văn Cừ",
        points: [
          "Đặt nhiệm vụ Giải phóng Dân tộc lên hàng đầu và cấp bách nhất.",
          "Tạm gác khẩu hiệu 'Cách mạng ruộng đất', chống tịch thu ruộng đất.",
          "Thành lập 'Mặt trận Thống nhất Dân tộc Phản đế Đông Dương'."
        ]
      },
      {
        stepNumber: "02",
        time: "11/1940",
        title: "Hội Nghị Cán Bộ Trung Ương",
        location: "Đình Bảng (Bắc Ninh)",
        chair: "Ban Chấp hành Trung ương",
        points: [
          "Tái lập Ban Chấp hành Trung ương Đảng chính thức.",
          "Duy trì lực lượng vũ trang Bắc Sơn làm nòng cốt căn cứ địa.",
          "Khẳng định tiếp tục đường lối đặt giải phóng dân tộc lên trên hết."
        ]
      }
    ],
    historicalQuote: {
      quote: "Bước đường sinh tồn của các dân tộc Đông Dương không có đường nào khác hơn là đường lộ giải phóng dân tộc.",
      speaker: "Nghị quyết Hội nghị Trung ương 6 (11/1939)"
    }
  },
  {
    id: 3,
    slideNumber: "03",
    layoutType: "split-feature",
    badge: "Bước Nhảy Vọt Chiến Lược",
    period: "05/1941",
    title: "Hội Nghị Trung Ương 8 (5/1941) - Hoàn Chỉnh Chiến Lược",
    subtitle: "Nguyễn Ái Quốc trở về nước chủ trì & Quyết định lịch sử thành lập Việt Minh",
    themeColor: "red",
    featureCard: {
      tag: "SỰ KIỆN LỊCH SỬ THIÊNG LIÊNG",
      date: "28/01/1941",
      title: "Lãnh tụ Nguyễn Ái Quốc về nước",
      desc: "Sau 30 năm bôn ba tìm đường cứu nước, Người trở về Pắc Bó (Cao Bằng) trực tiếp chỉ đạo cách mạng Việt Nam và chủ trì Hội nghị Trung ương 8 (5/1941)."
    },
    decisions: [
      {
        icon: "Flag",
        title: "Đặt Giải Phóng Dân Tộc Lên Hàng Tối Cao",
        desc: "Quyền lợi của bộ phận, giai cấp phải phục tùng sinh mệnh của toàn thể quốc gia dân tộc."
      },
      {
        icon: "Award",
        title: "Thành Lập Mặt Trận Việt Minh (19/5/1941)",
        desc: "Việt Nam Độc lập Đồng minh đại đoàn kết mọi tầng lớp nhân dân yêu nước."
      },
      {
        icon: "Users",
        title: "Tập Hợp Khối Đại Đoàn Kết Toàn Dân",
        desc: "Đoàn kết công, nông, trí thức, tiểu tư sản, thương gia, điền chủ yêu nước."
      }
    ],
    historicalQuote: {
      quote: "Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng... thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến nghìn năm cũng không đòi lại được.",
      speaker: "Nghị quyết Hội nghị Trung ương 8 (5/1941)"
    }
  },
  {
    id: 4,
    slideNumber: "04",
    layoutType: "comparison",
    badge: "Hoàn Chỉnh Chiến Lược",
    period: "05/1941",
    title: "Hội Nghị Trung Ương 8: Hoàn Chỉnh Đường Lối Chiến Lược",
    subtitle: "Sự phát triển lý luận sáng tạo và khắc phục triệt để hạn chế trước đây",
    themeColor: "amber",
    comparison: {
      leftBox: {
        tag: "BẤT CẬP TRƯỚC ĐÂY",
        title: "Luận Cương Tháng 10/1930",
        points: [
          "Nặng về đấu tranh giai cấp và cách mạng ruộng đất.",
          "Chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
          "Chính thể dự kiến: 'Xô viết công nông' mang tính giai cấp hẹp."
        ]
      },
      rightBox: {
        tag: "BƯỚC PHÁT TRUYỂN SÁNG TẠO",
        title: "Nghị Quyết Trung Ương 8 (5/1941)",
        points: [
          "Đặt giải phóng dân tộc lên hàng ưu tiên số 1 tuyệt đối.",
          "Tạm gác khẩu hiệu ruộng đất, tập trung chống đế quốc.",
          "Chính thể mới: Nước 'Việt Nam Dân chủ Cộng hòa' của toàn dân.",
          "Quyết định dùng lá Cờ đỏ Sao vàng làm đại diện dân tộc."
        ]
      }
    },
    historicalQuote: {
      quote: "Hội nghị Trung ương 8 đã khắc phục triệt để hạn chế của Luận cương 10/1930, trở thành ngọn cờ ngời sáng dẫn đường toàn dân.",
      speaker: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam"
    }
  },
  {
    id: 5,
    slideNumber: "05",
    layoutType: "cards-3col",
    badge: "Tiếng Súng Khởi Đầu",
    period: "1940 – 1941",
    title: "Các Cuộc Nổi Dậy Đầu Tiên Tiền Khởi Nghĩa",
    subtitle: "Những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc",
    themeColor: "red",
    cards: [
      {
        icon: "Flame",
        time: "27/09/1940",
        title: "Khởi Nghĩa Bắc Sơn",
        location: "Lạng Sơn",
        desc: "Đột kích đồn bốt Pháp tại Lạng Sơn, thành lập Đội du kích Bắc Sơn - mầm mống lực lượng vũ trang."
      },
      {
        icon: "Zap",
        time: "23/11/1940",
        title: "Khởi Nghĩa Nam Kỳ",
        location: "Toàn Miền Nam",
        desc: "Nổi dậy rộng khắp Nam Bộ, lần đầu tiên xuất hiện lá Cờ đỏ Sao vàng ngời sáng."
      },
      {
        icon: "Swords",
        time: "13/01/1941",
        title: "Binh Biến Đô Lương",
        location: "Nghệ An",
        desc: "Đội Cung chỉ huy binh lính người Việt nổi dậy chiếm đồn Chợ Rạch, thể hiện tinh thần quật khởi."
      }
    ],
    historicalQuote: {
      quote: "Đó là những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc, là bước đầu đấu tranh vũ trang của nhân dân Đông Dương.",
      speaker: "Văn kiện Đảng về các cuộc khởi nghĩa 1940-1941"
    }
  },
  {
    id: 6,
    slideNumber: "06",
    layoutType: "tribute-grid",
    badge: "Sự Hy Sinh Anh Dũng",
    period: "1941",
    title: "Sự Hy Sinh Anh Dũng Của Các Lãnh Đạo Nòng Cốt",
    subtitle: "Tổn thất vô cùng nặng nề nhưng ngọn lửa cách mạng vẫn rực sáng",
    themeColor: "amber",
    tributes: [
      {
        name: "Nguyễn Văn Cừ",
        role: "Tổng Bí thư (1938-1939)",
        desc: "Nhà chiến lược kiệt xuất khởi xướng chuyển hướng chiến lược, bị Pháp bắn tại Hóc Môn (8/1941)."
      },
      {
        name: "Phan Đăng Lưu",
        role: "Ủy viên TW Đảng",
        desc: "Trí thức cách mạng lớn, người chỉ đạo Khởi nghĩa Nam Kỳ, anh dũng hy sinh trước họng súng kẻ thù."
      },
      {
        name: "Hà Huy Tập",
        role: "Cựu Tổng Bí thư",
        desc: "Nhà lý luận xuất sắc, hy sinh anh dũng tại Hóc Môn năm 1941 với lời dặn: 'Hãy giữ vững chí khí chiến đấu!'."
      },
      {
        name: "Nguyễn Thị Minh Khai",
        role: "Bí thư Thành ủy Sài Gòn",
        desc: "Nữ anh hùng kiên trung ngẩng cao đầu trước pháp trường, để lại tấm gương bất khuất."
      }
    ],
    historicalQuote: {
      quote: "Hãy giữ vững chí khí chiến đấu!",
      speaker: "Lời dặn cuối cùng của đồng chí Nguyễn Văn Cừ & Hà Huy Tập"
    }
  },
  {
    id: 7,
    slideNumber: "07",
    layoutType: "document-banner",
    badge: "Xây Dựng Lực Lượng",
    period: "1941 – 1943",
    title: "Xây Dựng Lực Lượng Chính Trị & Đề Cương Văn Hóa (1943)",
    subtitle: "Phát triển Mặt trận Việt Minh và vũ khí tư tưởng văn hóa cách mạng",
    themeColor: "red",
    documentHeader: {
      title: "ĐỀ CƯƠNG VỀ VĂN HÓA VIỆT NAM (1943)",
      author: "Do Tổng Bí thư Trường Chinh khởi thảo",
      sub: "Văn kiện soi đường tập hợp đông đảo văn nghệ sĩ, trí thức gia nhập Việt Minh"
    },
    principles: [
      {
        num: "01",
        title: "DÂN TỘC HÓA",
        desc: "Chống lại mọi ảnh hưởng nô dịch, thuộc địa của văn hóa thực dân, thức tỉnh lòng tự tôn dân tộc."
      },
      {
        num: "02",
        title: "ĐẠI CHÚNG HÓA",
        desc: "Văn hóa phải phục vụ đông đảo quần chúng nhân dân lao động, do quần chúng sáng tạo."
      },
      {
        num: "03",
        title: "KHOA HỌC HÓA",
        desc: "Chống lại phong tục tập quán lạc hậu, mê tín dị đoan, xây dựng tư tưởng tiến bộ."
      }
    ],
    historicalQuote: {
      quote: "Văn hóa là một mặt trận. Ba nguyên tắc Dân tộc hóa, Đại chúng hóa, Khoa học hóa là kim nam đem lại sức sống cho văn hóa Việt Nam.",
      speaker: "Đề cương về Văn hóa Việt Nam (1943)"
    }
  },
  {
    id: 8,
    slideNumber: "08",
    layoutType: "stat-callout",
    badge: "Lực Lượng Vũ Trang",
    period: "22/12/1944",
    title: "Thành Lập Đội VN Tuyên Truyền Giải Phóng Quân",
    subtitle: "Sự ra đời của quân đội nòng cốt & Dự báo thiên tài của Chủ tịch Hồ Chí Minh",
    themeColor: "amber",
    statBoxes: [
      {
        bigNum: "34",
        unit: "Chiến sĩ",
        label: "Đội quân ban đầu",
        desc: "Thành lập 22/12/1944 tại Cao Bằng do đồng chí Võ Nguyên Giáp chỉ huy."
      },
      {
        bigNum: "02",
        unit: "Trận đầu thắng",
        label: "Phai Khắt & Nà Ngần",
        desc: "Mở màn truyền thống đánh là thắng của QĐND Việt Nam anh hùng."
      },
      {
        bigNum: "1-1.5",
        unit: "Năm nữa",
        label: "Dự báo của Bác Hồ",
        desc: "Bác nhận định cuối 1944: 'Thời cơ giải phóng xuất hiện trong 1 đến 1,5 năm nữa'."
      }
    ],
    historicalQuote: {
      quote: "Đội Việt Nam Tuyên truyền Giải phóng quân là đội quân đàn anh, mong cho nó có kíp khác đàn em khác. Tuy lúc đầu quy mô của nó còn nhỏ, nhưng triển vọng của nó rất nở lớn.",
      speaker: "Chỉ thị thành lập của Hồ Chí Minh (12/1944)"
    }
  },
  {
    id: 9,
    slideNumber: "09",
    layoutType: "split-feature",
    badge: "Cao Trào Kháng Nhật",
    period: "03/1945",
    title: "Cao Trào Kháng Nhật Cứu Nước: Nhật Đảo Chính Pháp",
    subtitle: "Sự kiện đêm 9/3/1945 và sự đảo lộn toàn bộ cục diện Đông Dương",
    themeColor: "red",
    featureCard: {
      tag: "SỰ KIỆN ĐỘT BIẾN CỤC DIỆN",
      date: "Đêm 09/03/1945",
      title: "Nhật nổ súng đảo chính Pháp",
      desc: "Lo sợ Đồng minh đổ bộ và Pháp đánh sau lưng, phát xít Nhật độc chiếm Đông Dương. Thực dân Pháp sụp đổ hoàn toàn sau gần 100 năm cai trị."
    },
    decisions: [
      {
        icon: "Flame",
        title: "Kẻ Thù Cũ Sụp Đổ Cực Nhanh",
        desc: "Thực dân Pháp nhanh chóng hàng Nhật, tháo chạy hoặc bị bắt làm tù binh."
      },
      {
        icon: "AlertTriangle",
        title: "Phát Xít Nhật Lập Chính Phủ Tay Sai",
        desc: "Lập chính phủ Trần Trọng Kim làm bù nhìn để thao túng Đông Dương."
      },
      {
        icon: "Zap",
        title: "Khủng Hoảng Chính Trị Sâu Sắc",
        desc: "Tạo ra tình thế cách mạng chín mùi cho cuộc bùng nổ khởi nghĩa."
      }
    ],
    historicalQuote: {
      quote: "Đảo chính Nhật - Pháp đã tạo ra một cuộc khủng hoảng chính trị sâu sắc, làm cho điều kiện khởi nghĩa mau chín mùi.",
      speaker: "Đảng Cộng sản Việt Nam (3/1945)"
    }
  },
  {
    id: 10,
    slideNumber: "10",
    layoutType: "document-banner",
    badge: "Chỉ Thị Lịch Sử",
    period: "12/03/1945",
    title: "Chỉ Thị 'Nhật, Pháp Bắn Nhau Và Hành Động Của Chúng Ta'",
    subtitle: "Văn kiện chiến lược hướng dẫn Cao trào Kháng Nhật cứu nước làm tiền đề Tổng khởi nghĩa",
    themeColor: "amber",
    documentHeader: {
      title: "CHỈ THỊ BAN THƯỜNG VỤ TRUNG ƯƠNG ĐẢNG",
      author: "Ban hành ngày 12/03/1945 tại Từ Sơn (Bắc Ninh)",
      sub: "Định hướng chiến lược tối quan trọng ngay sau khi Nhật đảo chính Pháp"
    },
    principles: [
      {
        num: "01",
        title: "XÁC ĐỊNH KẺ THÙ CỤ THỂ",
        desc: "Thay kẻ thù 'Pháp - Nhật' bằng kẻ thù duy nhất và trực tiếp: Phát xít Nhật."
      },
      {
        num: "02",
        title: "THAY ĐỔI KHẨU HIỆU",
        desc: "Thay khẩu hiệu 'Đánh đuổi Nhật - Pháp' bằng khẩu hiệu 'Đánh đuổi phát xít Nhật'."
      },
      {
        num: "03",
        title: "PHÁT ĐỘNG CAO TRÀO",
        desc: "Khởi nghĩa từng phần, đẩy mạnh chiến tranh du kích, sẵn sàng tiến lên Tổng khởi nghĩa."
      }
    ],
    historicalQuote: {
      quote: "Bất kỳ ở đâu khi thấy điều kiện thuận lợi là phải chủ động tiến hành khởi nghĩa từng phần, mở rộng căn cứ địa.",
      speaker: "Chỉ thị 'Nhật, Pháp bắn nhau và hành động của chúng ta' (12/3/1945)"
    }
  },
  {
    id: 11,
    slideNumber: "11",
    layoutType: "timeline-stepper",
    badge: "Diễn Biến Cao Trào",
    period: "03 – 07/1945",
    title: "Diễn Biến Cao Trào Kháng Nhật Cứu Nước",
    subtitle: "Khởi nghĩa từng phần & Khẩu hiệu thần kỳ 'Phá kho thóc giải quyết nạn đói'",
    themeColor: "red",
    steps: [
      {
        stepNumber: "01",
        time: "03 - 05/1945",
        title: "Khởi Nghĩa Từng Phần",
        location: "Rộng khắp cả nước",
        points: [
          "Chiến tranh du kích cục bộ bùng nổ mạnh mẽ.",
          "Thành lập chính quyền nhân dân ở nhiều vùng giải phóng."
        ]
      },
      {
        stepNumber: "02",
        time: "04 - 06/1945",
        title: "Phá Kho Thóc Cứu Đói",
        location: "Bắc Bộ & Bắc Trung Bộ",
        points: [
          "Đẩy mạnh khẩu hiệu 'Phá kho thóc, giải quyết nạn đói'.",
          "Cứu sống triệu dân nghèo, quy tụ hàng triệu quần chúng vào Việt Minh."
        ]
      },
      {
        stepNumber: "03",
        time: "06/1945",
        title: "Khu Giải Phóng Việt Bắc",
        location: "6 Tỉnh Miền Bắc",
        points: [
          "Thành lập Khu giải phóng Việt Bắc (Cao - Bắc - Lạng - Thái - Tuyên - Hà).",
          "Trở thành căn cứ địa chính của cả nước, hình ảnh thu nhỏ của nước VN mới."
        ]
      }
    ],
    historicalQuote: {
      quote: "Khẩu hiệu 'Phá kho thóc giải quyết nạn đói' đã thổi bùng ngọn lửa cách mạng trong lòng hàng triệu nông dân nghèo khổ.",
      speaker: "Lịch sử Cách mạng Tháng Tám"
    }
  },
  {
    id: 12,
    slideNumber: "12",
    layoutType: "stat-callout",
    badge: "Thời Cơ Vàng",
    period: "08/1945",
    title: "Bối Cảnh & 'Thời Cơ Vàng' Tháng 8 Năm 1945",
    subtitle: "Nhật đầu hàng Đồng minh & Khoảnh khắc lịch sử có một không hai",
    themeColor: "amber",
    statBoxes: [
      {
        bigNum: "15/8",
        unit: "1945",
        label: "Nhật Đầu Hàng",
        desc: "Nhật Hoàng tuyên bố đầu hàng Đồng minh không điều kiện."
      },
      {
        bigNum: "20",
        unit: "Ngày Vàng",
        label: "Khoảng thời gian cực ngắn",
        desc: "Từ khi Nhật đầu hàng đến trước khi quân Đồng minh kéo vào Đông Dương."
      },
      {
        bigNum: "100%",
        unit: "Sẵn sàng",
        label: "Thực lực cách mạng",
        desc: "Việt Minh và quần chúng sục sôi khí thế chờ lệnh Tổng khởi nghĩa."
      }
    ],
    historicalQuote: {
      quote: "Lúc này thời cơ thuận lợi đã tới, dù có phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập!",
      speaker: "Lời kêu gọi khẩn thiết của Bác Hồ tại Tân Trào (8/1945)"
    }
  },
  {
    id: 13,
    slideNumber: "13",
    layoutType: "cards-3col",
    badge: "Quyết Sách Chớp Thời Cơ",
    period: "13 – 16/08/1945",
    title: "Quyết Sách Chớp Thời Cơ - Hội Nghị Tân Trào",
    subtitle: "Ba quyết sách lịch sử phát động Tổng khởi nghĩa giành chính quyền",
    themeColor: "red",
    cards: [
      {
        icon: "Megaphone",
        time: "Đêm 13/08/1945",
        title: "Quân Lệnh Số 1",
        location: "Ủy ban Khởi nghĩa",
        desc: "Phát động Tổng khởi nghĩa toàn quốc ngay khi biết tin Nhật sắp đầu hàng."
      },
      {
        icon: "FileText",
        time: "14 - 15/08/1945",
        title: "Hội Nghị Toàn Quốc Của Đảng",
        location: "Tân Trào (Tuyên Quang)",
        desc: "Thông qua kế hoạch Tổng khởi nghĩa trước khi quân Đồng minh vào Đông Dương."
      },
      {
        icon: "Landmark",
        time: "16 - 17/08/1945",
        title: "Đại Hội Quốc Dân Tân Trào",
        location: "Nghị viện Cách mạng",
        desc: "Bầu Ủy ban Dân tộc Giải phóng do Hồ Chí Minh làm Chủ tịch, thông qua 10 chính sách lớn."
      }
    ],
    historicalQuote: {
      quote: "Giờ tổng khởi nghĩa đã đến! Cơ hội có một không hai cho quân dân Việt Nam vùng dậy giành lấy quyền độc lập tự do!",
      speaker: "Quân lệnh số 1 (Đêm 13/8/1945)"
    }
  },
  {
    id: 14,
    slideNumber: "14",
    layoutType: "triumphant-hero",
    badge: "Tổng Khởi Nghĩa Thắng Lợi",
    period: "19/08 – 02/09/1945",
    title: "Diễn Biến Tổng Khởi Nghĩa & Ngày 2/9/1945",
    subtitle: "Thắng lợi thần tốc trong 15 ngày & Khai sinh nước Việt Nam Dân chủ Cộng hòa",
    themeColor: "amber",
    victoryMilestones: [
      { date: "19/08", city: "HÀ NỘI", detail: "Chiếm Phủ Khâm sai, thắng lợi rực rỡ mở màn" },
      { date: "23/08", city: "HUẾ", detail: "Vua Bảo Đại thoái vị, bãi bỏ ngai vàng phong kiến" },
      { date: "25/08", city: "SÀI GÒN", detail: "Quần chúng chiếm Tòa Đô đốc, giải phóng miền Nam" },
      { date: "02/09", city: "BA ĐÌNH", detail: "Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH" }
    ],
    historicalQuote: {
      quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.",
      speaker: "Tuyên ngôn Độc lập (02/9/1945)"
    }
  },
  {
    id: 15,
    slideNumber: "15",
    layoutType: "matrix-4grid",
    badge: "Bài Học Chiến Lược",
    period: "1939 – 1945",
    title: "Các Quyết Định Chiến Lược Tạo Nên Thành Công",
    subtitle: "Tổng kết 4 trụ cột chiến lược vĩ đại dẫn tới Thắng lợi Mùa Thu năm 1945",
    themeColor: "red",
    matrixPillars: [
      {
        number: "01",
        title: "Chuyển Hướng Chiến Lược Đúng Đắn",
        desc: "Nhạy bén đặt nhiệm vụ giải phóng dân tộc lên hàng tối cao ngay từ 1939-1941."
      },
      {
        number: "02",
        title: "Chuẩn Bị Thực Lực Toàn Diện Từ Sớm",
        desc: "Xây dựng lực lượng chính trị (Việt Minh), lực lượng vũ trang và căn cứ địa vững chắc."
      },
      {
        number: "03",
        title: "Nghệ Thuật Khởi Nghĩa Linh Hoạt",
        desc: "Khởi nghĩa từng phần, chiến tranh du kích cục bộ tiến lên Tổng khởi nghĩa."
      },
      {
        number: "04",
        title: "Dự Báo Thiên Tài & Chớp Thời Cơ Vàng",
        desc: "Đón đúng thời cơ cực ngắn phát động Tổng khởi nghĩa thành công trước khi Đồng minh vào."
      }
    ],
    historicalQuote: {
      quote: "Thắng lợi của Cách mạng Tháng Tám là sự kết tinh của 15 năm chuẩn bị công phu, kiên cường dưới sự lãnh đạo tài tình của Đảng.",
      speaker: "Văn kiện Tổng kết Cách mạng Việt Nam"
    }
  },
  {
    id: 16,
    slideNumber: "16",
    layoutType: "cards-3col",
    badge: "Tính Chất Cách Mạng",
    period: "1945",
    title: "Tính Chất Của Cách Mạng Tháng Tám",
    subtitle: "Ba đặc trưng bản chất sâu sắc của cuộc cách mạng vĩ đại",
    themeColor: "amber",
    cards: [
      {
        icon: "Flag",
        time: "Đặc Trưng 1",
        title: "Giải Phóng Dân Tộc Điển Hình",
        location: "Đại đoàn kết",
        desc: "Tập trung lật đổ ách thống trị phát xít - thực dân, thành lập nhà nước VNDCCH của toàn dân."
      },
      {
        icon: "Heart",
        time: "Đặc Trưng 2",
        title: "Tính Dân Chủ Mới Sâu Sắc",
        location: "Vì nhân dân",
        desc: "Từng bước đem lại quyền làm chủ cho nông dân và nhân dân lao động, xóa bỏ phong kiến nghìn năm."
      },
      {
        icon: "Sparkles",
        time: "Đặc Trưng 3",
        title: "Tính Nhân Văn Cao Cả",
        location: "Ít đổ máu",
        desc: "Khởi nghĩa thần tốc, giành chính quyền nhanh gọn, thể hiện truyền thống nhân đạo cao đẹp."
      }
    ],
    historicalQuote: {
      quote: "Cách mạng Tháng Tám là một cuộc cách mạng giải phóng dân tộc điển hình, mở đầu cho thời kỳ sụp đổ của chủ nghĩa thực dân cũ.",
      speaker: "Đánh giá của các nhà nghiên cứu lịch sử quốc tế"
    }
  },
  {
    id: 17,
    slideNumber: "17",
    layoutType: "impact-dual",
    badge: "Ý Nghĩa Lịch Sử",
    period: "1945 – Nay",
    title: "Ý Nghĩa Lịch Sử Vĩ Đại Của Cách Mạng Tháng Tám",
    subtitle: "Cột mốc chói lọi mở ra kỷ nguyên mới cho Dân tộc & Phong trào Thế giới",
    themeColor: "red",
    impactColumns: {
      national: {
        title: "ĐỐI VỚI DÂN TỘC VIỆT NAM",
        icon: "Award",
        points: [
          "Đập tan ách nô lệ hơn 80 năm của Pháp - Nhật, xóa bỏ hoàn toàn chế độ phong kiến.",
          "Lập nên nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.",
          "Mở ra kỷ nguyên mới: Độc lập, Tự do và Chủ nghĩa xã hội.",
          "Đưa Đảng ta trở thành Đảng cầm quyền lãnh đạo toàn dân."
        ]
      },
      international: {
        title: "ĐỐI VỚI THẾ GIỚI",
        icon: "Globe",
        points: [
          "Cú đòn tử thương vào chủ nghĩa thực dân cũ, mở đầu sự sụp đổ hệ thống thuộc địa.",
          "Cổ vũ mạnh mẽ các dân tộc bị áp bức ở châu Á, châu Phi và Mỹ La-tinh đứng lên tự giải phóng.",
          "Bổ sung và làm phong phú kho tàng lý luận Mác - Lênin về cách mạng giải phóng dân tộc."
        ]
      }
    },
    historicalQuote: {
      quote: "Chẳng những giai cấp lao động và nhân dân Việt Nam ta có thể tự hào, mà giai cấp lao động và các dân tộc bị áp bức nơi khác cũng có thể tự hào rằng: Lần đầu tiên trong lịch sử cách mạng của các dân tộc thuộc địa, một Đảng mới 15 tuổi đã lãnh đạo cách mạng thành công, đã nắm chính quyền trong toàn quốc.",
      speaker: "Chủ tịch Hồ Chí Minh (1951)"
    }
  }
];

export const timelineEvents = [
  { year: "09/1939", title: "CTTG II Bùng Nổ", desc: "Pháp thắt chặt cai trị Đông Dương" },
  { year: "11/1939", title: "Hội Nghị TW 6", desc: "Đặt giải phóng dân tộc lên hàng đầu" },
  { year: "09/1940", title: "Nhật Vào Đông Dương", desc: "Nhân dân chịu cảnh một cổ hai tròng" },
  { year: "11/1940", title: "Hội Nghị Cán Bộ TW", desc: "Tái lập Ban Chấp hành TW Đảng" },
  { year: "01/1941", title: "Bác Hồ Về Nước", desc: "Trở về Pắc Bó sau 30 năm" },
  { year: "05/1941", title: "Hội Nghị TW 8", desc: "Thành lập Mặt trận Việt Minh" },
  { year: "1943", title: "Đề Cương Văn Hóa", desc: "3 nguyên tắc Dân tộc - Đại chúng - Khoa học" },
  { year: "22/12/1944", title: "Đội VN Tuyên Truyền GPQ", desc: "Thành lập quân đội nòng cốt" },
  { year: "09/03/1945", title: "Nhật Đảo Chính Pháp", desc: "Phát động Cao trào kháng Nhật" },
  { year: "06/1945", title: "Khu Giải Phóng Việt Bắc", desc: "Căn cứ địa chính 6 tỉnh" },
  { year: "15/08/1945", title: "Thời Cơ Vàng", desc: "Nhật đầu hàng Đồng minh" },
  { year: "19/08/1945", title: "Thắng Lợi Hà Nội", desc: "Tổng khởi nghĩa toàn quốc" },
  { year: "02/09/1945", title: "Tuyên Ngôn Độc Lập", desc: "Khai sinh nước VNDCCH" }
];
