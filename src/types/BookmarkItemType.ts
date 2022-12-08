export type BookmarkItemType = {
  date_added: string;
  guid: string;
  id: string;
  name: string;
  type: "url" | "folder";
  url: string;
  children: BookmarkItemType[];
};
