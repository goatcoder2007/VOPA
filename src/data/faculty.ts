import type { IconName } from "@/components/Icon";

export type FacultyMember = {
  name: string;
  role: string;
  subjects: string[];
  photo?: string;
  /** Set to false once a real photo is supplied in /public. */
  hasPhoto?: boolean;
};

export type Department = {
  name: string;
  icon: IconName;
  description: string;
  members: FacultyMember[];
};

// PLACEHOLDER DATA — swap these entries for the real staff list before launch.
// Names, roles and photos below are examples only; delete any member you cannot
// fill in, and add a `photo: "/faculty/<file>.jpg"` when a portrait is ready.
export const departments: Department[] = [
  {
    name: "Administration",
    icon: "ShieldCheck",
    description:
      "The team that keeps the academy running day to day, from enrolment to chapel.",
    members: [
      {
        name: "Justine Myvette",
        role: "Principal",
        subjects: ["Administration", "Student Development"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Registrar",
        subjects: ["Enrolment", "Records"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Admissions Officer",
        subjects: ["Admissions", "Family Relations"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Bible & Religious Studies",
    icon: "HandsPraying",
    description:
      "Daily Bible instruction, chapel, and the spiritual formation that underpins every subject we teach.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Bible", "Religious Education"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Teacher",
        subjects: ["Bible", "Chapel"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "English & Language Arts",
    icon: "BookOpenText",
    description:
      "Reading, writing and communication — the subjects that decide how well every other idea lands.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["English", "Literature", "Reading Comprehension"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Teacher",
        subjects: ["English", "Reading Comprehension"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Mathematics",
    icon: "MathOperations",
    description:
      "Numeracy, problem solving and logical thinking, built form by form.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Mathematics"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Teacher",
        subjects: ["Mathematics", "ICT support"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Science",
    icon: "Atom",
    description:
      "Biology, chemistry and physics with hands-on lab work for the Science stream from Form 3.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Biology", "Chemistry", "Physics"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Laboratory Assistant",
        subjects: ["Biology", "Chemistry"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Business & Commerce",
    icon: "Briefcase",
    description:
      "Accounting, commerce and office practice for students in the Business stream.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Accounting", "Commerce", "Entrepreneurship"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Information Technology",
    icon: "ComputerTower",
    description:
      "Digital literacy and practical computing, from the basics through to workplace tools.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Information Technology", "Computer Science"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Belizean Studies",
    icon: "Flag",
    description:
      "Our nation's history, geography, culture and heritage — taught with pride and perspective.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Belizean Studies", "Social Studies"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Agriculture",
    icon: "Plant",
    description:
      "Planting, growing and understanding where food comes from — a hands-on programme in every form.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Agriculture", "Landscaping"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Arts, Music & Design",
    icon: "Palette",
    description:
      "Visual arts, graphic design and music — the electives where students find their gifts.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Visual Arts", "Graphic Design"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Music Teacher",
        subjects: ["Music", "Worship Team"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Physical Education & Athletics",
    icon: "Trophy",
    description:
      "P.E. every form, plus the teams that represent VOPA at inter-SDA school meets.",
    members: [
      {
        name: "Staff Member",
        role: "Head of Department",
        subjects: ["Physical Education", "Athletics"],
        hasPhoto: false,
      },
      {
        name: "Staff Member",
        role: "Coach",
        subjects: ["Volleyball", "Football"],
        hasPhoto: false,
      },
    ],
  },
  {
    name: "Food & Nutrition",
    icon: "ForkKnife",
    description:
      "Kitchen skills and nutrition science through the Food & Nutrition elective.",
    members: [
      {
        name: "Staff Member",
        role: "Teacher",
        subjects: ["Food & Nutrition"],
        hasPhoto: false,
      },
    ],
  },
];

export const facultyCount = departments.reduce(
  (total, department) => total + department.members.length,
  0,
);
