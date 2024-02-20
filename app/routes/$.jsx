import { redirect } from "@remix-run/react";

export function loader({params}) {
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  throw new Response('Not Found', { status: 404 });
}