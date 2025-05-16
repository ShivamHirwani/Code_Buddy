// pages/_app.js
import "@/styles/globals.css"; // Adjust this path if you have global styles
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}
    >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
