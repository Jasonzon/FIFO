import app from "./app";
import { PORT } from "./constants";

app.listen(PORT, () => {
  return console.log(`Server listening on port ${PORT}`);
});
