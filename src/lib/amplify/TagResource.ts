
import { TagResourceCommand, TagResourceCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useTagResource({ region, input }: { region?: string, input: TagResourceCommandInput }) {
  return useQuery(['TagResourceCommand', input], () => client(region).send(new TagResourceCommand(input)));
}
