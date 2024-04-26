import axios from "axios";
import * as T from "./dto";


export class ApiRoutes {

  public async AuthGetCredentials(
    data: T.AuthGetCredentialsInput
  ): Promise<T.AuthGetCredentialsResponse> {
    try {
      const res = await axios.get("/api/v1/auth/get_auth_credentials", data);
      return res.data as T.AuthGetCredentialsResponse;
    } catch (e) {
      return e.message;
    }
  }

  public async Chat(data: T.ChatInput): Promise<T.ChatResponse> {
    try {
      const res = await axios.get("/api/v1/chat/", data);
      return res.data as T.ChatResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthViewMembers(
    data: T.AuthViewMembersInput
  ): Promise<T.AuthViewMembersResponse> {
    try {
      const res = await axios.get("/api/v1/organization/members", data);
      return res.data as T.AuthViewMembersResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskEpicGetOne(
    data: T.TaskEpicGetOneInput
  ): Promise<T.TaskEpicGetOneResponse> {
    try {
      const res = await axios.get("/api/v1/task_epic/id", data);
      return res.data as T.TaskEpicGetOneResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskEpicGet(
    data: T.TaskEpicGetInput
  ): Promise<T.TaskEpicGetResponse> {
    try {
      const res = await axios.get("/api/v1/task_epic/", data);
      return res.data as T.TaskEpicGetResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskStoryGetOne(
    data: T.TaskStoryGetOneInput
  ): Promise<T.TaskStoryGetOneResponse> {
    try {
      const res = await axios.get("/api/v1/task_story/id", data);
      return res.data as T.TaskStoryGetOneResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskStoryGetAll(
    data: T.TaskStoryGetAllInput
  ): Promise<T.TaskStoryGetAllResponse> {
    try {
      const res = await axios.get("/api/v1/task_story/", data);
      return res.data as T.TaskStoryGetAllResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async Task_GetOne(
    data: T.Task_GetOneInput
  ): Promise<T.Task_GetOneResponse> {
    try {
      const res = await axios.get("/api/v1/task/id", data);
      return res.data as T.Task_GetOneResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async Task_GetAll(
    data: T.Task_GetAllInput
  ): Promise<T.Task_GetAllResponse> {
    try {
      const res = await axios.get("/api/v1/task/", data);
      return res.data as T.Task_GetAllResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async UserGet(data: T.UserGetInput): Promise<T.UserGetResponse> {
    try {
      const res = await axios.get("/api/v1/user/", data);
      return res.data as T.UserGetResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async NoteGet(data: T.NoteGetInput): Promise<T.NoteGetResponse> {
    try {
      const res = await axios.get("/api/v1/notes/", data);
      return res.data as T.NoteGetResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AnnouncementCreate(
    data: T.AnnouncementCreateInput
  ): Promise<T.AnnouncementCreateResponse> {
    try {
      const res = await axios.post("/api/v1/announcement/", data);
      return res.data as T.AnnouncementCreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthCreateUser(
    data: T.AuthCreateUserInput
  ): Promise<T.AuthCreateUserResponse> {
    try {
      const res = await axios.post("/api/v1/auth/create_user", data);
      return res.data as T.AuthCreateUserResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthSendEmailOtp(
    data: T.AuthSendEmailOtpInput
  ): Promise<T.AuthSendEmailOtpResponse> {
    try {
      const res = await axios.post("/api/v1/auth/send_email_otp", data);
      return res.data as T.AuthSendEmailOtpResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthVerifyEmailOtp(
    data: T.AuthVerifyEmailOtpInput
  ): Promise<T.AuthVerifyEmailOtpResponse> {
    try {
      const res = await axios.post("/api/v1/auth/verify_email_otp", data);
      return res.data as T.AuthVerifyEmailOtpResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthLogin(data: T.AuthLoginInput): Promise<T.AuthLoginResponse> {
    try {
      const res = await axios.post("/api/v1/auth/login", data);
      return res.data as T.AuthLoginResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthResetOtp(
    data: T.AuthResetOtpInput
  ): Promise<T.AuthResetOtpResponse> {
    try {
      const res = await axios.post("/api/v1/auth/resent_otp", data);
      return res.data as T.AuthResetOtpResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthLogout(
    data: T.AuthLogoutInput
  ): Promise<T.AuthLogoutResponse> {
    try {
      const res = await axios.post("/api/v1/auth/logout", data);
      return res.data as T.AuthLogoutResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthCreateOrg(
    data: T.AuthCreateOrgInput
  ): Promise<T.AuthCreateOrgResponse> {
    try {
      const res = await axios.post("/api/v1/organization/", data);
      return res.data as T.AuthCreateOrgResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthInviteMember(
    data: T.AuthInviteMemberInput
  ): Promise<T.AuthInviteMemberResponse> {
    try {
      const res = await axios.post("/api/v1/organization/invite", data);
      return res.data as T.AuthInviteMemberResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskEpicCreate(
    data: T.TaskEpicCreateInput
  ): Promise<T.TaskEpicCreateResponse> {
    try {
      const res = await axios.post("/api/v1/task_epic/", data);
      return res.data as T.TaskEpicCreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskStoryCreate(
    data: T.TaskStoryCreateInput
  ): Promise<T.TaskStoryCreateResponse> {
    try {
      const res = await axios.post("/api/v1/task_story/", data);
      return res.data as T.TaskStoryCreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async Task_Create(
    data: T.Task_CreateInput
  ): Promise<T.Task_CreateResponse> {
    try {
      const res = await axios.post("/api/v1/task/", data);
      return res.data as T.Task_CreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamCreate(
    data: T.TeamCreateInput
  ): Promise<T.TeamCreateResponse> {
    try {
      const res = await axios.post("/api/v1/team/create_team", data);
      return res.data as T.TeamCreateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamGetAll(
    data: T.TeamGetAllInput
  ): Promise<T.TeamGetAllResponse> {
    try {
      const res = await axios.post("/api/v1/team/get_teams", data);
      return res.data as T.TeamGetAllResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamGetMembers(
    data: T.TeamGetMembersInput
  ): Promise<T.TeamGetMembersResponse> {
    try {
      const res = await axios.post("/api/v1/team/get_team_members", data);
      return res.data as T.TeamGetMembersResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamAdd(data: T.TeamAddInput): Promise<T.TeamAddResponse> {
    try {
      const res = await axios.post("/api/v1/team/add_member", data);
      return res.data as T.TeamAddResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamRemove(
    data: T.TeamRemoveInput
  ): Promise<T.TeamRemoveResponse> {
    try {
      const res = await axios.post("/api/v1/team/remove_member", data);
      return res.data as T.TeamRemoveResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TeamDelete(
    data: T.TeamDeleteInput
  ): Promise<T.TeamDeleteResponse> {
    try {
      const res = await axios.post("/api/v1/team/delete_team", data);
      return res.data as T.TeamDeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthUpdateInfo(
    data: T.AuthUpdateInfoInput
  ): Promise<T.AuthUpdateInfoResponse> {
    try {
      const res = await axios.put("/api/v1/organization/update_info", data);
      return res.data as T.AuthUpdateInfoResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskEpicUpdate(
    data: T.TaskEpicUpdateInput
  ): Promise<T.TaskEpicUpdateResponse> {
    try {
      const res = await axios.put("/api/v1/task_epic/", data);
      return res.data as T.TaskEpicUpdateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskStoryUpdate(
    data: T.TaskStoryUpdateInput
  ): Promise<T.TaskStoryUpdateResponse> {
    try {
      const res = await axios.put("/api/v1/task_story/", data);
      return res.data as T.TaskStoryUpdateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async Task_Update(
    data: T.Task_UpdateInput
  ): Promise<T.Task_UpdateResponse> {
    try {
      const res = await axios.put("/api/v1/task/", data);
      return res.data as T.Task_UpdateResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async AuthDelete(
    data: T.AuthDeleteInput
  ): Promise<T.AuthDeleteResponse> {
    try {
      const res = await axios.delete("/api/v1/organization/", data);
      return res.data as T.AuthDeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskEpicDelete(
    data: T.TaskEpicDeleteInput
  ): Promise<T.TaskEpicDeleteResponse> {
    try {
      const res = await axios.delete("/api/v1/task_epic/", data);
      return res.data as T.TaskEpicDeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async TaskStoryDelete(
    data: T.TaskStoryDeleteInput
  ): Promise<T.TaskStoryDeleteResponse> {
    try {
      const res = await axios.delete("/api/v1/task_story/", data);
      return res.data as T.TaskStoryDeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
  public async Task_Delete(
    data: T.Task_DeleteInput
  ): Promise<T.Task_DeleteResponse> {
    try {
      const res = await axios.delete("/api/v1/task/", data);
      return res.data as T.Task_DeleteResponse;
    } catch (e) {
      return e.message;
    }
  }
}
