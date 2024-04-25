import axios from "axios";

export class ApiRoutes {
	  public async AuthGetCredentials(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/auth/get_auth_credentials");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Chat(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/chat/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthViewMembers(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/organization/members");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskEpicGetOne(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task_epic/id");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskEpicGet(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task_epic/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskStoryGetOne(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task_story/id");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskStoryGetAll(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task_story/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Task_GetOne(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task/id");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Task_GetAll(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/task/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async UserGet(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/user/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async NoteGet(): Promise<any> {
		try {
			const res = await axios.get("/api/v1/notes/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AnnouncementCreate(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/announcement/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthCreateUser(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/create_user");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthSendEmailOtp(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/send_email_otp");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthVerifyEmailOtp(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/verify_email_otp");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthLogin(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/login");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthResetOtp(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/resent_otp");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthLogout(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/auth/logout");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthCreateOrg(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/organization/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthInviteMember(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/organization/invite");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskEpicCreate(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/task_epic/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskStoryCreate(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/task_story/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Task_Create(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/task/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamCreate(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/create_team");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamGetAll(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/get_teams");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamGetMembers(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/get_team_members");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamAdd(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/add_member");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamRemove(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/remove_member");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TeamDelete(): Promise<any> {
		try {
			const res = await axios.post("/api/v1/team/delete_team");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthUpdateInfo(): Promise<any> {
		try {
			const res = await axios.put("/api/v1/organization/update_info");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskEpicUpdate(): Promise<any> {
		try {
			const res = await axios.put("/api/v1/task_epic/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskStoryUpdate(): Promise<any> {
		try {
			const res = await axios.put("/api/v1/task_story/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Task_Update(): Promise<any> {
		try {
			const res = await axios.put("/api/v1/task/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async AuthDelete(): Promise<any> {
		try {
			const res = await axios.delete("/api/v1/organization/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskEpicDelete(): Promise<any> {
		try {
			const res = await axios.delete("/api/v1/task_epic/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async TaskStoryDelete(): Promise<any> {
		try {
			const res = await axios.delete("/api/v1/task_story/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
  public async Task_Delete(): Promise<any> {
		try {
			const res = await axios.delete("/api/v1/task/");
			return res;
		} catch(e) {
			return e.message;
		}

	}
}