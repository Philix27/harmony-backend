import axiosClient from "./axiosClient"
import * as T from "./dto"

type Announcement = {
  input: T.WorkspaceCreateInput
  response: T.AnnouncementGetOneResponse
  pathParam?: T.AnnouncementCreateResponse
  queryParams?: T.AnnouncementCreateResponse
  path: string
  method: "get" | " put" | "post" | "delete"
}
export class ApiRoutes {
  public announcementGetOne(id: number): Promise<T.AnnouncementGetOneResponse> {
    return axiosClient.get("announcement" + id)
  }

  public async announcementGetAll(
    data: T.AnnouncementGetAllInput
  ): Promise<T.AnnouncementGetAllResponse> {
    const res = await axiosClient.get("announcement/")
    // console.log("Res from AxiosClient", res.data.data)
    // return axiosClient.get("announcement/")
    return res.data
  }

  public workspaceGetOne(id: number): Promise<T.WorkspaceGetOneResponse> {
    return axiosClient.get("workspace" + id)
  }

  public workspaceGetAll(
    data: T.WorkspaceGetAllInput
  ): Promise<T.WorkspaceGetAllResponse> {
    return axiosClient.get("workspace/")
  }

  public workspaceEpicGetOne(
    id: number
  ): Promise<T.WorkspaceEpicGetOneResponse> {
    return axiosClient.get("workspace_epic" + id)
  }

  // public workspaceEpicGetByWorkspaceId(
  //   data: T.WorkspaceEpicGetByWorkspaceIdInput
  // ): Promise<T.WorkspaceEpicGetByWorkspaceIdResponse> {
  //   return axiosClient.get("workspace_epic/");
  // }

  public workspaceStoryGetOne(
    id: number
  ): Promise<T.WorkspaceStoryGetOneResponse> {
    return axiosClient.get("workspace_story" + id)
  }

  // public workspaceStoryGetByWorkspaceId(
  //   data: T.WorkspaceStoryGetByWorkspaceIdInput
  // ): Promise<T.WorkspaceStoryGetByWorkspaceIdResponse> {
  //   return axiosClient.get("workspace_story/");
  // }

  public announcementCreate(
    data: T.AnnouncementCreateInput
  ): Promise<T.AnnouncementCreateResponse> {
    return axiosClient.post("announcement/")
  }

  public workspaceCreate(
    data: T.WorkspaceCreateInput
  ): Promise<T.WorkspaceCreateResponse> {
    return axiosClient.post("workspace/")
  }

  public workspaceEpicCreate(
    data: T.WorkspaceEpicCreateInput
  ): Promise<T.WorkspaceEpicCreateResponse> {
    return axiosClient.post("workspace_epic/")
  }

  public workspaceStoryCreate(
    data: T.WorkspaceStoryCreateInput
  ): Promise<T.WorkspaceStoryCreateResponse> {
    return axiosClient.post("workspace_story/")
  }

  public announcementUpdate(
    data: T.AnnouncementUpdateInput
  ): Promise<T.AnnouncementUpdateResponse> {
    return axiosClient.put("announcement/")
  }

  public workspaceUpdate(
    data: T.WorkspaceUpdateInput
  ): Promise<T.WorkspaceUpdateResponse> {
    return axiosClient.put("workspace/")
  }

  public workspaceEpicUpdate(
    data: T.WorkspaceEpicUpdateInput
  ): Promise<T.WorkspaceEpicUpdateResponse> {
    return axiosClient.put("workspace_epic/")
  }

  public workspaceStoryUpdate(
    data: T.WorkspaceStoryUpdateInput
  ): Promise<T.WorkspaceStoryUpdateResponse> {
    return axiosClient.put("workspace_story/")
  }

  public announcementDelete(
    data: T.AnnouncementDeleteInput
  ): Promise<T.AnnouncementDeleteResponse> {
    return axiosClient.delete("announcement/")
  }

  public workspaceDelete(id: number): Promise<T.WorkspaceDeleteResponse> {
    return axiosClient.delete("workspace" + id)
  }

  public workspaceEpicDelete(
    id: number
  ): Promise<T.WorkspaceEpicDeleteResponse> {
    return axiosClient.delete("workspace_epic" + id)
  }
  // name=${name}
  public workspaceStoryDelete(
    id: number
  ): Promise<T.WorkspaceStoryDeleteResponse> {
    return axiosClient.delete("workspace_story" + id)
  }
}
