import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT || 3333, () =>
  console.log(`Server is running at ${process.env.PORT || 3333}`)
);
