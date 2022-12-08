import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { useState, useCallback, useEffect } from "react";
import { singletonHook } from "react-singleton-hook";
import { BookmarkItemType } from "../types/BookmarkItemType";

const init = {
  siteData: [],
  targetSiteMark: "",
  setTargetSiteMark: () => null,
  isLoading: true,
};

const useSiteMarkImpl = () => {
  const [siteData, setSiteData] = useState<BookmarkItemType[]>([]);
  const [targetSiteMark, setTargetSiteMark] = useState("");
  const [isLoading, setLoading] = useState(false);

  const refreshSiteData = useCallback(async () => {
    setLoading(true);

    const newSiteData: BookmarkItemType[] = await fetch(
      `/api/bookmarks/${targetSiteMark}`
    ).then((res) => res.json());

    setSiteData(newSiteData);
    setLoading(false);
  }, [setLoading, setSiteData, targetSiteMark]);

  useEffect(() => {
    const core = async () => {
      await refreshSiteData();
    };
    if (targetSiteMark && targetSiteMark !== "") {
      core();
    }
  }, [refreshSiteData, setLoading, targetSiteMark]);

  return { siteData, targetSiteMark, setTargetSiteMark, isLoading };
};

export const useSiteMark = singletonHook(init, useSiteMarkImpl);
