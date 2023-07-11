
import { ListArtifactsCommand, ListArtifactsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListArtifacts({ region, input }: { region?: string, input: ListArtifactsCommandInput }) {
  return useQuery(['ListArtifactsCommand', input], () => client(region).send(new ListArtifactsCommand(input)));
}
