//Use deep partials to help with mocking an entity

export type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>; //  []?:
};

interface Post {
  id: string;
  comments: { value: string }[];
  mete: {
    name: string;
    description: string;
  };
}

//@ts-ignore // delete ts-ignore
const post: Post = {
  // error
  id: "1",
};

const post2: DeepPartial<Post> = {
  id: "1",
};
