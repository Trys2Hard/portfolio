import DefaultProject from '../DefaultProject';

export default function SWUDraftSim() {
    return (
        <DefaultProject
            src='swudraftsim.png'
            projectTitle='swudraftsim.com'
            projectSubtitle='A Star Wars Unlimited TCG Draft Simulator'
            buttons={[
                { href: 'https://www.swudraftsim.com/', label: 'Website' },
                { href: 'https://github.com/Trys2Hard/swu-draft-sim/', label: 'Source Code' },
            ]} />
    );
}
