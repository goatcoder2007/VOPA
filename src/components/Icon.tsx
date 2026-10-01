"use client";

import {
  Cross,
  ShieldCheck,
  Heart,
  UsersThree,
  Sparkle,
  BookOpen,
  Lightbulb,
  Trophy,
  Palette,
  MusicNotes,
  Flask,
  HandsPraying,
  PencilLine,
  MagnifyingGlass,
  MapPin,
  NavigationArrow,
  ClipboardText,
  UserCheck,
  FileText,
  ArrowRight,
  Clock,
  CalendarCheck,
  EnvelopeSimple,
  Phone,
  ComputerTower,
  BookOpenText,
  Flag,
  MathOperations,
  Plant,
  ForkKnife,
  Shovel,
  Briefcase,
  Atom,
  Microscope,
  HandTap,
  ChatCircleText,
  X,
} from "@phosphor-icons/react";

const iconMap = {
  Cross,
  ShieldCheck,
  Heart,
  UsersThree,
  Sparkle,
  BookOpen,
  Lightbulb,
  Trophy,
  Palette,
  MusicNotes,
  Flask,
  HandsPraying,
  PencilLine,
  MagnifyingGlass,
  MapPin,
  NavigationArrow,
  ClipboardText,
  UserCheck,
  FileText,
  ArrowRight,
  Clock,
  CalendarCheck,
  EnvelopeSimple,
  Phone,
  ComputerTower,
  BookOpenText,
  Flag,
  MathOperations,
  Plant,
  ForkKnife,
  Shovel,
  Briefcase,
  Atom,
  Microscope,
  HandTap,
  ChatCircleText,
  X,
} as const;

export type IconName = keyof typeof iconMap;

type IconProps = {
  name: IconName;
  size?: number;
  weight?: "regular" | "duotone" | "fill" | "bold" | "light" | "thin";
  className?: string;
};

export function Icon({ name, size = 22, weight = "duotone", className }: IconProps) {
  const Component = iconMap[name];
  return <Component size={size} weight={weight} className={className} />;
}