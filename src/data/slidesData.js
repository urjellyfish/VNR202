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
    badge: "Bối Cảnh Lịch Sử",
    period: "1939 – 1940",
    title: "Bối Cảnh Lịch Sử Thế Giới & Trong Nước",
    subtitle: "Sự chuyển biến mau lẹ của tình hình và nỗi đau 'Một cổ hai tròng'",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Thế Giới: Chiến Tranh Bùng Nổ",
        icon: "Globe",
        points: [
          "Tháng 9/1939: Chiến tranh thế giới thứ hai chính thức bùng nổ.",
          "Tháng 6/1940: Phát xít Đức tấn công và buộc Chính phủ Pháp đầu hàng.",
          "Chính quyền phản động thuộc địa Pháp tăng cường bóc lột và đàn áp phong trào cách mạng ở Đông Dương."
        ]
      },
      rightPillar: {
        title: "Trong Nước: Nhân Dân 'Một Cổ Hai Tròng'",
        icon: "ShieldAlert",
        points: [
          "Tháng 9/1940: Phát xít Nhật tràn vào Đông Dương, Pháp quỳ gối dâng quyền lợi.",
          "Nhân dân Việt Nam chịu cảnh 'Một cổ hai tròng' bức hại tận cùng (Pháp - Nhật).",
          "Mâu thuẫn giữa toàn thể dân tộc Việt Nam với đế quốc phát xít Pháp - Nhật trở nên gay gắt hơn bao giờ hết."
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
    badge: "Bước Đầu Chuyển Hướng",
    period: "11/1939 – 11/1940",
    title: "Bước Đầu Chuyển Hướng Chỉ Đạo Chiến Lược",
    subtitle: "Hội nghị Trung ương 6 và Hội nghị Cán bộ Trung ương",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Hội Nghị Trung Ương 6 (11/1939)",
        icon: "Scroll",
        points: [
          "Do Tổng Bí thư Nguyễn Văn Cừ chủ trì tại Bà Điểm (Hóc Môn).",
          "Khẳng định: Giải phóng dân tộc là nhiệm vụ hàng đầu, cấp bách nhất.",
          "Tạm gác khẩu hiệu 'Cách mạng ruộng đất', thay bằng chống tịch thu ruộng đất của đế quốc.",
          "Thành lập 'Mặt trận Thống nhất Dân tộc Phản đế Đông Dương'."
        ]
      },
      rightPillar: {
        title: "Hội Nghị Cán Bộ Trung Ương (11/1940)",
        icon: "Users",
        points: [
          "Họp tại Đình Bảng (Bắc Ninh) sau khi Khởi nghĩa Bắc Sơn bùng nổ.",
          "Tái lập Ban Chấp hành Trung ương Đảng chính thức.",
          "Duy trì lực lượng vũ trang Bắc Sơn làm nòng cốt xây dựng căn cứ địa.",
          "Tiếp tục duy trì đường lối đặt giải phóng dân tộc lên trên hết."
        ]
      }
    },
    historicalQuote: {
      quote: "Bước đường sinh tồn của các dân tộc Đông Dương không có đường nào khác hơn là đường lộ giải phóng dân tộc.",
      speaker: "Nghị quyết Hội nghị Trung ương 6 (11/1939)"
    }
  },
  {
    id: 3,
    slideNumber: "03",
    badge: "Bước Nhảy Vọt Chiến Lược",
    period: "05/1941",
    title: "Hội Nghị Trung Ương 8 (5/1941) - Hoàn Chỉnh Chiến Lược (Phần 1)",
    subtitle: "Nguyễn Ái Quốc trở về nước & Thành lập Mặt trận Việt Minh",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Bối Cảnh & Chủ Trì",
        icon: "Flag",
        points: [
          "Ngày 28/1/1941: Lãnh tụ Nguyễn Ái Quốc trở về Pắc Bó (Cao Bằng) sau 30 năm bôn ba.",
          "Tháng 5/1941: Lãnh tụ Nguyễn Ái Quốc chủ trì Hội nghị Trung ương 8 tại Pắc Bó.",
          "Hội nghị quy tụ dàn lãnh đạo nòng cốt: Trường Chinh, Hoàng Văn Thụ, Phùng Chí Kiên..."
        ]
      },
      rightPillar: {
        title: "Nội Dung Chiến Lược Cốt Lõi",
        icon: "Award",
        points: [
          "Đặt nhiệm vụ Giải phóng Dân tộc lên hàng tối cao, quyết định vận mệnh sống còn.",
          "Quyết định thành lập 'Việt Nam Độc lập Đồng minh' (Mặt trận Việt Minh) ngày 19/5/1941.",
          "Tập hợp rộng rãi mọi tầng lớp nhân dân không phân biệt giai cấp, tôn giáo, dân tộc."
        ]
      }
    },
    historicalQuote: {
      quote: "Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng... thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến nghìn năm cũng không đòi lại được.",
      speaker: "Nghị quyết Hội nghị Trung ương 8 (5/1941)"
    }
  },
  {
    id: 4,
    slideNumber: "04",
    badge: "Hoàn Chỉnh Chiến Lược",
    period: "05/1941",
    title: "Hội Nghị Trung Ương 8 (5/1941) - Hoàn Chỉnh Chiến Lược (Phần 2)",
    subtitle: "Chính thể Việt Nam Dân chủ Cộng hòa & Ý nghĩa lịch sử",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Quyết Định Về Chính Thể & Phương Pháp",
        icon: "Landmark",
        points: [
          "Thay thế chính thể 'Xô viết công nông' bằng chính thể 'Việt Nam Dân chủ Cộng hòa'.",
          "Xác định hình thái khởi nghĩa: Xây dựng căn cứ địa, khởi nghĩa từng phần tiến lên Tổng khởi nghĩa.",
          "Thông qua Cờ đỏ Sao vàng làm lá cờ đại diện cho khối đại đoàn kết toàn dân tộc."
        ]
      },
      rightPillar: {
        title: "Ý Nghĩa Lịch Sử Vĩ Đại",
        icon: "Star",
        points: [
          "Hoàn chỉnh triệt để đường lối chuyển hướng chỉ đạo chiến lược của Đảng.",
          "Khắc phục hoàn toàn những hạn chế về nhiệm vụ dân tộc trong Luận cương tháng 10/1930.",
          "Trở thành ngọn cờ ngời sáng dẫn đường cho toàn thể nhân dân Việt Nam tiến tới Cách mạng Tháng Tám."
        ]
      }
    },
    historicalQuote: {
      quote: "Hội nghị Trung ương 8 đã khắc phục triệt để hạn chế của Luận cương 10/1930, đưa nhiệm vụ giải phóng dân tộc lên hàng đầu.",
      speaker: "Giáo trình Lịch sử Đảng Cộng sản Việt Nam"
    }
  },
  {
    id: 5,
    slideNumber: "05",
    badge: "Tiếng Súng Khởi Đầu",
    period: "1940 – 1941",
    title: "Các Cuộc Nổi Dậy Đầu Tiên Tiền Khởi Nghĩa",
    subtitle: "Khởi nghĩa Bắc Sơn, Nam Kỳ và Binh biến Đô Lương",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Ba Cuộc Nổi Dậy Lịch Sử",
        icon: "Flame",
        points: [
          "Khởi nghĩa Bắc Sơn (27/9/1940): Đột kích đồn bốt Pháp tại Lạng Sơn, thành lập Đội du kích Bắc Sơn.",
          "Khởi nghĩa Nam Kỳ (23/11/1940): Bùng nổ rộng khắp miền Nam, lần đầu tiên lá Cờ đỏ Sao vàng xuất hiện.",
          "Binh biến Đô Lương (13/1/1941): Do Đội Cung chỉ huy binh lính người Việt nổi dậy tại Nghệ An."
        ]
      },
      rightPillar: {
        title: "Bài Học & Tầm Ảnh Hưởng",
        icon: "Zap",
        points: [
          "Tuy thất bại do thời cơ chưa chín mùi, nhưng là 'những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc'.",
          "Để lại bài học vô giá về xây dựng lực lượng vũ trang, thời cơ khởi nghĩa và phương pháp đấu tranh.",
          "Rèn luyện ý chí chiến đấu sắt đá cho quần chúng nhân dân."
        ]
      }
    },
    historicalQuote: {
      quote: "Đó là những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc, là bước đầu đấu tranh vũ trang của nhân dân Đông Dương.",
      speaker: "Văn kiện Đảng về các cuộc khởi nghĩa 1940-1941"
    }
  },
  {
    id: 6,
    slideNumber: "06",
    badge: "Sự Hy Sinh Anh Dũng",
    period: "1941",
    title: "Sự Hy Sinh Của Các Lãnh Đạo Nòng Cốt",
    subtitle: "Tổn thất to lớn và tinh thần bất khuất vì độc lập tự do",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Những Người Con Ưu Tú Tày Trời",
        icon: "Shield",
        points: [
          "Tổng Bí thư Nguyễn Văn Cừ: Nhà chiến lược kiệt xuất bị Pháp bắn tại Hóc Môn (8/1941).",
          "Chủ tịch Phan Đăng Lưu: Người chỉ đạo Khởi nghĩa Nam Kỳ bị Pháp xử bắn.",
          "Cựu Tổng Bí thư Hà Huy Tập & Lê Hồng Phong: Hy sinh anh dũng trong ngục tù đế quốc.",
          "Nữ anh hùng Nguyễn Thị Minh Khai: Ngẩng cao đầu trước họng súng kẻ thù."
        ]
      },
      rightPillar: {
        title: "Ngọn Lửa Cách Mạng Bất Diệt",
        icon: "HeartPulse",
        points: [
          "Mặc dù Ban Chấp hành Trung ương bị tổn thất vô cùng nặng nề, ngọn lửa chiến đấu không hề bị dập tắt.",
          "Thế hệ cán bộ trẻ và Việt Minh tiếp nối ngọn cờ, biến đau thương thành hành động cách mạng.",
          "Khẳng định bản lĩnh kiên cường, thà hy sinh chứ quyết không làm nô lệ."
        ]
      }
    },
    historicalQuote: {
      quote: "Hãy giữ vững chí khí chiến đấu!",
      speaker: "Lời dặn cuối cùng của đồng chí Nguyễn Văn Cừ & Hà Huy Tập"
    }
  },
  {
    id: 7,
    slideNumber: "07",
    badge: "Xây Dựng Lực Lượng",
    period: "1941 – 1943",
    title: "Xây Dựng Lực Lượng Chính Trị & Đề Cương Văn Hóa",
    subtitle: "Phát triển Mặt trận Việt Minh và soi đường tư tưởng văn hóa",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Phát Triển Lực Lượng Chính Trị",
        icon: "Users",
        points: [
          "Thành lập các hội 'Cứu quốc': Nông dân cứu quốc, Thanh niên cứu quốc, Phụ nữ cứu quốc, Công nhân cứu quốc...",
          "Xây dựng Cao Bằng thành trung tâm căn cứ địa cách mạng miền núi.",
          "Phát triển phong trào Việt Minh sâu rộng xuống các tỉnh đồng bằng và đô thị lớn (Hà Nội, Hải Phòng...)."
        ]
      },
      rightPillar: {
        title: "Đề Cương Về Văn Hóa Việt Nam (1943)",
        icon: "BookOpen",
        points: [
          "Do Tổng Bí thư Trường Chinh khởi thảo năm 1943.",
          "Nêu rõ 3 nguyên tắc vận động văn hóa cách mạng: Dân tộc hóa, Đại chúng hóa, Khoa học hóa.",
          "Tập hợp đông đảo tầng lớp trí thức, văn nghệ sĩ, học sinh, sinh viên gia nhập Mặt trận Việt Minh."
        ]
      }
    },
    historicalQuote: {
      quote: "Văn hóa là một mặt trận. Ba nguyên tắc Dân tộc hóa, Đại chúng hóa, Khoa học hóa là kim nam đem lại sức sống cho văn hóa Việt Nam.",
      speaker: "Đề cương về Văn hóa Việt Nam (1943)"
    }
  },
  {
    id: 8,
    slideNumber: "08",
    badge: "Lực Lượng Vũ Trang",
    period: "22/12/1944",
    title: "Thành Lập Đội VN Tuyên Truyền Giải Phóng Quân",
    subtitle: "Dự báo thiên tài của Chủ tịch Hồ Chí Minh",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Sự Ra Đời Của Đội Quân Nòng Cốt",
        icon: "Swords",
        points: [
          "Ngày 22/12/1944: Thành lập Đội VN Tuyên truyền Giải phóng quân tại khu rừng Trần Hưng Đạo (Cao Bằng).",
          "Gồm 34 chiến sĩ ưu tú do đồng chí Võ Nguyên Giáp trực tiếp chỉ huy.",
          "Ngay sau khi thành lập đã đánh thắng 2 trận liên tiếp: Phai Khắt (25/12) và Nà Ngần (26/12)."
        ]
      },
      rightPillar: {
        title: "Dự Báo Thiên Tài Của Bác Hồ",
        icon: "Compass",
        points: [
          "Cuối năm 1944, Bác Hồ nhận định: 'Tình hình thế giới biến chuyển rất nhanh, cơ hội giải phóng dân tộc xuất hiện trong khoảng 1 đến 1,5 năm nữa'.",
          "Chỉ đạo chuyển từ hình thức đấu tranh chính trị sang kết hợp đấu tranh chính trị với đấu tranh vũ trang.",
          "Chuẩn bị mọi điều kiện sẵn sàng đón thời cơ nhảy vọt."
        ]
      }
    },
    historicalQuote: {
      quote: "Đội Việt Nam Tuyên truyền Giải phóng quân là đội quân đàn anh, mong cho nó có kíp khác đàn em khác. Tuy lúc đầu quy mô của nó còn nhỏ, nhưng triển vọng của nó rất nở lớn.",
      speaker: "Chỉ thị thành lập của Hồ Chí Minh (12/1944)"
    }
  },
  {
    id: 9,
    slideNumber: "09",
    badge: "Cao Trào Kháng Nhật",
    period: "03/1945",
    title: "Cao Trào Kháng Nhật Cứu Nước - Bối Cảnh Nhật Đảo Chính",
    subtitle: "Nhật đảo chính Pháp ngày 9/3/1945 & Sự biến động cục diện",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Sự Kiện Đảo Chính 9/3/1945",
        icon: "Flame",
        points: [
          "Đầu năm 1945: Phát xít Đức thất bại thảm hại ở châu Âu, quân Đồng minh áp sát Nhật Bản.",
          "Đêm 9/3/1945: Nhật nổ súng đảo chính Pháp trên toàn cõi Đông Dương để trừ nguy cơ bị Pháp đánh sau lưng.",
          "Thực dân Pháp nhanh chóng đầu hàng, tháo chạy hoặc bị Nhật bắt làm tù binh."
        ]
      },
      rightPillar: {
        title: "Tình Thế Mới Xuất Hiện",
        icon: "AlertTriangle",
        points: [
          "Hệ thống cai trị của thực dân Pháp sụp đổ hoàn toàn sau gần 100 năm.",
          "Phát xít Nhật lập nên chính phủ tay sai Trần Trọng Kim để thao túng.",
          "Cuộc khủng hoảng chính trị sâu sắc bùng nổ, tạo tiền đề cho cuộc bùng nổ khởi nghĩa."
        ]
      }
    },
    historicalQuote: {
      quote: "Đảo chính Nhật - Pháp đã tạo ra một cuộc khủng hoảng chính trị sâu sắc, làm cho điều kiện khởi nghĩa mau chín mùi.",
      speaker: "Đảng Cộng sản Việt Nam (3/1945)"
    }
  },
  {
    id: 10,
    slideNumber: "10",
    badge: "Chỉ Thị Lịch Sử",
    period: "12/03/1945",
    title: "Chỉ Thị 'Nhật, Pháp Bắn Nhau Và Hành Động Của Chúng Ta'",
    subtitle: "Văn kiện chiến lược hướng dẫn Cao trào Kháng Nhật cứu nước",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Chủ Trương Lịch Sử Của Đảng",
        icon: "FileText",
        points: [
          "Ngày 12/3/1945: Ban Thường vụ Trung ương Đảng ra Chỉ thị lịch sử tại Từ Sơn (Bắc Ninh).",
          "Xác định kẻ thù cụ thể duy nhất: Phát xít Nhật (thay cho kẻ thù Pháp - Nhật trước đây).",
          "Thay khẩu hiệu 'Đánh đuổi Nhật - Pháp' bằng 'Đánh đuổi phát xít Nhật'."
        ]
      },
      rightPillar: {
        title: "Phát Động Cao Trào Kháng Nhật",
        icon: "Target",
        points: [
          "Xác định khủng hoảng chính trị chín mùi nhưng thời cơ Tổng khởi nghĩa chưa đến.",
          "Phát động một 'Cao trào kháng Nhật cứu nước' mạnh mẽ làm tiền đề cho Tổng khởi nghĩa.",
          "Sẵn sàng chuyển sang hình thức Tổng khởi nghĩa khi thời cơ chín mùi."
        ]
      }
    },
    historicalQuote: {
      quote: "Bất kỳ ở đâu khi thấy điều kiện thuận lợi là phải chủ động tiến hành khởi nghĩa từng phần, mở rộng căn cứ địa.",
      speaker: "Chỉ thị 'Nhật, Pháp bắn nhau và hành động của chúng ta' (12/3/1945)"
    }
  },
  {
    id: 11,
    slideNumber: "11",
    badge: "Diễn Biến Cao Trào",
    period: "03 – 07/1945",
    title: "Diễn Biến Cao Trào Kháng Nhật Cứu Nước",
    subtitle: "Khởi nghĩa từng phần & Khẩu hiệu 'Phá kho thóc giải quyết nạn đói'",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Khẩu Hiệu 'Phá Kho Thóc' & Đấu Tranh",
        icon: "Wheat",
        points: [
          "Đẩy mạnh khẩu hiệu 'Phá kho thóc, giải quyết nạn đói' đáp ứng đúng nguyện vọng sinh tử của hàng triệu quần chúng.",
          "Hàng vạn kho thóc của Nhật bị chiếm, cứu sống triệu người dân khỏi thảm cảnh đói giặc năm 1945.",
          "Hàng triệu quần chúng tin tưởng và đứng vào hàng ngũ Mặt trận Việt Minh."
        ]
      },
      rightPillar: {
        title: "Khu Giải Phóng Việt Bắc",
        icon: "MapPin",
        points: [
          "Tháng 4/1945: Hội nghị Quân sự Bắc Kỳ quyết định thống nhất các lực lượng vũ trang thành 'Việt Nam Giải phóng quân'.",
          "Tháng 6/1945: Thành lập Khu giải phóng Việt Bắc gồm 6 tỉnh (Cao - Bắc - Lạng - Thái - Tuyên - Hà).",
          "Việt Bắc trở thành căn cứ địa chính của cả nước, hình ảnh thu nhỏ của nước Việt Nam mới."
        ]
      }
    },
    historicalQuote: {
      quote: "Khẩu hiệu 'Phá kho thóc giải quyết nạn đói' đã thổi bùng ngọn lửa cách mạng trong lòng hàng triệu nông dân nghèo khổ.",
      speaker: "Lịch sử Cách mạng Tháng Tám"
    }
  },
  {
    id: 12,
    slideNumber: "12",
    badge: "Thời Cơ Vàng",
    period: "08/1945",
    title: "Bối Cảnh & 'Thời Cơ Vàng' Tháng 8 Năm 1945",
    subtitle: "Phát xít Nhật đầu hàng Đồng minh & Khoảnh khắc lịch sử có một không hai",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Nhật Đầu Hàng Đồng Minh",
        icon: "CheckCircle",
        points: [
          "Ngày 15/8/1945: Nhật Hoàng tuyên bố đầu hàng Đồng minh không điều kiện.",
          "Quân Nhật ở Đông Dương hoang mang cực độ, mất hết sức chiến đấu và tinh thần.",
          "Chính quyền tay sai Trần Trọng Kim tê liệt, rệu rã hoàn toàn."
        ]
      },
      rightPillar: {
        title: "Đặc Điểm Của 'Thời Cơ Vàng'",
        icon: "Clock",
        points: [
          "Xuất hiện trong khoảng thời gian cực ngắn (khoảng 20 ngày): Từ khi Nhật đầu hàng đến trước khi quân Đồng minh (Anh, Tưởng) vào Đông Dương.",
          "Kẻ thù cũ (Pháp) đã đổ, kẻ thù mới (Nhật) đã hàng, kẻ thù tương lai (Đồng minh) chưa kịp tới.",
          "Thực lực cách mạng trong nước đã chuẩn bị sẵn sàng, quần chúng sục sôi khí thế."
        ]
      }
    },
    historicalQuote: {
      quote: "Lúc này thời cơ thuận lợi đã tới, dù có phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập!",
      speaker: "Lời kêu gọi khẩn thiết của Bác Hồ tại Tân Trào (8/1945)"
    }
  },
  {
    id: 13,
    slideNumber: "13",
    badge: "Quyết Sách Chớp Thời Cơ",
    period: "13 – 16/08/1945",
    title: "Quyết Sách Chớp Thời Cơ - Hội Nghị Tân Trào",
    subtitle: "Quân lệnh số 1 & Đại hội Quốc dân Tân Trào",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Quân Lệnh Số 1 & Hội Nghị Đảng",
        icon: "Megaphone",
        points: [
          "Đêm 13/8/1945: Ủy ban Khởi nghĩa ra Quân lệnh số 1 phát động Tổng khởi nghĩa trong cả nước.",
          "Từ 14 - 15/8/1945: Hội nghị toàn quốc của Đảng họp tại Tân Trào (Tuyên Quang).",
          "Quyết định phát động Tổng khởi nghĩa toàn quốc trước khi quân Đồng minh tiến vào Đông Dương."
        ]
      },
      rightPillar: {
        title: "Đại Hội Quốc Dân Tân Trào (16-17/8)",
        icon: "Landmark",
        points: [
          "Được ví như 'Nghị viện cách mạng' đầu tiên của Việt Nam.",
          "Tán thành quyết định Tổng khởi nghĩa của Đảng.",
          "Thông qua 10 chính sách lớn của Việt Minh.",
          "Bầu ra Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch."
        ]
      }
    },
    historicalQuote: {
      quote: "Giờ tổng khởi nghĩa đã đến! Cơ hội có một không hai cho quân dân Việt Nam vùng dậy giành lấy quyền độc lập tự do!",
      speaker: "Quân lệnh số 1 (Đêm 13/8/1945)"
    }
  },
  {
    id: 14,
    slideNumber: "14",
    badge: "Tổng Khởi Nghĩa Thắng Lợi",
    period: "19/08 – 02/09/1945",
    title: "Diễn Biến Tổng Khởi Nghĩa & Ngày 2/9/1945",
    subtitle: "Thắng lợi vang dội tại các trung tâm & Tuyên ngôn Độc lập",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Thắng Lợi Vang Dội Ba Miền",
        icon: "Trophy",
        points: [
          "Ngày 19/8/1945: Khởi nghĩa thắng lợi rực rỡ tại Hà Nội (chiếm Phủ Khâm sai, Tòa Thị chính...).",
          "Ngày 23/8/1945: Thắng lợi tại Kinh đô Huế, Vua Bảo Đại tuyên bố bãi bỏ ngai vàng.",
          "Ngày 25/8/1945: Thắng lợi rực rỡ tại Sài Gòn và lan rộng khắp cả nước.",
          "Chỉ trong vòng 15 ngày, Tổng khởi nghĩa đã hoàn toàn thắng lợi."
        ]
      },
      rightPillar: {
        title: "Ngày 2/9/1945 - Khai Sinh Nước Việt Nam Mới",
        icon: "Sparkles",
        points: [
          "Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập lịch sử tại Quảng trường Ba Đình.",
          "Trịnh trọng tuyên bố với toàn thế giới sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
          "Mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam."
        ]
      }
    },
    historicalQuote: {
      quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.",
      speaker: "Tuyên ngôn Độc lập (02/9/1945)"
    }
  },
  {
    id: 15,
    slideNumber: "15",
    badge: "Bài Học Chiến Lược",
    period: "1939 – 1945",
    title: "Các Quyết Định Chiến Lược Tạo Nên Thành Công",
    subtitle: "Tổng kết 4 trụ cột chiến lược vĩ đại của Đảng",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Trụ Cột 1 & 2: Chuyển Hướng & Chuẩn Bị",
        icon: "Compass",
        points: [
          "1. Chuyển hướng chỉ đạo chiến lược đúng đắn: Đặt nhiệm vụ giải phóng dân tộc lên hàng tối cao ngay từ 1939-1941.",
          "2. Chuẩn bị thực lực toàn diện từ sớm: Xây dựng cả lực lượng chính trị quần chúng (Việt Minh) lẫn lực lượng vũ trang (Giải phóng quân) và căn cứ địa vững chắc."
        ]
      },
      rightPillar: {
        title: "Trụ Cột 3 & 4: Nghệ Thuật Khởi Nghĩa & Thời Cơ",
        icon: "Zap",
        points: [
          "3. Nghệ thuật khởi nghĩa linh hoạt: Đi từ khởi nghĩa từng phần, chiến tranh du kích cục bộ tiến lên Tổng khởi nghĩa.",
          "4. Dự báo thiên tài & Chớp đúng thời cơ vàng: Quyết đoán phát động Tổng khởi nghĩa đúng lúc kẻ thù hoang mang nhất trước khi quân Đồng minh vào."
        ]
      }
    },
    historicalQuote: {
      quote: "Thắng lợi của Cách mạng Tháng Tám là sự kết tinh của 15 năm chuẩn bị công phu, kiên cường dưới sự lãnh đạo tài tình của Đảng.",
      speaker: "Văn kiện Tổng kết Cách mạng Việt Nam"
    }
  },
  {
    id: 16,
    slideNumber: "16",
    badge: "Tính Chất Cách Mạng",
    period: "1945",
    title: "Tính Chất Của Cách Mạng Tháng Tám",
    subtitle: "Cách mạng giải phóng dân tộc điển hình & Dân chủ mới sâu sắc",
    themeColor: "amber",
    content: {
      leftPillar: {
        title: "Giải Phóng Dân Tộc Điển Hình",
        icon: "Flag",
        points: [
          "Mang tính chất giải phóng dân tộc vô cùng đậm nét: Tập trung toàn bộ sức mạnh vào mục tiêu lật đổ ách thống trị phát xít - thực dân.",
          "Thành lập chính quyền nhà nước của chung toàn thể nhân dân (Việt Nam Dân chủ Cộng hòa).",
          "Đoàn kết rộng rãi chưa từng có mọi tầng lớp nhân dân dưới lá cờ Cứu quốc."
        ]
      },
      rightPillar: {
        title: "Tính Dân Chủ Mới & Nhân Văn Sâu Sắc",
        icon: "Heart",
        points: [
          "Mang tính dân chủ mới: Thực hiện từng bước quyền làm chủ cho nông dân, người lao động.",
          "Tính nhân văn sâu sắc: Giành chính quyền nhanh chóng, ít đổ máu, thể hiện truyền thống nhân đạo cao đẹp.",
          "Xóa bỏ hoàn toàn chế độ phong kiến lỗi thời tồn tại nghìn năm."
        ]
      }
    },
    historicalQuote: {
      quote: "Cách mạng Tháng Tám là một cuộc cách mạng giải phóng dân tộc điển hình, mở đầu cho thời kỳ sụp đổ của chủ nghĩa thực dân cũ.",
      speaker: "Đánh giá của các nhà nghiên cứu lịch sử quốc tế"
    }
  },
  {
    id: 17,
    slideNumber: "17",
    badge: "Ý Nghĩa Lịch Sử",
    period: "1945 – Nay",
    title: "Ý Nghĩa Lịch Sử Vĩ Đại Của Cách Mạng Tháng Tám",
    subtitle: "Cột mốc chói lọi đối với Dân tộc Việt Nam & Phong trào Thế giới",
    themeColor: "red",
    content: {
      leftPillar: {
        title: "Đối Với Dân Tộc Việt Nam",
        icon: "Award",
        points: [
          "Đập tan ách nô lệ hơn 80 năm của thực dân Pháp và phát xít Nhật, chấm dứt chế độ phong kiến.",
          "Lập nên nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.",
          "Đưa dân tộc Việt Nam bước vào kỷ nguyên mới: Kỷ nguyên Độc lập, Tự do và Chủ nghĩa xã hội.",
          "Đưa Đảng ta từ một Đảng hoạt động bí mật trở thành Đảng cầm quyền."
        ]
      },
      rightPillar: {
        title: "Đối Với Thế Giới",
        icon: "Globe",
        points: [
          "Cú đòn tử thương vào chủ nghĩa thực dân cũ, mở đầu cho sự sụp đổ hệ thống thuộc địa thế giới.",
          "Cổ vũ mạnh mẽ các dân tộc bị áp bức ở châu Á, châu Phi và Mỹ La-tinh đứng lên tự giải phóng.",
          "Làm phong phú thêm kho tàng lý luận Mác - Lênin về cách mạng giải phóng dân tộc ở các nước thuộc địa."
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
