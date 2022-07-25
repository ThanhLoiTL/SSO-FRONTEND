import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { doGetAccount } from "./redux/action/accoutnAction";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  display:block;
  margin: 0 auto;
  border-color:red;
`;

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.account.userInfor);
  const isLoading = useSelector(state => state.account.isLoading);

  useEffect(() => {
    if (user && !user.access_token) {
      dispatch(doGetAccount());
    }
  }, []);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <>
      {isLoading === true ?
        <div style={style}>
          <HashLoader color={"#5BD1D7"} loading={true} css={override} size={100} />
        </div>
        :
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
        </div>
      }
    </>
  );
}

export default App;
