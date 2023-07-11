
import { GetBranchCommand, GetBranchCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetBranch({ region, input }: { region?: string, input: GetBranchCommandInput }) {
  return useQuery(['GetBranchCommand', input], () => client(region).send(new GetBranchCommand(input)));
}
