import {PageWrapper} from "@/app/components/page-wrapper";

export default function ProfilePage() {
  return (
    <PageWrapper>
      <h1>Profile</h1>
      <p>Welcome to your profile page</p>
      <p>Here you can see your personal information and update your settings</p>
      <form action="">
        <button type="submit">logout</button>
      </form>
    </PageWrapper>
  );
}
