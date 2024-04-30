
export interface AnnouncementCreateInput {
 Title: string;
 Subtitle: string;
 WorkspaceID: number;
}

export interface AnnouncementCreateResponse {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface AnnouncementUpdateInput {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface AnnouncementUpdateResponse {
 Msg: string;
}

export interface AnnouncementDeleteInput {
 Id: number;
}

export interface AnnouncementDeleteResponse {
 Msg: string;
}

export interface AnnouncementGetOneInput {
 Id: number;
}

export interface AnnouncementGetOneResponse {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface AnnouncementGetAllInput {
 Limit: number;
}

export interface AnnouncementGetAllResponse {
 Data: announcement[];
}

export interface announcement {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface createAnnouncementDto {
 Title: string;
 Subtitle: string;
 WorkspaceID: number;
}

export interface updateAnnouncementDto {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface WorkspaceCreateInput {
 Name: string;
 Description: string;
 OwnerId: number;
}

export interface WorkspaceCreateResponse {
 Id: number;
 Name: string;
 Description: string;
}

export interface WorkspaceUpdateInput {
 Id: number;
 Name: string;
 Description: string;
}

export interface WorkspaceUpdateResponse {
 Msg: string;
}

export interface WorkspaceDeleteResponse {
 Msg: string;
}

export interface WorkspaceGetOneResponse {
 Id: number;
 Name: string;
 Description: string;
}

export interface WorkspaceGetAllInput {
 Limit: number;
 UserId: number;
}

export interface WorkspaceGetAllResponse {
 Data: Workspace[];
}

export interface Workspace {
 Id: number;
 Name: string;
 Description: string;
}

export interface WorkspaceEpicCreateInput {
 Title: string;
 Description: string;
 WorkspaceID: number;
}

export interface WorkspaceEpicCreateResponse {
 Id: number;
 Title: string;
 Description: string;
 WorkspaceID: number;
}

export interface WorkspaceEpicUpdateInput {
 Id: number;
 Title: string;
 Description: string;
}

export interface WorkspaceEpicUpdateResponse {
 Msg: string;
}

export interface WorkspaceEpicDeleteResponse {
 Msg: string;
}

export interface WorkspaceEpicGetOneResponse {
 Id: number;
 Title: string;
 Description: string;
 WorkspaceID: number;
}

export interface WorkspaceEpicGetAllResponse {
 Data: WorkspaceEpic[];
}

export interface WorkspaceEpic {
 Id: number;
 Title: string;
 Description: string;
 WorkspaceID: number;
}

export interface announcement {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface createAnnouncementDto {
 Title: string;
 Subtitle: string;
}

export interface updateAnnouncementDto {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface announcementResponseDto {
 Id: number;
 Title: string;
 Subtitle: string;
}
