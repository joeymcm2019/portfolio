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

// type As = keyof AsMap;

// type Props<T extends As> = AsMap[T];

// const TestComponent = <T extends As>(props: Props<T>) => {
//   if (props.as === "cool") {
//     // props.href is never here
//     return <div>Cool Component</div>;
//   } else {
//     // props.href is string here
//     return <div>Foo Component - {props.href}</div>;
//   }
// };

// // export default TestComponent;

// const TestComponent2 = (props: AsMap[keyof AsMap]) => {
//   if (props.as === "cool") {
//     // props.href is never here
//     return <div>Cool Component</div>;
//   } else {
//     // props.href is string here
//     return <div>Foo Component - {props.href}</div>;
//   }
// };

type DisUnion = { as: "cool"; href?: never } | { as: "foo"; href: string };

const TestComponent3 = (props: DisUnion) => {
  if (props.as === "cool") {
    // props.href is never here
    return <div>Cool Component</div>;
  } else {
    // props.href is string here
    return <div>Foo Component - {props.href}</div>;
  }
};

export default TestComponent3;

// type AsMap = {
//   cool: {
//     as: "cool";
//     href?: never;
//   };
//   foo: {
//     as: "foo";
//     href: string;
//   };
// };

// type As = keyof AsMap;

// type Props<T extends As> = AsMap[T];
// const CoolComponent = <T extends As>(props: Props<T>) => {
//   if (props.as === "cool") {
//     // props.href is never here
//     return <div>Cool Component</div>;
//   } else {
//     // props.href is string here
//     return <div>Foo Component - {props.href}</div>;
//   }
// };

type AsMap = {
  cool: { as: "cool"; href?: never };
  foo: { as: "foo"; href: string };
};

type As = keyof AsMap;

type Props<T extends As> = AsMap[T];

const CoolComponent2 = <T extends As>(props: Props<T>) => {
  if (props.as === "cool") {
    // props.href is never here
    return <div>Cool Component</div>;
  } else {
    // props.href is string here
    return <div>Foo Component - {props.href}</div>;
  }
};
