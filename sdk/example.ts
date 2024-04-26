import { ApiRoutes } from "./routes";

async function syMe() {
  const cc = new ApiRoutes();
  const vb = await cc.AnnouncementCreate({
    Id: 0,
    Title: "",
    Subtitle: "",
  });
}
