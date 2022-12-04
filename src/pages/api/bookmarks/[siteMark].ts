import { NextApiRequest, NextApiResponse } from "next";
import { parseSiteMark } from "../../../util/bookmark-utils";

const bookmarksHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { siteMark } = req.query;
    const castSiteMark = `${siteMark}`;

    if (castSiteMark !== "") {
      const markSiteData = await parseSiteMark(castSiteMark);
      res.status(200).json(markSiteData);
      return;
    }

    res
      .status(500)
      .json({ status: "error", message: "Couldn't find siteMark" });
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;

    console.log("   e: ", { message: e });
    res.status(500).json({ status: "error", message });
  }
};

export default bookmarksHandler;
