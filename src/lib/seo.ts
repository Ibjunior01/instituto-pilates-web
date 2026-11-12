
export function obterUrlSite(): string | null {
  const url = process.env.SITE_URL;

  if (!url) {
    return process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : null;
  }

  try {
    const parsed = new URL(url);

    if (
      parsed.protocol !== "https:" &&
      !(process.env.NODE_ENV === "development" &&
        parsed.protocol === "http:")
    ) {
      return null;
    }

    return parsed.origin;
  } catch {
    return null;
  }
}
