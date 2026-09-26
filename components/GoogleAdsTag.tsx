import Script from "next/script";

/**
 * Google Ads Global Site Tag (AW-10864315353)
 * Carga gtag.js con el ID de Google Ads para:
 *  - Tracking de conversiones de la campaña de búsqueda
 *  - Listas de remarketing
 * Se carga tras la hidratación para no bloquear el render.
 */
const AW_ID = "AW-10864315353";

export default function GoogleAdsTag() {
  return (
    <>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${AW_ID}');
        `}
      </Script>
    </>
  );
}
