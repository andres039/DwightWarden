const initialState = [
  {
    id: 1,
    name: "Gmail",
    password: "123Square",
    url: "https://www.gmail.com",
    username: "spongeBob",
  },
  {
    id: 2,
    name: "Hotmail",
    password: "some123",
    url: "https://www.hotmail.com",
    username: "frankie",
  },
  {
    id: 3,
    name: "Bank",
    password: "my456",
    url: "https://www.thebank.com",
    username: "richDude",
  },
];

const reducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "increment":
      return { count: state + action.payload };
    case "decrement":
      return { count: state - action.payload };
    case "reset":
      return { count: 0 };
  }
};

export { initialState, reducer };
