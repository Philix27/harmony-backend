
import axios from "axios";
import * as T from "./dto";

export class ApiRoutes {
	  public async WorkspaceGetOne(data: T.WorkspaceGetOneInput): Promise<T.WorkspaceGetOneResponse> {
		try {
			const res = await axios.get("/api/v1/announcement/:id", data);
			return res.data as T.WorkspaceGetOneResponse;
		} catch(e) {
			return e.message;
		}

	}
  public async WorkspaceGetAll(data: T.WorkspaceGetAllInput): Promise<T.WorkspaceGetAllResponse> {
		try {
			const res = await axios.get("/api/v1/announcement/", data);
			return res.data as T.WorkspaceGetAllResponse;
		} catch(e) {
			return e.message;
		}

	}
  public async WorkspaceCreate(data: T.WorkspaceCreateInput): Promise<T.WorkspaceCreateResponse> {
		try {
			const res = await axios.post("/api/v1/announcement/", data);
			return res.data as T.WorkspaceCreateResponse;
		} catch(e) {
			return e.message;
		}

	}
  public async WorkspaceUpdate(data: T.WorkspaceUpdateInput): Promise<T.WorkspaceUpdateResponse> {
		try {
			const res = await axios.put("/api/v1/announcement/", data);
			return res.data as T.WorkspaceUpdateResponse;
		} catch(e) {
			return e.message;
		}

	}
  public async WorkspaceDelete(data: T.WorkspaceDeleteInput): Promise<T.WorkspaceDeleteResponse> {
		try {
			const res = await axios.delete("/api/v1/announcement/", data);
			return res.data as T.WorkspaceDeleteResponse;
		} catch(e) {
			return e.message;
		}

	}
}