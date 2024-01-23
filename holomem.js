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
        image:"public/image/holo-mem/tokino-sora-1139x2048.png"
    },
    {
        JPname:"ロボ子さん",
        ENname:"Robocosan",
        group:"hololive JP",
        gen:"0",
        greetings:"はろーぼー！",
        image:"public/image/holo-mem/roboco-san_pr-img_06.png"
    },
    {
        JPname:"AZKi",
        ENname:"AZKi",
        group:"hololive JP",
        gen:"0",
        greetings:"こんあずき〜！",
        image:"public/image/holo-mem/AZKi_pr-img_01.png"
    },
    {
        JPname:"さくらみこ",
        ENname:"Sakura Miko",
        group:"hololive JP",
        gen:"0",
        greetings:"にゃっはろ〜！",
        image:"public/image/holo-mem/Sakura-Miko_pr-img_01.png"
    },
    {
        JPname:"星街すいせい",
        ENname:"Hoshimachi Suisei",
        group:"hololive JP",
        gen:"0",
        greetings:"彗星の如く現れたスターの原石！アイドルVTuberの星街すいせいです！",
        image:"public/image/holo-mem/Hoshimachi-Suisei_pr-img_01.png"
    },
    {
        JPname:"アキ・ローゼンタール",
        ENname:"Aki Rosenthal",
        group:"hololive JP",
        gen:"1",
        greetings:"アローナ！",
        image:"public/image/holo-mem/Aki-Rosenthall_pr-img_01.png"
    },
    {
        JPname:"赤井はあと",
        ENname:"Akai Haato",
        group:"hololive JP",
        gen:"1",
        greetings:"こんるーじゅ！赤井はあとよ！",
        image:"public/image/holo-mem/Akai-Haato_pr-img_01.png"
    },
    {
        JPname:"白上フブキ",
        ENname:"Shirakami Fubuki",
        group:"hololive JP",
        gen:"1",
        greetings:"こんこんきーつね！",
        image:"public/image/holo-mem/Shirakami-Fubuki_pr-img_01.png"
    },
    {
        JPname:"夏色まつり",
        ENname:"Natsuiro Matsuri",
        group:"hololive JP",
        gen:"1",
        greetings:"わっしょ～い！",
        image:"public/image/holo-mem/matsuri_pr-img_2.png"
    },
    {
        JPname:"湊あくあ",
        ENname:"Minato Aqua",
        group:"hololive JP",
        gen:"2",
        greetings:"皆さんどうもこんあくあ～！",
        image:"public/image/holo-mem/Minato-Aqua_pr-img_01b.png"
    },
    {
        JPname:"紫咲シオン",
        ENname:"Murasaki Shion",
        group:"hololive JP",
        gen:"2",
        greetings:"こんしお～",
        image:"public/image/holo-mem/Murasaki-Shion_pr-img_01.png"
    },
    {
        JPname:"百鬼あやめ",
        ENname:"Nakiri Ayame",
        group:"hololive JP",
        gen:"2",
        greetings:"人間様たちこんなきりー！やほ～～！",
        image:"public/image/holo-mem/Nakiri-Ayame_pr-img_01.png"
    },
    {
        JPname:"癒月ちょこ",
        ENname:"Yuzuki Choco",
        group:"hololive JP",
        gen:"2",
        greetings:"Good evening!my cute students.ちょっこーん！",
        image:"public/image/holo-mem/Yuzuki-Choco_pr-img_01-1.png"
    },
    {
        JPname:"大空スバル",
        ENname:"Oozora Subaru",
        group:"hololive JP",
        gen:"2",
        greetings:"ちわーす！ホロライブ2期生大空スバルっス！！",
        image:"public/image/holo-mem/Oozora-Subaru_pr-img_01.png"
    },
    {
        JPname:"白上フブキ",
        ENname:"Shirakami Fubuki",
        group:"hololive JP",
        gen:"gamers",
        greetings:"こんこんきーつね！",
        image:"public/image/holo-mem/Shirakami-Fubuki_pr-img_01.png"
    },
    {
        JPname:"大神ミオ",
        ENname:"Ookami Mio",
        group:"hololive JP",
        gen:"gamers",
        greetings:"こんばんみぉーん！大神ミオだよ～！",
        image:"public/image/holo-mem/Ookami-Mio_pr-img_01.png"
    },
    {
        JPname:"猫又おかゆ",
        ENname:"Nekomata Okayu",
        group:"hololive JP",
        gen:"gamers",
        greetings:"もぐもぐ～おかゆ～！",
        image:"public/image/holo-mem/Nekomata-Okayu_pr-img_01.png"
    },
    {
        JPname:"戌神ころね",
        ENname:"Inugami Korone",
        group:"hololive JP",
        gen:"gamers",
        greetings:"ぉぁよ～！ゆびゆび～",
        image:"public/image/holo-mem/Inugami-Korone_pr-img_01.png"
    },
    {
        JPname:"兎田ぺこら",
        ENname:"Usada Pekora",
        group:"hololive JP",
        gen:"3",
        greetings:"こんぺこ！こんぺこ！こんぺこー！兎田ぺこらぺこ～！どうも〜どうも〜",
        image:"public/image/holo-mem/Usada-Pekora_pr-img_01.png"
    },
    {
        JPname:"不知火フレア",
        ENname:"Shiranui Flare",
        group:"hololive JP",
        gen:"3",
        greetings:"こんぬいー！",
        image:"public/image/holo-mem/Shiranui-Flare_pr-img_01.png"
    },
    {
        JPname:"白銀ノエル",
        ENname:"Shirogane Noel",
        group:"hololive JP",
        gen:"3",
        greetings:"こんまっする～！",
        image:"public/image/holo-mem/Shirogane-Noel_pr-img_02.png"
    },
    {
        JPname:"宝鐘マリン",
        ENname:"Houshou Marine",
        group:"hololive JP",
        gen:"3",
        greetings:"Ahoy!宝鐘海賊団船長！宝鐘マリンです～！",
        image:"public/image/holo-mem/Houshou-Marine_pr-img_1.png"
    },
    {
        JPname:"天音かなた",
        ENname:"Amane Kanata",
        group:"hololive JP",
        gen:"4",
        greetings:"へい！みんなこんかなた～！",
        image:"public/image/holo-mem/Amane-Kanata_pr-img_01.png"
    },
    {
        JPname:"角巻わため",
        ENname:"Tsunomaki Watame",
        group:"hololive JP",
        gen:"4",
        greetings:"こんばんドドド～！",
        image:"public/image/holo-mem/Tsunomaki-Watame_pr-img_01-1.png"
    },
    {
        JPname:"常闇トワ",
        ENname:"Tokoyami Towa",
        group:"hololive JP",
        gen:"4",
        greetings:"こんやっぴーホロライブ4期生常闇トワ様です",
        image:"public/image/holo-mem/Tokoyami-Towa_pr-img_01.png"
    },
    {
        JPname:"姫森ルーナ",
        ENname:"Himemori Luna",
        group:"hololive JP",
        gen:"4",
        greetings:"みんな～、おりゅ～？",
        image:"public/image/holo-mem/Himemori-Luna_pr-img_01.png"
    },
    {
        JPname:"雪花ラミィ",
        ENname:"Yukihana Lamy",
        group:"hololive JP",
        gen:"5",
        greetings:"こんらみです",
        image:"public/image/holo-mem/Yukihana-Lamy_pr-img_01.png"
    },
    {
        JPname:"桃鈴ねね",
        ENname:"Momosuzu Nene",
        group:"hololive JP",
        gen:"5",
        greetings:"こんねね～！ホロライブ5期生オレンジ担当、 アイドルVTuberの桃鈴ねねで～す！",
        image:"public/image/holo-mem/Momosuzu-Nene_pr-img_01.png"
    },
    {
        JPname:"獅白ぼたん",
        ENname:"Shishiro Botan",
        group:"hololive JP",
        gen:"5",
        greetings:"ららーいおん♪",
        image:"public/image/holo-mem/Shishiro-Botan_pr-img_01.png"
    },
    {
        JPname:"尾丸ポルカ",
        ENname:"Omaru Polka",
        group:"hololive JP",
        gen:"5",
        greetings:"はーい尾丸ポルカでーす",
        image:"public/image/holo-mem/Omaru-Polka_pr-img_01.png"
    },
    {
        JPname:"ラプラス・ダークネス",
        ENname:"La+ Darknesss",
        group:"hololive JP",
        gen:"holox",
        greetings:"貴様ら、刮目せよ！！",
        image:"public/image/holo-mem/La-Darknesss_pr-img_02.png"
    },
    {
        JPname:"鷹嶺ルイ",
        ENname:"Takane Lui",
        group:"hololive JP",
        gen:"holox",
        greetings:"まったかね〜？",
        image:"public/image/holo-mem/Takane-Lui_pr-img_02.png"
    },
    {
        JPname:"博衣こより",
        ENname:"Hakui Koyori",
        group:"hololive JP",
        gen:"holox",
        greetings:"こんこよー！",
        image:"public/image/holo-mem/Hakui-Koyori_pr-img_02.png"
    },
    {
        JPname:"沙花叉クロヱ",
        ENname:"Sakamata Chloe",
        group:"hololive JP",
        gen:"holox",
        greetings:"秘密結社holoXの掃除屋インターン！",
        image:"public/image/holo-mem/Sakamata-Chloe_pr-img01.png"
    },
    {
        JPname:"風真いろは",
        ENname:"Kazama Iroha",
        group:"hololive JP",
        gen:"holox",
        greetings:"秘密結社holoXの用心棒！",
        image:"public/image/holo-mem/Kazama-Iroha_pr-img_01-1.png"
    }
]