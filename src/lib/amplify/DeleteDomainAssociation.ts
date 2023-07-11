
import { DeleteDomainAssociationCommand, DeleteDomainAssociationCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useDeleteDomainAssociation({ region, input }: { region?: string, input: DeleteDomainAssociationCommandInput }) {
  return useMutation(['DeleteDomainAssociationCommand', input], () => client(region).send(new DeleteDomainAssociationCommand(input)));
}
