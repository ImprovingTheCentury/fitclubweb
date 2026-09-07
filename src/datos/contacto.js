export const contacto = {
  whatsapp: '5493564588606', // +54 3564 588606, formato para wa.me
  whatsappVisible: '+54 3564 588606',
  instagramUrl: 'https://www.instagram.com/fitclub.sanfco',
  instagramHandle: '@fitclub.sanfco',
  email: 'espacionhiitpoint@gmail.com',
  direccion: 'Urquiza 884, San Francisco, Córdoba',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Urquiza+884+San+Francisco+Cordoba',
}

export function mensajeWhatsapp(texto) {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`
}
