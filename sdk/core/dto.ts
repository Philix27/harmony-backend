
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

export interface AnnouncementUpdateInput {
 id: number;
 title: string;
 subtitle: string;
}

export interface AnnouncementUpdateResponse {
 msg: string;
}

export interface AnnouncementDeleteInput {
 id: number;
}

export interface AnnouncementDeleteResponse {
 msg: string;
}

export interface AnnouncementGetOneInput {
 id: number;
}

export interface AnnouncementGetOneResponse {
 id: number;
 title: string;
 subtitle: string;
}

export interface AnnouncementGetAllInput {
 limit: number;
}

export interface AnnouncementGetAllResponse {
 data: announcement[];
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

export interface WorkspaceUpdateInput {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceUpdateResponse {
 msg: string;
}

export interface WorkspaceDeleteResponse {
 msg: string;
}

export interface WorkspaceGetOneResponse {
 id: number;
 name: string;
 description: string;
}

export interface WorkspaceGetAllInput {
 limit: number;
 userId: number;
}

export interface WorkspaceGetAllResponse {
 data: Workspace[];
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

export interface WorkspaceEpicUpdateInput {
 id: number;
 title: string;
 description: string;
}

export interface WorkspaceEpicUpdateResponse {
 msg: string;
}

export interface WorkspaceEpicDeleteResponse {
 msg: string;
}

export interface WorkspaceEpicGetOneResponse {
 id: number;
 title: string;
 description: string;
 workspaceId: number;
}

export interface WorkspaceEpicGetAllResponse {
 data: WorkspaceEpic[];
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

export interface WorkspaceStoryUpdateInput {
 id: number;
 title: string;
 description: string;
}

export interface WorkspaceStoryUpdateResponse {
 msg: string;
}

export interface WorkspaceStoryDeleteResponse {
 msg: string;
}

export interface WorkspaceStoryGetOneResponse {
 id: number;
 title: string;
 description: string;
 workspaceEpicId: number;
}

export interface WorkspaceStoryGetAllResponse {
 data: WorkspaceStory[];
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
