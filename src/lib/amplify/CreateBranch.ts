
import { CreateBranchCommand, CreateBranchCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateBranch({ region, input }: { region?: string, input: CreateBranchCommandInput }) {
  return useMutation(['CreateBranchCommand', input], () => client(region).send(new CreateBranchCommand(input)));
}
