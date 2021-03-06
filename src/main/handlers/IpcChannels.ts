const enum IPCChannel {
  /* MainHandlers.ts */
  MINIMISE_WINDOW = "MINIMISE_WINDOW",
  EXPAND_WINDOW = "EXPAND_WINDOW",
  CLOSE_WINDOW = "CLOSE_WINDOW",
  TOGGLE_DEVELOPER_TOOLS = "TOGGLE_DEVELOPER_TOOLS",
  FORCE_RELOAD_WINDOW = "FORCE_RELOAD_WINDOW",
  ACTION_CONFIRM = "ACTION_CONFIRM",
  OPEN_REPORT_DIALOG = "OPEN_REPORT_DIALOG",

  /* FileHandlers.ts */
  NEW_FILE = "NEW_FILE",
  NEW_FROM_TEMPLATE = "NEW_FROM_TEMPLATE",
  NEW_FILE_GRAPHICAL = "NEW_FILE_GRAPHICAL",
  OPEN_FROM_URL = "OPEN_FROM_URL",
  OPEN_FILE = "OPEN_FILE",
  CLOSE_FILE = "CLOSE_FILE",
  SAVE_FILE = "SAVE_FILE",
  GET_FILE_CONTENT = "GET_FILE_CONTENT",
  UPDATE_FILE_CONTENT = "UPDATE_FILE_CONTENT",
  RENDERER_UPDATE_FILE_CONTENT = "RENDERER_UPDATE_FILE_CONTENT",
  UPDATE_ATTRIBUTE = "UPDATE_ATTRIBUTE",
  ADD_CHILD_NODE = "ADD_CHILD_NODE",
  REMOVE_CHILD_NODE = "REMOVE_CHILD_NODE",
  GET_OPENED_FILEPATHS_ASYNC = "GET_OPENED_FILEPATHS_ASYNC",
  RENDERER_UPDATE_OPENED_FILE = "RENDERER_UPDATE_OPENED_FILE",
  RENDERER_SET_ACTIVE_FILE = "RENDERER_SET_ACTIVE_FILE",
  GET_FILE_STATE_ASYNC = "GET_FILE_STATE_ASYNC",
  RENDERER_UPDATE_FILE_STATE = "RENDERER_UPDATE_FILE_STATE",
  OPEN_DOCUMENTATION = "OPEN_DOCUMENTATION",
  OPEN_CELLML_DOCUMENTATION = "OPEN_CELLML_DOCUMENTATION",

  /* LibraryHandlers.ts */
  LIBRARY_GET_COMPONENTS = "LIBRARY_GET_COMPONENTS",
  LIBRARY_ADD_COMPONENT = "LIBRARY_ADD_COMPONENT",
  LIBRARY_REMOVE_COMPONENT = "LIBRARY_REMOVE_COMPONENT",
  LIBRARY_IMPORT_TO_MODEL = "LIBRARY_IMPORT_TO_MODEL",
  LIBRARY_OPEN_COMPONENT = "LIBRARY_OPEN_COMPONENT",
  RENDERER_UPDATE_COMPONENT = "RENDERER_UPDATE_COMPONENT",

  /* SettingsHandler.ts */
  GET_SETTING = "GET_SETTING",
  SET_SETTING = "SET_SETTING",
  TOGGLE_SETTING = "TOGGLE_SETTING",
}

export default IPCChannel;
