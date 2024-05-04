
export interface AnnouncementCreateInput {
 title: string;
 subtitle: string;
 workspaceId: number;
}

export interface AnnouncementCreateResponse {
 id: number;
 title: string;
 subtitle: string;
}

export interface AnnouncementCreatePathParams {
 id: string;
}

export interface AnnouncementCreateQueryParams {
}

export interface AnnouncementUpdateInput {
 id: number;
 title: string;
 subtitle: string;
}

export interface AnnouncementUpdateResponse {
 msg: string;
}

export interface AnnouncementUpdatePathParams {
 id: string;
}

export interface AnnouncementUpdateQueryParams {
}

export interface AnnouncementDeleteInput {
 id: number;
}

export interface AnnouncementDeleteResponse {
 msg: string;
}

export interface AnnouncementDeletePathParams {
 id: string;
}

export interface AnnouncementDeleteQueryParams {
}

export interface AnnouncementGetOneInput {
 id: number;
}

export interface AnnouncementGetOneResponse {
 id: number;
 title: string;
 subtitle: string;
}

export interface AnnouncementGetOnePathParams {
 id: string;
}

export interface AnnouncementGetOneQueryParams {
}

export interface AnnouncementGetAllInput {
 limit: number;
}

export interface AnnouncementGetAllResponse {
 data: announcement[];
}

export interface AnnouncementGetAllPathParams {
 id: string;
}

export interface AnnouncementGetAllQueryParams {
}

export interface announcement {
 id: number;
 title: string;
 subtitle: string;
}

export interface createAnnouncementDto {
 title: string;
 subtitle: string;
 workspaceId: number;
}

export interface updateAnnouncementDto {
 id: number;
 title: string;
 subtitle: string;
}

export interface BoardCreateInput {
 title: string;
 description: string;
 workspaceId: number;
}

export interface BoardCreateResponse {
 id: number;
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface BoardCreatePathParams {
 id: string;
}

export interface BoardCreateQueryParams {
}

export interface BoardUpdateInput {
 id: number;
 title: string;
 description: string;
}

export interface BoardUpdatePathParams {
 id: string;
}

export interface BoardUpdateQueryParams {
}

export interface BoardUpdateResponse {
 msg: string;
}

export interface BoardDeleteResponse {
 msg: string;
}

export interface BoardDeletePathParams {
 id: string;
}

export interface WorkspaceStoryDeleteInput {
}

export interface BoardDeleteQueryParams {
}

export interface BoardGetOneResponse {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface BoardGetOnePathParams {
}

export interface BoardGetOneQueryParams {
}

export interface BoardGetAllResponse {
 data: Board[];
}

export interface BoardGetAllInput {
}

export interface BoardGetAllPathParams {
 id: string;
}

export interface BoardGetAllQueryParams {
 workspace_id: string;
 limit: string;
}

export interface Board {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceCreateInput {
 name: string;
 description: string;
 ownerId: number;
}

export interface WorkspaceCreateResponse {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceCreatePathParams {
 id: string;
}

export interface WorkspaceCreateQueryParams {
}

export interface WorkspaceUpdateInput {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceUpdateResponse {
 msg: string;
}

export interface WorkspaceUpdatePathParams {
 id: string;
}

export interface WorkspaceUpdateQueryParams {
}

export interface WorkspaceDeleteResponse {
 msg: string;
}

export interface WorkspaceDeleteInput {
 id: string;
}

export interface WorkspaceDeletePathParams {
 id: string;
}

export interface WorkspaceDeleteQueryParams {
}

export interface WorkspaceGetOneResponse {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceGetOneInput {
}

export interface WorkspaceGetOnePathParams {
}

export interface WorkspaceGetOneQueryParams {
}

export interface WorkspaceGetAllInput {
 limit: number;
 userId: number;
}

export interface WorkspaceGetAllResponse {
 data: Workspace[];
}

export interface WorkspaceGetAllPathParams {
 id: string;
}

export interface WorkspaceGetAllQueryParams {
}

export interface Workspace {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceEpicCreateInput {
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceEpicCreateResponse {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceEpicCreatePathParams {
 id: string;
}

export interface WorkspaceEpicCreateQueryParams {
}

export interface WorkspaceEpicUpdateInput {
 id: number;
 title: string;
 description: string;
}

export interface WorkspaceEpicUpdateResponse {
 msg: string;
}

export interface WorkspaceEpicUpdatePathParams {
 id: string;
}

export interface WorkspaceEpicUpdateQueryParams {
}

export interface WorkspaceEpicDeleteResponse {
 msg: string;
}

export interface WorkspaceEpicDeletePathParams {
 id: string;
}

export interface WorkspaceEpicDeleteQueryParams {
}

export interface WorkspaceEpicGetOneResponse {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceEpicGetOneInput {
}

export interface WorkspaceEpicGetOnePathParams {
}

export interface WorkspaceEpicGetOneQueryParams {
}

export interface WorkspaceEpicGetAllResponse {
 data: WorkspaceEpic[];
}

export interface WorkspaceEpicGetAllInput {
}

export interface WorkspaceEpicGetAllPathParams {
}

export interface WorkspaceEpicGetAllQueryParams {
 workspace_id: string;
 limit: string;
}

export interface WorkspaceEpic {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceStoryCreateInput {
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface WorkspaceStoryCreateResponse {
 id: number;
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface WorkspaceStoryCreatePathParams {
 id: string;
}

export interface WorkspaceStoryCreateQueryParams {
}

export interface WorkspaceStoryUpdateInput {
 id: number;
 title: string;
 description: string;
}

export interface WorkspaceStoryUpdatePathParams {
 id: string;
}

export interface WorkspaceStoryUpdateQueryParams {
}

export interface WorkspaceStoryUpdateResponse {
 msg: string;
}

export interface WorkspaceStoryDeleteResponse {
 msg: string;
}

export interface WorkspaceStoryDeletePathParams {
 id: string;
}

export interface WorkspaceStoryDeleteQueryParams {
}

export interface WorkspaceStoryGetOneResponse {
 id: number;
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface WorkspaceStoryGetOneInput {
}

export interface WorkspaceStoryGetOnePathParams {
}

export interface WorkspaceStoryGetOneQueryParams {
}

export interface WorkspaceStoryGetAllResponse {
 data: WorkspaceStory[];
}

export interface WorkspaceStoryGetAllInput {
}

export interface WorkspaceStoryGetAllPathParams {
}

export interface WorkspaceStoryGetAllQueryParams {
 epic_id: string;
 limit: string;
}

export interface WorkspaceStory {
 id: number;
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface announcement {
 id: number;
 title: string;
 subtitle: string;
}

export interface createAnnouncementDto {
 title: string;
 subtitle: string;
}

export interface updateAnnouncementDto {
 id: number;
 title: string;
 subtitle: string;
}

export interface announcementResponseDto {
 id: number;
 title: string;
 subtitle: string;
}
