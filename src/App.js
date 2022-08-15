//libraries
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//pages
import {
  LandingPage,
  StoryUpdate,
  ClaimAttributeSet,
  StoryCluesPage,
  Error,
  TermsAndConditionsPage,
  FAQPage,
} from "./pages";

//components
import EtheriumProvider from "./services/etherium-blockchain/EtheriumProvider";
import { withHeaderAndFooter } from "./withHeaderAndFooter";

//constantss
import { eng_lang, routes } from "./lib/utills/constants";
import {
  getMintedTokens,
  showModalAction,
  btnLoadingAction,
  getClaimedAmountAction,
} from "./redux/actions/nfts";
import {
  displayModalAction,
  suspectBtnLoading,
} from "./redux/actions/claim-attributes";
import { voucherLoading } from "./redux/actions/voucher";

//styles
import "./sass/main.scss";

// Redux Actions
import { getWinnerAction } from "./redux/actions/winner-reveal";
import { buyErrorSolved, resetTokenAndMint } from "./redux/actions/buy-flow";

//assets

const App = () => {
  const dispatch = useDispatch();
  const {
    nftsReducer: { totalMinted, totalClaimed },
    winnerReducer: { isWinner },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMintedTokens());
    dispatch(getClaimedAmountAction());
    dispatch(buyErrorSolved());
    dispatch(showModalAction(""));
    dispatch(resetTokenAndMint());
    dispatch(btnLoadingAction(false));
    dispatch(displayModalAction(""));
    dispatch(suspectBtnLoading(false));
    dispatch(voucherLoading(false));
    if (
      totalMinted >= eng_lang.totalNoOfMintToken &&
      totalClaimed >= eng_lang.totalNoOfClaimed
    ) {
      dispatch(getWinnerAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EtheriumProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.HOME}
            element={withHeaderAndFooter(<LandingPage />)}
          />
          {totalMinted >= eng_lang.totalNoOfMintToken && (
            <>
              <Route
                path={routes.STORY_INTRO}
                element={withHeaderAndFooter(<StoryUpdate />)}
              />
              <Route
                path={routes.CLUES}
                element={withHeaderAndFooter(<StoryCluesPage />)}
              />
            </>
          )}
          {isWinner !== true && totalMinted >= eng_lang.totalNoOfMintToken && (
            <Route
              path={routes.CLAIM_ATTRIBUTE}
              element={withHeaderAndFooter(<ClaimAttributeSet />)}
            />
          )}

          <Route
            path={routes.TERMS_AND_CONDITIONS}
            element={withHeaderAndFooter(<TermsAndConditionsPage />)}
          />
          <Route
            path={routes.FAQS}
            element={withHeaderAndFooter(<FAQPage />)}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </EtheriumProvider>
  );
};

export default App;
