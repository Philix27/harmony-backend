import * as T from "./dto";
import axiosClient from "./axiosClient";

export class ApiRoutes {
  public announcementGetOne(
    id: number,
    params: T.AnnouncementGetOneQueryParams
  ): Promise<T.AnnouncementGetOneResponse> {
    return axiosClient.get("announcement/");
  }

  public announcementGetAll(
    params: T.AnnouncementGetAllQueryParams
  ): Promise<T.AnnouncementGetAllResponse> {
    return axiosClient.get("announcement/", { params: params });
  }

  public workspaceGetOne(
    id: number,
    params: T.WorkspaceGetOneQueryParams
  ): Promise<T.WorkspaceGetOneResponse> {
    return axiosClient.get("workspace/");
  }

  public workspaceGetAll(
    params: T.WorkspaceGetAllQueryParams
  ): Promise<T.WorkspaceGetAllResponse> {
    return axiosClient.get("workspace/", { params: params });
  }

  public workspaceEpicGetOne(
    id: number,
    params: T.WorkspaceEpicGetOneQueryParams
  ): Promise<T.WorkspaceEpicGetOneResponse> {
    return axiosClient.get("workspace_epic/");
  }

  public workspaceEpicGetAll(
    params: T.WorkspaceEpicGetAllQueryParams
  ): Promise<T.WorkspaceEpicGetAllResponse> {
    return axiosClient.get("workspace_epic/", { params: params });
  }

  public workspaceStoryGetOne(
    id: number,
    params: T.WorkspaceStoryGetOneQueryParams
  ): Promise<T.WorkspaceStoryGetOneResponse> {
    return axiosClient.get("workspace_story/");
  }

  public workspaceStoryGetAll(
    params: T.WorkspaceStoryGetAllQueryParams
  ): Promise<T.WorkspaceStoryGetAllResponse> {
    return axiosClient.get("workspace_story/", { params: params });
  }

  public boardGetOne(
    id: number,
    params: T.BoardGetOneQueryParams
  ): Promise<T.BoardGetOneResponse> {
    return axiosClient.get("board/");
  }

  public boardGetAll(
    params: T.BoardGetAllQueryParams
  ): Promise<T.BoardGetAllResponse> {
    return axiosClient.get("board/", { params: params });
  }

  public announcementCreate(
    data: T.AnnouncementCreateInput,
    params: T.AnnouncementCreateQueryParams
  ): Promise<T.AnnouncementCreateResponse> {
    return axiosClient.post("announcement/", data, params);
  }

  public workspaceCreate(
    data: T.WorkspaceCreateInput,
    params: T.WorkspaceCreateQueryParams
  ): Promise<T.WorkspaceCreateResponse> {
    return axiosClient.post("workspace/", data, params);
  }

  public workspaceEpicCreate(
    data: T.WorkspaceEpicCreateInput,
    params: T.WorkspaceEpicCreateQueryParams
  ): Promise<T.WorkspaceEpicCreateResponse> {
    return axiosClient.post("workspace_epic/", data, params);
  }

  public workspaceStoryCreate(
    data: T.WorkspaceStoryCreateInput,
    params: T.WorkspaceStoryCreateQueryParams
  ): Promise<T.WorkspaceStoryCreateResponse> {
    return axiosClient.post("workspace_story/", data, params);
  }

  public boardCreate(
    data: T.BoardCreateInput,
    params: T.BoardCreateQueryParams
  ): Promise<T.BoardCreateResponse> {
    return axiosClient.post("board/", data, params);
  }

  public announcementUpdate(
    data: T.AnnouncementUpdateInput,
    params: T.AnnouncementUpdateQueryParams
  ): Promise<T.AnnouncementUpdateResponse> {
    return axiosClient.put("announcement/", data, params);
  }

  public workspaceUpdate(
    data: T.WorkspaceUpdateInput,
    params: T.WorkspaceUpdateQueryParams
  ): Promise<T.WorkspaceUpdateResponse> {
    return axiosClient.put("workspace/", data, params);
  }

  public workspaceEpicUpdate(
    data: T.WorkspaceEpicUpdateInput,
    params: T.WorkspaceEpicUpdateQueryParams
  ): Promise<T.WorkspaceEpicUpdateResponse> {
    return axiosClient.put("workspace_epic/", data, params);
  }

  public workspaceStoryUpdate(
    data: T.WorkspaceStoryUpdateInput,
    params: T.WorkspaceStoryUpdateQueryParams
  ): Promise<T.WorkspaceStoryUpdateResponse> {
    return axiosClient.put("workspace_story/", data, params);
  }

  public boardUpdate(
    data: T.BoardUpdateInput,
    params: T.BoardUpdateQueryParams
  ): Promise<T.BoardUpdateResponse> {
    return axiosClient.put("board/", data, params);
  }

  public announcementDelete(
    id: number,
    params: T.AnnouncementDeleteQueryParams
  ): Promise<T.AnnouncementDeleteResponse> {
    return axiosClient.delete("announcement/".concat(id.toString()), params);
  }

  public workspaceDelete(
    id: number,
    params: T.WorkspaceDeleteQueryParams
  ): Promise<T.WorkspaceDeleteResponse> {
    return axiosClient.delete("workspace/");
  }

  public workspaceEpicDelete(
    id: number,
    params: T.WorkspaceEpicDeleteQueryParams
  ): Promise<T.WorkspaceEpicDeleteResponse> {
    return axiosClient.delete("workspace_epic/");
  }

  public workspaceStoryDelete(
    id: number,
    params: T.WorkspaceStoryDeleteQueryParams
  ): Promise<T.WorkspaceStoryDeleteResponse> {
    return axiosClient.delete("workspace_story/");
  }

  public boardDelete(
    id: number,
    params: T.BoardDeleteQueryParams
  ): Promise<T.BoardDeleteResponse> {
    return axiosClient.delete("board/");
  }
}
