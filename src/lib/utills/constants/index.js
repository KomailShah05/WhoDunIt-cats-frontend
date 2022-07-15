// Routes Constants
export const routes = {
  HOME: "/",
  STORY_RELEASE: "/story-release",
  STORY_INTRO: "/story-intro",
  CLUES: "/story-clues",
  LOGIN: "/login",
  CLAIM_ATTRIBUTE: "/claim-attribute",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  FAQS: "/faqs",
  WINNER_REVEAL: "/winner-reveal",
};

export const blc_func_name = {
  ETH_REQUEST_ACCOUNTS: "eth_requestAccounts",
  REDEEM: "redeem",
};

export const api_routes = {
  MINTED_COUNT: "nfts/count-minted",
  NEW_NFT_MINTED: "nfts/mint",
  ADD_USER_WALLET: "users/add-user-wallet",
  CREATE_VOUCHER: "vouchers",
  SUSPECT_CATS: "suspected-cats/all?page=",
  CLAIM_CAT: "suspected-cats/claim",
  WINNER_REVEAL: "suspected-cats/winner",
};

// Landing Page Constants
export const eng_lang = {
  title: "WhoDunIt Cats?",
  buy_nft: "Buy Nft",
  eth: "ETH",
  dollar: "$",
  usd: "USD",
  congratulation: "Congratulations!",
  stay_updated: "Stay updated!",
  view_on_open_sea: "View NFT on Opensea",
  try_again: "Try Again",
  transaction_failed: "Transaction Failed...",
  transaction_failed_evm: "Transaction has been reverted by the EVM",
  insufficient_fund: "Insufficient Funds! ",
  contract_type_msg: "Transaction can be done by rinkeby etherium",
  insufficient_fund_msg: "Not enough balance to proceed transaction.",
  connect_to_metamask: "Connect  Metamask",
  user_not_login: "User not connected wallet. Please login again.",
  conncetToBuy: "conncetToBuy",
  buyModal: "buyModal",
  totalNoOfMintToken: 5000,
  pageSize: 9,
  claim_nft: "nft claimed succesfully",
  dont_claim_nft: "nft claimed unsuccesfully",

  buttonConstants: {
    join_hunt_text: "Join the hunt",
    subscribe_btn_text: "Subscribe to our Newsletter",
    read_story: "Read Story",
    begin_hunt: "Begin Hunt",
    mint_suspect: "Mint Suspect",
    continue_to_mint: "Continue To Mint",
    view_on_open_sea: "View On Opensea",
    who_dun_it: "Show me WhodunIt",
    buy_on_open_sea: "Buy On Opensea Marketplace",
  },

  header: {
    heading: "WhoDunIt Cats?",
    tabs: ["How it works?", "The Story", "Set Traits"],
  },
  hero: {
    card_text:
      "Suscipit sem dolor id adipiscing tincidunt parturient. Vitae, sagittis a, justo, pellentesque diam. Malesuada ullamcorper et ut quis donec eget tellus ac nec.",
  },
  mintedSection: {
    total_Minted: "total minted",
    minted_tokens: "3016",
    of: "of",
    remaining_minted: "5000",
  },
  howItWorks: {
    heading: "How it works?",
    first_line:
      "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida",
    second_line:
      "suspendisse hac aliquam elit. Et turpis placerat non turpis dui. Egestas elit nibh",
    third_line:
      "in eros dictum. Odio feugiat amet, diam eget cursus. Nec, vivamus arcu, amet",
    fourth_line: "leo aliquam aenean egestas.",
    fifth_line:
      "Risus elit, et id rhoncus leo lectus nisl molestie consectetur. Mi, suspendisse",
    sixth_line:
      "lectus consectetur at. Aenean dolor, risus, fermentum sem. Nec quam egestas",
    seventh_line:
      "orci, eleifend ac commodo. Leo ornare posuere mauris vestibulum bibendum",
    eight_line:
      "ante. Nulla at maecenas euismod et consequat nibh. Sit faucibus amet, vitae",
    last_line: "gravida id lectus quis.",
  },
  storyRelease: {
    heading: "Now the hunt begins",
  },
  storyUpdate: {
    intro_heading: "How it All Started",
    first_line:
      "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida suspendisse hac ",
    second_line:
      "aliquam elit. Et turpis placerat non turpis dui. Egestas elit nibh in eros dictum. Odio",
    third_line:
      "feugiat amet, diam eget cursus. Nec, vivamus arcu, amet leo aliquam aenean egestas.",
  },
  footer: {
    faq: "FAQ",
    terms_and_conditions: "Terms and Conditions",
    support_email: "support@whodunitcats.com",
    stay_in_touch: "Stay in touch with us",
    copyrights: "©2022 WhoDunItCats. All Rights Reserved.",
    twitter: "Twitter",
    instagram: "Instagram",
    discord: "Discord",
  },
  joint_the_hunt_modal: {
    title: "Furry Cat",
    price: "Price",
    total_minted: "Total Minted",
    sub_title: "What you get & how to use",
    of: "of",
    paragraph:
      "Suscipit sem dolor id adipiscing tincidunt parturient. Vitae, sagittis a, justo, pellentesque diam. Malesuada ullamcorper et ut quis donec eget tellus ac nec.",
  },
  buy_flow_modal: {
    transaction_detail: "Transaction Details",
    nft_price: "Nft Price",
    transaction_fee: "Transaction Fee",
    total_price: "Total Price",
    processing: "Processing...",
    processing_content: "Your transaction should only take a moment.",
    congratulation_content:
      "You have successfully obtained a WhoDunItCats NFT. The NFT has been transfered to your wallet.",
    trans_failed_content: "Eu sollicitudin risus nunc, scelerisque semper ac.",
  },
  claim_attribute_set: {
    section_one: {
      title: "Select suspect traits",
      select_data: [
        {
          attribute_name: "Height",
          element_name: "height",
          options: [
            "Select Height",
            "Two feet five inch",
            "Two feet four inch",
            "Two feet three inch",
            "Two feet two inch",
            "Two feet one inch",
          ],
        },
        {
          attribute_name: "Eyes",
          element_name: "eyes",
          options: [
            "Select Eyes",
            "Black Glasses",
            "Green Eyeball",
            "Skyblue Eyeball",
            "Star Glasses",
          ],
        },
        {
          attribute_name: "Skin",
          element_name: "skin",
          options: ["Select Skin", "Furry", "Hairless"],
        },
        {
          attribute_name: "Hats",
          element_name: "hats",
          options: [
            "Select Hats",
            "Birthday Hat",
            "Brown Hat",
            "Engineer Hat",
            "Joker Hat",
            "Scientist Hat",
          ],
        },
        {
          attribute_name: "Shirts",
          element_name: "shirts",
          options: [
            "Select Shirts",
            "Blue Color Shirt",
            "Cream Color Shirt",
            "Green Color Shirt",
            "Skyblue Color Shirt",
            "White Color Shirt",
          ],
        },
      ],
    },
    section_two: {
      title: "Choose your suspect",
      hover_heading: "Unavailable",
      hover_descr_1: "If you want to see who",
      hover_descr_2: "purchase it",
    },
    section_three: {
      title: "Mint your Suspect",
      serial_number: "Serial Number",
      serial_value: "1 -",
      plank_number: "Plank Number",
      plank_value: "152374",
    },
    congrats_text_modal:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien ut diam in commodo bibendum et ac..",
    error_heading: "Can’t choose killer",
    error_body: "Server Error",
  },
  story_clues: {
    paragrapgh_line_1:
      "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida suspendisse hac aliquam elit. Et turpis placerat non turpis ",
    paragrapgh_line_2:
      "dui. Egestas elit nibh in eros dictum. Odio feugiat amet, diam eget cursus. Nec, vivamus arcu, amet leo aliquam.",
  },
  stories: [
    {
      paragrapgh_line_1:
        "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida suspendisse hac aliquam elit. Et turpis placerat non turpis ",
      paragrapgh_line_2:
        "dui. Egestas elit nibh in eros dictum. Odio feugiat amet, diam eget cursus. Nec, vivamus arcu, amet leo aliquam.",
    },
    {
      paragrapgh_line_1:
        "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida suspendisse hac aliquam elit. Et turpis placerat non turpis ",
      paragrapgh_line_2:
        "dui. Egestas elit nibh in eros dictum. Odio feugiat amet, diam eget cursus. Nec, vivamus arcu, amet leo aliquam.",
    },
    {
      paragrapgh_line_1:
        "Neque orci dui, sit libero diam magnis nunc et. Molestie diam gravida suspendisse hac aliquam elit. Et turpis placerat non turpis ",
      paragrapgh_line_2:
        "dui. Egestas elit nibh in eros dictum. Odio feugiat amet, diam eget cursus. Nec, vivamus arcu, amet leo aliquam.",
    },
  ],
  termsAndConditions: {
    heading: "Terms and Conditions",
    subtitle: "Last Updated: May 19, 2022",
    paragraph_1_lines: {
      line_1:
        "Ultrices ultricies nibh cursus imperdiet. Sed cursus morbi imperdiet ipsum sed non. Sit mollis ipsum lobortis amet,",
      line_2:
        "imperdiet egestas. Diam egestas id sed nisl. Purus risus ornare massa ut. Cursus sit viverra augue aliquam tortor ut.",
      line_3:
        "Sed vulputate risus nisl in tempor. Faucibus commodo sagittis vestibulum sed. Eget ac libero cursus cursus arcu",
      line_4: "faucibus facilisis imperdiet pretium.",
    },
    paragraph_2_lines: {
      line_1:
        "Ultricies in maecenas viverra rutrum orci, scelerisque eget arcu pellentesque. Vel a aliquet tincidunt mattis. Ut sit",
      line_2:
        "pharetra egestas gravida velit at malesuada semper. Lorem ut auctor et in. Nunc blandit eget mi amet vulputate sem",
      line_3:
        "ullamcorper fames at. Velit ac porta nunc, faucibus. Nulla suscipit vitae tellus arcu dui. Velit est habitant velit tortor",
      line_4:
        "tortor nulla. Enim, volutpat nunc adipiscing vulputate adipiscing nibh faucibus nisl. Dictum ac ut cras quam odio",
      line_5:
        "ullamcorper. Fusce aliquam mauris commodo, faucibus velit mauris blandit.",
    },
    personal_info_text: "Personal Information We Collect",
    personal_info_paragraphs: {
      para_1: {
        line_1:
          "Neque vel, mattis tristique nibh sagittis tortor. Bibendum eu euismod id pretium metus eu, in. Faucibus posuere leo",
        line_2:
          "morbi pulvinar in tincidunt. Amet, tortor, sagittis enim blandit pharetra, nulla viverra eget nam. Nulla pharetra, nisl in",
        line_3:
          "vel scelerisque sed vulputate orci. Eu diam ipsum lacus nascetur convallis. In semper posuere elit adipiscing",
        line_4:
          "condimentum velit dolor dui sociis. In nec, aliquam ultrices porttitor pellentesque consectetur. Id accumsan, orci",
        line_5:
          "neque, mattis. Ultricies ac et hac vel. Nisl fermentum tincidunt est cursus rutrum commodo mattis nullam pulvinar.",
        line_6:
          "Semper non, ultrices pharetra nisi ultrices justo, sed. Orci etiam velit eget arcu bibendum in habitant tellus.",
      },
      para_2: {
        line_1:
          "Aliquam sit libero orci dolor. Praesent consectetur velit in in sed eget pellentesque cursus sed. Eget cursus nullam id",
        line_2:
          "malesuada sagittis sit. Commodo neque, ac dui, quisque nascetur. Quam ut amet amet sit. Vitae lectus feugiat vitae",
        line_3:
          "dui, sed neque, arcu, arcu nulla. Dui scelerisque integer amet pretium blandit leo nec. Sed at pharetra volutpat sed",
        line_4:
          "aliquet. Augue scelerisque bibendum ut porta nulla in ornare pellentesque purus. Tincidunt ante scelerisque",
        line_5:
          "commodo non sollicitudin diam velit, vehicula. Egestas aliquet metus cras amet, vivamus ut. Odio viverra tellus sit",
        line_6:
          "eros, magna a ornare neque. Velit quam venenatis, pretium sapien. Et ullamcorper egestas quam viverra fringilla et.",
        line_7: "Fermentum sapien ullamcorper enim, adipiscing.",
      },
      para_3: {
        line_1:
          "Nibh eget sit euismod ultricies. Maecenas nec lectus maecenas a mi. Tortor, est odio sollicitudin venenatis",
        line_2:
          "consectetur. Malesuada eget porta aliquam viverra risus scelerisque ultrices sed. Suspendisse non sodales porta in.",
        line_3:
          "Sollicitudin arcu morbi lectus ultrices. Consectetur molestie elit odio cum. Enim nunc quam facilisi at amet, orci. Duis",
        line_4:
          "nec lectus duis cras ac non risus. Ut in non mi, vel cras bibendum varius. Porttitor porta in tempor lacus. Velit, amet",
        line_5:
          "molestie turpis est in elit maecenas. Scelerisque id mauris risus ipsum.",
      },
      para_4: {
        line_1:
          "Eu scelerisque sed nisi, ornare et. Enim fermentum, imperdiet tristique volutpat et. Ut tincidunt duis purus sed",
        line_2:
          "pellentesque ornare nibh. Dui, sit mattis dignissim sem faucibus dui aliquam amet elit. Sed nunc at vel, neque.",
        line_3:
          "Consequat eget adipiscing sit sit dui penatibus in. Sagittis diam magna ut amet nibh elit mauris. Amet viverra auctor",
        line_4: "vel proin erat.",
      },
    },
  },
  winnerRevealLandingPage: {
    heading: "MYSTERY SOLVED!",
    cat_no: "Cat#0",
    // cat_name: "Cat Name",
    eye: "Eye",
    skin: "Skin",
    height: "Height",
    hat: "Hat",
    shirt: "Shirt",
    congrat: "Congratulations to",
    worldWide: "MrWorldWideWeb",
    mystery_text: "For solving the mystery and winning",
    bounty: "bounty!",
    case_deduction: "Case Deduction",
    case_line_1:
      "Magna sapien tincidunt felis felis. Quis ullamcorper ac tellus lorem lorem",
    case_line_2:
      "posuere egestas. Imperdiet habitant amet nulla cursus purus nulla.",
    case_line_3:
      "Tincidunt ornare enim elit ante dui vulputate. Massa sodales porttitor eu",
    case_lines:
      "at. Ornare adipiscing viverra phasellus velit sapien. Diam est vitae accumsan lobortis erat vulputate sit varius convallis. Vel eget in luctus parturient sit cum. Gravida placerat ac leo tellus, urna dolor posuere aenean. Amet lacus, nisl nisl enim, enim, integer augue dui. At a, sagittis lobortis netus turpis. In nec hendrerit ac, tincidunt ut. Integer volutpat commodo convallis congue tincidunt. Sit lectus vitae pellentesque in. Ac pulvinar rutrum pellentesque amet varius nec. Faucibus nunc convallis bibendum tortor urna feugiat odio mus eget. Cursus magna facilisi malesuada vestibulum sollicitudin sed eget ac. Enim molestie nibh netus ridiculus. Blandit sodales blandit orci purus est blandit. Nec et non sed elementum imperdiet turpis ultricies turpis aliquet.",
    case_detective: "CASE DETECTIVE",
    winner_name: "MrWorldWideWeb",
  },
  FaqPage: {
    heading: "faq",
    questions_answers: [
      {
        question:
          "Condimentum ipsum, suspendisse eget fusce ut porta nunc eleifend.?",
        answer:
          "Rhoncus nisi quis et, sit facilisis maecenas. Elit sagittis eget magna ligula vitae.",
      },
      {
        question:
          "Venenatis, et venenatis pellentesque tortor posuere arcu arcu viverra. Nulla orci eget arcu lorem dignissim feugiat scelerisque neque id.?",
        answer:
          "Mus ipsum, erat egestas in quam sagittis suspendisse. Orci nunc justo, sollicitudin est et lacus fermentum tellus commodo.",
      },
      {
        question: "Dis at pellentesque eget lorem id nunc felis?",
        answer:
          "Libero lacus molestie malesuada faucibus habitant est gravida.",
      },
    ],
  },
};
