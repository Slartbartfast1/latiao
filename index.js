const puppeteer = require('puppeteer-extra');
puppeteer.use(require('puppeteer-extra-plugin-flash')())
const _ = require('lodash')

const cookies = [
  {
    "domain": ".bilibili.com",
    "expirationDate": 1590505414.04047,
    "hostOnly": false,
    "httpOnly": true,
    "name": "_dfcaptcha",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "08435ec380b162032dfb9bc64928a75c",
    "id": 1
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1605542626,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_uuid",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "7CBD9933-B208-A0A5-9C1C-2580BD877B3926863infoc",
    "id": 2
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1605973309.934262,
    "hostOnly": false,
    "httpOnly": false,
    "name": "bili_jct",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "23dd4ac11757dde80c3beaa6407a902b",
    "id": 3
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1593093726,
    "hostOnly": false,
    "httpOnly": false,
    "name": "bp_t_offset_57069103",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "393669920598966277",
    "id": 4
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1593011588,
    "hostOnly": false,
    "httpOnly": false,
    "name": "bp_video_offset_57069103",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "393331743465066503",
    "id": 5
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1668614627.090378,
    "hostOnly": false,
    "httpOnly": false,
    "name": "buvid3",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "C3A77A17-298D-4359-9ECA-0A2F41667528190978infoc",
    "id": 6
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1622037538,
    "hostOnly": false,
    "httpOnly": false,
    "name": "CURRENT_FNVAL",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "16",
    "id": 7
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1611046384,
    "hostOnly": false,
    "httpOnly": false,
    "name": "CURRENT_QUALITY",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "116",
    "id": 8
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1605973309.93416,
    "hostOnly": false,
    "httpOnly": false,
    "name": "DedeUserID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "57069103",
    "id": 9
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1605973309.934195,
    "hostOnly": false,
    "httpOnly": false,
    "name": "DedeUserID__ckMd5",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "d085cccec7fab4dd",
    "id": 10
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1608476831,
    "hostOnly": false,
    "httpOnly": false,
    "name": "laboratory",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1-1",
    "id": 11
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 2177452799.916745,
    "hostOnly": false,
    "httpOnly": false,
    "name": "LIVE_BUVID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "AUTO7615740066264584",
    "id": 12
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 253402300799,
    "hostOnly": false,
    "httpOnly": false,
    "name": "PVID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "19",
    "id": 13
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1668121201.465851,
    "hostOnly": false,
    "httpOnly": false,
    "name": "rpdid",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "|(u)~lJY|kJJ0J'ul~RkYmuu|",
    "id": 14
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1605973309.93423,
    "hostOnly": false,
    "httpOnly": true,
    "name": "SESSDATA",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "e3b5604b%2C1605974309%2C65c7b*51",
    "id": 15
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1608475889.397407,
    "hostOnly": false,
    "httpOnly": false,
    "name": "sid",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "ic0659h8",
    "id": 16
  },
  {
    "domain": ".bilibili.com",
    "expirationDate": 1609737597,
    "hostOnly": false,
    "httpOnly": false,
    "name": "stardustvideo",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 17
  },
  {
    "domain": ".t.bilibili.com",
    "expirationDate": 1621958280,
    "hostOnly": false,
    "httpOnly": false,
    "name": "Hm_lvt_8a6e55dbd2870f0f5bc9194cddf32a02",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1590417918",
    "id": 18
  }
];
(async () => {
  let arr = [];
  const browser = await puppeteer.launch(
    {
      headless: false,
      args: [
        `--enable-plugins`,
        `--enable-extensions`,
        `--enable-user-scripts `,
        `--enable-printing`,
        `--enable-sync `,
        `--auto-ssl-client-auth`
      ]
    }
  );
  const page = await browser.newPage();

  await page.setViewport({ width: 1366, height: 768 });
  await cookies.map((i) => { page.setCookie(i) })
  await page.goto('https://live.bilibili.com/1314?session_id=DC1BE073-F09A-7993-7C2A-D536E756B06D&visit_id=6dmjacc5bd80');
  let isExits;
  let link;
  setInterval(async () => {
    
    isExits = await page.evaluate(() => 
      document.querySelectorAll('.chat-draw-area-cntr')
    );
    link = await page.evaluate(() => 
       document.querySelectorAll('.msg-content .link')
    );
    console.log(isExits, link,'=======================')
    // if (isExits) {
    //   console.log('isExits',isExits)
    //   const a = await page.$('.chat-draw-area-cntr', (el) => {
    //     console.log('click')
    //     el.click()
    //   }
    //   )
    // } else {
    //   if (link) {
    //     console.log('link',link)
    //     await page.goto(link.href)
    //   }
    // }
  }, 1000)
})();
