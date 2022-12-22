import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 372,
  site: "teste",
  domains: ["teste.deco.site"],
});