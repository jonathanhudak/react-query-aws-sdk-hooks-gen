
import { UpdateDomainAssociationCommand, UpdateDomainAssociationCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useUpdateDomainAssociation({ region, input }: { region?: string, input: UpdateDomainAssociationCommandInput }) {
  return useMutation(['UpdateDomainAssociationCommand', input], () => client(region).send(new UpdateDomainAssociationCommand(input)));
}
