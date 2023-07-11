
import { UpdateBranchCommand, UpdateBranchCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useUpdateBranch({ region, input }: { region?: string, input: UpdateBranchCommandInput }) {
  return useMutation(['UpdateBranchCommand', input], () => client(region).send(new UpdateBranchCommand(input)));
}
