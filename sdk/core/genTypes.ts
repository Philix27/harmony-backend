import * as T from "./dto";

type AnnouncementGetOne = {
  path: "announcement/";
  input: T.AnnouncementGetOneInput;
  response: T.AnnouncementGetOneResponse;
  pathParam: T.AnnouncementGetOnePathParams;
  queryParams: T.AnnouncementGetOneQueryParams;
  method: "get";
};

type AnnouncementGetAll = {
  path: "announcement/";
  input: T.AnnouncementGetAllInput;
  response: T.AnnouncementGetAllResponse;
  pathParam: T.AnnouncementGetAllPathParams;
  queryParams: T.AnnouncementGetAllQueryParams;
  method: "get";
};

type WorkspaceGetOne = {
  path: "workspace/";
  input: T.WorkspaceGetOneInput;
  response: T.WorkspaceGetOneResponse;
  pathParam: T.WorkspaceGetOnePathParams;
  queryParams: T.WorkspaceGetOneQueryParams;
  method: "get";
};

type WorkspaceGetAll = {
  path: "workspace/";
  input: T.WorkspaceGetAllInput;
  response: T.WorkspaceGetAllResponse;
  pathParam: T.WorkspaceGetAllPathParams;
  queryParams: T.WorkspaceGetAllQueryParams;
  method: "get";
};

type WorkspaceEpicGetOne = {
  path: "workspace_epic/";
  input: T.WorkspaceEpicGetOneInput;
  response: T.WorkspaceEpicGetOneResponse;
  pathParam: T.WorkspaceEpicGetOnePathParams;
  queryParams: T.WorkspaceEpicGetOneQueryParams;
  method: "get";
};

type WorkspaceEpicGetByWorkspaceId = {
  path: "workspace_epic/";
  input: T.WorkspaceEpicGetByWorkspaceIdInput;
  response: T.WorkspaceEpicGetByWorkspaceIdResponse;
  pathParam: T.WorkspaceEpicGetByWorkspaceIdPathParams;
  queryParams: T.WorkspaceEpicGetByWorkspaceIdQueryParams;
  method: "get";
};

type WorkspaceStoryGetOne = {
  path: "workspace_story/";
  input: T.WorkspaceStoryGetOneInput;
  response: T.WorkspaceStoryGetOneResponse;
  pathParam: T.WorkspaceStoryGetOnePathParams;
  queryParams: T.WorkspaceStoryGetOneQueryParams;
  method: "get";
};

type WorkspaceStoryGetByWorkspaceId = {
  path: "workspace_story/";
  input: T.WorkspaceStoryGetByWorkspaceIdInput;
  response: T.WorkspaceStoryGetByWorkspaceIdResponse;
  pathParam: T.WorkspaceStoryGetByWorkspaceIdPathParams;
  queryParams: T.WorkspaceStoryGetByWorkspaceIdQueryParams;
  method: "get";
};

type AnnouncementCreate = {
  path: "announcement/";
  input: T.AnnouncementCreateInput;
  response: T.AnnouncementCreateResponse;
  pathParam: T.AnnouncementCreatePathParams;
  queryParams: T.AnnouncementCreateQueryParams;
  method: "post";
};

type WorkspaceCreate = {
  path: "workspace/";
  input: T.WorkspaceCreateInput;
  response: T.WorkspaceCreateResponse;
  pathParam: T.WorkspaceCreatePathParams;
  queryParams: T.WorkspaceCreateQueryParams;
  method: "post";
};

type WorkspaceEpicCreate = {
  path: "workspace_epic/";
  input: T.WorkspaceEpicCreateInput;
  response: T.WorkspaceEpicCreateResponse;
  pathParam: T.WorkspaceEpicCreatePathParams;
  queryParams: T.WorkspaceEpicCreateQueryParams;
  method: "post";
};

type WorkspaceStoryCreate = {
  path: "workspace_story/";
  input: T.WorkspaceStoryCreateInput;
  response: T.WorkspaceStoryCreateResponse;
  pathParam: T.WorkspaceStoryCreatePathParams;
  queryParams: T.WorkspaceStoryCreateQueryParams;
  method: "post";
};

