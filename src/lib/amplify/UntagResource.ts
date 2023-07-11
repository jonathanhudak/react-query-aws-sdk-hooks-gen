
import { UntagResourceCommand, UntagResourceCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useUntagResource({ region, input }: { region?: string, input: UntagResourceCommandInput }) {
  return useQuery(['UntagResourceCommand', input], () => client(region).send(new UntagResourceCommand(input)));
}
