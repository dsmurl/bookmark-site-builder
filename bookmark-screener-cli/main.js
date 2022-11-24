import Nightmare from "nightmare";
import fs from "fs";

const log = (text, level) => {
  let output = "";
  for (var i = 0; i < level; i++) {
    output += "  ";
  }
  output += text;

  console.log(output);
};

const processItem = (item, level = 0) => {
  if (item.type === "folder") {
    processFolder(item, level);
  } else {
    processBookmark(item, level);
  }
};

const processFolder = (folder, level) => {
  log(`Folder: ${folder.name}`, level);

  folder.children.forEach((child) => {
    if (child.type !== "folder") {
      processItem(child, level + 1);
    }
  });

  folder.children.forEach((child) => {
    if (child.type === "folder") {
      processItem(child, level + 1);
    }
  });
};

const processBookmark = (bookmark, level) => {
  const [name, ...rest] = bookmark.name.split(";");

  const nightmare = Nightmare({ show: false, gotoTimeout: 10000 });

  nightmare
    .goto(bookmark.url)
    .screenshot(`./site-pics/${name}.png`)
    .end()
    .catch((error) => {
      console.error("screenshot failed:", error);
    });

  log(`Bookmark: ${name}`, level);
  log(bookmark.url, level + 1);
  rest.forEach((paragraph) => log(paragraph, level + 1));
};

//////////////// Main

fs.readFile(
  "/home/dsmurl/.config/BraveSoftware/Brave-Browser/Default/Bookmarks",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const braveBookmarks = JSON.parse(data);

    // Find projects and infoSite
    const projects = braveBookmarks.roots.bookmark_bar.children.find(
      (el) => el.name === "Projects"
    );
    const infoSite = projects.children.find((el) => el.name === "info-site");

    fs.writeFile("database.json", JSON.stringify(infoSite, null, 4), (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });

    console.log(infoSite);
    console.log("  ------------------------------------- ");

    processItem(infoSite);
  }
);

const sample = {
  children: [
    {
      date_added: "13305940193112697",
      guid: "2b27d47a-d069-4c43-89ce-b9f0f255e90c",
      id: "1028",
      name: "Coronavirus Disease 2019 (COVID-19) | CDC",
      type: "url",
      url: "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
    },
    {
      date_added: "13305940604114371",
      guid: "c072b2d2-bc5e-4ca4-96c2-96595bce0790",
      id: "1029",
      name: "Where does Google Chrome store bookmarks on Ubuntu? - Super User",
      type: "url",
      url: "https://superuser.com/questions/158440/where-does-google-chrome-store-bookmarks-on-ubuntu",
    },
  ],
  date_added: "13305940170773204",
  date_modified: "13305940604114371",
  guid: "887773db-a8cc-4c57-9536-45b34548ae65",
  id: "1027",
  name: "Covid",
  type: "folder",
};
