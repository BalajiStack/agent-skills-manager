type SkillPageProps = {
    params: {
        id: String;
    };
}

export default async function SkillsPage({
  params,
}: SkillPageProps) {
    const {id} = await params;
  return <div>This is the skills details page for {id}</div>;
}
