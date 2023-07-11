
import { GetArtifactUrlCommand, GetArtifactUrlCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetArtifactUrl({ region, input }: { region?: string, input: GetArtifactUrlCommandInput }) {
  return useQuery(['GetArtifactUrlCommand', input], () => client(region).send(new GetArtifactUrlCommand(input)));
}
