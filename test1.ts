// const cool = (a: string | { id: string }) => {
//   if (typeof a === "string") {
//     console.log("string", a);
//   } else {
//     console.log("object", a.id);
//   }
// };

// const STATUS1 = {
//   IDLE: "idle",
//   LOADING: "loading",
//   SUCCESS: "success",
//   ERROR: "error",
// } as const;

// type StatusValueT = (typeof STATUS1)[keyof typeof STATUS1];
// type StatusKeysT = keyof typeof STATUS1;

// type StatKey = keyof StatusValueT;

// const StatusValues = Object.values(STATUS1) as StatusValueT[];
// const StatusKeys = Object.keys(STATUS1) as StatusKeysT[];

// const statusValue = STATUS1["IDLE"];

// const keys = Object.keys(STATUS1);

// const statusValue2 = STATUS1[keys[0] as StatusKeysT];

// type User = {
//   id: string;
//   name: string;
//   age: number;
// };

// const user: User = { id: "1", name: "Alex", age: 30 };

// // if ("age" in user) {
// //   console.log(user.age);
// // }

// function updateUser(user: User, key: keyof User, value: string | number) {
//   user[key] = value as never;
// }

// type UserPreview = Pick<User, "id" | "name">;
// type UserWithoutAge = Omit<User, "age">;

// let a: any;
// let b: unknown;
// let c: string = "hello";
// b = "hello";

// // b.toUpperCase();  // compiler error - b is unknown

// if (typeof b === "string") {
//   b.toUpperCase(); // safe - b is string
// }

// (b as any).toLowerCase(); //no compiler error - b is any

// let d = c as unknown;

// if (typeof d === "string") {
//   d.toUpperCase(); // safe - d is string
// }

// const direction = "left" as const; //literal type.
// const direction2 = "right"; //string type

// type Direction = typeof direction; // "left"

// type Direction2 = typeof direction2; // string

// const roles = ["admin", "user"] as const;

// type Roles = (typeof roles)[number];

// const coolRole: Roles = "admin";

// type State =
//   | { status: "loading" }
//   | { status: "success"; data: string }
//   | { status: "error"; error: string };

// type UserProfile = {
//   id: string;
//   profile: {
//     name: string;
//   };
// };

// type Name = UserProfile["profile"]["name"]; // string

// const coolCool = {
//   hey: {
//     msg: "hello",
//   },
// };

// const msg = coolCool["hey"]["msg"];
// console.log(msg);

// type bbb = string;

// type Boss = {
//   name: string;
//   age: number;
// };

// type OptionalBoss = Partial<Boss>;

// type HalfBoss = Pick<Boss, "name">;
// type Boss3 = Omit<Boss, "age">;

// const coolBoss: Boss3 = { name: "John" };

// // let aa!: any[];
// let aa: any;

// for (let i = 0; i < aa.length; i++) {
//   console.log(aa[i]);
// }
// interface A {
//   name: string;
// }

// interface B extends A {
//   age: number;
// }

// const baa: B = {
//   name: "John",
//   age: 30,
// };

// type AsMap = {
//   cool: {
//     as: "cool";
//     href?: never;
//   };
//   foo: {
//     as: "foo";
//     href?: string;
//   };
// };

// type Props<T extends keyof AsMap> = AsMap[T];

// const ask: Props<"cool"> = {
//   as: "cool",
//   // href: "nope" ❌ error
// };

// const boo: Props<"foo"> = {
//   as: "foo",
//   href: "allowed", // ✅
// };

// type As = keyof AsMap;

// type Props<T extends As> = AsMap[T];

// function Components<T extends As>(props: Props<T>) {
//   if (props.as === "cool") {
//     // props.href is never here
//   } else {
//     // props.href is string here
//   }
//   console.log(props);
// }

type Roles = "admin" | "user" | "moderator";

type Permissions1 = Record<Roles, boolean>;

const yourPermissions: Permissions1 = {
  admin: true,
  user: false,
  moderator: false,
};

type test = Record<string, boolean>;

const testObj: test = {
  admin: true,
};

type User = {
  id: string;
  name: string;
  role: Roles;
  permissions: Permissions1;
  isActive: boolean;
  createdAt: Date;
  age: number;
};

type userPreview = Pick<User, "id" | "name">;
type UserWithoutAgeOrId = Omit<User, "age" | "id">;

type result =
  | { status: "success"; data: string }
  | { status: "failure"; message: string };

const coolDude = {
  hey: "hello",
  age: 30,
} as const;

type AsMap = {
  cool: { as: "cool"; href?: never };
  foo: { as: "foo"; href: string };
};

type As = keyof AsMap;

type Props<T extends As> = AsMap[T];

const component = <T extends As>(props: Props<T>) => {};

let awesome = {
  cool: { as: "cool" },
  foo: { as: "foo", href: "https://example.com" },
} as const;
