import { Layout } from "../pages";
import { withRouter } from "./hocs/with-router";
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default withRouter(App);
