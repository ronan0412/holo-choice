/*
  An array consists of objects which have information of hololive members
    JPname: The name of hololive member in Japanese
    ENname: The name of hololive member in English
    group: It shows hololive member's group 
    gen: It shows hololive member's generation
    greetings: The popular greeting of a hololive member
    image: The official picture of a hololive member
*/
let holomem = [];
holomem = [
    {
        JPname:"ときのそら",
        ENname:"Tokino Sora",
        group:"hololive JP",
        gen:"0",
        greetings:"こんそめ〜",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-855x1536.png"
    },
    {
        JPname:"ロボ子さん",
        ENname:"Robocosan",
        group:"hololive JP",
        gen:"0",
        greetings:"はろーぼー！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/roboco-san_pr-img_06.png"
    },
    {
        JPname:"AZKi",
        ENname:"AZKi",
        group:"hololive JP",
        gen:"0",
        greetings:"こんあずき〜！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2022/12/AZKi_pr-img_04-724x1440.png"
    },
    {
        JPname:"さくらみこ",
        ENname:"Sakura Miko",
        group:"hololive JP",
        gen:"0",
        greetings:"にゃっはろ〜！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/02/Sakura-Miko_pr-img_01-1008x1440.png"
    },
    {
        JPname:"星街すいせい",
        ENname:"Hoshimachi Suisei",
        group:"hololive JP",
        gen:"0",
        greetings:"彗星の如く現れたスターの原石！アイドルVTuberの星街すいせいです！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/bg_Hoshimachi-Suisei_01-1-925x1440.png"
    },
    {
        JPname:"アキ・ローゼンタール",
        ENname:"Aki Rosenthal",
        group:"hololive JP",
        gen:"1",
        greetings:"アローナ！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Aki-Rosenthall_pr-img_01.png"
    },
    {
        JPname:"赤井はあと",
        ENname:"Akai Haato",
        group:"hololive JP",
        gen:"1",
        greetings:"こんるーじゅ！赤井はあとよ！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Akai-Haato_pr-img_01.png"
    },
    {
        JPname:"白上フブキ",
        ENname:"Shirakami Fubuki",
        group:"hololive JP",
        gen:"1",
        greetings:"こんこんきーつね！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Shirakami-Fubuki_pr-img_01.png"
    },
    {
        JPname:"夏色まつり",
        ENname:"Natsuiro Matsuri",
        group:"hololive JP",
        gen:"1",
        greetings:"わっしょ～い！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/matsuri_pr-img_2.png"
    },
    {
        JPname:"湊あくあ",
        ENname:"Minato Aqua",
        group:"hololive JP",
        gen:"2",
        greetings:"皆さんどうもこんあくあ～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Minato-Aqua_pr-img_01b.png"
    },
    {
        JPname:"紫咲シオン",
        ENname:"Murasaki Shion",
        group:"hololive JP",
        gen:"2",
        greetings:"こんしお～",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/03/Murasaki-Shion_pr-img_01.png"
    },
    {
        JPname:"百鬼あやめ",
        ENname:"Nakiri Ayame",
        group:"hololive JP",
        gen:"2",
        greetings:"人間様たちこんなきりー！やほ～～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Nakiri-Ayame_pr-img_01.png"
    },
    {
        JPname:"癒月ちょこ",
        ENname:"Yuzuki Choco",
        group:"hololive JP",
        gen:"2",
        greetings:"Good evening!my cute students.ちょっこーん！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Yuzuki-Choco_pr-img_01-1.png"
    },
    {
        JPname:"大空スバル",
        ENname:"Oozora Subaru",
        group:"hololive JP",
        gen:"2",
        greetings:"ちわーす！ホロライブ2期生大空スバルっス！！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Oozora-Subaru_pr-img_01.png"
    },
    {
        JPname:"白上フブキ",
        ENname:"Shirakami Fubuki",
        group:"hololive JP",
        gen:"gamers",
        greetings:"こんこんきーつね！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Shirakami-Fubuki_pr-img_01.png"
    },
    {
        JPname:"大神ミオ",
        ENname:"Ookami Mio",
        group:"hololive JP",
        gen:"gamers",
        greetings:"こんばんみぉーん！大神ミオだよ～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/01/Ookami-Mio_pr-img_01.png"
    },
    {
        JPname:"猫又おかゆ",
        ENname:"Nekomata Okayu",
        group:"hololive JP",
        gen:"gamers",
        greetings:"もぐもぐ～おかゆ～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Nekomata-Okayu_pr-img_01.png"
    },
    {
        JPname:"戌神ころね",
        ENname:"Inugami Korone",
        group:"hololive JP",
        gen:"gamers",
        greetings:"ぉぁよ～！ゆびゆび～",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Inugami-Korone_pr-img_01.png"
    },
    {
        JPname:"兎田ぺこら",
        ENname:"Usada Pekora",
        group:"hololive JP",
        gen:"3",
        greetings:"こんぺこ！こんぺこ！こんぺこー！兎田ぺこらぺこ～！どうも〜どうも〜",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Usada-Pekora_pr-img_01.png"
    },
    {
        JPname:"不知火フレア",
        ENname:"Shiranui Flare",
        group:"hololive JP",
        gen:"3",
        greetings:"こんぬいー！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Shiranui-Flare_pr-img_01.png"
    },
    {
        JPname:"白銀ノエル",
        ENname:"Shirogane Noel",
        group:"hololive JP",
        gen:"3",
        greetings:"こんまっする～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/01/Shirogane-Noel_pr-img_02.png"
    },
    {
        JPname:"宝鐘マリン",
        ENname:"Houshou Marine",
        group:"hololive JP",
        gen:"3",
        greetings:"Ahoy!宝鐘海賊団船長！宝鐘マリンです～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/03/Houshou-Marine_pr-img_1.png"
    },
    {
        JPname:"天音かなた",
        ENname:"Amane Kanata",
        group:"hololive JP",
        gen:"4",
        greetings:"へい！みんなこんかなた～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Amane-Kanata_pr-img_01.png"
    },
    {
        JPname:"角巻わため",
        ENname:"Tsunomaki Watame",
        group:"hololive JP",
        gen:"4",
        greetings:"こんばんドドド～！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Tsunomaki-Watame_pr-img_01-1.png"
    },
    {
        JPname:"常闇トワ",
        ENname:"Tokoyami Towa",
        group:"hololive JP",
        gen:"4",
        greetings:"こんやっぴーホロライブ4期生常闇トワ様です",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Tokoyami-Towa_pr-img_01.png"
    },
    {
        JPname:"姫森ルーナ",
        ENname:"Himemori Luna",
        group:"hololive JP",
        gen:"4",
        greetings:"みんな～、おりゅ～？",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Himemori-Luna_pr-img_01.png"
    },
    {
        JPname:"雪花ラミィ",
        ENname:"Yukihana Lamy",
        group:"hololive JP",
        gen:"5",
        greetings:"こんらみです",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Yukihana-Lamy_pr-img_01.png"
    },
    {
        JPname:"桃鈴ねね",
        ENname:"Momosuzu Nene",
        group:"hololive JP",
        gen:"5",
        greetings:"こんねね～！ホロライブ5期生オレンジ担当、 アイドルVTuberの桃鈴ねねで～す！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/06/Momosuzu-Nene_pr-img_01.png"
    },
    {
        JPname:"獅白ぼたん",
        ENname:"Shishiro Botan",
        group:"hololive JP",
        gen:"5",
        greetings:"ららーいおん♪",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/07/Shishiro-Botan_pr-img_01.png"
    },
    {
        JPname:"尾丸ポルカ",
        ENname:"Omaru Polka",
        group:"hololive JP",
        gen:"5",
        greetings:"はーい尾丸ポルカでーす",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2023/04/Omaru-Polka_pr-img_01.png"
    },
    {
        JPname:"ラプラス・ダークネス",
        ENname:"La+ Darknesss",
        group:"hololive JP",
        gen:"holox",
        greetings:"貴様ら、刮目せよ！！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2022/09/La-Darknesss_pr-img_02.png"
    },
    {
        JPname:"鷹嶺ルイ",
        ENname:"Takane Lui",
        group:"hololive JP",
        gen:"holox",
        greetings:"まったかね〜？",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2022/09/Takane-Lui_pr-img_02.png"
    },
    {
        JPname:"博衣こより",
        ENname:"Hakui Koyori",
        group:"hololive JP",
        gen:"holox",
        greetings:"こんこよー！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2022/09/Hakui-Koyori_pr-img_02.png"
    },
    {
        JPname:"沙花叉クロヱ",
        ENname:"Sakamata Chloe",
        group:"hololive JP",
        gen:"holox",
        greetings:"秘密結社holoXの掃除屋インターン！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/07/Sakamata-Chloe_pr-img01.png"
    },
    {
        JPname:"風真いろは",
        ENname:"Kazama Iroha",
        group:"hololive JP",
        gen:"holox",
        greetings:"秘密結社holoXの用心棒！",
        image:"https://hololive.hololivepro.com/wp-content/uploads/2020/07/Kazama-Iroha_pr-img_01-1.png"
    }
]