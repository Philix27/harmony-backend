
import * as T from "./dto";

	  
  type AnnouncementGetOne = {
	path: "announcement/";
	
	response: T.AnnouncementGetOneResponse;
	pathParam: T.AnnouncementGetOnePathParams;
	queryParams: T.AnnouncementGetOneQueryParams;
	method: "get";
  }
 
  
  type AnnouncementGetAll = {
	path: "announcement/";
	
	response: T.AnnouncementGetAllResponse;
	pathParam: T.AnnouncementGetAllPathParams;
	queryParams: T.AnnouncementGetAllQueryParams;
	method: "get";
  }
 
  
  type WorkspaceGetOne = {
	path: "workspace/";
	
	response: T.WorkspaceGetOneResponse;
	pathParam: T.WorkspaceGetOnePathParams;
	queryParams: T.WorkspaceGetOneQueryParams;
	method: "get";
  }
 
  
  type WorkspaceGetAll = {
	path: "workspace/";
	
	response: T.WorkspaceGetAllResponse;
	pathParam: T.WorkspaceGetAllPathParams;
	queryParams: T.WorkspaceGetAllQueryParams;
	method: "get";
  }
 
  
  type WorkspaceEpicGetOne = {
	path: "workspace_epic/";
	
	response: T.WorkspaceEpicGetOneResponse;
	pathParam: T.WorkspaceEpicGetOnePathParams;
	queryParams: T.WorkspaceEpicGetOneQueryParams;
	method: "get";
  }
 
  
  type WorkspaceEpicGetAll = {
	path: "workspace_epic/";
	
	response: T.WorkspaceEpicGetAllResponse;
	pathParam: T.WorkspaceEpicGetAllPathParams;
	queryParams: T.WorkspaceEpicGetAllQueryParams;
	method: "get";
  }
 
  
  type WorkspaceStoryGetOne = {
	path: "workspace_story/";
	
	response: T.WorkspaceStoryGetOneResponse;
	pathParam: T.WorkspaceStoryGetOnePathParams;
	queryParams: T.WorkspaceStoryGetOneQueryParams;
	method: "get";
  }
 
  
  type WorkspaceStoryGetAll = {
	path: "workspace_story/";
	
	response: T.WorkspaceStoryGetAllResponse;
	pathParam: T.WorkspaceStoryGetAllPathParams;
	queryParams: T.WorkspaceStoryGetAllQueryParams;
	method: "get";
  }
 
  
  type BoardGetOne = {
	path: "board/";
	
	response: T.BoardGetOneResponse;
	pathParam: T.BoardGetOnePathParams;
	queryParams: T.BoardGetOneQueryParams;
	method: "get";
  }
 
  
  type BoardGetAll = {
	path: "board/";
	
	response: T.BoardGetAllResponse;
	pathParam: T.BoardGetAllPathParams;
	queryParams: T.BoardGetAllQueryParams;
	method: "get";
  }
 
  
  type AnnouncementCreate = {
	path: "announcement/";
	input: T.AnnouncementCreateInput;
	response: T.AnnouncementCreateResponse;
	pathParam: T.AnnouncementCreatePathParams;
	queryParams: T.AnnouncementCreateQueryParams;
	method: "post";
  }
 
  
  type WorkspaceCreate = {
	path: "workspace/";
	input: T.WorkspaceCreateInput;
	response: T.WorkspaceCreateResponse;
	pathParam: T.WorkspaceCreatePathParams;
	queryParams: T.WorkspaceCreateQueryParams;
	method: "post";
  }
 
  
  type WorkspaceEpicCreate = {
	path: "workspace_epic/";
	input: T.WorkspaceEpicCreateInput;
	response: T.WorkspaceEpicCreateResponse;
	pathParam: T.WorkspaceEpicCreatePathParams;
	queryParams: T.WorkspaceEpicCreateQueryParams;
	method: "post";
  }
 
  
  type WorkspaceStoryCreate = {
	path: "workspace_story/";
	input: T.WorkspaceStoryCreateInput;
	response: T.WorkspaceStoryCreateResponse;
	pathParam: T.WorkspaceStoryCreatePathParams;
	queryParams: T.WorkspaceStoryCreateQueryParams;
	method: "post";
  }
 
  
  type BoardCreate = {
	path: "board/";
	input: T.BoardCreateInput;
	response: T.BoardCreateResponse;
	pathParam: T.BoardCreatePathParams;
	queryParams: T.BoardCreateQueryParams;
	method: "post";
  }
 
  
  type AnnouncementUpdate = {
	path: "announcement/";
	input: T.AnnouncementUpdateInput;
	response: T.AnnouncementUpdateResponse;
	pathParam: T.AnnouncementUpdatePathParams;
	queryParams: T.AnnouncementUpdateQueryParams;
	method: "put";
  }
 
  
  type WorkspaceUpdate = {
	path: "workspace/";
	input: T.WorkspaceUpdateInput;
	response: T.WorkspaceUpdateResponse;
	pathParam: T.WorkspaceUpdatePathParams;
	queryParams: T.WorkspaceUpdateQueryParams;
	method: "put";
  }
 
  
  type WorkspaceEpicUpdate = {
	path: "workspace_epic/";
	input: T.WorkspaceEpicUpdateInput;
	response: T.WorkspaceEpicUpdateResponse;
	pathParam: T.WorkspaceEpicUpdatePathParams;
	queryParams: T.WorkspaceEpicUpdateQueryParams;
	method: "put";
  }
 
  
  type WorkspaceStoryUpdate = {
	path: "workspace_story/";
	input: T.WorkspaceStoryUpdateInput;
	response: T.WorkspaceStoryUpdateResponse;
	pathParam: T.WorkspaceStoryUpdatePathParams;
	queryParams: T.WorkspaceStoryUpdateQueryParams;
	method: "put";
  }
 
  
  type BoardUpdate = {
	path: "board/";
	input: T.BoardUpdateInput;
	response: T.BoardUpdateResponse;
	pathParam: T.BoardUpdatePathParams;
	queryParams: T.BoardUpdateQueryParams;
	method: "put";
  }
 
  
  type AnnouncementDelete = {
	path: "announcement/";
	
	response: T.AnnouncementDeleteResponse;
	pathParam: T.AnnouncementDeletePathParams;
	queryParams: T.AnnouncementDeleteQueryParams;
	method: "delete";
  }
 
  
  type WorkspaceDelete = {
	path: "workspace/";
	
	response: T.WorkspaceDeleteResponse;
	pathParam: T.WorkspaceDeletePathParams;
	queryParams: T.WorkspaceDeleteQueryParams;
	method: "delete";
  }
 
  
  type WorkspaceEpicDelete = {
	path: "workspace_epic/";
	
	response: T.WorkspaceEpicDeleteResponse;
	pathParam: T.WorkspaceEpicDeletePathParams;
	queryParams: T.WorkspaceEpicDeleteQueryParams;
	method: "delete";
  }
 
  
  type WorkspaceStoryDelete = {
	path: "workspace_story/";
	
	response: T.WorkspaceStoryDeleteResponse;
	pathParam: T.WorkspaceStoryDeletePathParams;
	queryParams: T.WorkspaceStoryDeleteQueryParams;
	method: "delete";
  }
 
  
  type BoardDelete = {
	path: "board/";
	
	response: T.BoardDeleteResponse;
	pathParam: T.BoardDeletePathParams;
	queryParams: T.BoardDeleteQueryParams;
	method: "delete";
  }
 

 type AllTypes = { 
	AnnouncementGetOne: AnnouncementGetOne;
AnnouncementGetAll: AnnouncementGetAll;
WorkspaceGetOne: WorkspaceGetOne;
WorkspaceGetAll: WorkspaceGetAll;
WorkspaceEpicGetOne: WorkspaceEpicGetOne;
WorkspaceEpicGetAll: WorkspaceEpicGetAll;
WorkspaceStoryGetOne: WorkspaceStoryGetOne;
WorkspaceStoryGetAll: WorkspaceStoryGetAll;
BoardGetOne: BoardGetOne;
BoardGetAll: BoardGetAll;
AnnouncementCreate: AnnouncementCreate;
WorkspaceCreate: WorkspaceCreate;
WorkspaceEpicCreate: WorkspaceEpicCreate;
WorkspaceStoryCreate: WorkspaceStoryCreate;
BoardCreate: BoardCreate;
AnnouncementUpdate: AnnouncementUpdate;
WorkspaceUpdate: WorkspaceUpdate;
WorkspaceEpicUpdate: WorkspaceEpicUpdate;
WorkspaceStoryUpdate: WorkspaceStoryUpdate;
BoardUpdate: BoardUpdate;
AnnouncementDelete: AnnouncementDelete;
WorkspaceDelete: WorkspaceDelete;
WorkspaceEpicDelete: WorkspaceEpicDelete;
WorkspaceStoryDelete: WorkspaceStoryDelete;
BoardDelete: BoardDelete;
}