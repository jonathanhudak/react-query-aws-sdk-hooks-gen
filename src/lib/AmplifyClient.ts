import { AmplifyClient } from "@aws-sdk/client-amplify";

export default (region = "us-west-2") =>
  new AmplifyClient({
    region,
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });
