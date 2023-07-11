
import { GetDomainAssociationCommand, GetDomainAssociationCommandInput } from "@aws-sdk/client-amplify";
import { useQuery } from "react-query";
import client from "../AmplifyClient";


export default function useGetDomainAssociation({ region, input }: { region?: string, input: GetDomainAssociationCommandInput }) {
  return useQuery(['GetDomainAssociationCommand', input], () => client(region).send(new GetDomainAssociationCommand(input)));
}
