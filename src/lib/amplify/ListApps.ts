
import { ListAppsCommand, ListAppsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListApps({ region, input }: { region?: string, input: ListAppsCommandInput }) {
  return useQuery(['ListAppsCommand', input], () => client(region).send(new ListAppsCommand(input)));
}
