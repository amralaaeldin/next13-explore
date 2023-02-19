import { useRouter } from "next/router";

export default function Opt({ params }) {
  const router = useRouter();

  console.log(router.query)

  return (
    <div>
      <h1>Params</h1>
    </div>
  );
}