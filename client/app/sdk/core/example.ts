import axios from "axios";
import { ApiRoutes } from "./routes";

async function syMe() {
  const cc = new ApiRoutes();
  const vb = await cc.announcementCreate({
    title: "",
    subtitle: "",
    workspaceId: 0
  });

  const dc = await axios.get("./ds", {
    params: {},
  });
  const sc = await axios.delete("./ds", {});
  const bc = await axios.put("./ds", {});
}
