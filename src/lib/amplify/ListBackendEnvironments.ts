
import { ListBackendEnvironmentsCommand, ListBackendEnvironmentsCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListBackendEnvironments({ region, input }: { region?: string, input: ListBackendEnvironmentsCommandInput }) {
  return useQuery(['ListBackendEnvironmentsCommand', input], () => client(region).send(new ListBackendEnvironmentsCommand(input)));
}