type AnnouncementUpdate = {
  path: "announcement/";
  input: T.AnnouncementUpdateInput;
  response: T.AnnouncementUpdateResponse;
  pathParam: T.AnnouncementUpdatePathParams;
  queryParams: T.AnnouncementUpdateQueryParams;
  method: "put";
};

type WorkspaceUpdate = {
  path: "workspace/";
  input: T.WorkspaceUpdateInput;
  response: T.WorkspaceUpdateResponse;
  pathParam: T.WorkspaceUpdatePathParams;
  queryParams: T.WorkspaceUpdateQueryParams;
  method: "put";
};

type WorkspaceEpicUpdate = {
  path: "workspace_epic/";
  input: T.WorkspaceEpicUpdateInput;
  response: T.WorkspaceEpicUpdateResponse;
  pathParam: T.WorkspaceEpicUpdatePathParams;
  queryParams: T.WorkspaceEpicUpdateQueryParams;
  method: "put";
};

type WorkspaceStoryUpdate = {
  path: "workspace_story/";
  input: T.WorkspaceStoryUpdateInput;
  response: T.WorkspaceStoryUpdateResponse;
  pathParam: T.WorkspaceStoryUpdatePathParams;
  queryParams: T.WorkspaceStoryUpdateQueryParams;
  method: "put";
};

type AnnouncementDelete = {
  path: "announcement/";
  input: T.AnnouncementDeleteInput;
  response: T.AnnouncementDeleteResponse;
  pathParam: T.AnnouncementDeletePathParams;
  queryParams: T.AnnouncementDeleteQueryParams;
  method: "delete";
};

type WorkspaceDelete = {
  path: "workspace/";
  input: T.WorkspaceDeleteInput;
  response: T.WorkspaceDeleteResponse;
  pathParam: T.WorkspaceDeletePathParams;
  queryParams: T.WorkspaceDeleteQueryParams;
  method: "delete";
};

type WorkspaceEpicDelete = {
  path: "workspace_epic/";
  input: T.WorkspaceEpicDeleteInput;
  response: T.WorkspaceEpicDeleteResponse;
  pathParam: T.WorkspaceEpicDeletePathParams;
  queryParams: T.WorkspaceEpicDeleteQueryParams;
  method: "delete";
};

type WorkspaceStoryDelete = {
  path: "workspace_story/";
  input: T.WorkspaceStoryDeleteInput;
  response: T.WorkspaceStoryDeleteResponse;
  pathParam: T.WorkspaceStoryDeletePathParams;
  queryParams: T.WorkspaceStoryDeleteQueryParams;
  method: "delete";
};

type Registry = {
  AnnouncementGetOne: AnnouncementGetOne;
  AnnouncementGetAll: AnnouncementGetAll;
  WorkspaceGetOne: WorkspaceGetOne;
  WorkspaceGetAll: WorkspaceGetAll;
  WorkspaceEpicGetOne: WorkspaceEpicGetOne;
  WorkspaceEpicGetByWorkspaceId: WorkspaceEpicGetByWorkspaceId;
  WorkspaceStoryGetOne: WorkspaceStoryGetOne;
  WorkspaceStoryGetByWorkspaceId: WorkspaceStoryGetByWorkspaceId;
  AnnouncementCreate: AnnouncementCreate;
  WorkspaceCreate: WorkspaceCreate;
  WorkspaceEpicCreate: WorkspaceEpicCreate;
  WorkspaceStoryCreate: WorkspaceStoryCreate;
  AnnouncementUpdate: AnnouncementUpdate;
  WorkspaceUpdate: WorkspaceUpdate;
  WorkspaceEpicUpdate: WorkspaceEpicUpdate;
  WorkspaceStoryUpdate: WorkspaceStoryUpdate;
  AnnouncementDelete: AnnouncementDelete;
  WorkspaceDelete: WorkspaceDelete;
  WorkspaceEpicDelete: WorkspaceEpicDelete;
  WorkspaceStoryDelete: WorkspaceStoryDelete;
};

