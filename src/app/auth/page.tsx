import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

const Page = async () => {
  const session = await unstable_getServerSession(authOptions);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};

export default Page;
