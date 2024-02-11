import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

export default function Index() {
  return (
    <div className="border-spacing-4 bg-red-500  text-red-500  ">
      <h1>asasd</h1>
    </div>
  );
}
