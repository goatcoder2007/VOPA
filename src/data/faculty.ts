import type { IconName } from "@/components/Icon";

export type FacultyMember = {
  name: string;
  role: string;
  subjects: string[];
  photo?: string;
  /**
   * CSS object-position for the card crop, for portraits where the subject
   * sits low in the frame. Defaults to top-anchored.
   */
  photoFocus?: string;
};

export type Department = {
  name: string;
  icon: IconName;
  description: string;
  members: FacultyMember[];
};

export const departments: Department[] = [
  {
    name: "Administration",
    icon: "ShieldCheck",
    description:
      "The team that keeps the academy running day to day, from enrolment to chapel.",
    members: [
      {
        name: "Justine Price",
        role: "Principal",
        subjects: ["Administration", "Student Development"],
        photo: "/faculty/justine-price.jpg",
        photoFocus: "center 26%",
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
        name: "Kenty Bey",
        role: "Teacher",
        subjects: ["Bible", "Religious Education", "Chapel"],
        photo: "/faculty/kenty-bey.jpg",
        photoFocus: "center 22%",
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
        name: "Kenty Bey",
        role: "Teacher",
        subjects: ["Mathematics"],
        photo: "/faculty/kenty-bey.jpg",
        photoFocus: "center 22%",
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
        name: "Meilin Wagner",
        role: "Science Teacher",
        subjects: ["Biology", "Chemistry", "Physics"],
        photo: "/faculty/meilin-wagner.jpg",
      },
      {
        name: "Garik Gilharry",
        role: "Science Teacher",
        subjects: ["Biology", "Chemistry", "Physics"],
        photo: "/faculty/garik-gilharry.jpg",
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
        name: "Elena Oh",
        role: "Teacher",
        subjects: ["Accounting", "Commerce", "Entrepreneurship"],
        photo: "/faculty/elena-oh.jpg",
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
        name: "Allen Montero",
        role: "IT Teacher",
        subjects: ["Information Technology", "Computer Science", "Lower Forms"],
        photo: "/faculty/allen-montero.jpg",
      },
      {
        name: "Angel Chi",
        role: "IT Teacher",
        subjects: ["Information Technology", "Computer Science", "Upper Forms"],
        photo: "/faculty/angel-chi.jpg",
      },
    ],
  },
  {
    name: "Spanish",
    icon: "ChatCircleText",
    description:
      "Spanish language and culture — building communication skills for a connected world.",
    members: [
      {
        name: "Patrecia Castro",
        role: "Teacher",
        subjects: ["Spanish"],
        photo: "/faculty/patrecia-castro.jpg",
      },
    ],
  },
];

export type FacultyCard = FacultyMember & { departments: string[] };

/**
 * Flat list for the faculty grid, one entry per person. Teachers who cover
 * more than one department are merged into a single card with all their
 * departments and subjects, so nobody appears twice.
 */
export const facultyMembers: FacultyCard[] = departments
  .flatMap((department) =>
    department.members.map((member) => ({ ...member, departments: [department.name] })),
  )
  .reduce<FacultyCard[]>((cards, member) => {
    const existing = cards.find((card) => card.name === member.name);
    if (!existing) {
      cards.push(member);
      return cards;
    }
    for (const department of member.departments) {
      if (!existing.departments.includes(department)) {
        existing.departments.push(department);
      }
    }
    for (const subject of member.subjects) {
      if (!existing.subjects.includes(subject)) {
        existing.subjects.push(subject);
      }
    }
    return cards;
  }, []);

export const facultyCount = facultyMembers.length;