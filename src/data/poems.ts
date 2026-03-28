
import { Poem } from '../types';

export const POEMS: Poem[] = [
  { 
    id: '5j1', title: '行宫', author: '元稹', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['寥落古行宫', '宫花寂寞红', '白头宫女在', '闲坐说玄宗'],
    pinyin: ['liáo luò gǔ xíng gōng', 'gōng huā jì mò hóng', 'bái tóu gōng nǚ zài', 'xián zuò shuō xuán zōng'],
    translation: '曾经宏伟的行宫如今一片冷落，宫中的花朵在寂寞中独自凋残。那些满头白发的宫女依然住在那里，闲着没事坐在一起谈论当年的唐玄宗。',
    annotation: [
      { word: '行宫', meaning: '皇帝出外巡行时居住的住所。' },
      { word: '寥落', meaning: '空虚、冷落。' },
      { word: '玄宗', meaning: '指唐玄宗李隆基。' }
    ]
  },
  { 
    id: '5j2', title: '登鹳雀楼', author: '王之涣', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['白日依山尽', '黄河入海流', '欲穷千里目', '更上一层楼'],
    pinyin: ['bái rì yī shān jìn', 'huáng hé rù hǎi liú', 'yù qióng qiān lǐ mù', 'gèng shàng yī céng lóu'],
    translation: '夕阳依傍着西山慢慢落下，黄河之水向着东方滔滔入海。如果想要看尽更远方的美景，那就请再登上一层高楼。',
    annotation: [
      { word: '鹳雀楼', meaning: '旧址在山西永济县。' },
      { word: '穷', meaning: '尽，极。' }
    ]
  },
  { 
    id: '5j3', title: '新嫁娘词', author: '王建', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['三日入厨下', '洗手作羹汤', '未谙姑食性', '先遣小姑尝'],
    pinyin: ['sān rì rù chú xià', 'xǐ shǒu zuò gēng tāng', 'wèi ān gū shí xìng', 'xiān qiǎn xiǎo gū cháng'],
    translation: '新婚三天后就走进厨房，洗净双手亲自为家人烹饪。因为还不熟悉婆婆的口味，所以先让丈夫的妹妹来品尝。',
    annotation: [
      { word: '谙', meaning: '熟悉。' },
      { word: '姑', meaning: '婆婆。' },
      { word: '小姑', meaning: '丈夫的妹妹。' }
    ]
  },
  { 
    id: '5j4', title: '相思', author: '王维', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['红豆生南国', '春来发几枝', '愿君多采撷', '此物最相思'],
    pinyin: ['hóng dòu shēng nán guó', 'chūn lái fā jǐ zhī', 'yuàn jūn duō cǎi xié', 'cǐ wù zuì xiāng sī'],
    translation: '红豆生长在遥远的南方，春天到了它会发芽长出几根枝条？希望你能多多采摘一些，因为红豆最能寄托思念之情。',
    annotation: [
      { word: '采撷', meaning: '采摘。' },
      { word: '相思', meaning: '此处指男女相爱或亲友相思。' }
    ]
  },
  { 
    id: '5j5', title: '杂诗', author: '王维', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['君自故乡来', '应知故乡事', '来日绮窗前', '寒梅著花未'],
    pinyin: ['jūn zì gù xiāng lái', 'yìng zhī gù xiāng shì', 'lái rì qǐ chuāng qián', 'hán méi zhuó huā wèi'],
    translation: '您是从故乡来的，一定知道家乡的情况。请问您出发的那天，我那雕花窗前的寒梅是否已经开花了？',
    annotation: [
      { word: '绮窗', meaning: '雕饰精美的窗户。' },
      { word: '著花', meaning: '开花。' }
    ]
  },
  { 
    id: '5j6', title: '鹿柴', author: '王维', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['空山不见人', '但闻人语响', '返景入深林', '复照青苔上'],
    pinyin: ['kōng shān bú jiàn rén', 'dàn wén rén yǔ xiǎng', 'fǎn jǐng rù shēn lín', 'fù zhào qīng tái shàng'],
    translation: '幽静的山中看不见人影，只能听到有人说话的声音。夕阳的余辉透射入深林之中，又反照在幽暗的青苔上面。',
    annotation: [
      { word: '鹿柴', meaning: '王维辋川别业地名。' },
      { word: '返景', meaning: '夕阳返照的光。' }
    ]
  },
  { 
    id: '5j7', title: '竹里馆', author: '王维', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['独坐幽篁里', '弹琴复长啸', '深林人不知', '明月来相照'],
    pinyin: ['dú zuò yōu huáng lǐ', 'tán qín fù cháng xiào', 'shēn lín rén bù zhī', 'míng yuè lái xiāng zhào'],
    translation: '独自坐在幽深的竹林里，一边弹琴一边发出长长的啸声。深林中无人知晓我的存在，只有明月洒下清辉与我相伴。',
    annotation: [
      { word: '幽篁', meaning: '幽深的竹林。' },
      { word: '长啸', meaning: '撮口发出的清越响声。' }
    ]
  },
  { 
    id: '5j8', title: '山中送别', author: '王维', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['山中相送罢', '日暮掩柴扉', '春草明年绿', '王孙归不归'],
    pinyin: ['shān zhōng xiāng sòng bà', 'rì mù yǎn chái fēi', 'chūn cǎo míng nián lǜ', 'wáng sūn guī bù guī'],
    translation: '在山中送别好友后，暮色中我回到住所扣上柴门。明年春草变绿的时候，朋友啊，你还能回来吗？',
    annotation: [
      { word: '柴扉', meaning: '柴门。' },
      { word: '王孙', meaning: '指归去的友人。' }
    ]
  },
  { 
    id: '5j9', title: '问刘十九', author: '白居易', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['绿蚁新醅酒', '红泥小火炉', '晚来天欲雪', '能饮一杯无'],
    pinyin: ['lǜ yǐ xīn pēi jiǔ', 'hóng ní xiǎo huǒ lú', 'wǎn lái tiān yù xuě', 'néng yǐn yì bēi wú'],
    translation: '我家新酿的米酒泛着绿色的泡沫，红泥做的小火炉烧得正旺。天快黑了，好像要下雪的样子，你能留下来喝一杯吗？',
    annotation: [
      { word: '绿蚁', meaning: '酒面上的绿色浮沫。' },
      { word: '无', meaning: '用于疑问句末。' }
    ]
  },
  { 
    id: '5j10', title: '哥舒歌', author: '西鄙人', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['北斗七星高', '哥舒夜带刀', '至今窥牧马', '不敢过临洮'],
    pinyin: ['běi dǒu qī xīng gāo', 'gē shū yè dài dāo', 'zhì jīn kuī mù mǎ', 'bù gǎn guò lín táo'],
    translation: '北斗七星高高挂在天空，哥舒翰大将军在夜晚巡逻佩戴宝刀。至今那些窥伺中原的异族骑兵，再也不敢越过临洮一步。',
    annotation: [
      { word: '哥舒', meaning: '指哥舒翰将军。' },
      { word: '临洮', meaning: '今甘肃省临洮县。' }
    ]
  },
  { 
    id: '5j11', title: '静夜思', author: '李白', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['床前明月光', '疑是地上霜', '举头望明月', '低头思故乡'],
    pinyin: ['chuáng qián míng yuè guāng', 'yí shì dì shàng shuāng', 'jǔ tóu wàng míng yuè', 'dī tóu sī gù xiāng'],
    translation: '床前洒满明亮的月光，让人怀疑是地上铺了一层银霜。抬头仰望天上的一轮明月，不由得低头沉思怀念起遥远的故乡。',
    annotation: [
      { word: '疑', meaning: '好像，怀疑。' }
    ]
  },
  { 
    id: '5j12', title: '怨情', author: '李白', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['美人卷珠帘', '深坐蹙蛾眉', '但见泪痕湿', '不知心恨谁'],
    pinyin: ['měi rén juǎn zhū lián', 'shēn zuò cù é méi', 'dàn jàn lèi hén shī', 'bù zhī xīn hèn shuí'],
    translation: '美丽的女子卷起珍珠门帘，一个人坐得很久，紧皱着蛾眉。只看见她的脸上满是泪痕，不知道她心里在埋怨谁。',
    annotation: [
      { word: '蹙', meaning: '皱起。' },
      { word: '蛾眉', meaning: '美女的眉毛。' }
    ]
  },
  { 
    id: '5j13', title: '登乐游原', author: '李商隐', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['向晚意不适', '驱车登古原', '夕阳无限好', '只是近黄昏'],
    pinyin: ['xiàng wǎn yì bù shì', 'qū chē dēng gǔ yuán', 'xī yáng wú xiàn hǎo', 'zhǐ shì jìn huáng hūn'],
    translation: '傍晚时分心情有些不快，于是驾着车登上古老的乐游原。夕阳西下的景象真是美极了，只可惜已经接近黄昏。',
    annotation: [
      { word: '意不适', meaning: '心情不舒畅。' },
      { word: '近', meaning: '靠近。' }
    ]
  },
  { 
    id: '5j14', title: '听筝', author: '李端', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['鸣筝金粟柱', '素手玉房前', '欲得周郎顾', '时时误拂弦'],
    pinyin: ['míng zhēng jīn sù zhù', 'sù shǒu yù fáng qián', 'yù dé zhōu láng gù', 'shí shí wù fú xián'],
    translation: '华美的古筝配着金粟装饰的琴柱，洁白的双手在玉房前轻弹。为了让心中的“周郎”回头看上一眼，她故意时时弹错琴弦。',
    annotation: [
      { word: '周郎', meaning: '三国周瑜。' }
    ]
  },
  { 
    id: '5j15', title: '渡汉江', author: '宋之问', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['岭外音书断', '经冬复历春', '近乡情更怯', '不敢问来人'],
    pinyin: ['lǐng wài yīn shū duàn', 'jīng dōng fù lì chūn', 'jìn xiāng qíng gèng qiè', 'bù gǎn wèn lái rén'],
    translation: '贬居岭外时与家人的书信断绝了。越走近家乡心里反而越是胆怯，遇见熟人甚至不敢询问家里的情况。',
    annotation: [
      { word: '怯', meaning: '胆怯。' }
    ]
  },
  { 
    id: '5j16', title: '八阵图', author: '杜甫', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['功盖三分国', '名成八阵图', '江流石不转', '遗恨失吞吴'],
    pinyin: ['gōng gài sān fēn guó', 'míng chéng bā zhèn tú', 'jiāng liú shí bù zhuǎn', 'yí hèn shī tūn wú'],
    translation: '他的功劳在三国之中是第一位的，石阵岿然不动，他留下的遗憾就是没能阻止刘备伐吴。',
    annotation: [
      { word: '八阵图', meaning: '诸葛亮创制的阵法。' }
    ]
  },
  { 
    id: '5j17', title: '宿建德江', author: '孟浩然', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['移舟泊烟渚', '日暮客愁新', '野旷天低树', '江清月近人'],
    pinyin: ['yí zhōu bó yān zhǔ', 'rì mù kè chóu xīn', 'yě kuàng tiān dī shù', 'jiāng qīng yuè jìn rén'],
    translation: '把小船停靠在烟雾弥漫的小洲旁，暮色降临。旷野无边无际，远处的天空显得比树还低。江水清澈，倒映的月影仿佛离人很近。',
    annotation: [
      { word: '渚', meaning: '水中的小洲。' }
    ]
  },
  { 
    id: '5j18', title: '春晓', author: '孟浩然', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['春眠不觉晓', '处处闻啼鸟', '夜来风雨声', '花落知多少'],
    pinyin: ['chūn mián bù jué xiǎo', 'chù chù wén tí niǎo', 'yè lái fēng yǔ shēng', 'huā luò zhī duō shǎo'],
    translation: '春天的早晨睡得真香。到处都能听到鸟儿清脆的啼鸣声。想起昨晚的一阵风雨交加，不知道又有多少花朵凋落。',
    annotation: [
      { word: '晓', meaning: '天亮。' }
    ]
  },
  { 
    id: '5j19', title: '春怨', author: '金昌绪', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['打起黄莺儿', '莫教枝上啼', '啼时惊妾梦', '不得到辽西'],
    pinyin: ['dǎ qǐ huáng yīng ér', 'mò jiào zhī shàng tí', 'tí shí jīng qiè mèng', 'bù dé dào liáo xī'],
    translation: '我赶紧拍手赶走树上的黄莺。因为它的叫声会惊醒我的美梦，让我无法在梦中飞到辽西见到亲人。',
    annotation: [
      { word: '辽西', meaning: '征人戍守之地。' }
    ]
  },
  { 
    id: '5j20', title: '江雪', author: '柳宗元', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['千山鸟飞绝', '万径人踪灭', '孤舟蓑笠翁', '独钓寒江雪'],
    pinyin: ['qiān shān niǎo fēi jué', 'wàn jìng rén zōng miè', 'gū zhōu suō lì wēng', 'dú diào hán jiāng xuě'],
    translation: '千山万壑之中看不见鸟儿飞翔，所有的道路上都绝了人影。在一条孤单的小船上，坐着一个披蓑戴笠的老翁。',
    annotation: [
      { word: '绝', meaning: '断绝。' },
      { word: '蓑笠', meaning: '蓑衣和斗笠。' }
    ]
  },
  { 
    id: '5j21', title: '秋夜寄邱员外', author: '韦应物', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['怀君属秋夜', '散步咏凉天', '空山松子落', '幽人应未眠'],
    pinyin: ['huái jūn shǔ qiū yè', 'sàn bù yǒng liáng tiān', 'kōng shān sōng zǐ luò', 'yōu rén yīng wèi mián'],
    translation: '在这个深秋的夜晚我格外思念你。寂静的山中听见松子落地的声音，我想，隐居在那里的你应该也还没睡吧。',
    annotation: [
      { word: '幽人', meaning: '隐居者。' }
    ]
  },
  { 
    id: '5j22', title: '终南望余雪', author: '祖咏', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['终南阴岭秀', '积雪浮云端', '林表明霁色', '城中增暮寒'],
    pinyin: ['zhōng nán yīn lǐng xiù', 'jī xuě fú yún duān', 'lín biǎo míng jì sè', 'chéng zhōng zēng mù hán'],
    translation: '终南山的北岭景象秀丽。天晴了，夕阳照在林间分外明亮。然而由于积雪未化，长安城里也增添了几分寒意。',
    annotation: [
      { word: '霁色', meaning: '晴后的天色。' }
    ]
  },
  { 
    id: '5j23', title: '宫词', author: '张祜', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['故国三千里', '深宫二十年', '一声何满子', '双泪落君前'],
    pinyin: ['gù guó sān qiān lǐ', 'shēn gōng èr shí nián', 'yī shēng hé mǎn zǐ', 'shuāng lèi luò jūn qián'],
    translation: '离别家乡已有三千里之遥。听见那一曲悲伤的《何满子》，我忍不住流下了成双的眼泪。',
    annotation: [
      { word: '故国', meaning: '家乡。' },
      { word: '何满子', meaning: '曲调名。' }
    ]
  },
  { 
    id: '5j24', title: '寻隐者不遇', author: '贾岛', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['松下问童子', '言师采药去', '只在此山中', '云深不知处'],
    pinyin: ['sōng xià wèn tóng zǐ', 'yán shī cǎi yào qù', 'zhǐ zài cǐ shān zhōng', 'yún shēn bù zhī chù'],
    translation: '在松树下询问小童，他说他的师父去山上采药了。师父一定就在这座大山之中，只是云雾太深。',
    annotation: [
      { word: '童子', meaning: '隐者的弟子。' }
    ]
  },
  { 
    id: '5j25', title: '送崔九', author: '裴迪', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['归山深浅去', '须尽丘壑美', '莫学武陵人', '暂游桃源里'],
    pinyin: ['guī shān shēn qiǎn qù', 'xū jìn qiū hè měi', 'mò xué wǔ líng rén', 'zàn yóu táo yuán lǐ'],
    translation: '你要回到深山里隐居了，一定要尽情领略那里的山水之美。不要学习那个武陵渔夫。',
    annotation: [
      { word: '武陵人', meaning: '指渔夫。' }
    ]
  },
  { 
    id: '5j26', title: '送灵澈上人', author: '刘长卿', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['苍苍竹林寺', '杳杳钟声晚', '荷笠带斜阳', '青山独归远'],
    pinyin: ['cāng cāng zhú lín sì', 'yǎo yǎo zhōng shēng wǎn', 'hé lì dài xié yáng', 'qīng shān dú guī yuǎn'],
    translation: '那座苍翠古老的竹林寺，传来深远悠长的傍晚钟声。你戴着斗笠身披夕阳的余辉。',
    annotation: [
      { word: '杳杳', meaning: '深远。' }
    ]
  },
  { 
    id: '5j27', title: '听弹琴', author: '刘长卿', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['泠泠七弦上', '静听松风寒', '古调虽自爱', '今人多不弹'],
    pinyin: ['líng líng qī xián shàng', 'jìng tīng sōng fēng hán', 'gǔ diào suī zì ài', 'jīn rén duō bù tán'],
    translation: '古琴的七弦之上发出泠泠的清响。虽然我很喜爱这古朴的曲调，但现如今的人们大多已经不再弹奏它了。',
    annotation: [
      { word: '泠泠', meaning: '清越的声音。' }
    ]
  },
  { 
    id: '5j28', title: '送上人', author: '刘长卿', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['孤云将野鹤', '岂向人间住', '莫买沃洲山', '时人已知处'],
    pinyin: ['gū yún jiāng yě hè', 'qǐ xiàng rén jiān zhù', 'mò mǎi wò zhōu shān', 'shí rén yǐ zhī chù'],
    translation: '你像孤云伴着野鹤一样，怎么会愿意住在繁杂的人间？不要轻易去买那沃洲山的隐居地。',
    annotation: [
      { word: '将', meaning: '伴随。' }
    ]
  },
  { 
    id: '5j29', title: '玉台体', author: '权德舆', dynasty: '唐', category: '唐诗三百首', subCategory: '五言绝句', 
    content: ['昨夜裙带解', '今朝蟢子飞', '铅华不可弃', '莫是藁砧归'],
    pinyin: ['zuó yè qún dài jiě', 'jīn zhāo xǐ zǐ fēi', 'qiān huá bù kě qì', 'mò shì gǎo zhēn guī'],
    translation: '昨晚裙带无缘无故地解开了，今早又看见喜蛛在飞舞。我得赶紧梳妆打扮一下。',
    annotation: [
      { word: '蟢子', meaning: '喜蛛。' },
      { word: '藁砧', meaning: '指丈夫。' }
    ]
  }
];
