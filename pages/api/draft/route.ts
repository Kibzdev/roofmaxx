// ./app/api/draft/route.ts

import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { sanityClient } from "@/sanity/lib/sanityclient";
import { token } from "@/sanity/lib/token";

const clientWithToken = sanityClient.withConfig({ token });

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  redirect(redirectTo);
}