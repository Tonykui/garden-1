Page({
  
  data: {
    detailObj: {},
    index: null,
    // 是否收藏
    isCollected: false,
     showTitle: '', //详情页显示标题；
    showImg: '', //详情页显示图片；
    showDesc: '', //详情页显示描述；
    showTime: '',
    showNumber: '',
    //下面是先进行存储的不同产品数据；
    productsList: [
      {
        title:'老舍的养花之道',number:'1000',time: '2019.4.16', img: '../../image/3.jpg', desc: '我爱花，所以也爱养花。我可还没成为养花专家，因为没有工夫去作研究与试验。我只把养花当作生活中的一种乐趣，花开得大小好坏都不计较，只要开花，我就高兴。在我的小院中，到夏天，满是花草，小猫儿们只好上房去玩耍，地上没有它们的运动场。花虽多，但无奇花异草。珍贵的花草不易养活，看着一棵好花生病欲死是件难过的事。我不愿时时落泪。\n北京的气候，对养花来说，不算很好。冬天冷，春天多风，夏天不是干旱就是大雨倾盆；秋天最好，可是忽然会闹霜冻。在这种气候里，想把南方的好花养活，我还没有那么大的本事。因此，我只养些好种易活、自己会奋斗的花草。不过，尽管花草自己会奋斗，我若置之不理，任其自生自灭，它们多数还是会死了的。\n我得天天照管它们，象好朋友似的关切它们。一来二去，我摸着一些门道：有的喜阴，就别放在太阳地里，有的喜干，就别多浇水。这是个乐趣，摸住门道，花草养活了，而且三年五载老活着、开花，多么有意思呀！不是乱吹，这就是知识呀！多得些知识，一定不是坏事。我不是有腿病吗，不但不利于行，也不利于久坐。我不知道花草们受我的照顾，感谢我不感谢；我可得感谢它们。在我工作的时候，我总是写了几十个字，就到院中去看看，浇浇这棵，搬搬那盆，然后回到屋中再写一点，然后再出去，如此循环，把脑力劳动与体力劳动结合到一起，有益身心，胜于吃药。要是赶上狂风暴雨或天气突变哪，就得全家动员，抢救花草，十分紧张。\n几百盆花，都要很快地抢到屋里去，使人腰酸腿疼，热汗直流。第二天，天气好转，又得把花儿都搬出去，就又一次腰酸腿疼，热汗直流。可是，这多么有意思呀！不劳动，连棵花儿也养不活，这难道不是真理么？送牛奶的同志，进门就夸“好香”！这使我们全家都感到骄傲。赶到昙花开放的时候，约几位朋友来看看，更有秉烛夜游的神气——昙花总在夜里放蕊。花儿分根了，一棵分为数棵，就赠给朋友们一些；看着友人拿走自己的劳动果实，心里自然特别喜欢。\n当然，也有伤心的时候，今年夏天就有这么一回。三百株菊秧还在地上（没到移入盆中的时候），下了暴雨。邻家的墙倒了下来，菊秧被砸死者约三十多种，一百多棵！全家都几天没有笑容！有喜有忧，有笑有泪，有花有实，有香有色，既须劳动，又长见识，这就是养花的乐趣。' },
      {
        title: '花语', number: '2000', time: '2019.4.15',  img: '../../image/10.jpg', desc: '那季的撞见，恰逢一片花开。目光清落中，一朵朵弱小的身姿轻浮水面翩然的跌落心怀，没有妩媚，没有芳香，只有阳光掠过她的脸颊，淡淡的，略显微笑。怔了神，仿是在遥遥无期的骎骎流光里，邂逅一个重复的自己。\n有些心疼，又带着欣喜。她那么简单，不好看，却努力的开着，为了迎合清风掠心的柔情，一直努力的开着，半盏清歌的招摇，肆意葱茏。而我，恰巧路过。于是，喜意便盈盈的生了起来，带着异样的温暖和朴素，将心，都染了湿湿的绿，盎然的，万千端倪。\n真好。惊心喜欢这种一眼情投的感觉，就像遇见一个喜欢的人那般。心，瞬间会变得柔软，情的藤蔓就那样在周身的每个细胞里枝叶缠绕，恍地感觉平时寂寞的时光都会变得温润，再多，也不嫌奢侈，不嫌过分。而那人恰巧也喜欢自己，当自己是一朵柔小微艳的花儿一般呵护与挂牵，这样的幻意，想起就会心疼，还有，不争的眼泪。\n梦里一直记得一种声音。你说，我的快乐和悲伤会牵动你如丝如缕的欣慰与疼痛，无论我的脚步走了多远，你总会默默牵挂着，将我，收藏在胸口。只一语，一怀欣喜的，灿烂了心里的一草一木。微微心湖涟漪，绕过清清流年，在充满变数的季节里播下抹抹新绿，期待一片绿荫，而后轻轻顽皮的，用幽香，偷袭你的梦。\n情哪知所起。就这样，一往而深了。脉脉的，把这些的好，这些心底暗结的情，殷殷种在一朵花儿中，抽一丝软软的芽，轻笑嫣然，轻拢思念，吐露着羞红的心事，在浅秋的枝头，掌心葱茏一份美好，在微微的惆怅里，摇曳一抹浅浅的欢喜。这般的好，真愿，也会醉了那个岸边写字的人，在这朦朦胧胧，远远近近中，浅浅一路珍重。\n寸寸相思人已醉，轻歌一曲情相邀。一颗被珍惜着的心，是不是真的就会少一些寂寞和伤感？可这会儿我丢了，真的丢了，我把自己弄丢了。一言一行，一静一默的丢在了幽静温软的一水之花儿。花语弹指，梦渡尘声，只为你的寻香而往，为花驻足。尽管也会怅然到泪落，因为我懂得，花儿再好，也终无百日颜红……' },
      {
        title: '梅花的品格', number: '2500', time: '2019.4.17', img: '../../image/9.jpg', desc: '梅花，是极平凡的。\n有人赞叹波澜壮阔的大海，有人欣赏广阔无边的天空，有人称赞耸入云霄的树木，也有人感慨琳琅满目的特产。而我，却喜欢这默默无闻的梅花。\n梅花不及牡丹的国色* 天香，月季的娇艳浮华，玫瑰的姹紫嫣红，荷花的高贵典雅。但是，我却更喜欢这凌霜傲雪的梅花。\n冬天，寒冷把雪花带到人间大地上，光秃秃的山白了，落光叶子的大树白了，门前的大路也白了。只有远处的寒山上，一棵棵梅树依稀可见，结出了一个个花骨朵，等待着寒风含苞欲放。\n雪依然下着，风依旧刮着，在这千里冰封，万里雪飘的季节，只有梅花傲然怒放。一朵朵五彩缤纷的小花白的像雪，红的似火，黄的赛金，粉的如霞……在寒风中翩翩起舞，冰心玉骨。细细一闻，一股香气不禁迎面扑来，馨香阵阵，淡雅清新，顿时使人感到心旷神怡……\n“梅花香自苦寒来”，吹拂梅花的是凛冽的寒风；照耀梅花的是寒冬的残；滋润梅花的是残雪的雨露。但屹立在山顶的梅花又是那样的芳香馥郁，雍容典雅。\n春天，百花齐放的季节，当各种花朵搬出温盆时，梅花却凋谢了，但它为人类献上了可口的梅子，为人类贡献出自己的全部力量……\n然而，梅花那顽强不屈的精神却更令我赞叹。自古以来，它和松、竹被人们誉为“岁寒三友”，历来竞相诗人所题咏，画家所描绘，艺人所雕刻，游人所向往。暑尽冬来，迎风斗寒，经霜雪而不凋，历四时而常茂，充分体现了梅花不畏困难、不惧压力的强大生命力。这是一种人们看不见而确实存在的品格，不正是人们要学习的吗？\n看着看着，我不禁想起了那些战斗在荒天雪地的塞北开发者，他们像青松，像秋菊，却更像这腊梅。他们在恶劣的环境中，默默地奉献了自己的一生。难道他们不具备梅花这样的品质吗？没有他们，哪会有我们这天的发展？\n想着想着，一股对梅花的敬佩之情油然而生…' },
      
    ]
  },
  onLoad: function (options) {
    var goodsId = options.goodsId;
    this.setData({
      showTitle: this.data.productsList[goodsId].title,
      showImg: this.data.productsList[goodsId].img,
      showDesc: this.data.productsList[goodsId].desc,
      showTime: this.data.productsList[goodsId].time,
      showNumber: this.data.productsList[goodsId].number,
    });
  },
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
  },//转发
  onShareAppMessage: function () {
  },
  goBack: function () {
    wx.navigateBack({
    });
  },
  showselectregion: function () {
    this.setData({
      isShowSelectAddress: "block"
    })
  }
})

