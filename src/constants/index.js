import { world, story, combat, gameplay, demon, ghost, particles, fireSkull, review1, review2, review3 } from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "keyFeature",
    title: "Key features",
  },
  {
    id: "character",
    title: "Characters",
  },
  {
    id: "review",
    title: "Reviews",
  }
]

export const keyFeatures = [
{
  title: "THẾ GIỚI MỚI LẠ, RỘNG LỚN",
  desc: "Chào đón bạn vào Caladrias – một vùng đất bị nguyền rủa rộng lớn và đầy ắp những điều bí ẩn. Khám phá những khu rừng tăm tối, ngọn núi chìm trong bóng đêm, và những thành phố bị lãng quên, tất cả đều ẩn chứa những câu chuyện chưa được kể và thử thách khó khăn. Mỗi bước đi sẽ đưa bạn đến những vùng đất mới lạ, mở rộng hành trình của Dar knight trong cuộc chiến chống lại bóng tối.",
  gif: world
},
{
  title: "CỐT TRUYỆN BÍ ẤN VÀ THÚ VỊ",
  desc: "Câu chuyện trong Dar knight đan xen giữa huyền thoại và thực tại, với những bí ẩn cần được khám phá và những lựa chọn quan trọng ảnh hưởng đến vận mệnh của thế giới. Câu chuyện không chỉ xoay quanh cuộc hành trình thu thập Mảnh Vỡ Tấm Màn mà còn tiết lộ những sự thật đau đớn về sự sụp đổ của ánh sáng và bóng tối. Mỗi bước đi của bạn sẽ dần mở ra những mảnh ghép mới, dẫn đến những bất ngờ và tiết lộ đầy thú vị.",
  gif: story
},
{
  title: "GAMEPLAY ĐA DẠNG, PHONG PHÚ",
  desc: "Trải nghiệm gameplay phong phú và đa dạng, nơi bạn không chỉ tham gia vào những trận chiến ác liệt với các quái vật kinh hoàng mà còn phải giải quyết những câu đố hóc búa, mở khóa những phần thưởng quý giá. Combat trong game vô cùng phong phú với nhiều loại quái vật và boss khổng lồ, mỗi trận đấu đều là một thử thách mới. Cùng với đó, hệ thống kỹ năng đa dạng cho phép bạn tùy biến phong cách chiến đấu, từ tấn công mạnh mẽ cho đến sử dụng bóng tối để đánh lừa kẻ thù.",
  gif: gameplay
},
{
  title: "HỆ THỐNG COMBAT CĂNG VL CĂNG",
  desc: "Hệ thống combat trong Dar knight được thiết kế cực kỳ kịch tính và căng thẳng. Bạn sẽ phải sử dụng mọi chiến thuật và kỹ năng để đối đầu với kẻ thù, từ những sinh vật méo mó bảo vệ ánh sáng cho đến các quái vật mạnh mẽ nhất. Mỗi trận chiến đều yêu cầu sự khéo léo và tính toán, từ việc chọn lựa vũ khí cho đến việc phối hợp các kỹ năng để chiến thắng. Đặc biệt, những cuộc đối đầu với boss sẽ là thử thách khó nhằn, yêu cầu bạn phải học hỏi từ thất bại để ngày càng mạnh mẽ hơn.",
  gif: combat
}
]

export const monsters = [
  { name: 'Demon',
    image: demon,
    description: 'Description 1' 
  },
  { name: 'Ghost',
    image: ghost,
    description: 'Description 2'
  },
  { name: 'Fire Skull',
    image: fireSkull,
    description: 'Description 4' 
  },
  { name: 'Particles',
    image: particles,
    description: 'Description 6'
  },
]

export const reviews = [
  {
    image: review1,
    content: 'This game is incredibly immersive and visually stunning!',
    name: 'Alice Johnson',
    occupation: 'Game Reviewer',
  },
  {
    image: review2,
    content: 'A refreshing experience in the gaming industry. A must-try!',
    name: 'Phê game',
    occupation: 'Kênh review game',
  },
  {
    image: review3,
    content: 'An innovative and addictive game with captivating gameplay.',
    name: 'Tyson Van Ngo',
    occupation: 'Pro Gamer',
  },
]