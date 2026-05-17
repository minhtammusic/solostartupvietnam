/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const getMockData = (t: (vi: string, en: string) => string) => {
  return {
    COURSE_CONFIG: [
      {
        id: 'mini',
        title: t('Mini StartUp Courses', 'Mini StartUp Courses'),
        activeBg: 'bg-green-600',
        hoverClass: 'hover:bg-slate-100 hover:text-slate-900',
        tabs: [
          { id: 'start', label: t('Đăng ký Khóa học', 'Register Course'), dotColor: 'bg-emerald-500' },
          { id: 'announcements', label: t('Thông báo chung', 'Announcements'), dotColor: 'bg-blue-400' },
          { id: 'discussions', label: t('Thảo luận', 'Discussions'), dotColor: 'bg-blue-400' },
          { id: 'aibot', label: t('Thực hành cùng AI', 'AI Practice'), dotColor: 'bg-purple-400' },
        ]
      },
      {
        id: 'masterclass',
        title: t('StartUp Masterclass (Đang xây dựng)', 'StartUp Masterclass (Updating)'),
        activeBg: 'bg-indigo-600',
        hoverClass: 'hover:bg-indigo-50 hover:text-indigo-900',
        tabs: [
          { id: 'start', label: t('Đăng ký Khóa Masterclass', 'Register Masterclass'), dotColor: 'bg-indigo-500' },
          { id: 'announcements', label: t('Thông báo chung', 'Announcements'), dotColor: 'bg-blue-400' },
          { id: 'discussions', label: t('Thảo luận', 'Discussions'), dotColor: 'bg-blue-400' },
          { id: 'aibot', label: t('AI Đầu tư (Nâng cao)', 'Advanced AI Investor'), dotColor: 'bg-fuchsia-500' },
          { id: 'certification', label: t('Thi Chứng chỉ ESB', 'ESB Certification'), dotColor: 'bg-amber-500' },
        ]
      }
    ],
    feedPosts: [
      {
        id: 'f1', author: 'SoloStartup', authorRole: t('Quản trị viên', 'Admin'), avatar: 'SS', space: t('Chuyện Khởi nghiệp', 'Startup Hub'), time: t('2 ngày trước', '2 days ago'),
        title: t('Bí quyết gọi vốn Seed thành công khi chưa có doanh thu (Cập nhật 2026)', 'Seed Funding Secrets without Revenue (2026 Update)'),
        content: t('Gọi vốn ở giai đoạn ý tưởng (Seed) luôn là bài toán đau đầu với các Founder trẻ. Khi chưa có sản phẩm hoàn thiện và doanh thu bằng 0, bạn lấy gì để thuyết phục các Shark xuống tiền? \n\nLấy ví dụ từ Airbnb, ở những ngày đầu tiên, họ bán các hộp ngũ cốc (Obama O\'s) để duy trì dự án thay vì chờ đợi quỹ rót vốn. Điều này chứng minh cho nhà đầu tư thấy năng lực sinh tồn và sự quyết tâm của Founder. Nhà đầu tư thiên thần không mua "hiện tại" mà họ mua "tương lai" của dự án.\n\n🔥 FRAMEWORK ĐÁNH GIÁ (3 Yếu tố Cốt lõi):\n1. Năng lực thực thi (Execution): Ý tưởng chiếm 1%, thực thi chiếm 99%.\n2. Lợi thế độc quyền (Moat): Điều gì khiến đối thủ không thể đè bẹp bạn trong 6 tháng tới?\n3. Quy mô thị trường (TAM): Một mẩu bánh nhỏ trong thị trường tỷ đô luôn hấp dẫn hơn một cái bánh lớn trong thị trường ngách chật hẹp.\n\n✅ CHECKLIST GẶP NHÀ ĐẦU TƯ:\n[ ] Đội ngũ có đủ kỹ năng lõi (Tech, Biz, Design)?\n[ ] Có dữ liệu khảo sát hơn 100 user thật?\n[ ] Có MVP (Sản phẩm dùng thử) hoạt động trơn tru?\n\nĐừng quá tự ti nếu dự án chưa có doanh thu. Tập trung giải quyết một "Pain point" đủ lớn và chứng minh nó bằng những con số thực tế đầu tiên!', 'Raising Seed funds without revenue is tough. What do you use to convince Sharks? \n\nTake Airbnb for example, they sold cereal boxes to survive in the early days. Investors buy the future, not the present. \n\n🔥 FRAMEWORK (3 Core Elements):\n1. Execution (Team).\n2. Unfair Advantage (Moat).\n3. Market Size (TAM).\n\n✅ CHECKLIST FOR INVESTOR MEETINGS:\n[ ] Team has core skills?\n[ ] Survey data from 100+ real users?\n[ ] Working MVP?\n\nFocus on a big pain point and prove it with initial real data!'),
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', likes: 145, comments: 23, tags: [t('Gọi vốn', 'Funding'), t('Kinh nghiệm', 'Experience')]
      },
      {
        id: 'f2', author: 'Mentor Minh', authorRole: t('Chuyên gia', 'Expert'), avatar: 'MM', space: t('Thảo luận chung', 'General Discussion'), time: t('4 ngày trước', '4 days ago'),
        title: t('Giải phẫu 3 sai lầm chết người khi thiết kế Business Model Canvas', 'Top 3 Fatal Mistakes in Business Model Canvas'),
        content: t('Business Model Canvas (BMC) là công cụ kinh điển, nhưng sau hơn 50 dự án tôi cố vấn, 90% sinh viên đều mắc chung những lỗi cơ bản khiến mô hình kinh doanh trở nên phi thực tế. \n\nChẳng hạn, một nhóm EdTech dự định thu phí 50k/tháng/sinh viên, nhưng chi phí Marketing để có 1 sinh viên đó (CAC) lại lên tới 200k. Dòng tiền gãy ngay từ trong trứng nước vì ô "Cấu trúc chi phí" và "Luồng doanh thu" bị tính toán cảm tính.\n\n🔥 3 LỖI PHỔ BIẾN NHẤT CẦN TRÁNH:\n1. Kênh phân phối (Channels) quá chung chung: Viết "Mạng xã hội, TikTok" là chưa đủ. Tiếp cận qua Group Cộng đồng nào? KOL nào?\n2. Luồng doanh thu (Revenue Streams) phi logic: Nghĩ rằng cứ làm App là sẽ thu được tiền quảng cáo. Sự thật: Phải có hàng trăm ngàn User active mỗi ngày thì quảng cáo mới tạo ra tiền đáng kể.\n3. Thiếu điểm khác biệt (USP) ở Value Proposition: Cạnh tranh bằng "Giá rẻ hơn" là con đường tự sát nhanh nhất.\n\n✅ CHECKLIST HOÀN THIỆN BMC:\n[ ] CAC (Chi phí thu hút 1 KH) < LTV (Giá trị trọn đời của KH).\n[ ] Ít nhất 1 kênh phân phối miễn phí/chi phí thấp đã được kiểm chứng.\n[ ] Lợi thế cạnh tranh không thể copy bằng tiền.\n\nTeam bạn đang gặp khó ở ô nào trong 9 ô BMC? Để lại bình luận để cùng mổ xẻ nhé.', 'BMC is classic, but 90% of students make fatal errors making their models unrealistic.\n\nFor example, an EdTech team plans to charge 50k/month but their CAC is 200k. Cashflow breaks immediately.\n\n🔥 TOP 3 FATAL MISTAKES:\n1. Vague Channels (Saying "TikTok" isn\'t enough).\n2. Illogical Revenue (Ads need massive daily active users).\n3. Weak USP (Competing on "Cheap" is suicide).\n\n✅ BMC CHECKLIST:\n[ ] CAC < LTV.\n[ ] At least 1 proven low-cost channel.\n[ ] Unfair advantage that money can\'t buy.\n\nWhich block is your team struggling with? Comment below.'),
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', likes: 89, comments: 15, tags: ['Q&A', 'Business Model']
      }
    ],
    trendingPosts: [
      { id: 't1', title: t('Top 10 Dự án xuất sắc nhất Tháng 5', 'Top 10 Best Projects in May'), author: 'SoloStartup Vietnam', icon: '🏆' },
      { id: 't2', title: t('Hướng dẫn dùng NotebookLM để đọc Report thị trường', 'Using NotebookLM to read Market Reports'), author: 'Mentor Minh', icon: '🤖' },
      { id: 't3', title: t('Xin mẫu Template Financial Projection (File Excel)', 'Need Financial Projection Template Excel'), author: 'Học viên K12', icon: '📄' },
      { id: 't4', title: t('Cách trả lời khi Investor chê "Quy mô thị trường quá nhỏ"', 'How to reply when Investors say Market is too small'), author: 'SoloStartup', icon: '💡' },
      { id: 't5', title: t('Tìm Co-founder mảng Lập trình Mobile (React Native)', 'Looking for Mobile Dev Co-founder'), author: 'Team EduTech', icon: '🤝' }
    ],
    welcomePosts: [
      {
        id: 'w1', author: 'SoloStartup', authorRole: t('Quản trị viên', 'Admin'), avatar: 'SS', space: t('Khu vực Chào mừng', 'Welcome Area'), time: t('Ghim', 'Pinned'),
        title: t('Lộ trình 30 ngày: Từ số 0 đến Prototype hoàn chỉnh', '30-Day Roadmap: From Zero to Prototype'),
        content: t('Chào mừng các tân binh đến với hệ sinh thái SoloStartup! Bạn có ý tưởng nhưng không biết bắt đầu từ đâu? Hàng ngàn sinh viên cũng từng bối rối như vậy. Đừng lo, lộ trình 30 ngày này được thiết kế theo chuẩn tinh gọn của Thung lũng Silicon để giúp bạn biến mọi thứ từ trong đầu ra thành một nguyên mẫu (Prototype) cầm nắm được.\n\nNhìn lại câu chuyện của Dropbox, họ không hùng hục code ngay. Họ dành thời gian làm một video demo ngắn gọn để thu thập email của những người thực sự quan tâm. Đó là sức mạnh của việc làm đúng lộ trình: Tìm hiểu nhu cầu trước khi chế tạo sản phẩm.\n\n🔥 FRAMEWORK HÀNH ĐỘNG (LỘ TRÌNH 4 TUẦN):\n- Tuần 1: Xác thực ý tưởng (Market Validation). Dừng code lại, đi phỏng vấn 50 khách hàng tiềm năng.\n- Tuần 2: Thiết kế Mô hình (Business Model Canvas). Ai là người trả tiền? Kênh phân phối là gì?\n- Tuần 3: Xây dựng MVP (Sản phẩm khả thi tối thiểu). Dùng No-code tools để chạy thử nhanh nhất.\n- Tuần 4: Luyện Pitching. Làm slide và cọ xát với AI Role-play Bot của hệ thống.\n\n✅ CHECKLIST TUẦN ĐẦU TIÊN:\n[ ] Đăng nhập hệ thống và cập nhật hồ sơ cá nhân.\n[ ] Đăng 1 bài giới thiệu bản thân và dự án trên mục Thảo luận.\n[ ] Hoàn thành module "Tư duy khởi nghiệp" trên Udemy.\n[ ] Lên danh sách 10 khách hàng mục tiêu để phỏng vấn.\n\nMột ý tưởng dở được thực thi tốt còn hơn một ý tưởng xuất chúng nằm trên giấy. Bắt tay vào Tuần 1 ngay hôm nay nhé!', 'Welcome rookies! Got an idea but don\'t know where to start? This 30-day roadmap will help you build a real prototype.\n\nDropbox didn\'t code immediately. They made a demo video to collect emails of interested users. Validate before you build.\n\n🔥 4-WEEK ROADMAP:\n- Week 1: Validation. Interview 50 potential users.\n- Week 2: Business Model Canvas.\n- Week 3: Build MVP using No-code tools.\n- Week 4: Pitching practice with AI Bot.\n\n✅ FIRST WEEK CHECKLIST:\n[ ] Update profile.\n[ ] Post self-intro in Discussions.\n[ ] Finish "Mindset" module on Udemy.\n[ ] List 10 target customers to interview.\n\nExecution is everything. Start Week 1 today!'),
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', likes: 500, comments: 45, tags: [t('Phải đọc', 'Must Read'), t('Lộ trình', 'Roadmap')]
      },
      {
        id: 'w2', author: 'SoloStartup', authorRole: t('Quản trị viên', 'Admin'), avatar: 'SS', space: t('Khu vực Chào mừng', 'Welcome Area'), time: t('Mới cập nhật', 'Recently Updated'),
        title: t('Bản đồ sinh tồn: Hướng dẫn khai thác tối đa tài nguyên hệ thống', 'Survival Map: How to maximize platform resources'),
        content: t('Hệ thống SoloStartup không chỉ là một website tĩnh, nó là một kho vũ khí được trang bị tận răng. Nếu bạn chỉ vào đây đọc bài rồi thoát ra, bạn đang lãng phí 90% giá trị của dự án.\n\nĐể xây dựng một startup, bạn cần kiến thức, cần người đồng hành, và cần thực hành liên tục. Chúng tôi đã phân mảnh các nhu cầu đó thành các công cụ chuyên biệt để bạn sử dụng.\n\n🔥 CÁC TRỤ CỘT TÀI NGUYÊN CỦA BẠN:\n1. Nền tảng Udemy (Học tập): Nơi chứa các video lý thuyết chuyên sâu do SoloStartup biên soạn. Hãy học ở đây để lấy nền tảng.\n2. AI Role-play Bot (Thực hành): Nơi bạn có thể "đấu võ mồm" với các Shark ảo do AI đóng vai 24/7 để rèn phản xạ Pitching.\n3. Mạng lưới Mentor (Kết nối): Khi bế tắc, hãy vào mục Chuyên gia, chọn một Mentor có chuyên môn phù hợp và đặt lịch Coaching 1:1 hoàn toàn miễn phí.\n\n✅ CHECKLIST KHAI THÁC TÀI NGUYÊN:\n[ ] Đã liên kết tài khoản và vào được khóa học trên Udemy chưa?\n[ ] Đã copy thử Prompt và chat với AI Bot chưa?\n[ ] Đã lướt xem hồ sơ của các Mentor để nhắm sẵn "người dẫn đường" cho dự án chưa?\n\nĐừng đi một mình trong sương mù, hãy dùng bản đồ mà chúng tôi cung cấp!', 'SoloStartup is not a static website; it is an arsenal. If you just read and leave, you waste 90% of its value.\n\n🔥 YOUR RESOURCE PILLARS:\n1. Udemy: Deep theoretical videos.\n2. AI Role-play Bot: Practice pitching with AI Sharks 24/7.\n3. Mentor Network: Book free 1:1 coaching when stuck.\n\n✅ RESOURCE EXTRACTION CHECKLIST:\n[ ] Accessed Udemy course?\n[ ] Tried the AI Bot?\n[ ] Browsed Mentor profiles?\n\nDon\'t walk alone in the fog, use the map we provide!'),
        coverColor: 'from-blue-500 to-indigo-600', icon: '🗺️', likes: 320, comments: 18, tags: [t('Hướng dẫn', 'Guide'), t('Tài nguyên', 'Resources')]
      },
      {
        id: 'w3', author: 'Mentor Minh', authorRole: t('Chuyên gia', 'Expert'), avatar: 'MM', space: t('Khu vực Chào mừng', 'Welcome Area'), time: t('1 ngày trước', '1 day ago'),
        title: t('Văn hóa SoloStartup: 3 nguyên tắc vàng để đi nhanh và đi xa', 'SoloStartup Culture: 3 Golden Rules'),
        content: t('Một cộng đồng mạnh không được đo bằng số lượng thành viên, mà đo bằng chất lượng của những cuộc thảo luận. Tại SoloStartup, chúng tôi đề cao sự chân thực, tinh thần đóng góp và tư duy dựa trên dữ liệu.\n\nTrong giới startup, cái tôi (Ego) là kẻ thù số một của sự phát triển. Rất nhiều bạn trẻ giấu giếm ý tưởng của mình vì sợ bị ăn cắp, để rồi xây dựng ra một sản phẩm không ai cần trong sự cô độc.\n\n🔥 FRAMEWORK VĂN HÓA CỘNG ĐỒNG:\n1. Pay It Forward (Cho đi trước): Đừng chỉ vào mục Thảo luận để hỏi. Nếu bạn thấy một bài đăng mà bạn có thể giúp, hãy bình luận chia sẻ. Lần sau, người khác sẽ giúp bạn.\n2. Data Over Ego (Dữ liệu thắng Cái tôi): Khi phản biện ý tưởng của người khác, hãy dùng số liệu và logic, đừng dùng cảm tính. Nếu ai đó chê dự án của bạn, hãy hỏi họ "Tại sao?" thay vì tự ái.\n3. Done Is Better Than Perfect (Hoàn thành tốt hơn hoàn hảo): Đừng sợ đăng những bản thiết kế nháp hay ý tưởng còn dang dở. Cộng đồng ở đây để giúp bạn gọt giũa nó.\n\n✅ CHECKLIST HÒA NHẬP CỘNG ĐỒNG:\n[ ] Comment góp ý chân thành cho ít nhất 2 dự án của nhóm khác.\n[ ] Thả tim cho những bài viết chia sẻ kiến thức hữu ích.\n[ ] Tự tin đăng bài hỏi đáp ngay khi gặp khó khăn, không giấu dốt.\n\nChào mừng bạn đến với nhà chung. Cùng nhau, chúng sẽ kiến tạo nên những điều tuyệt vời!', 'A strong community is measured by the quality of discussions. At SoloStartup, we value authenticity, contribution, and data-driven thinking.\n\nEgo is the enemy. Don\'t hide your ideas fearing theft.\n\n🔥 COMMUNITY CULTURE FRAMEWORK:\n1. Pay It Forward: Help others before asking for help.\n2. Data Over Ego: Argue with logic and data, not feelings.\n3. Done Is Better Than Perfect: Share your drafts, don\'t wait for perfection.\n\n✅ INTEGRATION CHECKLIST:\n[ ] Give constructive feedback to 2 other projects.\n[ ] Like useful knowledge-sharing posts.\n[ ] Ask questions confidently when stuck.\n\nWelcome home. Together, we build great things!'),
        coverColor: 'from-amber-400 to-orange-500', icon: '🤝', likes: 450, comments: 56, tags: [t('Văn hóa', 'Culture'), t('Cộng đồng', 'Community')]
      }
    ],
    announcementPosts: [
      {
        id: 'a1', author: 'SoloStartup', authorRole: t('Quản trị viên', 'Admin'), avatar: 'SS', space: t('Thông báo', 'Announcements'), time: t('Mới nhất', 'Latest'),
        title: t('Mở cổng đăng ký thi thử (Mock Pitching) Đợt 1', 'Open Registration for Mock Pitching Batch 1'),
        content: t('Thông báo quan trọng dành cho toàn bộ học viên! Cổng đăng ký tham gia sự kiện Mock Pitching (Trình bày dự án thử nghiệm) Đợt 1 chính thức mở cửa từ hôm nay.\n\nMock Pitching là cơ hội vàng để các bạn mang dự án ra ánh sáng, cọ xát trực tiếp với Hội đồng Giám khảo trước khi bước vào cuộc thi thật. Những lời chê bai ở vòng này chính là liều thuốc đắng dã tật quý giá nhất.\n\n🔥 THÔNG TIN CHI TIẾT SỰ KIỆN:\n- Hình thức: Online qua nền tảng Zoom.\n- Thời lượng chuẩn: 3 phút Pitching + 5 phút Q&A phản biện.\n- Giới hạn: Chỉ nhận 15 nhóm đăng ký sớm nhất.\n\n✅ CHECKLIST CHUẨN BỊ:\n[ ] Đã hoàn thiện Pitch Deck (Tối đa 10 slide).\n[ ] Người thuyết trình có micro và camera rõ nét.\n[ ] Có backup phương án trả lời cho các câu hỏi về Tài chính và Lợi thế cạnh tranh.\n\nĐừng để lần đầu tiên thuyết trình của bạn là trên sân khấu lớn. Nhanh tay đăng ký qua form đã gửi trong Email nhé!', 'Important notice! Registration for Mock Pitching Batch 1 is officially open.\n\nThis is your golden chance to pitch directly to Mentors before the official contest. Harsh feedback here is the best medicine.\n\n🔥 EVENT DETAILS:\n- Format: Online via Zoom.\n- Duration: 3 min Pitch + 5 min Q&A.\n- Limit: First 15 registered teams.\n\n✅ PREPARATION CHECKLIST:\n[ ] Pitch Deck completed (Max 10 slides).\n[ ] Clear mic and camera.\n[ ] Backup answers for Finance and USP questions.\n\nDon\'t let your first pitch be on the big stage. Register via the link in your email!'),
        coverColor: 'from-orange-400 to-red-500', icon: '🎤', likes: 120, comments: 30, tags: [t('Sự kiện', 'Event'), t('Quan trọng', 'Urgent')]
      }
    ],
    discussionPosts: [
      {
        id: 'd1', author: 'Học viên A', authorRole: t('Thành viên', 'Member'), avatar: 'A', space: t('Thảo luận', 'Discussions'), time: t('3 giờ trước', '3 hours ago'),
        title: t('Cần tìm Mentor và Co-founder chuyên mảng Nông nghiệp công nghệ cao (AgriTech)', 'Need AgriTech Mentor & Co-founder'),
        content: t('Xin chào mọi người, nhóm mình hiện tại gồm 2 sinh viên ngành Quản trị Kinh doanh đang ấp ủ một dự án về mảng Nông nghiệp thông minh, nhưng đang gặp rào cản rất lớn về mặt kỹ thuật triển khai.\n\nDự án của nhóm là một nền tảng IoT kết hợp các module cảm biến để tự động hóa quy trình tưới tiêu và chẩn đoán bệnh cho cây trồng trong nhà kính. Hiện tại, tụi mình đã hoàn thiện bản phân tích thị trường chi tiết và chốt được tệp khách hàng tiềm năng từ 3 nông trại thực tế (có cam kết cho dùng thử).\n\n🔥 YÊU CẦU TÌM ĐỒNG ĐỘI & MENTOR:\n- Tìm Co-founder (Vai trò CTO): Giỏi về phần cứng (Arduino, Vi mạch), hiểu biết về cloud và có tư duy phát triển sản phẩm.\n- Tìm Mentor: Nhóm đang cần lời khuyên về cách ước tính chi phí sản xuất phần cứng cho một bản MVP (hàng mẫu) cơ bản nhất.\n\n✅ QUYỀN LỢI CO-FOUNDER:\n[ ] Chia sẻ 30% cổ phần ban đầu (Có Vesting).\n[ ] Quyền quyết định toàn bộ về mặt công nghệ.\n\nAnh chị Mentor hoặc bạn nào có hứng thú với mảng AgriTech thì comment bên dưới hoặc inbox trực tiếp để mình gửi Pitch Deck nhé!', 'Hi everyone, we are 2 Biz students working on an AgriTech project but facing huge technical barriers.\n\nOur project is an IoT auto-irrigation platform. We already have market research and test commitments from 3 real farms.\n\n🔥 LOOKING FOR:\n- Co-founder (CTO): Good at Hardware (Arduino, Circuits) and Product mindset.\n- Mentor: Advice on hardware MVP cost estimation.\n\n✅ CO-FOUNDER BENEFITS:\n[ ] 30% equity (With Vesting).\n[ ] Full technical decision making.\n\nIf interested, comment below or inbox me for our Pitch Deck!'),
        coverColor: 'from-emerald-400 to-green-600', icon: '🌱', likes: 15, comments: 8, tags: ['AgriTech', t('Tìm Mentor', 'Find Mentor')]
      }
    ],
    courseModules: [
      {
        id: 'c1', category: t('Tư duy', 'Mindset'), title: t('Tư duy Khởi nghiệp & Đổi mới sáng tạo', 'Startup Mindset & Innovation'),
        content: t('Bạn có biết 90% sinh viên khởi nghiệp thất bại vì nhầm lẫn giữa một "Dự án nghiên cứu khoa học" và một "Startup"? Dự án nghiên cứu kết thúc khi bạn nhận được điểm số từ giảng viên, còn Startup chỉ thực sự bắt đầu khi có một người lạ chịu rút ví trả tiền cho giải pháp của bạn...\n\nNăm 2008, Drew Houston (Founder của Dropbox) đối mặt với bài toán huy động vốn khó nhằn...', 'Do you know 90% of students confuse a "Science Project" with a "Startup"?...'),
        author: 'SoloStartup', authorRole: t('Admin', 'Admin'), avatar: 'SS', space: t('Chuyện Khởi nghiệp', 'Startup Hub'), time: t('1 tuần trước', '1 week ago'),
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80', likes: 120, comments: 15, tags: [t('Tư duy', 'Mindset'), t('Bắt đầu', 'Start')]
      },
      {
        id: 'c2', category: t('Thị trường', 'Market'), title: t('Xác thực Thị trường (Market Validation)', 'Market Validation'),
        content: t('Sai lầm đắt giá nhất của các Founder trẻ không phải là thiếu tiền, mà là giam mình trong phòng suốt 6 tháng để code ra một ứng dụng hoàn hảo...', 'The costlier mistake is building a product for 6 months only to realize nobody wants it...'),
        author: 'Mentor Minh', authorRole: t('Chuyên gia', 'Expert'), avatar: 'MM', space: t('Chuyện Khởi nghiệp', 'Startup Hub'), time: t('1 tuần trước', '1 week ago'),
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', likes: 95, comments: 8, tags: ['Market Research', 'Validation']
      }
      // Thêm các modules khác từ code người dùng...
    ],
    featuredProjectsPosts: [
      {
        id: 'p1', author: 'Team EcoBite', authorRole: t('Học viên', 'Student'), avatar: 'EB', space: t('Dự án tiêu biểu', 'Featured Projects'), time: t('3 tuần trước', '3 weeks ago'),
        title: 'EcoBite - Nền tảng phân phối thực phẩm xanh',
        content: t('MỚI KHỞI ĐỘNG: Giải quyết bài toán lãng phí thực phẩm tại các nhà hàng...', 'STARTING UP: Solving food waste...'),
        image: 'https://images.unsplash.com/photo-1498837167922-41c53b448ce7?auto=format&fit=crop&w=800&q=80', likes: 340, comments: 45, tags: ['F&B', t('Môi trường', 'Environment')]
      }
    ],
    leaderboardData: [
      { rank: 1, name: 'Nguyễn Văn A', team: 'EcoBite', points: 2450, badge: t('🥇 Vô địch', '🥇 Champion') },
      { rank: 2, name: 'Trần Thị B', team: 'StudyBuddy', points: 2320, badge: t('🥈 Á quân', '🥈 Runner-up') }
    ],
    mentorsData: [
      {
        id: 'm1', name: 'Nguyễn Văn A', role: t('Giám đốc Đầu tư', 'Investment Director'), company: 'Quỹ ABC Ventures', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80',
        tags: [t('Tài chính', 'Finance'), t('Gọi vốn', 'Funding')], available: true, title: t('Mentor Nguyễn Văn A - Chuyên gia Tài chính', 'Mentor Nguyen Van A - Finance Expert'),
        content: t('Bạn cần chuẩn bị bảng tính dòng tiền (Cashflow) ít nhất 12 tháng...', 'Prepare a 12-month cash flow sheet...'),
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', bookingLink: 'https://docs.google.com/forms'
      }
    ],
    bookingGuidePost: {
      id: 'bg1', title: t('Hướng dẫn Đặt lịch Coaching 1-on-1', '1-on-1 Coaching Booking Guide'),
      author: 'SoloStartup', authorRole: t('Quản trị viên', 'Admin'), avatar: 'SS',
      space: t('Hướng dẫn & Nội quy', 'Guidelines'), time: t('Vừa cập nhật', 'Just updated'),
      content: t('Chào các bạn, để buổi Mentoring hiệu quả...', 'Hello, to make Mentoring effective...'),
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      bookingLink: 'https://docs.google.com/forms'
    },
    categories: [t('Tất cả', 'All'), t('Tư duy', 'Mindset'), t('Thị trường', 'Market'), t('Mô hình', 'Business Model'), t('Sản phẩm', 'Product'), t('Marketing', 'Marketing'), t('Pitching', 'Pitching'), t('Pháp lý', 'Legal'), t('AI', 'AI')],
    topCoursesPosts: [],
    topEventsPosts: [],
    defaultSubMenus: [
      {
        title: t('TÀI LIỆU HỌC TẬP', 'LEARNING MATERIALS'),
        items: [
          { label: t('Template Pitch Deck (Slide)', 'Pitch Deck Template'), link: '#' },
          { label: t('Biểu mẫu Business Model Canvas', 'Canvas Templates'), link: '#' }
        ]
      }
    ]
  };
};
