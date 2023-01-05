import { Button } from "@mantine/core";
import { NextAuthOptions } from "next-auth";
import { getProviders, signIn } from 'next-auth/react'

function signin({ providers }: NextAuthOptions) {
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <Button className="bg-gteal-500 hover:bg-gteal-600" onClick={() => signIn(provider.id)}>
              Zaloguj się poprzez konto&nbsp;<b>{provider.name}</b>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default signin;

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}