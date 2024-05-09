import * as T from "./dto";
import axiosClient from "./axiosClient";

export class ApiRoutes {
  public async announcementGetOne(
    id: number,
    params: T.AnnouncementGetOneQueryParams
  ): Promise<T.AnnouncementGetOneResponse> {
    const res = await axiosClient.get("announcement/");
    return res.data;
  }

  public async announcementGetAll(
    params: T.AnnouncementGetAllQueryParams
  ): Promise<T.AnnouncementGetAllResponse> {
    const res = await axiosClient.get("announcement/", { params: params });
    return res.data;
  }

  public async workspaceGetOne(
    id: number,
    params: T.WorkspaceGetOneQueryParams
  ): Promise<T.WorkspaceGetOneResponse> {
    const res = await axiosClient.get("workspace/");
    return res.data;
  }

  public async workspaceGetAll(
    params: T.WorkspaceGetAllQueryParams
  ): Promise<T.WorkspaceGetAllResponse> {
    const res = await axiosClient.get("workspace/", { params: params });
    return res.data;
  }

  public async workspaceEpicGetOne(
    id: number,
    params: T.WorkspaceEpicGetOneQueryParams
  ): Promise<T.WorkspaceEpicGetOneResponse> {
    const res = await axiosClient.get("workspace_epic/");
    return res.data;
  }

  public async workspaceEpicGetAll(
    params: T.WorkspaceEpicGetAllQueryParams
  ): Promise<T.WorkspaceEpicGetAllResponse> {
    const res = await axiosClient.get("workspace_epic/", { params: params });
    return res.data;
  }

  public async workspaceStoryGetOne(
    id: number,
    params: T.WorkspaceStoryGetOneQueryParams
  ): Promise<T.WorkspaceStoryGetOneResponse> {
    const res = await axiosClient.get("workspace_story/");
    return res.data;
  }

  public async workspaceStoryGetAll(
    params: T.WorkspaceStoryGetAllQueryParams
  ): Promise<T.WorkspaceStoryGetAllResponse> {
    const res = await axiosClient.get("workspace_story/", { params: params });
    return res.data;
  }

  public async boardGetOne(
    id: number,
    params: T.BoardGetOneQueryParams
  ): Promise<T.BoardGetOneResponse> {
    const res = await axiosClient.get("board/");
    return res.data;
  }

  public async boardGetAll(
    params: T.BoardGetAllQueryParams
  ): Promise<T.BoardGetAllResponse> {
    const res = await axiosClient.get("board/", { params: params });
    return res.data;
  }

  public async announcementCreate(
    data: T.AnnouncementCreateInput,
    params: T.AnnouncementCreateQueryParams
  ): Promise<T.AnnouncementCreateResponse> {
    const res = await axiosClient.post("announcement/", data, params);
    return res.data;
  }

  public async workspaceCreate(
    data: T.WorkspaceCreateInput,
    params: T.WorkspaceCreateQueryParams
  ): Promise<T.WorkspaceCreateResponse> {
    const res = await axiosClient.post("workspace/", data, params);
    return res.data;
  }

  public async workspaceEpicCreate(
    data: T.WorkspaceEpicCreateInput,
    params: T.WorkspaceEpicCreateQueryParams
  ): Promise<T.WorkspaceEpicCreateResponse> {
    const res = await axiosClient.post("workspace_epic/", data, params);
    return res.data;
  }

  public async workspaceStoryCreate(
    data: T.WorkspaceStoryCreateInput,
    params: T.WorkspaceStoryCreateQueryParams
  ): Promise<T.WorkspaceStoryCreateResponse> {
    const res = await axiosClient.post("workspace_story/", data, params);
    return res.data;
  }

  public async boardCreate(
    data: T.BoardCreateInput,
    params: T.BoardCreateQueryParams
  ): Promise<T.BoardCreateResponse> {
    const res = await axiosClient.post("board/", data, params);
    return res.data;
  }

  public async announcementUpdate(
    data: T.AnnouncementUpdateInput,
    params: T.AnnouncementUpdateQueryParams
  ): Promise<T.AnnouncementUpdateResponse> {
    const res = await axiosClient.put("announcement/", data, params);
    return res.data;
  }

  public async workspaceUpdate(
    data: T.WorkspaceUpdateInput,
    params: T.WorkspaceUpdateQueryParams
  ): Promise<T.WorkspaceUpdateResponse> {
    const res = await axiosClient.put("workspace/", data, params);
    return res.data;
  }

  public async workspaceEpicUpdate(
    data: T.WorkspaceEpicUpdateInput,
    params: T.WorkspaceEpicUpdateQueryParams
  ): Promise<T.WorkspaceEpicUpdateResponse> {
    const res = await axiosClient.put("workspace_epic/", data, params);
    return res.data;
  }

  public async workspaceStoryUpdate(
    data: T.WorkspaceStoryUpdateInput,
    params: T.WorkspaceStoryUpdateQueryParams
  ): Promise<T.WorkspaceStoryUpdateResponse> {
    const res = await axiosClient.put("workspace_story/", data, params);
    return res.data;
  }

  public async boardUpdate(
    data: T.BoardUpdateInput,
    params: T.BoardUpdateQueryParams
  ): Promise<T.BoardUpdateResponse> {
    const res = await axiosClient.put("board/", data, params);
    return res.data;
  }

  public async announcementDelete(
    id: number,
    params: T.AnnouncementDeleteQueryParams
  ): Promise<T.AnnouncementDeleteResponse> {
    const res = await axiosClient.delete(
      "announcement/".concat(id.toString()),
      params
    );
    return res.data;
  }

  public async workspaceDelete(
    id: number,
    params: T.WorkspaceDeleteQueryParams
  ): Promise<T.WorkspaceDeleteResponse> {
    const res = await axiosClient.delete("workspace/");
    return res.data;
  }

  public async workspaceEpicDelete(
    id: number,
    params: T.WorkspaceEpicDeleteQueryParams
  ): Promise<T.WorkspaceEpicDeleteResponse> {
    const res = await axiosClient.delete("workspace_epic/");
    return res.data;
  }

  public async workspaceStoryDelete(
    id: number,
    params: T.WorkspaceStoryDeleteQueryParams
  ): Promise<T.WorkspaceStoryDeleteResponse> {
    const res = await axiosClient.delete("workspace_story/");
    return res.data;
  }

  public async boardDelete(
    id: number,
    params: T.BoardDeleteQueryParams
  ): Promise<T.BoardDeleteResponse> {
    const res = await axiosClient.delete("board/");
    return res.data;
  }
}
