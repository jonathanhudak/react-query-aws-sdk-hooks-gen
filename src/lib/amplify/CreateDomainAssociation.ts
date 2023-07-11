
import { CreateDomainAssociationCommand, CreateDomainAssociationCommandInput } from "@aws-sdk/client-amplify";
import { useMutation } from "react-query";
import client from "../AmplifyClient";


export default function useCreateDomainAssociation({ region, input }: { region?: string, input: CreateDomainAssociationCommandInput }) {
  return useMutation(['CreateDomainAssociationCommand', input], () => client(region).send(new CreateDomainAssociationCommand(input)));
}
