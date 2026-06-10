import { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Cake, Utensils } from 'lucide-react';
import MenuModal from './MenuModal';

const menuCategories = [
  { name: '飲品', icon: Coffee },
  { name: '戚風蛋糕', icon: Cake },
  { name: '鹹食料理', icon: Utensils },
];

const menuItems = {
  '飲品': [
    { name: '美式', price: '$120', desc: '經典濃郁美式咖啡。', img src="assets/images/americano_1779176175396.png"},
    { name: '拿鐵', price: '$150', desc: '香醇順口，奶香濃郁。', image: '/src/assets/images/latte_1779176192995.png' },
    { name: '西西里檸檬碎碎冰咖', price: '$160', desc: '新鮮檸檬與迷人咖啡，酸甜清爽。', image: '/src/assets/images/sicilian_lemon_iced_coffee_1779176214387.png' },
    { name: '疍宅鮮奶茶', price: '$140', desc: '嚴選茶葉與鮮乳的完美比例。', image: '/src/assets/images/dan_zhai_fresh_milk_tea_1779176231567.png' },
    { name: '水果泡泡飲', price: '$150', desc: '季節水果結合氣泡水，清涼解暑。', image: '/src/assets/images/fruit_soda_1779176249858.png' },
  ],
  '戚風蛋糕': [
    { name: '鐵觀音芭樂梅戚風', price: '$200', desc: '鐵觀音茶香戚風，搭配芭樂與梅乾內餡。', image: '/src/assets/images/tieguanyin_guava_plum_chiffon_cake_1779176081757.png' },
    { name: '黑摩卡可可生戚風', price: '$200', desc: '深濃可可風味，口感綿密。', image: '/src/assets/images/dark_mocha_cocoa_chiffon_cake_1779176109190.png' },
    { name: '藍莓布丁戚風', price: '$220', desc: '香甜藍莓與滑嫩布丁的完美結合。', image: '/src/assets/images/blueberry_pudding_chiffon_cake_1779176124630.png' },
    { name: '焦糖肉鬆戚風', price: '$210', desc: '鹹甜獨特風味，焦糖與肉鬆的奇妙碰撞。', image: '/src/assets/images/caramel_pork_floss_chiffon_cake_1779176147162.png' },
  ],
  '鹹食料理': [
    { name: '微辣蒜香蝦蝦麵', price: '$280', desc: '鮮蝦義大利麵，蒜味微辣。', image: '/src/assets/images/spicy_garlic_shrimp_pasta_1779176401431.png' },
    { name: '蛋沙拉脆皮胖堡', price: '$150', desc: '脆脆的現烤麵包搭配鹹甜的蛋沙拉。', image: '/src/assets/images/egg_salad_crispy_burger_1779176419001.png' },
    { name: '太陽蛋牛肋咖哩飯', price: '$320', desc: '慢燉牛肋搭配半熟太陽蛋之濃郁咖哩。', image: '/src/assets/images/curry_rice_with_sunnyside_egg_1779176438477.png' },
  ]
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<null | any>(null);

  return (
    <section id="最新菜單" className="py-24 bg-brand-milk-tea/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-brand-wood text-center mb-16">最新菜單</h2>
        
        {!selectedCategory ? (
          <div className="grid md:grid-cols-3 gap-8">
            {menuCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className="h-64 bg-white rounded-3xl shadow-sm flex flex-col items-center justify-center gap-4 text-2xl font-serif text-brand-wood hover:bg-brand-wood hover:text-white transition-colors"
              >
                <cat.icon size={48} />
                {cat.name}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setSelectedCategory(null)} className="mb-8 text-brand-wood hover:underline">← 返回分類</button>
            <div className="grid md:grid-cols-3 gap-8">
              {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-left"
                >
                  <div className="h-48 bg-brand-milk-tea/30 rounded-xl mb-4 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-coffee mb-2">{item.name}</h3>
                  <p className="text-brand-wood font-medium">{item.price}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <MenuModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} item={selectedItem} />
    </section>
  );
}
