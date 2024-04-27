
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
 data: announcement[];
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

export interface announcementResponseDto {
 Id: number;
 Title: string;
 Subtitle: string;
}

export interface updateAnnouncementDto {
 Id: number;
 Title: string;
 Subtitle: string;
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
