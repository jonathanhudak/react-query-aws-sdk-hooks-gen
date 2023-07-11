
import { ListTagsForResourceCommand, ListTagsForResourceCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListTagsForResource({ region, input }: { region?: string, input: ListTagsForResourceCommandInput }) {
  return useQuery(['ListTagsForResourceCommand', input], () => client(region).send(new ListTagsForResourceCommand(input)));
}
