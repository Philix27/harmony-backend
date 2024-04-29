import axios from "axios";
import * as T from "./dto";

export class ApiRoutes {
  public async AnnouncementGetOne(
    data: T.AnnouncementGetOneInput
  ): Promise<T.AnnouncementGetOneResponse> {
    try {
      const res = await axios.get("/api/v1/announcement/:id", data);
      return res.data as T.AnnouncementGetOneResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AnnouncementGetAll(
    data: T.AnnouncementGetAllInput
  ): Promise<T.AnnouncementGetAllResponse> {
    try {
      const res = await axios.get("/api/v1/announcement/", data);
      return res.data as T.AnnouncementGetAllResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AnnouncementCreate(
    data: T.AnnouncementCreateInput
  ): Promise<T.AnnouncementCreateResponse> {
    try {
      const res = await axios.post("/api/v1/announcement/", data);
      return res.data as T.AnnouncementCreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AnnouncementUpdate(
    data: T.AnnouncementUpdateInput
  ): Promise<T.AnnouncementUpdateResponse> {
    try {
      const res = await axios.put("/api/v1/announcement/", data);
      return res.data as T.AnnouncementUpdateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AnnouncementDelete(
    data: T.AnnouncementDeleteInput
  ): Promise<T.AnnouncementDeleteResponse> {
    try {
      const res = await axios.delete("/api/v1/announcement/", data);
      return res.data as T.AnnouncementDeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
}
