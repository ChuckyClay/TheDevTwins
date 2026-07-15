import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { team } from "@/data/team";

import TeamCard from "@/components/about/team/TeamCard";


export default function Team() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="Meet The Team"
          subtitle="The developers behind The DevTwins, combining creativity, engineering, and security-focused thinking."
        />


        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">

          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}