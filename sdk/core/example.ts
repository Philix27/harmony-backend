import axios from "axios";
import { ApiRoutes } from "./routes";

async function syMe() {
  const cc = new ApiRoutes();
  const vb = await cc.AnnouncementCreate({
    Id: 0,
    Title: "",
    Subtitle: "",
  });

  const sc = await axios.delete("./ds", {})
  const bc = await axios.put("./ds", {})
}
