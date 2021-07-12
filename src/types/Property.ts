export interface Property {
  id: number;
  price: string;
  agency: Agency;
  logo: string;
  mainImage: string;
}

export interface Agency {
  brandingColors: BrandingColor;
}

export interface BrandingColor {
  primary: string;
}
