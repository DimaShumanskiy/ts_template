//Create a 'key remover' function which can process any generic object

export const makeKeyRemoved =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };

const keyRemover = makeKeyRemoved(["a", "b"]);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

// newObject.c = number
