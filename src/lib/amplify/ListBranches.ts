
import { ListBranchesCommand, ListBranchesCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useListBranches({ region, input }: { region?: string, input: ListBranchesCommandInput }) {
  return useQuery(['ListBranchesCommand', input], () => client(region).send(new ListBranchesCommand(input)));
}
