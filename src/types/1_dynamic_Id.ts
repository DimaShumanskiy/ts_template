//Record
//dynamic Id ( in , Record)
type CatInfo = {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };
// type EntityWithId =
//   | {
//       type: "user";
//       userId: string;
//     }
//   | {
//       type: "post";
//       postId: string;
//     }
//   | {
//       type: "comment";
//       commentId: string;
//     };

type EntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

export const resultEntityWithId: EntityWithId = {
  type: "user",
  userId: "231123",
};
