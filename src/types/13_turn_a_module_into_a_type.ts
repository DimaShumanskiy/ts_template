//Turn a module into a type

export type ActionModule = typeof import("../helpers/13_contact");

// export type Action = "ADD" | "REMOVE" | "SET";
export type Action = ActionModule[keyof ActionModule];
