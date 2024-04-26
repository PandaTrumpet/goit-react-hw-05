// import { children } from "react";
import { Suspense } from "react";
import Navigation from "../../components/Navigation/Navigation";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Page is loading...</p>}>{children}</Suspense>
    </div>
  );
}
