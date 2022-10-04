//Use generics to dynamically specify the number, and type, of arguments to functions

// redux

export type Event =
  | { type: "LOG"; payload: { userId: string } }
  | { type: "SIGN" };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {};

sendEvent("SIGN");
sendEvent("LOG", { userId: "123" });
