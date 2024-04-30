
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

export interface WorkspaceDeleteInput {
 Id: number;
}

export interface WorkspaceDeleteResponse {
 Msg: string;
}

export interface WorkspaceGetOneInput {
 UserId: number;
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
