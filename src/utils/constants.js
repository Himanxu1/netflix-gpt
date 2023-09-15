export const LOGO="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
export const BACKGROUND="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
export const USER_AVATAR= "https://avatars.githubusercontent.com/u/80101755?v=4"
export const API_OPTION= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_BEAR_TOKEN
    }
  };

  export const SUPPORTED_LANGUAGES = [
    {
      identifier:"en",
      name:'English'
    },
    {
      identifier:"hindi",
      name:'Hindi'
    },
    {
      identifier:"spanish",
      name:'Spanish'
    },
  ]

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY