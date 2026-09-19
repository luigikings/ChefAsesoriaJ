// Mapa de nombres de icono (string, definidos en siteConfig.js) a componentes lucide-react.
// Así el contenido puede editarse sin tocar los componentes.
import {
  TrendingDown,
  BookX,
  LayoutGrid,
  Trash2,
  Compass,
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Calculator,
  GraduationCap,
  ShieldCheck,
  DoorOpen,
  ChefHat,
  Store,
  Hotel,
  Truck,
  PackageSearch,
  Rocket,
  HelpCircle,
} from 'lucide-react'

export const iconMap = {
  TrendingDown,
  BookX,
  LayoutGrid,
  Trash2,
  Compass,
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Calculator,
  GraduationCap,
  ShieldCheck,
  DoorOpen,
  ChefHat,
  Store,
  Hotel,
  Truck,
  PackageSearch,
  Rocket,
}

export function getIcon(name) {
  return iconMap[name] || HelpCircle
}
