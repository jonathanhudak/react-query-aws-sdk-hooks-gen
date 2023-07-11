
import { DeleteBranchCommand, DeleteBranchCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteBranch({ region, input }: { region?: string, input: DeleteBranchCommandInput }) {
  return useMutation(['DeleteBranchCommand', input], () => client(region).send(new DeleteBranchCommand(input)));
}
