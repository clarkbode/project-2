const dev = {
  bookFaceContext: "http://localhost:8088/"
  //bookFaceContext: "http://localhost:8088Propagation./"
};

const prod = {
  bookFaceContext: "http://1810leagueapi-env.vn7qtqqrnd.us-west-2.elasticbeanstalk.com/LeagueOfLegendsApi/"
};

export const environment = process.env.NODE_ENV === "production" ? prod : dev;
