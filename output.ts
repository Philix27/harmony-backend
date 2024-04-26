export interface BrassAnnouncement {
  Id: number;
  Title: string;
  Subtitle: string;
}

export interface BrassCreateAnnouncementDto {
  Title: string;
  Subtitle: string;
}

export interface BrassUpdateAnnouncementDto {
  Id: number;
  Title: string;
  Subtitle: string;
}

export interface BrassResponseDto {
  Id: number;
  Title: string;
  Subtitle: string;
  Checks: BrassChecker;
}

export interface BrassChecker {
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
