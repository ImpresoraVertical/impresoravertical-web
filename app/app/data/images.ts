/**
 * URLs de imágenes del sitio Wix actual (impresoravertical.com).
 * Reutilizamos directamente del CDN de Wixstatic mientras no
 * tengamos sesión fotográfica nueva.
 */

const WIX_BASE = "https://static.wixstatic.com/media";

export const WIX_IMAGES = {
  // ─────── LOGO ───────
  logoBlanc: `${WIX_BASE}/3290d3_e8be136f4bbd4002af8518562e6c0ada~mv2.jpg/v1/fill/w_584,h_170,al_c,q_90,enc_avif,quality_auto/Logo-blanc_edited_edited_edited_edited_edited_edited.jpg`,

  // ─────── HERO / FONDOS ───────
  heroBackground: `${WIX_BASE}/3290d3_9cb8e155559349e692c14362ffc2aa30~mv2.png/v1/fill/w_2400,h_800,al_c,q_90,enc_avif,quality_auto/3290d3_9cb8e155559349e692c14362ffc2aa30~mv2.png`,
  muralBanner: `${WIX_BASE}/3290d3_48cedeafbec9472aa4ff3c60bfc67ea2~mv2.jpg/v1/fill/w_2400,h_1000,al_c,q_90,enc_avif,quality_auto/Mural%20con%20impresora%20Vertical%20I-Tech.jpg`,

  // ─────── MODELOS / IMPRESORAS ───────
  modeloS_Cremallera: `${WIX_BASE}/3290d3_f41e3e8732ea487097307fb33e699ee1~mv2.jpg`,
  modeloS2_Rueda: `${WIX_BASE}/3290d3_627b8e41351e42029c879263c0f96a78~mv2.jpg`,
  modeloS3_SinPantalla: `${WIX_BASE}/3290d3_1b9d4375d40145c19fd11be964ef9b5b~mv2.jpg`,
  modeloT1: `${WIX_BASE}/3290d3_28e8473ca193438da315ebd885a4a8dc~mv2.png`,
  modeloW1: `${WIX_BASE}/3290d3_b6edaebeb88f4355a83f059085ef35cf~mv2.jpg`,
  modeloFB_Suelos: `${WIX_BASE}/3290d3_51c5029ca17c4fe6b1f3991c4546079c~mv2.jpg`,

  // ─────── COLABORACIONES ───────
  formacionONCE: `${WIX_BASE}/3290d3_d07120c7a5bd47618bae32fa0e7f8c08~mv2.jpg`,
  insertaInnovacionLogo: `${WIX_BASE}/3290d3_0b6a8cf65bb64eefb2c49808fae958b7~mv2.png`,

  // ─────── CLIENTES ───────
  clienteLogotipo: `${WIX_BASE}/3290d3_cf17e456b6194f5fa855b0c7912c0c46~mv2.png`,
  clienteIV: `${WIX_BASE}/3290d3_247b1235c29d4bed83b60bb5061001e0~mv2.jpg`,
  clienteWPC: `${WIX_BASE}/3290d3_d2fc847b4c3e4f2ea8e92d821c638071~mv2.jpg`,
  clienteDekoink: `${WIX_BASE}/3290d3_e6d7c1dbed14416daede63450fd61ff1~mv2.jpg`,
} as const;

/**
 * Imagen representativa por slug de Serie.
 * Imágenes locales del catálogo oficial del fabricante.
 */
export const SERIES_IMAGES: Record<string, string> = {
  e: "/catalogo/img-02.png", // Serie E base agua
  k: "/catalogo/img-03.png", // Serie K base agua multi-cabezal
  g: "/catalogo/img-30.png", // Serie G industrial personalizable
  t: "/catalogo/img-01.png", // Serie T1 con etiqueta oficial
  w: "/catalogo/img-05.png", // Serie W1
  fb: "/catalogo/img-19.png", // Serie FB suelos
};

export const CLIENT_LOGOS = [
  { name: "Cliente 1", logo: WIX_IMAGES.clienteLogotipo },
  { name: "Industrial Verde", logo: WIX_IMAGES.clienteIV },
  { name: "WPC", logo: WIX_IMAGES.clienteWPC },
  { name: "Dekoink", logo: WIX_IMAGES.clienteDekoink },
];
