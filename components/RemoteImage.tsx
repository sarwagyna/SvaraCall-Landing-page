import Image, { type ImageProps } from "next/image";

/**
 * Prefer Unsplash's own WebP delivery. `/_next/image` for these remotes
 * previously returned 404/504 when upstream was slow or missing.
 */
function withUnsplashWebp(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src !== "string" || !src.includes("images.unsplash.com")) {
    return src;
  }
  if (src.includes("auto=format") || /[?&]fm=/.test(src)) return src;
  return `${src}${src.includes("?") ? "&" : "?"}auto=format&fm=webp`;
}

export default function RemoteImage({
  src,
  ...props
}: Omit<ImageProps, "unoptimized">) {
  return <Image {...props} src={withUnsplashWebp(src)} unoptimized />;
}
