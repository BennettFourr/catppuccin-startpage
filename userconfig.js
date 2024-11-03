const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Rohrersville",
    scale: "C",
    "localIcons": true,
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "Mail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "Aljazeera",
              url: "https://www.aljazeera.com/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "The Intercept",
              url: "https://theintercept.com/",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "Crime Think",
              url: "https://crimethinc.com/",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "Vercel",
              url: "https://vercel.com/dashboard",
              icon: "triangle",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: palette.red,
            },
            {
              name: "Hacker News",
              url: "https://news.ycombinator.com/",
              icon: "brand-hacker-news",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com/volodymyrpivoshenko",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },,
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "YouTube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.peach,
            },
            {
              name: "Nebula",
              url: "https://nebula.tv/library",
              icon: "IconPi",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "Geotastic",
              url: "https://geotastic.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "Globle",
              url: "https://globle-game.com/",
              icon: "device-gamepad",
              icon_color: palette.peach,
            },
            {
              name: "Travle",
              url: "https://travle.earth/",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
