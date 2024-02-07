import authStyles from '~/styles/auth.css';

export default function Auth() {  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Auth</h1>
    </div>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: authStyles}];
}