export async function fetcher(url) {
  const res = await fetch(url);

  if (!res.ok) {
    return {
      error: true,
      status: res.status,
    };
  }

  return res.json();
}
